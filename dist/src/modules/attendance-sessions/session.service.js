import { prisma } from "../../config/database.js";
import { clockToDate, formatClockTime, isJakartaWorkday, isSessionEnabledByConfiguration, isTimeRangeFinished, isoWeekdayForDate, jakartaBusinessDate, resolveSessionTimeRange, timeRangesOverlap, validateSessionTime, } from "./schedule-policy.js";
import { sessionKeyForId } from "./session-identity.js";
import { currentVersionSnapshot, immediateDefinitionUpdate, immediateVersionEdits, } from "./session-update-policy.js";
export class SessionConfigurationError extends Error {
    details;
    constructor(message, details) {
        super(message);
        this.name = "SessionConfigurationError";
        this.details = details;
    }
}
function assertKey(key) {
    if (!/^[a-z0-9][a-z0-9_-]{0,63}$/.test(key)) {
        throw new SessionConfigurationError("SESSION_KEY_INVALID");
    }
}
function assertVersionInput(input) {
    if (!input.name.trim() || input.name.trim().length > 100) {
        throw new SessionConfigurationError("SESSION_NAME_INVALID");
    }
    if (!Number.isInteger(input.sortOrder) || input.sortOrder < 0 || input.sortOrder > 1_000_000) {
        throw new SessionConfigurationError("SESSION_SORT_ORDER_INVALID");
    }
    if (typeof input.isActive !== "boolean") {
        throw new SessionConfigurationError("SESSION_ACTIVE_INVALID");
    }
    const timeError = validateSessionTime(input.startTime, input.endTime);
    if (timeError)
        throw new SessionConfigurationError(timeError);
}
export async function assertNoOverlap(db, candidate) {
    if (!candidate.isActive)
        return;
    const versions = await db.attendanceSessionVersion.findMany({
        where: { session: { is: { deletedAt: null } } },
        include: { daySchedules: true, session: true },
        orderBy: [{ sessionId: "asc" }, { effectiveFrom: "asc" }, { id: "asc" }],
    });
    const candidateEnd = versions
        .filter((version) => version.sessionId === candidate.sessionId && version.effectiveFrom > candidate.effectiveFrom)
        .map((version) => version.effectiveFrom)
        .sort((a, b) => a.getTime() - b.getTime())[0] ?? null;
    for (const version of versions) {
        if (!version.isActive || version.sessionId === candidate.sessionId)
            continue;
        // A definition-disabled session no longer holds its time slots, so it must
        // not block other sessions; reactivation is validated separately by this
        // same check because the reactivating candidate itself is validated here.
        if (!isSessionEnabledByConfiguration(version.session.disabledAt, version.session.enabledFrom, candidate.businessDate))
            continue;
        const nextEffective = versions
            .filter((next) => next.sessionId === version.sessionId && next.effectiveFrom > version.effectiveFrom)
            .map((next) => next.effectiveFrom)
            .sort((a, b) => a.getTime() - b.getTime())[0] ?? null;
        const startsBeforeCandidateEnds = candidateEnd === null || version.effectiveFrom < candidateEnd;
        const endsAfterCandidateStarts = nextEffective === null || nextEffective > candidate.effectiveFrom;
        if (!startsBeforeCandidateEnds || !endsAfterCandidateStarts)
            continue;
        const existingTimeRanges = version.startTime != null && version.endTime != null
            ? [{ startTime: version.startTime, endTime: version.endTime }]
            : version.daySchedules
                .filter((schedule) => schedule.isoWeekday <= 5 && schedule.isEnabled)
                .map(({ startTime, endTime }) => ({ startTime, endTime }));
        for (const range of existingTimeRanges) {
            if (timeRangesOverlap(candidate.timeRange, range)) {
                throw new SessionConfigurationError("SESSION_SCHEDULE_OVERLAP", {
                    sessionName: version.name,
                    startTime: formatClockTime(range.startTime),
                    endTime: formatClockTime(range.endTime),
                });
            }
        }
    }
}
/**
 * Pending versions (effective after the current business date) have never
 * applied to any attendance, but the database keeps Restrict foreign keys from
 * attendances and correction logs onto session versions. Both references are
 * counted first; when either is non-zero the save is aborted instead of
 * deleting referenced history.
 */
