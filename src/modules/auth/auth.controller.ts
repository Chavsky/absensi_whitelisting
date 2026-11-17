import type { Request, Response } from "express";
import {
  ADMIN_SESSION_COOKIE_NAME,
  adminSessionCookieClearOptions,
  adminSessionCookieOptions,
} from "../../config/session-cookies.js";
import { logSafeError } from "../../utils/safe-error-logger.js";

import {
  loginAdmin,
  getAdminProfile,
  revokeAdminSession,
} from "./auth.service.js";

export async function login(
  req: Request,
  res: Response
) {
  try {
    const { username, password } = req.body;

    if (
      typeof username !== "string" ||
      typeof password !== "string" ||
      !username.trim() ||
      !password
    ) {
      return res.status(400).json({
        success: false,
        message: "Username dan password wajib diisi.",
      });
    }

    const result = await loginAdmin(
      username.trim(),
      password,
      req.socket.remoteAddress,
      req.get("user-agent")
    );

    if (!result) {
      return res.status(401).json({
        success: false,
        message: "Username atau password salah.",
      });
    }

    res.cookie(ADMIN_SESSION_COOKIE_NAME, result.token, adminSessionCookieOptions);

    return res.status(200).json({
      success: true,
      message: "Login berhasil.",
      data: {
        admin: result.admin,
      },
    });
  } catch (error) {
    logSafeError("ADMIN LOGIN", error);

    return res.status(500).json({
      success: false,
      message: "Terjadi kesalahan pada server.",
    });
  }
}

export async function profile(
  req: Request,
  res: Response
) {
  try {
    const adminId = req.admin?.id;

    if (!adminId) {
      return res.status(401).json({
        success: false,
        message: "Sesi tidak valid.",
      });
    }

    const admin = await getAdminProfile(adminId);

    if (!admin) {
      res.clearCookie(ADMIN_SESSION_COOKIE_NAME, adminSessionCookieClearOptions);

      return res.status(401).json({
        success: false,
        message: "Akun admin tidak ditemukan.",
      });
    }

    return res.status(200).json({
      success: true,
      data: { admin },
    });
  } catch (error) {
    logSafeError("ADMIN PROFILE", error);

    return res.status(500).json({
      success: false,
      message: "Terjadi kesalahan pada server.",
    });
  }
}

export function createAdminLogoutHandler(
  revokeSession: (token: string) => Promise<unknown> = revokeAdminSession,
) {
  return async function logout(req: Request, res: Response) {
    let revokeFailed = false;
    try {
      const token = req.cookies?.[ADMIN_SESSION_COOKIE_NAME];

      if (token && typeof token === "string") {
        await revokeSession(token);
      }
    } catch (error) {
      revokeFailed = true;
      logSafeError("ADMIN LOGOUT", error);
    } finally {
      res.clearCookie(ADMIN_SESSION_COOKIE_NAME, adminSessionCookieClearOptions);
    }

    if (revokeFailed) {
      return res.status(500).json({
        success: false,
        message: "Gagal mengakhiri sesi.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Logout berhasil.",
    });
  };
}

export const logout = createAdminLogoutHandler();
