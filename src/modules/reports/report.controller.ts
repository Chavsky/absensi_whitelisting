import type { Request, Response } from "express";
import { logSafeError } from "../../utils/safe-error-logger.js";
import {
  formatBusinessDate,
  getAttendancePeriodReport,
  getAttendanceStatistics,
  getAttendanceSummary,
  getDailyAttendanceReport,
  getEmployeeAttendanceHistory,
  iterateAttendanceExport,
  parseBusinessDate,
  type ReportPeriod,
  type ReportSession,
} from "./report.service.js";

function parsePositiveInteger(value: unknown, fallback: number, maximum = 100): number | null {
  if (value === undefined) return fallback;
  if (typeof value !== "string" || !/^[0-9]+$/.test(value)) return null;
  const parsed = Number(value);
  if (!Number.isSafeInteger(parsed) || parsed < 1 || parsed > maximum) return null;
  return parsed;
}

function parseSearch(value: unknown): string | undefined | null {
  if (value === undefined) return undefined;
  if (typeof value !== "string" || value.length > 100) return null;
  return value.trim() || undefined;
}

function parseSession(value: unknown): ReportSession | undefined | null {
  if (value === undefined) return undefined;
  if (typeof value !== "string" || !/^[a-z0-9][a-z0-9_-]{0,63}$/.test(value)) return null;
  return value;
}

function parsePeriodQuery(req: Request): (ReportPeriod & { startDateText: string; endDateText: string }) | null {
  const startText = req.query.startDate;
  const endText = req.query.endDate;
  const search = parseSearch(req.query.search);
  const sesi = parseSession(req.query.sesi);
  if (
    typeof startText !== "string" ||
    typeof endText !== "string" ||
    search === null ||
    sesi === null
  ) return null;
  const startDate = parseBusinessDate(startText);
  const endDate = parseBusinessDate(endText);
  if (!startDate || !endDate || endDate < startDate) return null;
  return { startDate, endDate, startDateText: startText, endDateText: endText, search, sesi };
}

function reportServerError(res: Response, error: unknown) {
  logSafeError("ATTENDANCE REPORT", error);
  if (res.headersSent) {
    res.destroy();
    return;
  }
  return res.status(500).json({ success: false, message: "Terjadi kesalahan pada server." });
}

export async function dailyAttendanceReport(req: Request, res: Response) {
  const dateText = req.query.date;
  const date = typeof dateText === "string" ? parseBusinessDate(dateText) : null;
  const page = parsePositiveInteger(req.query.page, 1, 1_000_000_000);
  const limit = parsePositiveInteger(req.query.limit, 10);
  const search = parseSearch(req.query.search);
  const sesi = parseSession(req.query.sesi);
  if (!date || page === null || limit === null || search === null || sesi === null) {
    return res.status(400).json({
      success: false,
      message: "Parameter tanggal, pencarian, sesi, atau pagination tidak valid.",
    });
  }

  try {
    const result = await getDailyAttendanceReport({ date, page, limit, search, sesi });
    return res.status(200).json({ success: true, date: dateText, ...result });
  } catch (error) {
    return reportServerError(res, error);
  }
}

export async function periodAttendanceReport(req: Request, res: Response) {
  const period = parsePeriodQuery(req);
  const page = parsePositiveInteger(req.query.page, 1, 1_000_000_000);
  const limit = parsePositiveInteger(req.query.limit, 10);
  if (!period || page === null || limit === null) {
    return res.status(400).json({ success: false, message: "Rentang tanggal, pencarian, sesi, atau pagination tidak valid." });
  }
  try {
    const result = await getAttendancePeriodReport({ ...period, page, limit });
    return res.status(200).json({
      success: true,
      periode: { startDate: period.startDateText, endDate: period.endDateText },
      ...result,
    });
  } catch (error) {
    return reportServerError(res, error);
  }
}