export async function ensurePendingVersionsUnreferenced(db, pendingVersions) {
    for (const pending of pendingVersions) {
        const [correctionCount, attendanceCount] = await Promise.all([
            db.attendanceCorrectionLog.count({ where: { sessionVersionId: pending.id } }),
            db.attendance.count({ where: { sessionVersionId: pending.id } }),
        ]);
        if (correctionCount > 0 || attendanceCount > 0) {
            throw new SessionConfigurationError("SESSION_PENDING_REFERENCED");
        }
    }
}
async function lockConfiguration(db) {
    await db.$executeRaw `LOCK TABLE "attendance_session_versions" IN SHARE ROW EXCLUSIVE MODE`;
    await db.$executeRaw `LOCK TABLE "attendance_session_day_schedules" IN SHARE ROW EXCLUSIVE MODE`;
}
async function nextSessionIdentity(db) {
    for (;;) {
        const [{ id }] = await db.$queryRaw `
      SELECT nextval(pg_get_serial_sequence('attendance_sessions', 'id'))::int AS id
    `;
        const key = sessionKeyForId(id);
        const existing = await db.attendanceSessionDefinition.findFirst({
            where: { OR: [{ id }, { key }] },
            select: { id: true },
        });
        if (!existing)
            return { id, key };
    }
}
export async function listConfiguredSessions(date) {
    const sessions = await prisma.attendanceSessionDefinition.findMany({
        where: { deletedAt: null },
        include: {
            versions: {
                where: { effectiveFrom: { lte: date } },
                orderBy: [{ effectiveFrom: "desc" }, { id: "desc" }],
                take: 1,
                include: { daySchedules: { orderBy: { isoWeekday: "asc" } } },
            },
        },
        orderBy: { key: "asc" },
    });
    return sessions.flatMap((session) => {
        const version = session.versions[0];
        if (!version)
            return [];
        const timeRange = resolveSessionTimeRange(version, date);
        return [{
                key: session.key,
                sessionId: session.id,
                versionId: version.id,
                name: version.name,
                sortOrder: version.sortOrder,
                isActive: version.isActive && isSessionEnabledByConfiguration(session.disabledAt, session.enabledFrom, date),
                effectiveFrom: version.effectiveFrom,
                startTime: timeRange?.startTime ?? null,
                endTime: timeRange?.endTime ?? null,
                isScheduled: timeRange !== null,
            }];
    }).sort((a, b) => a.sortOrder - b.sortOrder || a.key.localeCompare(b.key));
}
export async function listSessionsForToday(now) {
    const date = jakartaBusinessDate(now);
    if (!isJakartaWorkday(date))
        return [];
    return listConfiguredSessions(date);
}
export async function listSessionsForAdmin(now = new Date()) {
    const date = jakartaBusinessDate(now);
    const sessions = await prisma.attendanceSessionDefinition.findMany({
        where: { deletedAt: null },
        include: {
            versions: {
                orderBy: { effectiveFrom: "desc" },
                include: { daySchedules: { orderBy: { isoWeekday: "asc" } } },
            },
        },
        orderBy: { key: "asc" },
    });
    return sessions.map((session) => {
        const currentVersion = currentVersionSnapshot(session.versions, date);
        return {
            ...session,
            isEnabled: Boolean(currentVersion?.isActive &&
                isSessionEnabledByConfiguration(session.disabledAt, session.enabledFrom, date)),
        };
    });
}
export async function listArchivedSessionsForAdmin(now = new Date()) {
    const date = jakartaBusinessDate(now);
    const sessions = await prisma.attendanceSessionDefinition.findMany({
        where: { deletedAt: { not: null } },
        include: {
            versions: {
                orderBy: { effectiveFrom: "desc" },
                include: { daySchedules: { orderBy: { isoWeekday: "asc" } } },
            },
        },
        orderBy: [{ deletedAt: "desc" }, { key: "asc" }],
    });
    return sessions.map((session) => {
        const currentVersion = currentVersionSnapshot(session.versions, date);
        return {
            ...session,
            isEnabled: Boolean(currentVersion?.isActive) && session.deletedAt === null,
        };
    });
}
export async function createSession(input) {
    assertVersionInput(input);
    const timeRange = {
        startTime: clockToDate(input.startTime),
        endTime: clockToDate(input.endTime),
    };
    try {
        return await prisma.$transaction(async (tx) => {
            await lockConfiguration(tx);
            const effectiveFrom = jakartaBusinessDate(new Date());
            const identity = await nextSessionIdentity(tx);
            const session = await tx.attendanceSessionDefinition.create({
                data: identity,
            });
            await assertNoOverlap(tx, {
                sessionId: session.id,
                businessDate: effectiveFrom,
                effectiveFrom,
                isActive: input.isActive,
                timeRange,
            });
            const version = await tx.attendanceSessionVersion.create({
                data: {
                    sessionId: session.id,
                    name: input.name.trim(),
                    sortOrder: input.sortOrder,
                    isActive: input.isActive,
                    effectiveFrom,
                    startTime: timeRange.startTime,
                    endTime: timeRange.endTime,
                    createdByAdminId: input.adminId,
                    createdByAdminUsername: input.adminUsername,
                },
                include: { daySchedules: { orderBy: { isoWeekday: "asc" } } },
            });
            return { ...session, versions: [version] };
        });
    }
    catch (error) {
        if (error instanceof SessionConfigurationError)
            throw error;
        if (typeof error === "object" && error !== null && "code" in error &&
            error.code === "P2002")
            throw new SessionConfigurationError("SESSION_KEY_EXISTS");
        throw error;
    }
}
export async function appendSessionVersion(input) {
    assertKey(input.key);
    assertVersionInput(input);
    const timeRange = {
        startTime: clockToDate(input.startTime),
        endTime: clockToDate(input.endTime),
    };
    return prisma.$transaction(async (tx) => {
        await lockConfiguration(tx);
        const today = jakartaBusinessDate(new Date());
        const session = await tx.attendanceSessionDefinition.findUnique({
            where: { key: input.key },
            include: {
                versions: {
                    orderBy: [{ effectiveFrom: "desc" }, { id: "desc" }],
                    include: { daySchedules: true },
                },
            },
        });
        if (!session)
            throw new SessionConfigurationError("SESSION_NOT_FOUND");
        if (session.deletedAt)
            throw new SessionConfigurationError("SESSION_ARCHIVED");
        // Realtime rule: a saved schedule always takes effect on the Jakarta
        // business date of the save itself. Pending future versions of this
        // session are cleaned up first (only when unreferenced) so the timeline
        // keeps at most one version per effective date and the last same-day save
        // wins. Versions effective before today are never touched.
        const effectiveFrom = today;
        const pendingVersions = session.versions.filter((version) => version.effectiveFrom > today);
        if (pendingVersions.length > 0) {
            await ensurePendingVersionsUnreferenced(tx, pendingVersions);
            for (const pending of pendingVersions) {
                await tx.attendanceSessionDaySchedule.deleteMany({
                    where: { sessionVersionId: pending.id },
                });
                await tx.attendanceSessionVersion.delete({ where: { id: pending.id } });
            }
        }
        await assertNoOverlap(tx, {
            sessionId: session.id,
            businessDate: today,
            effectiveFrom,
            isActive: input.isActive,
            timeRange,
        });
        const edit = {
            name: input.name.trim(),
            sortOrder: input.sortOrder,
            isActive: input.isActive,
        };
        const todayVersion = session.versions.find((version) => version.effectiveFrom.getTime() === today.getTime());
        let version;
        if (todayVersion) {
            // Same-day supersede: today's working version row is replaced in place.
            // Its id and creator audit fields stay intact, and any attendance or
            // correction rows referencing it keep valid foreign keys, because only
            // the editable schedule fields are rewritten.
            if (todayVersion.daySchedules.length > 0) {
                await tx.attendanceSessionDaySchedule.deleteMany({
                    where: { sessionVersionId: todayVersion.id },
                });
            }
            version = await tx.attendanceSessionVersion.update({
                where: { id: todayVersion.id },
                data: { ...edit, startTime: timeRange.startTime, endTime: timeRange.endTime },
                include: { session: true, daySchedules: { orderBy: { isoWeekday: "asc" } } },
            });
        }
        else {
            version = await tx.attendanceSessionVersion.create({
                data: {
                    sessionId: session.id,
                    ...edit,
                    effectiveFrom,
                    startTime: timeRange.startTime,
                    endTime: timeRange.endTime,
                    createdByAdminId: input.adminId,
                    createdByAdminUsername: input.adminUsername,
                },
                include: { session: true, daySchedules: { orderBy: { isoWeekday: "asc" } } },
            });
        }
        const currentEdits = immediateVersionEdits(session.versions, effectiveFrom, today, edit);
        for (const currentEdit of currentEdits) {
            await tx.attendanceSessionVersion.update({
                where: { id: currentEdit.id },
                data: currentEdit.data,
            });
        }
        const definitionUpdate = immediateDefinitionUpdate({
            isActive: input.isActive,
            disabledAt: session.disabledAt,
            enabledFrom: session.enabledFrom,
            businessDate: today,
            now: new Date(),
            adminId: input.adminId,
            adminUsername: input.adminUsername,
        });
        if (definitionUpdate) {
            await tx.attendanceSessionDefinition.update({
                where: { id: session.id },
                data: definitionUpdate,
            });
        }
        return version;
    });
}
export async function disableSession(input) {
    return prisma.$transaction(async (tx) => {
        await lockConfiguration(tx);
        const session = await tx.attendanceSessionDefinition.findUnique({
            where: { key: input.key },
            include: {
                versions: {
                    orderBy: [{ effectiveFrom: "desc" }, { id: "desc" }],
                    take: 1,
                    include: { daySchedules: true },
                },
            },
        });
        const current = session?.versions[0];
        if (!session || !current)
            throw new SessionConfigurationError("SESSION_NOT_FOUND");
        const disabledAt = new Date();
        await tx.attendanceSessionDefinition.update({
            where: { id: session.id },
            data: {
                disabledAt,
                disabledByAdminId: input.adminId,
                disabledByAdminUsername: input.adminUsername,
                enabledFrom: null,
            },
        });
        return { ...current, isEnabled: false, disabledAt };
    });
}
export async function archiveSession(input) {
    return prisma.$transaction(async (tx) => {
        await lockConfiguration(tx);
        const today = jakartaBusinessDate(new Date());
        const session = await tx.attendanceSessionDefinition.findUnique({
            where: { key: input.key },
            include: {
                versions: {
                    where: { effectiveFrom: { lte: today } },
                    orderBy: [{ effectiveFrom: "desc" }, { id: "desc" }],
                    take: 1,
                },
            },
        });
        if (!session)
            throw new SessionConfigurationError("SESSION_NOT_FOUND");
        if (session.deletedAt) {
            return {
                id: session.id,
                key: session.key,
                isEnabled: false,
                deletedAt: session.deletedAt,
                alreadyArchived: true,
            };
        }
        const currentVersion = session.versions[0];
        const isEnabled = Boolean(currentVersion?.isActive &&
            isSessionEnabledByConfiguration(session.disabledAt, session.enabledFrom, today));
        if (isEnabled)
            throw new SessionConfigurationError("SESSION_ACTIVE");
        const deletedAt = new Date();
        await tx.attendanceSessionDefinition.update({
            where: { id: session.id },
            data: { deletedAt },
        });
        await tx.securityAuditLog.create({
            data: { action: "attendance_session_archived", adminId: input.adminId },
        });
        return {
            id: session.id,
            key: session.key,
            isEnabled: false,
            deletedAt,
            alreadyArchived: false,
        };
    });
}
export async function deleteSessionPermanently(input) {
    assertKey(input.key);
    try {
        return await prisma.$transaction(async (tx) => {
            // Serialize with attendance/correction writes and session configuration
            // changes before taking the session row lock. This matches the lock order
            // used by createAttendance, correctAttendance, and the other admin flows.
            await lockConfiguration(tx);
            const lockedSessions = await tx.$queryRaw `
        SELECT "id", "key", "deleted_at"
        FROM "attendance_sessions"
        WHERE "key" = ${input.key}
        FOR UPDATE
      `;
            const locked = lockedSessions[0];
            if (!locked)
                throw new SessionConfigurationError("SESSION_NOT_FOUND");
            const today = jakartaBusinessDate(new Date());
            const session = await tx.attendanceSessionDefinition.findUnique({
                where: { id: locked.id },
                include: {
                    versions: {
                        where: { effectiveFrom: { lte: today } },
                        orderBy: [{ effectiveFrom: "desc" }, { id: "desc" }],
                        take: 1,
                    },
                },
            });
            if (!session)
                throw new SessionConfigurationError("SESSION_NOT_FOUND");
            const currentVersion = session.versions[0];
            const isEnabled = session.deletedAt === null && Boolean(currentVersion?.isActive &&
                isSessionEnabledByConfiguration(session.disabledAt, session.enabledFrom, today));
            if (isEnabled)
                throw new SessionConfigurationError("SESSION_ACTIVE");
            // FK-safe order: correction logs -> attendances -> day schedules ->
            // versions -> session definition. Any failure rolls back the whole
            // transaction, including the audit log written at the end.
            const corrections = await tx.attendanceCorrectionLog.deleteMany({
                where: { sessionId: session.id },
            });
            const attendances = await tx.attendance.deleteMany({
                where: { sessionId: session.id },
            });
            const schedules = await tx.attendanceSessionDaySchedule.deleteMany({
                where: { sessionVersion: { is: { sessionId: session.id } } },
            });
            const versions = await tx.attendanceSessionVersion.deleteMany({
                where: { sessionId: session.id },
            });
            await tx.attendanceSessionDefinition.delete({
                where: { id: session.id },
            });
            await tx.securityAuditLog.create({
                data: {
                    action: "attendance_session_deleted_permanently",
                    adminId: input.adminId,
                },
            });
            return {
                id: session.id,
                key: session.key,
                deleted: true,
                correctionsDeleted: corrections.count,
                attendancesDeleted: attendances.count,
                schedulesDeleted: schedules.count,
                versionsDeleted: versions.count,
            };
        });
    }
    catch (error) {
        if (error instanceof SessionConfigurationError)
            throw error;
        if (typeof error === "object" && error !== null && "code" in error) {
            if (error.code === "P2003") {
                throw new SessionConfigurationError("SESSION_DELETE_CONFLICT");
            }
            if (error.code === "P2025") {
                throw new SessionConfigurationError("SESSION_NOT_FOUND");
            }
        }
        throw error;
    }
}
export async function correctAttendance(input) {
    const reason = input.reason.trim();
    if (!reason || reason.length > 500) {
        throw new SessionConfigurationError("CORRECTION_REASON_INVALID");
    }
    if (input.date > jakartaBusinessDate(new Date())) {
        throw new SessionConfigurationError("CORRECTION_DATE_IN_FUTURE");
    }
    return prisma.$transaction(async (tx) => {
        await tx.$executeRaw `LOCK TABLE "attendance_session_versions" IN SHARE MODE`;
        await tx.$executeRaw `LOCK TABLE "attendance_session_day_schedules" IN SHARE MODE`;
        const lockedUsers = await tx.$queryRaw `
      SELECT "nik" FROM "users" WHERE "nik" = ${input.nik} FOR UPDATE
    `;
        if (lockedUsers.length === 0) {
            throw new SessionConfigurationError("CORRECTION_EMPLOYEE_NOT_FOUND");
        }
        const [user, session] = await Promise.all([
            tx.user.findUnique({ where: { nik: input.nik }, select: { nik: true, createdAt: true } }),
            tx.attendanceSessionDefinition.findUnique({
                where: { key: input.key },
                include: {
                    versions: {
                        where: { effectiveFrom: { lte: input.date } },
                        orderBy: [{ effectiveFrom: "desc" }, { id: "desc" }],
                        take: 1,
                        include: {
                            daySchedules: {
                                where: { isoWeekday: isoWeekdayForDate(input.date) },
                            },
                        },
                    },
                },
            }),
        ]);
        if (!user)
            throw new SessionConfigurationError("CORRECTION_EMPLOYEE_NOT_FOUND");
        if (!session)
            throw new SessionConfigurationError("SESSION_NOT_FOUND");
        const sessionVersion = session.versions[0];
        const timeRange = sessionVersion
            ? resolveSessionTimeRange(sessionVersion, input.date)
            : null;
        const attendance = await tx.attendance.findUnique({
            where: {
                nik_tanggal_sessionId: {
                    nik: input.nik,
                    tanggal: input.date,
                    sessionId: session.id,
                },
            },
            select: { id: true, status: true },
        });
        const createdBeforeDateEnd = user.createdAt < new Date(input.date.getTime() + 86400000 - 7 * 3600000);
        if (!createdBeforeDateEnd) {
            throw new SessionConfigurationError("CORRECTION_EMPLOYEE_OUTSIDE_DATE");
        }
        const latest = await tx.attendanceCorrectionLog.findFirst({
            where: { nik: input.nik, attendanceDate: input.date, sessionId: session.id },
            orderBy: [{ revision: "desc" }],
            select: { newStatus: true, revision: true },
        });
        if (!attendance && !latest) {
            if (!sessionVersion?.isActive || !timeRange) {
                throw new SessionConfigurationError("CORRECTION_SCHEDULE_NOT_FOUND");
            }
            if (!isTimeRangeFinished(new Date(), input.date, timeRange)) {
                throw new SessionConfigurationError("CORRECTION_SESSION_NOT_FINISHED");
            }
        }
        const previousStatus = latest?.newStatus ?? attendance?.status ?? "Tidak Hadir";
        const revision = (latest?.revision ?? 0) + 1;
        return tx.attendanceCorrectionLog.create({
            data: {
                nik: input.nik,
                attendanceDate: input.date,
                sessionId: session.id,
                sessionVersionId: sessionVersion?.id ?? null,
                attendanceId: attendance?.id ?? null,
                revision,
                previousStatus,
                newStatus: input.newStatus,
                reason,
                correctedByAdminId: input.adminId,
                correctedByAdminUsername: input.adminUsername,
            },
        });
    });
}
export async function listAttendanceCorrections(input) {
    const session = await prisma.attendanceSessionDefinition.findUnique({
        where: { key: input.key },
        select: { id: true },
    });
    if (!session)
        return null;
    return prisma.attendanceCorrectionLog.findMany({
        where: {
            nik: input.nik,
            sessionId: session.id,
            attendanceDate: input.date,
        },
        orderBy: { revision: "desc" },
        select: {
            id: true,
            nik: true,
            attendanceDate: true,
            sessionId: true,
            sessionVersionId: true,
            attendanceId: true,
            revision: true,
            previousStatus: true,
            newStatus: true,
            reason: true,
            correctedByAdminId: true,
            correctedByAdminUsername: true,
            correctedAt: true,
        },
    });
}
//# sourceMappingURL=session.service.js.map