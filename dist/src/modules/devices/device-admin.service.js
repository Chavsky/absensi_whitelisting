import { prisma } from "../../config/database.js";
async function lockUserAndDevice(nik, tx) {
    const users = await tx.$queryRaw `
    SELECT nik FROM users WHERE nik = ${nik} FOR UPDATE
  `;
    if (users.length === 0)
        throw new Error("USER_NOT_FOUND");
    const devices = await tx.$queryRaw `
    SELECT id FROM user_devices WHERE nik = ${nik} FOR UPDATE
  `;
    const deviceId = devices[0]?.id;
    if (!deviceId)
        throw new Error("DEVICE_NOT_FOUND");
    return deviceId;
}
export async function revokeEmployeeSession(nik, adminId) {
    const now = new Date();
    return prisma.$transaction(async (tx) => {
        const deviceId = await lockUserAndDevice(nik, tx);
        const revoked = await tx.userSession.updateMany({
            where: { deviceId, revokedAt: null },
            data: { revokedAt: now },
        });
        if (revoked.count === 0)
            throw new Error("SESSION_NOT_FOUND");
        await tx.securityAuditLog.create({
            data: { action: "session_revoked", nik, adminId, deviceId },
        });
        return { nik, revokedAt: now };
    });
}
export async function revokeEmployeeDevice(nik, adminId) {
    const now = new Date();
    return prisma.$transaction(async (tx) => {
        const deviceId = await lockUserAndDevice(nik, tx);
        const device = await tx.userDevice.update({
            where: { id: deviceId },
            data: {
                status: "revoked",
                revokedAt: now,
                enrollmentCodeHash: null,
                enrollmentExpiresAt: null,
                enrollmentUsedAt: null,
            },
            select: { id: true, nik: true, status: true, revokedAt: true },
        });
        await tx.userSession.updateMany({
            where: { deviceId, revokedAt: null },
            data: { revokedAt: now },
        });
        await tx.deviceSessionRecovery.updateMany({
            where: { deviceId, usedAt: null, invalidatedAt: null },
            data: { invalidatedAt: now },
        });
        await tx.securityAuditLog.create({
            data: { action: "device_revoked", nik, adminId, deviceId },
        });
        return device;
    });
}
//# sourceMappingURL=device-admin.service.js.map