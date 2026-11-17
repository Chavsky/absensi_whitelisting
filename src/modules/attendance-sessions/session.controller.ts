import type { Request, Response } from "express";
import { logSafeError } from "../../utils/safe-error-logger.js";
import { parseBusinessDate } from "../reports/report.service.js";
import { isWithinTimeRange } from "./schedule-policy.js";
import {
  createSession,
  correctAttendance,
  deleteSessionPermanently,
  disableSession,
  archiveSession,
  listArchivedSessionsForAdmin,
  listAttendanceCorrections,
  listSessionsForAdmin,
  listSessionsForToday,
  SessionConfigurationError,
  appendSessionVersion,
} from "./session.service.js";

function parseVersionBody(value: unknown) {
  if (typeof value !== "object" || value === null) return null;
  const body = value as Record<string, unknown>;
  if (
    typeof body.name !== "string" ||
    !Number.isInteger(body.sortOrder) ||
    typeof body.isActive !== "boolean" ||
    typeof body.startTime !== "string" ||
    typeof body.endTime !== "string" ||
    typeof body.key !== "undefined" ||
    typeof body.effectiveFrom !== "undefined" ||
    typeof body.schedules !== "undefined" ||
    typeof body.adminIdentity !== "undefined"
  ) return null;
  return {
    name: body.name,
    sortOrder: Number(body.sortOrder),
    isActive: body.isActive,
    startTime: body.startTime,
    endTime: body.endTime,
  };
}

function configurationError(error: unknown, res: Response) {
  if (!(error instanceof SessionConfigurationError)) return false;
  const conflictErrors = new Set([
    "SESSION_KEY_EXISTS",
    "SESSION_SCHEDULE_OVERLAP",
    "SESSION_EFFECTIVE_DATE_NOT_INCREASING",
    "SESSION_EFFECTIVE_DATE_IN_PAST",
    "SESSION_EFFECTIVE_DATE_INVALID",
    "SESSION_ACTIVE",
    "SESSION_ARCHIVED",
    "SESSION_DELETE_CONFLICT",
  ]);
  const notFound = error.message === "SESSION_NOT_FOUND";
  res.status(notFound ? 404 : conflictErrors.has(error.message) ? 409 : 400).json({
    success: false,
    message: error.message,
    ...(error.details ? { data: error.details } : {}),
  });
  return true;
}

function formatTime(date: Date | string): string {
  if (typeof date === "string" && /^\d{2}:\d{2}/.test(date)) return date.slice(0, 5);
  const parsed = typeof date === "string" ? new Date(date) : date;
  return `${String(parsed.getUTCHours()).padStart(2, "0")}:${String(parsed.getUTCMinutes()).padStart(2, "0")}`;
}

function serializeVersion<T extends {
  daySchedules: Array<{ startTime: Date; endTime: Date }>;
  startTime?: Date | null;
  endTime?: Date | null;
}>(version: T) {
  return {
    ...version,
    ...(version.startTime != null ? { startTime: formatTime(version.startTime) } : {}),
    ...(version.endTime != null ? { endTime: formatTime(version.endTime) } : {}),
    daySchedules: version.daySchedules.map((schedule) => ({
      ...schedule,
      startTime: formatTime(schedule.startTime),
      endTime: formatTime(schedule.endTime),
    })),
  };
}

export async function todaySessions(_req: Request, res: Response) {
  try {
    const now = new Date();
    const sessions = await listSessionsForToday(now);
    const data = sessions.filter((session) => session.isActive && session.isScheduled).map((session) => {
      if (!session.startTime || !session.endTime) {
        throw new Error("ACTIVE_SESSION_TIME_RANGE_MISSING");
      }
      return {
        sessionId: session.sessionId,
        key: session.key,
        name: session.name,
        sortOrder: session.sortOrder,
        isEnabled: true,
        startTime: formatTime(session.startTime),
        endTime: formatTime(session.endTime),
        canAttend: isWithinTimeRange(now, {
          startTime: session.startTime,
          endTime: session.endTime,
        }),
      };
    });
    return res.status(200).json({ success: true, timezone: "Asia/Jakarta", data });
  } catch (error) {
    logSafeError("ATTENDANCE SESSIONS TODAY", error);
    return res.status(500).json({ success: false, message: "Terjadi kesalahan pada server." });
  }
}

export async function listAdminSessions(_req: Request, res: Response) {
  try {
    const data = (await listSessionsForAdmin()).map((session) => ({
      ...session,
      versions: session.versions.map(serializeVersion),
    }));
    return res.status(200).json({ success: true, data });
  } catch (error) {
    logSafeError("ADMIN ATTENDANCE SESSIONS", error);
    return res.status(500).json({ success: false, message: "Terjadi kesalahan pada server." });
  }
}

export async function listArchivedAdminSessions(_req: Request, res: Response) {
  try {
    const data = (await listArchivedSessionsForAdmin()).map((session) => ({
      ...session,
      versions: session.versions.map(serializeVersion),
    }));
    return res.status(200).json({ success: true, data });
  } catch (error) {
    logSafeError("ADMIN ARCHIVED ATTENDANCE SESSIONS", error);
    return res.status(500).json({ success: false, message: "Terjadi kesalahan pada server." });
  }
}

