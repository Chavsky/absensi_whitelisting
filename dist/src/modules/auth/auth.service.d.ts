export interface AdminTokenPayload {
    id: number;
    username: string;
    jti: string;
}
export declare function loginAdmin(username: string, password: string, ipAddress?: string, userAgent?: string): Promise<{
    token: string;
    admin: {
        id: number;
        username: string;
        namaLengkap: string;
    };
} | null>;
export declare function validateAdminSession(token: string): Promise<{
    session: {
        admin: {
            id: number;
            username: string;
            password: string;
            namaLengkap: string;
            isActive: boolean;
            createdAt: Date;
        };
    } & {
        id: number;
        adminId: number;
        tokenHash: string;
        ipAddress: string | null;
        userAgent: string | null;
        expiresAt: Date;
        lastUsedAt: Date | null;
        revokedAt: Date | null;
        createdAt: Date;
    };
    admin: {
        id: number;
        username: string;
        password: string;
        namaLengkap: string;
        isActive: boolean;
        createdAt: Date;
    };
} | null>;
export declare function revokeAdminSession(token: string): Promise<void>;
export declare function getAdminProfile(adminId: number): Promise<{
    createdAt: Date;
    id: number;
    isActive: boolean;
    namaLengkap: string;
    username: string;
} | null>;
