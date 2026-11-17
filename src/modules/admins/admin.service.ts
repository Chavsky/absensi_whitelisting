import bcrypt from "bcryptjs";
import { prisma } from "../../config/database.js";
import type { Prisma } from "../../../generated/prisma/client.js";

const BCRYPT_ROUNDS = 12;

const adminSelection = {
  id: true,
  username: true,
  namaLengkap: true,
  isActive: true,
  createdAt: true,
} as const;

export class AdminNotFoundError extends Error {
  constructor() { super("ADMIN_NOT_FOUND"); this.name = "AdminNotFoundError"; }
}
export class AdminAlreadyExistsError extends Error {
  constructor() { super("ADMIN_ALREADY_EXISTS"); this.name = "AdminAlreadyExistsError"; }
}
export class AdminForbiddenError extends Error {
  constructor() { super("ADMIN_FORBIDDEN"); this.name = "AdminForbiddenError"; }
}
export class LastActiveAdminError extends Error {
  constructor() { super("LAST_ACTIVE_ADMIN"); this.name = "LastActiveAdminError"; }
}
export class CurrentPasswordInvalidError extends Error {
  constructor() { super("CURRENT_PASSWORD_INVALID"); this.name = "CurrentPasswordInvalidError"; }
}

function isPrismaCode(error: unknown, code: string): boolean {
  return typeof error === "object" && error !== null && "code" in error && error.code === code;
}

export async function listAdmins(options: {
  page: number;
  limit: number;
  search?: string;
  isActive?: boolean;
}) {
  const where = {
    ...(options.isActive === undefined ? {} : { isActive: options.isActive }),
    ...(options.search
      ? { OR: [
          { username: { contains: options.search, mode: "insensitive" as const } },
          { namaLengkap: { contains: options.search, mode: "insensitive" as const } },
        ] }
      : {}),
  };
  const [data, total] = await prisma.$transaction([
    prisma.admin.findMany({
      where,
      orderBy: [{ namaLengkap: "asc" }, { id: "asc" }],
      skip: (options.page - 1) * options.limit,
      take: options.limit,
      select: adminSelection,
    }),
    prisma.admin.count({ where }),
  ]);
  return {
    data,
    pagination: { page: options.page, limit: options.limit, total, totalPages: Math.ceil(total / options.limit) },
  };
}

export async function getAdmin(id: number) {
  const admin = await prisma.admin.findUnique({
    where: { id },
    select: {
      ...adminSelection,
      sessions: {
        select: { createdAt: true, expiresAt: true, lastUsedAt: true, revokedAt: true },
        orderBy: { createdAt: "desc" },
        take: 20,
      },
    },
  });
  if (!admin) return null;
  const now = new Date();
  return {
    id: admin.id,
    username: admin.username,
    namaLengkap: admin.namaLengkap,
    isActive: admin.isActive,
    createdAt: admin.createdAt,
    sessions: {
      activeCount: admin.sessions.filter((session) => !session.revokedAt && session.expiresAt > now).length,
      recent: admin.sessions.map((session) => ({
        createdAt: session.createdAt,
        expiresAt: session.expiresAt,
        lastUsedAt: session.lastUsedAt,
        revokedAt: session.revokedAt,
        isValid: !session.revokedAt && session.expiresAt > now && admin.isActive,
      })),
    },
  };
}

export async function createAdmin(input: { username: string; password: string; namaLengkap: string }) {
  const passwordHash = await bcrypt.hash(input.password, BCRYPT_ROUNDS);
  try {
    return await prisma.admin.create({
      data: {
        username: input.username,
        password: passwordHash,
        namaLengkap: input.namaLengkap,
        isActive: true,
      },
      select: adminSelection,
    });
  } catch (error) {
    if (isPrismaCode(error, "P2002")) throw new AdminAlreadyExistsError();
    throw error;
  }
}

async function lockActiveAdmins(tx: Prisma.TransactionClient) {
  await tx.$queryRaw<Array<{ id: number }>>`
    SELECT id FROM admins WHERE is_active = TRUE ORDER BY id FOR UPDATE
  `;
}

export async function updateAdmin(id: number, updates: { username?: string; namaLengkap?: string }) {
  try {
    return await prisma.$transaction(async (tx) => {
      const updated = await tx.admin.update({ where: { id }, data: updates, select: adminSelection });
      if (updates.username !== undefined) {
        await tx.adminSession.updateMany({ where: { adminId: id, revokedAt: null }, data: { revokedAt: new Date() } });
      }
      return updated;
    });
  } catch (error) {
    if (isPrismaCode(error, "P2002")) throw new AdminAlreadyExistsError();
    if (isPrismaCode(error, "P2025")) throw new AdminNotFoundError();
    throw error;
  }
}

export async function setAdminStatus(id: number, isActive: boolean, actorId: number) {
  if (!isActive && id === actorId) throw new AdminForbiddenError();

  return prisma.$transaction(async (tx) => {
    // Lock every currently active admin in a stable order so concurrent
    // requests cannot deactivate the final accounts simultaneously.
    await lockActiveAdmins(tx);
    const target = await tx.admin.findUnique({ where: { id }, select: { id: true, isActive: true } });
    if (!target) throw new AdminNotFoundError();

    if (!isActive && target.isActive) {
      const activeAdminCount = await tx.admin.count({ where: { isActive: true } });
      if (activeAdminCount <= 1) throw new LastActiveAdminError();
    }

    const updated = await tx.admin.update({ where: { id }, data: { isActive }, select: adminSelection });
    if (!isActive) {
      await tx.adminSession.updateMany({ where: { adminId: id, revokedAt: null }, data: { revokedAt: new Date() } });
    }
    return updated;
  });
}

export async function changeAdminPassword(input: {
  targetId: number;
  actorId: number;
  currentPassword?: string;
  newPassword: string;
}) {
  const self = input.targetId === input.actorId;
  const target = await prisma.admin.findUnique({ where: { id: input.targetId } });
  if (!target) throw new AdminNotFoundError();
  if (self && (!input.currentPassword || !(await bcrypt.compare(input.currentPassword, target.password)))) {
    throw new CurrentPasswordInvalidError();
  }

  const passwordHash = await bcrypt.hash(input.newPassword, BCRYPT_ROUNDS);
  await prisma.$transaction([
    prisma.admin.update({ where: { id: input.targetId }, data: { password: passwordHash } }),
    prisma.adminSession.updateMany({
      where: { adminId: input.targetId, revokedAt: null },
      data: { revokedAt: new Date() },
    }),
  ]);
}
