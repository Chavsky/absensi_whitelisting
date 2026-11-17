export declare class EmployeeAlreadyExistsError extends Error {
    constructor();
}
export declare class EmployeeNotFoundError extends Error {
    constructor();
}
export declare function listEmployees(options: {
    page: number;
    limit: number;
    search?: string;
    isActive?: boolean;
}): Promise<{
    data: {
        createdAt: Date;
        device: {
            activatedAt: Date | null;
            deviceName: string | null;
            lastUsedAt: Date | null;
            revokedAt: Date | null;
            status: import("../../../generated/prisma/enums.js").DeviceStatus;
        } | null;
        isActive: boolean;
        namaLengkap: string;
        nik: string;
    }[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}>;
export declare function getEmployee(nik: string): import("../../../generated/prisma/models.js").Prisma__UserClient<{
    createdAt: Date;
    device: {
        activatedAt: Date | null;
        deviceName: string | null;
        lastUsedAt: Date | null;
        revokedAt: Date | null;
        status: import("../../../generated/prisma/enums.js").DeviceStatus;
    } | null;
    isActive: boolean;
    namaLengkap: string;
    nik: string;
} | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
    omit: import("../../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
}>;
export declare function createEmployee(nik: string, namaLengkap: string): Promise<{
    createdAt: Date;
    device: {
        activatedAt: Date | null;
        deviceName: string | null;
        lastUsedAt: Date | null;
        revokedAt: Date | null;
        status: import("../../../generated/prisma/enums.js").DeviceStatus;
    } | null;
    isActive: boolean;
    namaLengkap: string;
    nik: string;
}>;
export declare function updateEmployeeName(nik: string, namaLengkap: string): Promise<{
    createdAt: Date;
    device: {
        activatedAt: Date | null;
        deviceName: string | null;
        lastUsedAt: Date | null;
        revokedAt: Date | null;
        status: import("../../../generated/prisma/enums.js").DeviceStatus;
    } | null;
    isActive: boolean;
    namaLengkap: string;
    nik: string;
}>;
export declare function setEmployeeActiveStatus(nik: string, isActive: boolean, adminId: number): Promise<{
    isActive: boolean;
    namaLengkap: string;
    nik: string;
}>;
