import {
  randomBytes,
  randomUUID,
  createHash,
  timingSafeEqual,
} from "node:crypto";

import { prisma } from "../../config/database.js";

const ENROLLMENT_DURATION = 10 * 60 * 1000;

function hashEnrollmentCode(code: string): string {
  return createHash("sha256").update(code).digest("hex");
}

function hashSessionToken(token: string): string {
  return createHash("sha256").update(token).digest("hex");
}

export async function createEnrollmentCode(nik: string, adminId: number) {
  const normalizedNik = nik.trim();
  if (!normalizedNik) throw new Error("USER_NOT_FOUND");

  const code = randomBytes(8).toString("hex").toUpperCase();
  const codeHash = hashEnrollmentCode(code);
  const now = new Date();
  const expiresAt = new Date(now.getTime() + ENROLLMENT_DURATION);

  const device = await prisma.$transaction(async (tx) => {
    const lockedUsers = await tx.$queryRaw<Array<{ nik: string; is_active: boolean }>>`
      SELECT nik, is_active FROM users WHERE nik = ${normalizedNik} FOR UPDATE
    `;
    if (lockedUsers.length === 0) throw new Error("USER_NOT_FOUND");
    if (!lockedUsers[0].is_active) throw new Error("USER_INACTIVE");

    const existingDevice = await tx.userDevice.findUnique({ where: { nik: normalizedNik } });
    if (existingDevice?.status === "active") throw new Error("DEVICE_ALREADY_ACTIVE");

    if (existingDevice) {
      const replacingDevice =
        existingDevice.status === "revoked" || existingDevice.deviceUuid !== null;
      const revokedSessions = await tx.userSession.updateMany({
        where: { deviceId: existingDevice.id, revokedAt: null },
        data: { revokedAt: now },
      });
      if (revokedSessions.count > 0) {
        await tx.securityAuditLog.create({
          data: {
            action: "session_revoked",
            nik: normalizedNik,
            adminId,
            deviceId: existingDevice.id,
          },
        });
      }

      const updatedDevice = await tx.userDevice.update({
        where: { nik: normalizedNik },
        data: {
          deviceUuid: null,
          status: "pending",
          deviceName: null,
          enrollmentCodeHash: codeHash,
          enrollmentExpiresAt: expiresAt,
          enrollmentUsedAt: null,
          registeredByAdminId: adminId,
          registeredAt: now,
          activatedAt: null,
          revokedAt: null,
        },
      });

      if (replacingDevice) {
        await tx.securityAuditLog.create({
          data: {
            action: "device_replacement_authorized",
            nik: normalizedNik,
            adminId,
            deviceId: updatedDevice.id,
          },
        });
      }
      await tx.deviceSessionRecovery.updateMany({
        where: { deviceId: existingDevice.id, usedAt: null, invalidatedAt: null },
        data: { invalidatedAt: now },
      });

      await tx.securityAuditLog.create({
        data: {
          action: "enrollment_code_issued",
          nik: normalizedNik,
          adminId,
          deviceId: updatedDevice.id,
        },
      });
      return updatedDevice;
    }

    const createdDevice = await tx.userDevice.create({
      data: {
        nik: normalizedNik,
        status: "pending",
        enrollmentCodeHash: codeHash,
        enrollmentExpiresAt: expiresAt,
        registeredByAdminId: adminId,
        registeredAt: now,
      },
    });
    await tx.securityAuditLog.create({
      data: {
        action: "enrollment_code_issued",
        nik: normalizedNik,
        adminId,
        deviceId: createdDevice.id,
      },
    });
    return createdDevice;
  });

  return { code, expiresAt, deviceId: device.id };
}

export async function activateDevice(
  nik: string,
  enrollmentCode: string,
  deviceName?: string,
  ipAddress?: string,
  userAgent?: string,
) {
  const normalizedNik = nik.trim();
  const normalizedCode = enrollmentCode.trim().toUpperCase();
  if (!normalizedNik || !normalizedCode) throw new Error("ENROLLMENT_INVALID");

  const submittedHash = hashEnrollmentCode(normalizedCode);
  const deviceUuid = randomUUID();
  const sessionToken = randomBytes(32).toString("hex");
  const tokenHash = hashSessionToken(sessionToken);
  const now = new Date();

  const result = await prisma.$transaction(async (tx) => {
    // Lock the employee row first, matching createEnrollmentCode's lock order.
    const lockedUsers = await tx.$queryRawUnsafe<Array<{ nik: string; is_active: boolean }>>(
      "SELECT nik, is_active FROM users WHERE nik = $1 FOR UPDATE",
      normalizedNik,
    );
    if (lockedUsers.length === 0) throw new Error("ENROLLMENT_INVALID");
    if (!lockedUsers[0].is_active) throw new Error("USER_INACTIVE");

    const devices = await tx.$queryRaw<Array<{
      id: number;
      nik: string;
      status: string;
      enrollment_code_hash: string | null;
      enrollment_expires_at: Date | null;
      enrollment_used_at: Date | null;
      registered_by_admin_id: number | null;
    }>>`
      SELECT id, nik, status, enrollment_code_hash, enrollment_expires_at, enrollment_used_at, registered_by_admin_id
      FROM user_devices
      WHERE nik = ${normalizedNik}
      FOR UPDATE
    `;

    const device = devices[0];
    if (
      !device ||
      device.status !== "pending" ||
      !device.enrollment_code_hash ||
      !device.enrollment_expires_at ||
      device.enrollment_used_at
    ) {
      throw new Error("ENROLLMENT_INVALID");
    }
    if (device.enrollment_expires_at <= now) throw new Error("ENROLLMENT_EXPIRED");

    const storedHash = Buffer.from(device.enrollment_code_hash, "hex");
    const submittedHashBuffer = Buffer.from(submittedHash, "hex");
    if (
      storedHash.length !== submittedHashBuffer.length ||
      !timingSafeEqual(storedHash, submittedHashBuffer)
    ) {
      throw new Error("ENROLLMENT_INVALID");
    }

    const updatedDevice = await tx.userDevice.update({
      where: { id: device.id },
      data: {
        deviceUuid,
        deviceName: deviceName?.trim() || null,
        status: "active",
        enrollmentCodeHash: null,
        enrollmentExpiresAt: null,
        enrollmentUsedAt: now,
        activatedAt: now,
        lastUsedAt: now,
        revokedAt: null,
      },
    });

    const session = await tx.userSession.create({
      data: { deviceId: device.id, tokenHash, ipAddress, userAgent, expiresAt: null },
      select: { expiresAt: true },
    });

    await tx.securityAuditLog.create({
      data: {
        action: "device_activated",
        nik: normalizedNik,
        adminId: device.registered_by_admin_id,
        deviceId: device.id,
      },
    });

    return { device: updatedDevice, sessions: [session] };
  });

  return {
    sessionToken,
    device: {
      id: result.device.id,
      nik: result.device.nik,
      deviceUuid: result.device.deviceUuid,
      deviceName: result.device.deviceName,
      status: result.device.status,
      activatedAt: result.device.activatedAt,
      sessions: result.sessions,
    },
    expiresAt: null,
  };
}
