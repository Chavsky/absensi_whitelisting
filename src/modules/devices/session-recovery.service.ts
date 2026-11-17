import {
  createHash,
  randomBytes,
  timingSafeEqual,
} from "node:crypto";
import { prisma } from "../../config/database.js";

const RECOVERY_CODE_DURATION_MS = 10 * 60 * 1000;

function hash(value: string): string {
  return createHash("sha256").update(value).digest("hex");
}

function assertMatchingHash(storedHash: string, submittedHash: string) {
  const stored = Buffer.from(storedHash, "hex");
  const submitted = Buffer.from(submittedHash, "hex");
  return stored.length === submitted.length && timingSafeEqual(stored, submitted);
}

export async function createSessionRecoveryCode(nik: string, adminId: number) {
  const code = randomBytes(16).toString("hex").toUpperCase();
  const codeHash = hash(code);
  const now = new Date();
  const expiresAt = new Date(now.getTime() + RECOVERY_CODE_DURATION_MS);

  const device = await prisma.$transaction(async (tx) => {
    const lockedUser = await tx.$queryRaw<Array<{ nik: string; is_active: boolean }>>`
      SELECT nik, is_active FROM users WHERE nik = ${nik} FOR UPDATE
    `;
    if (lockedUser.length === 0 || !lockedUser[0].is_active) {
      throw new Error("RECOVERY_DEVICE_UNAVAILABLE");
    }

    const lockedDevice = await tx.$queryRaw<Array<{ id: number }>>`
      SELECT id FROM user_devices WHERE nik = ${nik} FOR UPDATE
    `;
    const deviceId = lockedDevice[0]?.id;
    if (!deviceId) throw new Error("RECOVERY_DEVICE_UNAVAILABLE");

    const activeDevice = await tx.userDevice.findUnique({
      where: { id: deviceId },
      select: { id: true, status: true, deviceUuid: true },
    });
    if (!activeDevice || activeDevice.status !== "active" || !activeDevice.deviceUuid) {
      throw new Error("RECOVERY_DEVICE_UNAVAILABLE");
    }

    // Keep only one outstanding recovery code per device.
    await tx.deviceSessionRecovery.updateMany({
      where: { deviceId, usedAt: null, invalidatedAt: null },
      data: { invalidatedAt: now },
    });

    await tx.deviceSessionRecovery.create({
      data: { deviceId, codeHash, expiresAt, createdByAdminId: adminId },
    });
    await tx.securityAuditLog.create({
      data: {
        action: "session_recovery_code_issued",
        nik,
        adminId,
        deviceId,
      },
    });
    return activeDevice;
  });

  return { code, expiresAt, deviceId: device.id };
}

export async function redeemSessionRecoveryCode(
  nik: string,
  submittedCode: string,
  ipAddress?: string,
  userAgent?: string,
) {
  const normalizedCode = submittedCode.trim().toUpperCase();
  const submittedHash = hash(normalizedCode);
  const now = new Date();
  const token = randomBytes(32).toString("hex");
  const tokenHash = hash(token);

  const result = await prisma.$transaction(async (tx) => {
    const lockedUser = await tx.$queryRaw<Array<{ nik: string; is_active: boolean }>>`
      SELECT nik, is_active FROM users WHERE nik = ${nik} FOR UPDATE
    `;
    if (lockedUser.length === 0 || !lockedUser[0].is_active) {
      throw new Error("RECOVERY_INVALID");
    }

    const lockedDevice = await tx.$queryRaw<Array<{ id: number }>>`
      SELECT id FROM user_devices WHERE nik = ${nik} FOR UPDATE
    `;
    const deviceId = lockedDevice[0]?.id;
    if (!deviceId) throw new Error("RECOVERY_INVALID");

    const device = await tx.userDevice.findUnique({
      where: { id: deviceId },
      select: { id: true, status: true },
    });
    if (!device || device.status !== "active") throw new Error("RECOVERY_INVALID");

    const recovery = await tx.deviceSessionRecovery.findFirst({
      where: { deviceId, usedAt: null, invalidatedAt: null },
    });
    if (!recovery) throw new Error("RECOVERY_INVALID");

    await tx.$queryRaw<Array<{ id: number }>>`
      SELECT id FROM device_session_recoveries WHERE id = ${recovery.id} FOR UPDATE
    `;

    if (
      recovery.usedAt !== null ||
      recovery.invalidatedAt !== null ||
      recovery.expiresAt <= now ||
      !assertMatchingHash(recovery.codeHash, submittedHash)
    ) {
      throw new Error("RECOVERY_INVALID");
    }

    const consumed = await tx.deviceSessionRecovery.updateMany({
      where: {
        id: recovery.id,
        usedAt: null,
        invalidatedAt: null,
        expiresAt: { gt: now },
      },
      data: { usedAt: now },
    });
    if (consumed.count !== 1) throw new Error("RECOVERY_INVALID");

    await tx.userSession.updateMany({
      where: { deviceId, revokedAt: null },
      data: { revokedAt: now },
    });

    const session = await tx.userSession.create({
      data: {
        deviceId,
        tokenHash,
        ipAddress,
        userAgent,
        expiresAt: null,
      },
      select: { id: true },
    });

    await tx.securityAuditLog.create({
      data: {
        action: "session_recovered",
        nik,
        deviceId,
      },
    });

    return { sessionId: session.id };
  });

  return { token, expiresAt: null, sessionId: result.sessionId };
}
