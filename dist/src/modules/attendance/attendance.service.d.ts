import type { JakartaBusinessDateRange } from "./attendance-date.js";
export declare class DuplicateAttendanceError extends Error {
    constructor();
}
export declare class AttendanceScheduleError extends Error {
    constructor(message: "SESSION_NOT_FOUND" | "SESSION_INACTIVE" | "SESSION_NOT_SCHEDULED" | "OUTSIDE_ATTENDANCE_WINDOW");
}
export declare function createAttendance(nik: string, sessionKey: string): Promise<{
    id: number;
    sesi: string | null;
    session: {
        key: string;
    };
    sessionNameSnapshot: string;
    status: string;
}>;
export declare function getTodayAttendance(nik: string, now?: Date): Promise<{
    sessionId: number;
    key: string;
    name: string;
    sortOrder: number;
    startTime: string;
    endTime: string;
    isEnabled: boolean;
    status: string | null;
    finalized: boolean;
    canAttend: boolean;
    waktuAbsen: Date | null;
    id?: number | undefined;
}[]>;
export declare function getAttendanceHistory(nik: string, page: number, limit: number, dateRange?: JakartaBusinessDateRange): Promise<{
    data: {
        sessionKey: string;
        sessionName: string;
        id: number;
        sesi: string | null;
        status: string;
        tanggal: Date;
        waktuAbsen: Date;
    }[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}>;
