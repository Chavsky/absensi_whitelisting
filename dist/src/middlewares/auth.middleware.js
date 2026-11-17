import jwt from "jsonwebtoken";
import { prisma } from "../config/database.js";
import { logSafeError } from "../utils/safe-error-logger.js";
import { ADMIN_SESSION_COOKIE_NAME, USER_SESSION_COOKIE_NAME, userSessionCookieOptions, } from "../config/session-cookies.js";
import { validateAdminSession, } from "../modules/auth/auth.service.js";
import { updateUserSessionLastUsed, validateUserSession, } from "../modules/users/user.service.js";
const JWT_SECRET = (() => {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error("JWT_SECRET belum dikonfigurasi.");
    }
    return secret;
})();
export async function authenticateAdmin(req, res, next) {
    const token = req.cookies?.[ADMIN_SESSION_COOKIE_NAME];
    if (!token || typeof token !== "string") {
        return res.status(401).json({
            success: false,
            message: "Silakan login terlebih dahulu.",
        });
    }
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        if (typeof decoded === "string") {
            return res.status(401).json({
                success: false,
                message: "Token tidak valid.",
            });
        }
        const payload = decoded;
        if (typeof payload.id !== "number" ||
            typeof payload.username !== "string" ||
            typeof payload.jti !== "string") {
            return res.status(401).json({
                success: false,
                message: "Token tidak valid.",
            });
        }
        const result = await validateAdminSession(token);
        if (!result ||
            result.admin.id !== payload.id ||
            result.admin.username !== payload.username) {
            return res.status(401).json({
                success: false,
                message: "Sesi sudah berakhir atau dicabut.",
            });
        }
        req.admin = {
            id: result.admin.id,
            username: result.admin.username,
        };
        await prisma.adminSession.update({
            where: {
                id: result.session.id,
            },
            data: {
                lastUsedAt: new Date(),
            },
        });
        next();
    }
    catch (error) {
        logSafeError("AUTH MIDDLEWARE", error);
        return res.status(401).json({
            success: false,
            message: "Sesi tidak valid atau sudah kedaluwarsa.",
        });
    }
}
export function createUserAuthenticator(validateSession = validateUserSession, updateLastUsed = updateUserSessionLastUsed) {
    return async function authenticateUser(req, res, next) {
        const token = req.cookies?.[USER_SESSION_COOKIE_NAME];
        if (!token || typeof token !== "string") {
            return res.status(401).json({
                success: false,
                message: "Silakan login terlebih dahulu.",
            });
        }
        try {
            const result = await validateSession(token);
            if (!result) {
                return res.status(401).json({
                    success: false,
                    message: "Sesi tidak valid, sudah berakhir, atau dicabut.",
                });
            }
            req.user = {
                nik: result.user.nik,
                namaLengkap: result.user.namaLengkap,
                sessionId: result.session.id,
            };
            const now = new Date();
            if (!result.session.lastUsedAt ||
                now.getTime() - result.session.lastUsedAt.getTime() >= 5 * 60 * 1000) {
                const stillAuthorized = await updateLastUsed(result.session.id, now);
                if (!stillAuthorized) {
                    return res.status(401).json({
                        success: false,
                        message: "Sesi tidak valid, sudah berakhir, atau dicabut.",
                    });
                }
            }
            res.cookie(USER_SESSION_COOKIE_NAME, token, userSessionCookieOptions);
            return next();
        }
        catch (error) {
            logSafeError("USER AUTH MIDDLEWARE", error);
            return res.status(500).json({
                success: false,
                message: "Terjadi kesalahan pada server.",
            });
        }
    };
}
export const authenticateUser = createUserAuthenticator();
//# sourceMappingURL=auth.middleware.js.map