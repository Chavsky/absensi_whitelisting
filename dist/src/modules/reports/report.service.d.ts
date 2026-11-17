export type ReportSession = string;
export interface ReportPeriod {
    startDate: Date;
    endDate: Date;
    search?: string;
    sesi?: ReportSession;
}
export declare function parseBusinessDate(value: string): Date | null;
export declare function formatBusinessDate(date: Date): string;
export declare function getDailyAttendanceReport(input: {
    date: Date;
    page: number;
    limit: number;
    search?: string;
    sesi?: ReportSession;
    now?: Date;
}): Promise<{
    data: ({
        nik: string;
        namaLengkap: string;
        tanggal: string;
        isActive: boolean;
        statusKaryawan: string;
        sesi: string;
        sessionKey: string;
        sessionName: string;
        waktuAbsen: Date | null;
        statusAbsensi: "Hadir" | "Tidak Hadir" | null;
        finalized: boolean;
        attendanceId?: number | undefined;
        correctionId?: number | undefined;
    } | {
        nik: string;
        namaLengkap: string;
        tanggal: string;
        isActive: boolean;
        statusKaryawan: string;
        sesi: string;
        sessionKey: string;
        sessionName: string;
        waktuAbsen: Date;
        statusAbsensi: string;
        finalized: boolean;
        scheduleKnown: boolean;
        attendanceId: number;
        correctionId?: number | undefined;
    })[];
    statusScope: string;
    statusDefinition: {
        Hadir: string;
        TidakHadir: string;
        pending: string;
        legacy: string;
    };
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
        unit: string;
    };
}>;
export declare function getAttendancePeriodReport(input: ReportPeriod & {
    page: number;
    limit: number;
}): Promise<{
    data: {
        id: number;
        nik: string;
        namaLengkap: string;
        tanggal: string;
        isActive: boolean;
        statusKaryawan: string;
        sesi: string;
        sessionKey: string;
        sessionName: string;
        waktuAbsen: Date;
        statusAbsensi: string;
    }[];
    statusScope: string;
    statusDefinition: string;
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}>;
export declare function getAttendanceSummary(input: ReportPeriod & {
    page: number;
    limit: number;
}): Promise<{
    data: {
        nik: string;
        namaLengkap: string;
        isActive: boolean;
        statusKaryawan: string;
        totalRecordAbsensi: number;
        sessions: {
            key: string;
            jumlahHadir: number;
            jumlahTidakHadir: number;
        }[];
    }[];
    statusScope: string;
    statusDefinition: string;
    definition: {
        totalRecordAbsensi: string;
        jumlahHadir: string;
        jumlahTidakHadir: string;
    };
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
        unit: string;
    };
}>;
export declare function getEmployeeAttendanceHistory(input: ReportPeriod & {
    nik: string;
    page: number;
    limit: number;
}): Promise<{
    employee: {
        statusKaryawan: string;
        isActive: boolean;
        namaLengkap: string;
        nik: string;
    };
    data: {
        id: number;
        tanggal: string;
        sesi: string;
        sessionKey: string;
        sessionName: string;
        waktuAbsen: Date;
        status: string;
    }[];
    statusScope: string;
    statusDefinition: string;
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
} | null>;
export declare function getAttendanceStatistics(input: ReportPeriod): Promise<{
    periode: {
        startDate: string;
        endDate: string;
    };
    metrics: {
        totalKaryawanTerdaftar: number;
        totalKaryawanAktif: number;
        totalKaryawanNonaktif: number;
        totalRecordAbsensi: number;
        recordPerSesi: {
            key: string;
            count: number;
        }[];
        karyawanDenganRecordDalamPeriode: number;
        karyawanTanpaRecordDalamPeriode: number;
    };
    statusScope: string;
    definition: {
        totalKaryawanTerdaftar: string;
        totalKaryawanAktif: string;
        totalKaryawanNonaktif: string;
        totalRecordAbsensi: string;
        recordPerSesi: string;
        karyawanDenganRecordDalamPeriode: string;
        karyawanTanpaRecordDalamPeriode: string;
    };
}>;
export declare function iterateAttendanceExport(input: ReportPeriod, batchSize?: number): AsyncGenerator<{
    id: number | null;
    nik: string;
    tanggal: Date;
    sesi: string;
    sessionNameSnapshot: string;
    waktuAbsen: Date | null;
    status: string;
    user: {
        namaLengkap: string;
        isActive: boolean;
    };
}, void, unknown>;
