import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createHash, randomUUID } from "node:crypto";
import { prisma } from "../../config/database.js";
const JWT_SECRET = (() => {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error("JWT_SECRET belum dikonfigurasi.");
    }
    return secret;
})();
const SESSION_DURATION = 8 * 60 * 60 * 1000;
function hashToken(token) {
    return createHash("sha256")
        .update(token)
        .digest("hex");
}
export async function loginAdmin(username, password, ipAddress, userAgent) {
    const admin = await prisma.admin.findUnique({
        where: { username },
    });
    if (!admin) {
        return null;
    }
    if (!admin.isActive)
        return null;
    const passwordValid = await bcrypt.compare(password, admin.password);
    if (!passwordValid) {
        return null;
    }
    const sessionId = randomUUID();
    const payload = {
        id: admin.id,
        username: admin.username,
        jti: sessionId,
    };
    const token = jwt.sign(payload, JWT_SECRET, {
        expiresIn: "8h",
    });
    const tokenHash = hashToken(token);
    const expiresAt = new Date(Date.now() + SESSION_DURATION);
    await prisma.adminSession.create({
        data: {
            adminId: admin.id,
            tokenHash,
            ipAddress,
            userAgent,
            expiresAt,
        },
    });
    return {
        token,
        admin: {
            id: admin.id,
            username: admin.username,
            namaLengkap: admin.namaLengkap,
        },
    };
}
export async function validateAdminSession(token) {
    const tokenHash = hashToken(token);
    const session = await prisma.adminSession.findUnique({
        where: { tokenHash },
        include: {
            admin: true,
        },
    });
    if (!session ||
        session.revokedAt ||
        session.expiresAt <= new Date() ||
        !session.admin.isActive) {
        return null;
    }
    return {
        session,
        admin: session.admin,
    };
}
export async function revokeAdminSession(token) {
    const tokenHash = hashToken(token);
    await prisma.adminSession.updateMany({
        where: {
            tokenHash,
            revokedAt: null,
        },
        data: {
            revokedAt: new Date(),
        },
    });
}
export async function getAdminProfile(adminId) {
    return prisma.admin.findUnique({
        where: { id: adminId },
        select: {
            id: true,
            username: true,
            namaLengkap: true,
            isActive: true,
            createdAt: true,
        },
    });
}
//# sourceMappingURL=auth.service.js.map