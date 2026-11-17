import { prisma } from "../../config/database.js";

const employeeSelection = {
  nik: true,
  namaLengkap: true,
  isActive: true,
  createdAt: true,
  device: {
    select: {
      status: true,
      deviceName: true,
      activatedAt: true,
      lastUsedAt: true,
      revokedAt: true,
    },
  },
} as const;

export class EmployeeAlreadyExistsError extends Error {
  constructor() {
    super("EMPLOYEE_ALREADY_EXISTS");
    this.name = "EmployeeAlreadyExistsError";
  }
}

export class EmployeeNotFoundError extends Error {
  constructor() {
    super("EMPLOYEE_NOT_FOUND");
    this.name = "EmployeeNotFoundError";
  }
}

function isPrismaCode(error: unknown, code: string): boolean {
  return typeof error === "object" && error !== null && "code" in error && error.code === code;
}

export async function listEmployees(options: {
  page: number;
  limit: number;
  search?: string;
  isActive?: boolean;
}) {
  const where = {
    ...(options.isActive === undefined ? {} : { isActive: options.isActive }),
    ...(options.search
      ? {
          OR: [
            { nik: { contains: options.search, mode: "insensitive" as const } },
            { namaLengkap: { contains: options.search, mode: "insensitive" as const } },
          ],
        }
      : {}),
  };

  const [data, total] = await prisma.$transaction([
    prisma.user.findMany({
      where,
      orderBy: [{ namaLengkap: "asc" }, { nik: "asc" }],
      skip: (options.page - 1) * options.limit,
      take: options.limit,
      select: employeeSelection,
    }),
    prisma.user.count({ where }),
  ]);

  return {
    data,
    pagination: {
      page: options.page,
      limit: options.limit,
      total,
      totalPages: Math.ceil(total / options.limit),
    },
  };
}

export function getEmployee(nik: string) {
  return prisma.user.findUnique({
    where: { nik },
    select: employeeSelection,
  });
}

export async function createEmployee(nik: string, namaLengkap: string) {
  try {
    return await prisma.user.create({
      data: { nik, namaLengkap, isActive: true },
      select: employeeSelection,
    });
  } catch (error) {
    if (isPrismaCode(error, "P2002")) throw new EmployeeAlreadyExistsError();
    throw error;
  }
}

export async function updateEmployeeName(nik: string, namaLengkap: string) {
  try {
    return await prisma.user.update({
      where: { nik },
      data: { namaLengkap },
      select: employeeSelection,
    });
  } catch (error) {
    if (isPrismaCode(error, "P2025")) throw new EmployeeNotFoundError();
    throw error;
  }
}

export async function setEmployeeActiveStatus(nik: string, isActive: boolean, adminId: number) {
  return prisma.$transaction(async (tx) => {
    const lockedUsers = await tx.$queryRaw<Array<{ nik: string }>>`
      SELECT nik FROM users WHERE nik = ${nik} FOR UPDATE
    `;
    if (lockedUsers.length === 0) throw new EmployeeNotFoundError();

    const employee = await tx.user.update({
      where: { nik },
      data: { isActive },
      select: {
        nik: true,
        namaLengkap: true,
        isActive: true,
      },
    });

    if (!isActive) {
      const device = await tx.userDevice.findUnique({
        where: { nik },
        select: { id: true },
      });

      if (device) {
        const now = new Date();
        await tx.userSession.updateMany({
          where: { deviceId: device.id, revokedAt: null },
          data: { revokedAt: now },
        });
        await tx.deviceSessionRecovery.updateMany({
          where: { deviceId: device.id, usedAt: null, invalidatedAt: null },
          data: { invalidatedAt: now },
        });
      }
      await tx.securityAuditLog.create({
        data: {
          action: "employee_deactivated",
          nik,
          adminId,
          deviceId: device?.id,
        },
      });
    }

    return employee;
  });
}
