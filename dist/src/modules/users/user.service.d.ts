type UserSessionState = {
    revokedAt: Date | null;
    expiresAt: Date | null;
    device: {
        status: string;
        user: {
            isActive: boolean;
        };
    };
};
export declare function isUserSessionValid(session: UserSessionState, now?: Date): boolean;
export declare function validateUserSession(token: string): Promise<{
    session: {
        device: {
            user: {
                isActive: boolean;
                namaLengkap: string;
                nik: string;
            };
        } & {
            id: number;
            nik: string;
            deviceUuid: string | null;
            status: import("../../../generated/prisma/enums.js").DeviceStatus;
            deviceName: string | null;
            enrollmentCodeHash: string | null;
            enrollmentExpiresAt: Date | null;
            enrollmentUsedAt: Date | null;
            registeredByAdminId: number | null;
            registeredAt: Date | null;
            activatedAt: Date | null;
            lastUsedAt: Date | null;
            revokedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: number;
        deviceId: number;
        tokenHash: string;
        ipAddress: string | null;
        userAgent: string | null;
        expiresAt: Date | null;
        lastUsedAt: Date | null;
        revokedAt: Date | null;
        createdAt: Date;
    };
    user: {
        isActive: boolean;
        namaLengkap: string;
        nik: string;
    };
} | null>;
export declare function updateUserSessionLastUsed(sessionId: number, now?: Date): Promise<boolean>;
export {};
