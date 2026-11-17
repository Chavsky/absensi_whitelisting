import { prisma } from "../../config/database.js";
import { isJakartaWorkday, isSessionEnabledByConfiguration, isTimeRangeFinished, isWithinTimeRange, formatClockTime, isoWeekdayForDate, jakartaBusinessDate, resolveSessionTimeRange, } from "../attendance-sessions/schedule-policy.js";
export class DuplicateAttendanceError extends Error {
    constructor() {
        super("ATTENDANCE_DUPLICATE");
        this.name = "DuplicateAttendanceError";
    }
}
export class AttendanceScheduleError extends Error {
    constructor(message) {
        super(message);
        this.name = "AttendanceScheduleError";
    }
}
function isDuplicate(error) {
    return typeof error === "object" && error !== null && "code" in error && error.code === "P2002";
}
export async function createAttendance(nik, sessionKey) {
    try {
        return await prisma.$transaction(async (tx) => {
            await tx.$executeRaw `LOCK TABLE "attendance_session_versions" IN SHARE MODE`;
            await tx.$executeRaw `LOCK TABLE "attendance_session_day_schedules" IN SHARE MODE`;
            await tx.$queryRaw `
        SELECT "nik" FROM "users" WHERE "nik" = ${nik} FOR UPDATE
      `;
            const waktuAbsen = new Date();
            const tanggal = jakartaBusinessDate(waktuAbsen);
            if (!isJakartaWorkday(tanggal)) {
                throw new AttendanceScheduleError("SESSION_NOT_SCHEDULED");
            }
            const session = await tx.attendanceSessionDefinition.findUnique({
                where: { key: sessionKey },
                include: {
                    versions: {
                        where: { effectiveFrom: { lte: tanggal } },
                        orderBy: { effectiveFrom: "desc" },
                        take: 1,
                        include: {
                            daySchedules: {
                                where: { isoWeekday: isoWeekdayForDate(tanggal) },
                            },
                        },
                    },
                },
            });
            const version = session?.versions[0];
            if (!session || !version)
                throw new AttendanceScheduleError("SESSION_NOT_FOUND");
            if (session.deletedAt)
                throw new AttendanceScheduleError("SESSION_NOT_FOUND");
            if (!version.isActive ||
                !isSessionEnabledByConfiguration(session.disabledAt, session.enabledFrom, tanggal)) {
                throw new AttendanceScheduleError("SESSION_INACTIVE");
            }
            const timeRange = resolveSessionTimeRange(version, tanggal);
            if (!timeRange)
                throw new AttendanceScheduleError("SESSION_NOT_SCHEDULED");
            if (!isWithinTimeRange(waktuAbsen, timeRange)) {
                throw new AttendanceScheduleError("OUTSIDE_ATTENDANCE_WINDOW");
            }
            return await tx.attendance.create({
                data: {
                    nik,
                    tanggal,
                    sessionId: session.id,
                    sessionVersionId: version.id,
                    sessionNameSnapshot: version.name,
                    sesi: null,
                    source: "PWA",
                    waktuAbsen,
                    status: "Hadir",
                },
                select: {
                    id: true,
                    sesi: true,
                    status: true,
                    sessionNameSnapshot: true,
                    session: { select: { key: true } },
                },
            });
        });
    }
    catch (error) {
        if (isDuplicate(error))
            throw new DuplicateAttendanceError();
        throw error;
    }
}
export async function getTodayAttendance(nik, now = new Date()) {
    const tanggal = jakartaBusinessDate(now);
    if (!isJakartaWorkday(tanggal))
        return [];
    const weekday = isoWeekdayForDate(tanggal);
    const [sessions, records] = await Promise.all([
        prisma.attendanceSessionDefinition.findMany({
            where: { deletedAt: null },
            include: {
                versions: {
                    where: { effectiveFrom: { lte: tanggal } },
                    orderBy: { effectiveFrom: "desc" },
                    take: 1,
                    include: { daySchedules: { where: { isoWeekday: weekday } } },
                },
            },
        }),
        prisma.attendance.findMany({
            where: { nik, tanggal },
            select: {
                id: true,
                sessionId: true,
                sessionNameSnapshot: true,
                status: true,
                waktuAbsen: true,
            },
        }),
    ]);
    const recordBySession = new Map(records.map((record) => [record.sessionId, record]));
    return sessions.flatMap((session) => {
        const version = session.versions[0];
        if (!version?.isActive)
            return [];
        const isEnabled = isSessionEnabledByConfiguration(session.disabledAt, session.enabledFrom, tanggal);
        const timeRange = resolveSessionTimeRange(version, tanggal);
        if (!timeRange)
            return [];
        const record = recordBySession.get(session.id);
        const finished = isTimeRangeFinished(now, tanggal, timeRange);
        return [{
                sessionId: session.id,
                key: session.key,
                name: version.name,
                sortOrder: version.sortOrder,
                startTime: formatClockTime(timeRange.startTime),
                endTime: formatClockTime(timeRange.endTime),
                isEnabled,
                status: record?.status ?? (isEnabled && finished ? "Tidak Hadir" : null),
                finalized: Boolean(record) || (isEnabled && finished),
                canAttend: isEnabled && !record && isWithinTimeRange(now, timeRange),
                waktuAbsen: record?.waktuAbsen ?? null,
                ...(record ? { id: record.id } : {}),
            }];
    }).sort((a, b) => a.sortOrder - b.sortOrder || a.key.localeCompare(b.key));
}
export async function getAttendanceHistory(nik, page, limit, dateRange) {
    const where = {
        nik,
        ...(dateRange ? { tanggal: { gte: dateRange.start, lt: dateRange.end } } : {}),
    };
    const [data, total] = await prisma.$transaction([
        prisma.attendance.findMany({
            where,
            orderBy: [{ tanggal: "desc" }, { waktuAbsen: "desc" }],
            skip: (page - 1) * limit,
            take: limit,
            select: {
                id: true,
                tanggal: true,
                sesi: true,
                sessionNameSnapshot: true,
                session: { select: { key: true } },
                waktuAbsen: true,
                status: true,
            },
        }),
        prisma.attendance.count({ where }),
    ]);
    return {
        data: data.map(({ session, sessionNameSnapshot, ...record }) => ({
            ...record,
            sessionKey: session.key,
            sessionName: sessionNameSnapshot,
        })),
        pagination: {
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit),
        },
    };
}
//# sourceMappingURL=attendance.service.js.map