export async function createAdminSession(req: Request, res: Response) {
  const body = parseVersionBody(req.body);
  if (!body || !req.admin) {
    return res.status(400).json({ success: false, message: "Data sesi tidak valid." });
  }
  try {
    const data = await createSession({
      ...body,
      adminId: req.admin.id,
      adminUsername: req.admin.username,
    });
    return res.status(201).json({
      success: true,
      data: { ...data, versions: data.versions.map(serializeVersion) },
    });
  } catch (error) {
    if (configurationError(error, res)) return;
    logSafeError("ADMIN ATTENDANCE SESSION CREATE", error);
    return res.status(500).json({ success: false, message: "Terjadi kesalahan pada server." });
  }
}

export async function addAdminSessionVersion(req: Request, res: Response) {
  const body = parseVersionBody(req.body);
  if (!body || typeof req.params.key !== "string" || !req.admin) {
    return res.status(400).json({ success: false, message: "Data versi sesi tidak valid." });
  }
  try {
    const data = await appendSessionVersion({
      key: req.params.key,
      ...body,
      adminId: req.admin.id,
      adminUsername: req.admin.username,
    });
    return res.status(201).json({ success: true, data: serializeVersion(data) });
  } catch (error) {
    if (configurationError(error, res)) return;
    logSafeError("ADMIN ATTENDANCE SESSION VERSION", error);
    return res.status(500).json({ success: false, message: "Terjadi kesalahan pada server." });
  }
}

export async function disableAdminSession(req: Request, res: Response) {
  if (typeof req.params.key !== "string" || !req.admin) {
    return res.status(400).json({ success: false, message: "Data sesi tidak valid." });
  }
  try {
    const data = await disableSession({
      key: req.params.key,
      adminId: req.admin.id,
      adminUsername: req.admin.username,
    });
    return res.status(201).json({ success: true, data: serializeVersion(data) });
  } catch (error) {
    if (configurationError(error, res)) return;
    logSafeError("ADMIN ATTENDANCE SESSION DISABLE", error);
    return res.status(500).json({ success: false, message: "Terjadi kesalahan pada server." });
  }
}

export async function archiveAdminSession(req: Request, res: Response) {
  if (typeof req.params.key !== "string" || !req.admin) {
    return res.status(400).json({ success: false, message: "Data sesi tidak valid." });
  }
  try {
    const data = await archiveSession({
      key: req.params.key,
      adminId: req.admin.id,
    });
    return res.status(200).json({ success: true, data });
  } catch (error) {
    if (configurationError(error, res)) return;
    logSafeError("ADMIN ATTENDANCE SESSION ARCHIVE", error);
    return res.status(500).json({ success: false, message: "Terjadi kesalahan pada server." });
  }
}

export async function deleteAdminSessionPermanently(req: Request, res: Response) {
  if (typeof req.params.key !== "string" || !req.admin) {
    return res.status(400).json({ success: false, message: "Data sesi tidak valid." });
  }
  try {
    const data = await deleteSessionPermanently({
      key: req.params.key,
      adminId: req.admin.id,
    });
    return res.status(200).json({ success: true, data });
  } catch (error) {
    if (configurationError(error, res)) return;
    logSafeError("ADMIN ATTENDANCE SESSION PERMANENT DELETE", error);
    return res.status(500).json({ success: false, message: "Terjadi kesalahan pada server." });
  }
}

export async function correctAdminAttendance(req: Request, res: Response) {
  const body = req.body as Record<string, unknown> | null;
  const date = typeof body?.date === "string" ? parseBusinessDate(body.date) : null;
  const status = body?.status;
  const nik = body?.nik;
  const reason = body?.reason;
  if (
    !date ||
    typeof req.params.key !== "string" ||
    typeof nik !== "string" ||
    !nik.trim() ||
    (status !== "Hadir" && status !== "Tidak Hadir") ||
    typeof reason !== "string" ||
    !req.admin
  ) {
    return res.status(400).json({ success: false, message: "Data koreksi absensi tidak valid." });
  }
  try {
    const data = await correctAttendance({
      nik: nik.trim(),
      key: req.params.key,
      date,
      newStatus: status,
      reason,
      adminId: req.admin.id,
      adminUsername: req.admin.username,
    });
    return res.status(201).json({ success: true, data });
  } catch (error) {
    if (configurationError(error, res)) return;
    logSafeError("ADMIN ATTENDANCE CORRECTION", error);
    return res.status(500).json({ success: false, message: "Terjadi kesalahan pada server." });
  }
}

export async function listAdminAttendanceCorrections(req: Request, res: Response) {
  const key = req.params.key;
  const nik = req.query.nik;
  const dateText = req.query.date;
  const date = typeof dateText === "string" ? parseBusinessDate(dateText) : null;
  if (
    typeof key !== "string" ||
    !/^[a-z0-9][a-z0-9_-]{0,63}$/.test(key) ||
    typeof nik !== "string" ||
    !nik.trim() ||
    !date ||
    !req.admin
  ) {
    return res.status(400).json({ success: false, message: "Parameter riwayat koreksi tidak valid." });
  }
  try {
    const data = await listAttendanceCorrections({ key, nik: nik.trim(), date });
    if (data === null) {
      return res.status(404).json({ success: false, message: "Sesi absensi tidak ditemukan." });
    }
    return res.status(200).json({ success: true, data });
  } catch (error) {
    logSafeError("ADMIN ATTENDANCE CORRECTION HISTORY", error);
    return res.status(500).json({ success: false, message: "Terjadi kesalahan pada server." });
  }
}
