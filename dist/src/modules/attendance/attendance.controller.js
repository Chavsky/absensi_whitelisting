import { logSafeError } from "../../utils/safe-error-logger.js";
import { parseJakartaBusinessDateRange } from "./attendance-date.js";
import { AttendanceScheduleError, createAttendance as createAttendanceRecord, DuplicateAttendanceError, getAttendanceHistory as loadAttendanceHistory, getTodayAttendance as loadTodayAttendance, } from "./attendance.service.js";
function getAuthenticatedNik(req, res) {
    if (!req.user?.nik) {
        res.status(401).json({ success: false, message: "Silakan login terlebih dahulu." });
        return null;
    }
    return req.user.nik;
}
export async function createAttendance(req, res) {
    const nik = getAuthenticatedNik(req, res);
    if (!nik)
        return;
    const { sesi } = req.body ?? {};
    if (typeof sesi !== "string" || !/^[a-z0-9][a-z0-9_-]{0,63}$/.test(sesi)) {
        return res.status(400).json({
            success: false,
            message: "Sesi absensi tidak valid.",
        });
    }
    try {
        const data = await createAttendanceRecord(nik, sesi);
        return res.status(201).json({ success: true, message: "Absensi berhasil dicatat.", data });
    }
    catch (error) {
        if (error instanceof DuplicateAttendanceError) {
            return res.status(409).json({
                success: false,
                message: "Anda sudah melakukan absensi untuk sesi ini.",
            });
        }
        if (error instanceof AttendanceScheduleError) {
            const outsideWindow = error.message === "OUTSIDE_ATTENDANCE_WINDOW";
            const unavailable = error.message === "SESSION_NOT_FOUND" || error.message === "SESSION_INACTIVE";
            return res.status(outsideWindow ? 403 : unavailable ? 404 : 403).json({
                success: false,
                message: outsideWindow
                    ? "Absensi hanya dapat dilakukan pada waktu sesi yang dijadwalkan."
                    : unavailable
                        ? "Sesi absensi tidak tersedia."
                        : "Sesi tidak dijadwalkan pada hari ini.",
            });
        }
        logSafeError("ATTENDANCE CREATE", error);
        return res.status(500).json({ success: false, message: "Terjadi kesalahan pada server." });
    }
}
export async function getTodayAttendance(req, res) {
    const nik = getAuthenticatedNik(req, res);
    if (!nik)
        return;
    try {
        const data = await loadTodayAttendance(nik);
        return res.status(200).json({ success: true, data });
    }
    catch (error) {
        logSafeError("ATTENDANCE TODAY", error);
        return res.status(500).json({ success: false, message: "Terjadi kesalahan pada server." });
    }
}
function parsePagination(value, fallback, maximum) {
    if (value === undefined)
        return fallback;
    if (typeof value !== "string" || !/^[0-9]+$/.test(value))
        return null;
    const parsed = Number(value);
    if (!Number.isSafeInteger(parsed) || parsed < 1 || (maximum !== undefined && parsed > maximum))
        return null;
    return parsed;
}
export async function getAttendanceHistory(req, res) {
    const nik = getAuthenticatedNik(req, res);
    if (!nik)
        return;
    const page = parsePagination(req.query.page, 1);
    const limit = parsePagination(req.query.limit, 10, 100);
    if (page === null || limit === null) {
        return res.status(400).json({
            success: false,
            message: "Parameter page harus bilangan bulat positif dan limit harus antara 1 sampai 100.",
        });
    }
    let dateRange;
    if (req.query.date !== undefined) {
        const parsedDateRange = parseJakartaBusinessDateRange(req.query.date);
        if (!parsedDateRange) {
            return res.status(400).json({
                success: false,
                message: "Parameter date harus berupa tanggal kalender valid dengan format YYYY-MM-DD.",
            });
        }
        dateRange = parsedDateRange;
    }
    try {
        const result = await loadAttendanceHistory(nik, page, limit, dateRange);
        return res.status(200).json({ success: true, data: result.data, pagination: result.pagination });
    }
    catch (error) {
        logSafeError("ATTENDANCE HISTORY", error);
        return res.status(500).json({ success: false, message: "Terjadi kesalahan pada server." });
    }
}
//# sourceMappingURL=attendance.controller.js.map