export async function attendanceSummaryReport(req: Request, res: Response) {
  const period = parsePeriodQuery(req);
  const page = parsePositiveInteger(req.query.page, 1, 1_000_000_000);
  const limit = parsePositiveInteger(req.query.limit, 10);
  if (!period || page === null || limit === null) {
    return res.status(400).json({ success: false, message: "Rentang tanggal, pencarian, atau pagination tidak valid." });
  }
  try {
    const result = await getAttendanceSummary({ ...period, page, limit });
    return res.status(200).json({
      success: true,
      periode: { startDate: period.startDateText, endDate: period.endDateText },
      ...result,
    });
  } catch (error) {
    return reportServerError(res, error);
  }
}

export async function employeeAttendanceReport(req: Request, res: Response) {
  const nik = req.params.nik;
  const period = parsePeriodQuery(req);
  const page = parsePositiveInteger(req.query.page, 1, 1_000_000_000);
  const limit = parsePositiveInteger(req.query.limit, 10);
  if (typeof nik !== "string" || !nik.trim() || !period || page === null || limit === null) {
    return res.status(400).json({ success: false, message: "NIK, rentang tanggal, atau pagination tidak valid." });
  }
  try {
    const result = await getEmployeeAttendanceHistory({ ...period, nik: nik.trim(), page, limit });
    if (!result) return res.status(404).json({ success: false, message: "Karyawan tidak ditemukan." });
    return res.status(200).json({
      success: true,
      periode: { startDate: period.startDateText, endDate: period.endDateText },
      ...result,
    });
  } catch (error) {
    return reportServerError(res, error);
  }
}

export async function attendanceStatisticsReport(req: Request, res: Response) {
  const period = parsePeriodQuery(req);
  if (!period || period.search !== undefined || period.sesi !== undefined) {
    return res.status(400).json({ success: false, message: "Gunakan startDate dan endDate yang valid; filter search/sesi tidak didukung statistik." });
  }
  try {
    const result = await getAttendanceStatistics(period);
    return res.status(200).json({ success: true, ...result });
  } catch (error) {
    return reportServerError(res, error);
  }
}

function csvCell(value: string | number | null): string {
  let text = value === null ? "" : String(value);
  if (/^\s*[=+\-@\t\r]/.test(text)) text = `'${text}`;
  return `"${text.replace(/"/g, '""')}"`;
}

function waitForDrain(res: Response): Promise<void> {
  return new Promise((resolve, reject) => {
    const cleanup = () => {
      res.off("drain", onDrain);
      res.off("close", onClose);
      res.off("error", onError);
    };
    const onDrain = () => { cleanup(); resolve(); };
    const onClose = () => { cleanup(); reject(new Error("CSV_CLIENT_DISCONNECTED")); };
    const onError = (error: Error) => { cleanup(); reject(error); };
    res.once("drain", onDrain);
    res.once("close", onClose);
    res.once("error", onError);
  });
}

export async function exportAttendanceCsv(req: Request, res: Response) {
  const period = parsePeriodQuery(req);
  if (!period) {
    return res.status(400).json({ success: false, message: "Rentang tanggal, pencarian, atau sesi tidak valid." });
  }

  const filename = `attendance_${period.startDateText}_to_${period.endDateText}.csv`;
  res.status(200);
  res.setHeader("Content-Type", "text/csv; charset=utf-8");
  res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("X-Report-Status-Scope", "SCHEDULE_EFFECTIVE_DAILY");

  try {
    if (!res.write("\uFEFF")) await waitForDrain(res);
    const header = ["NIK", "Nama Lengkap", "Tanggal", "Status Karyawan", "Sesi", "Waktu Absensi", "Status Absensi"];
    if (!res.write(`${header.map(csvCell).join(",")}\r\n`)) await waitForDrain(res);

    for await (const record of iterateAttendanceExport(period)) {
      const row = [
        record.nik,
        record.user.namaLengkap,
        formatBusinessDate(record.tanggal),
        record.user.isActive ? "Aktif" : "Nonaktif",
        record.sessionNameSnapshot,
        record.waktuAbsen?.toISOString() ?? "",
        record.status,
      ];
      if (!res.write(`${row.map(csvCell).join(",")}\r\n`)) await waitForDrain(res);
    }
    return res.end();
  } catch (error) {
    return reportServerError(res, error);
  }
}
