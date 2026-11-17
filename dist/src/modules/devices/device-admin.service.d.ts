export declare function revokeEmployeeSession(nik: string, adminId: number): Promise<{
    nik: string;
    revokedAt: Date;
}>;
export declare function revokeEmployeeDevice(nik: string, adminId: number): Promise<{
    id: number;
    nik: string;
    revokedAt: Date | null;
    status: import("../../../generated/prisma/enums.js").DeviceStatus;
}>;
