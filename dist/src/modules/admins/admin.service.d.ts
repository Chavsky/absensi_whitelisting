export declare class AdminNotFoundError extends Error {
    constructor();
}
export declare class AdminAlreadyExistsError extends Error {
    constructor();
}
export declare class AdminForbiddenError extends Error {
    constructor();
}
export declare class LastActiveAdminError extends Error {
    constructor();
}
export declare class CurrentPasswordInvalidError extends Error {
    constructor();
}
export declare function listAdmins(options: {
    page: number;
    limit: number;
    search?: string;
    isActive?: boolean;
}): Promise<{
    data: {
        createdAt: Date;
        id: number;
        isActive: boolean;
        namaLengkap: string;
        username: string;
    }[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}>;
export declare function getAdmin(id: number): Promise<{
    id: number;
    username: string;
    namaLengkap: string;
    isActive: boolean;
    createdAt: Date;
    sessions: {
        activeCount: number;
        recent: {
            createdAt: Date;
            expiresAt: Date;
            lastUsedAt: Date | null;
            revokedAt: Date | null;
            isValid: boolean;
        }[];
    };
} | null>;
export declare function createAdmin(input: {
    username: string;
    password: string;
    namaLengkap: string;
}): Promise<{
    createdAt: Date;
    id: number;
    isActive: boolean;
    namaLengkap: string;
    username: string;
}>;
export declare function updateAdmin(id: number, updates: {
    username?: string;
    namaLengkap?: string;
}): Promise<{
    createdAt: Date;
    id: number;
    isActive: boolean;
    namaLengkap: string;
    username: string;
}>;
export declare function setAdminStatus(id: number, isActive: boolean, actorId: number): Promise<{
    createdAt: Date;
    id: number;
    isActive: boolean;
    namaLengkap: string;
    username: string;
}>;
export declare function changeAdminPassword(input: {
    targetId: number;
    actorId: number;
    currentPassword?: string;
    newPassword: string;
}): Promise<void>;
