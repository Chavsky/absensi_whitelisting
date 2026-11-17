import { prisma } from "../../config/database.js";
import { type SessionTimeRange } from "./schedule-policy.js";
type Db = Pick<typeof prisma, "$executeRaw" | "$queryRaw" | "attendance" | "attendanceSessionVersion" | "attendanceSessionDefinition" | "attendanceSessionDaySchedule" | "attendanceCorrectionLog">;
export interface SessionConflictDetails {
    sessionName: string;
    startTime: string;
    endTime: string;
}
export declare class SessionConfigurationError extends Error {
    readonly details?: SessionConflictDetails;
    constructor(message: string, details?: SessionConflictDetails);
}
export declare function assertNoOverlap(db: Db, candidate: {
    sessionId: number;
    businessDate: Date;
    effectiveFrom: Date;
    isActive: boolean;
    timeRange: SessionTimeRange;
}): Promise<void>;
type PendingCleanupDb = Pick<Db, "attendance" | "attendanceCorrectionLog">;
/**
 * Pending versions (effective after the current business date) have never
 * applied to any attendance, but the database keeps Restrict foreign keys from
 * attendances and correction logs onto session versions. Both references are
 * counted first; when either is non-zero the save is aborted instead of
 * deleting referenced history.
 */
export declare function ensurePendingVersionsUnreferenced(db: PendingCleanupDb, pendingVersions: ReadonlyArray<{
    id: number;
}>): Promise<void>;
export declare function listConfiguredSessions(date: Date): Promise<{
    key: string;
    sessionId: number;
    versionId: number;
    name: string;
    sortOrder: number;
    isActive: boolean;
    effectiveFrom: Date;
    startTime: string | Date | null;
    endTime: string | Date | null;
    isScheduled: boolean;
}[]>;
export declare function listSessionsForToday(now: Date): Promise<{
    key: string;
    sessionId: number;
    versionId: number;
    name: string;
    sortOrder: number;
    isActive: boolean;
    effectiveFrom: Date;
    startTime: string | Date | null;
    endTime: string | Date | null;
    isScheduled: boolean;
}[]>;
export declare function listSessionsForAdmin(now?: Date): Promise<{
    id: number;
    key: string;
    disabledAt: Date | null;
    disabledByAdminId: number | null;
    disabledByAdminUsername: string | null;
    enabledFrom: Date | null;
    deletedAt: Date | null;
    createdAt: Date;
    isEnabled: boolean;
    versions: ({
        daySchedules: {
            id: number;
            sessionVersionId: number;
            isoWeekday: number;
            isEnabled: boolean;
            startTime: Date;
            endTime: Date;
        }[];
    } & {
        id: number;
        sessionId: number;
        name: string;
        sortOrder: number;
        isActive: boolean;
        effectiveFrom: Date;
        startTime: Date | null;
        endTime: Date | null;
        createdByAdminId: number | null;
        createdByAdminUsername: string | null;
        createdAt: Date;
    })[];
}[]>;
export declare function listArchivedSessionsForAdmin(now?: Date): Promise<{
    id: number;
    key: string;
    disabledAt: Date | null;
    disabledByAdminId: number | null;
    disabledByAdminUsername: string | null;
    enabledFrom: Date | null;
    deletedAt: Date | null;
    createdAt: Date;
    isEnabled: boolean;
    versions: ({
        daySchedules: {
            id: number;
            sessionVersionId: number;
            isoWeekday: number;
            isEnabled: boolean;
            startTime: Date;
            endTime: Date;
        }[];
    } & {
        id: number;
        sessionId: number;
        name: string;
        sortOrder: number;
        isActive: boolean;
        effectiveFrom: Date;
        startTime: Date | null;
        endTime: Date | null;
        createdByAdminId: number | null;
        createdByAdminUsername: string | null;
        createdAt: Date;
    })[];
}[]>;
export declare function createSession(input: {
    name: string;
    sortOrder: number;
    isActive: boolean;
    startTime: string;
    endTime: string;
    adminId: number;
    adminUsername: string;
}): Promise<{
    id: number;
    key: string;
    disabledAt: Date | null;
    disabledByAdminId: number | null;
    disabledByAdminUsername: string | null;
    enabledFrom: Date | null;
    deletedAt: Date | null;
    createdAt: Date;
    versions: ({
        daySchedules: {
            id: number;
            sessionVersionId: number;
            isoWeekday: number;
            isEnabled: boolean;
            startTime: Date;
            endTime: Date;
        }[];
    } & {
        id: number;
        sessionId: number;
        name: string;
        sortOrder: number;
        isActive: boolean;
        effectiveFrom: Date;
        startTime: Date | null;
        endTime: Date | null;
        createdByAdminId: number | null;
        createdByAdminUsername: string | null;
        createdAt: Date;
    })[];
}>;
export declare function appendSessionVersion(input: {
    key: string;
    name: string;
    sortOrder: number;
    isActive: boolean;
    startTime: string;
    endTime: string;
    adminId: number;
    adminUsername: string;
}): Promise<{
    daySchedules: {
        id: number;
        sessionVersionId: number;
        isoWeekday: number;
        isEnabled: boolean;
        startTime: Date;
        endTime: Date;
    }[];
    session: {
        id: number;
        key: string;
        disabledAt: Date | null;
        disabledByAdminId: number | null;
        disabledByAdminUsername: string | null;
        enabledFrom: Date | null;
        deletedAt: Date | null;
        createdAt: Date;
    };
} & {
    id: number;
    sessionId: number;
    name: string;
    sortOrder: number;
    isActive: boolean;
    effectiveFrom: Date;
    startTime: Date | null;
    endTime: Date | null;
    createdByAdminId: number | null;
    createdByAdminUsername: string | null;
    createdAt: Date;
}>;
export declare function disableSession(input: {
    key: string;
    adminId: number;
    adminUsername: string;
}): Promise<{
    id: number;
    sessionId: number;
    name: string;
    sortOrder: number;
    isActive: boolean;
    effectiveFrom: Date;
    startTime: Date | null;
    endTime: Date | null;
    createdByAdminId: number | null;
    createdByAdminUsername: string | null;
    createdAt: Date;
    isEnabled: boolean;
    disabledAt: Date;
    daySchedules: {
        id: number;
        sessionVersionId: number;
        isoWeekday: number;
        isEnabled: boolean;
        startTime: Date;
        endTime: Date;
    }[];
}>;
export declare function archiveSession(input: {
    key: string;
    adminId: number;
}): Promise<{
    id: number;
    key: string;
    isEnabled: boolean;
    deletedAt: Date;
    alreadyArchived: boolean;
}>;
export declare function deleteSessionPermanently(input: {
    key: string;
    adminId: number;
}): Promise<{
    id: number;
    key: string;
    deleted: true;
    correctionsDeleted: number;
    attendancesDeleted: number;
    schedulesDeleted: number;
    versionsDeleted: number;
}>;
export declare function correctAttendance(input: {
    nik: string;
    key: string;
    date: Date;
    newStatus: "Hadir" | "Tidak Hadir";
    reason: string;
    adminId: number;
    adminUsername: string;
}): Promise<{
    id: number;
    nik: string;
    attendanceDate: Date;
    sessionId: number;
    sessionVersionId: number | null;
    attendanceId: number | null;
    revision: number;
    previousStatus: string;
    newStatus: string;
    reason: string;
    correctedByAdminId: number;
    correctedByAdminUsername: string;
    correctedAt: Date;
}>;
export declare function listAttendanceCorrections(input: {
    nik: string;
    key: string;
    date: Date;
}): Promise<{
    attendanceDate: Date;
    attendanceId: number | null;
    correctedAt: Date;
    correctedByAdminId: number;
    correctedByAdminUsername: string;
    id: number;
    newStatus: string;
    nik: string;
    previousStatus: string;
    reason: string;
    revision: number;
    sessionId: number;
    sessionVersionId: number | null;
}[] | null>;
export {};
