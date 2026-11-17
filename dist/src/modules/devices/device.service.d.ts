export declare function createEnrollmentCode(nik: string, adminId: number): Promise<{
    code: string;
    expiresAt: Date;
    deviceId: number;
}>;
export declare function activateDevice(nik: string, enrollmentCode: string, deviceName?: string, ipAddress?: string, userAgent?: string): Promise<{
    sessionToken: string;
    device: {
        id: number;
        nik: string;
        deviceUuid: string | null;
        deviceName: string | null;
        status: import("../../../generated/prisma/enums.js").DeviceStatus;
        activatedAt: Date | null;
        sessions: {
            expiresAt: Date | null;
        }[];
    };
    expiresAt: null;
}>;
