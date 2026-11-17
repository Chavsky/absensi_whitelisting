import { createEnrollmentCode, activateDevice, } from "./device.service.js";
import { userSessionCookieOptions, USER_SESSION_COOKIE_NAME, } from "../users/user-session.cookie.js";
import { logSafeError } from "../../utils/safe-error-logger.js";
function handleDeviceError(error, res) {
    if (!(error instanceof Error)) {
        logSafeError("DEVICE", error);
        return res.status(500).json({
            success: false,
            message: "Terjadi kesalahan pada server.",
        });
    }
    switch (error.message) {
        case "USER_NOT_FOUND":
            return res.status(404).json({
                success: false,
                message: "Data karyawan tidak ditemukan.",
            });
        case "USER_INACTIVE":
            return res.status(403).json({
                success: false,
                message: "Karyawan sedang nonaktif.",
            });
        case "DEVICE_ALREADY_ACTIVE":
            return res.status(409).json({
                success: false,
                message: "Perangkat karyawan sudah aktif.",
            });
        case "ENROLLMENT_INVALID":
            return res.status(400).json({
                success: false,
                message: "Kode aktivasi tidak valid.",
            });
        case "ENROLLMENT_EXPIRED":
            return res.status(400).json({
                success: false,
                message: "Kode aktivasi sudah kedaluwarsa.",
            });
        default:
            logSafeError("DEVICE", error);
            return res.status(500).json({
                success: false,
                message: "Terjadi kesalahan pada server.",
            });
    }
}
// Admin membuat kode aktivasi
export async function createEnrollment(req, res) {
    try {
        const { nik } = req.params;
        if (!nik || typeof nik !== "string") {
            return res.status(400).json({
                success: false,
                message: "NIK wajib diisi.",
            });
        }
        if (!req.admin) {
            return res.status(401).json({
                success: false,
                message: "Admin belum terautentikasi.",
            });
        }
        const result = await createEnrollmentCode(nik, req.admin.id);
        return res.status(201).json({
            success: true,
            message: "Kode aktivasi berhasil dibuat.",
            data: {
                nik,
                code: result.code,
                expiresAt: result.expiresAt,
                deviceId: result.deviceId,
            },
        });
    }
    catch (error) {
        return handleDeviceError(error, res);
    }
}
// Karyawan mengaktifkan perangkat
export async function activateDeviceController(req, res) {
    try {
        const { nik, code, deviceName } = req.body ?? {};
        if (typeof nik !== "string" ||
            typeof code !== "string" ||
            !nik.trim() ||
            !code.trim()) {
            return res.status(400).json({
                success: false,
                message: "NIK dan kode aktivasi wajib diisi.",
            });
        }
        if (deviceName !== undefined &&
            (typeof deviceName !== "string" || deviceName.length > 100)) {
            return res.status(400).json({
                success: false,
                message: "Nama perangkat tidak valid.",
            });
        }
        const result = await activateDevice(nik, code, deviceName, req.socket.remoteAddress, req.get("user-agent"));
        res.cookie(USER_SESSION_COOKIE_NAME, result.sessionToken, userSessionCookieOptions);
        return res.status(200).json({
            success: true,
            message: "Perangkat berhasil diaktifkan.",
            data: {
                nik: result.device.nik,
                status: result.device.status,
                activatedAt: result.device.activatedAt,
                expiresAt: result.device.sessions?.[0]?.expiresAt ?? null,
            },
        });
    }
    catch (error) {
        return handleDeviceError(error, res);
    }
}
//# sourceMappingURL=device.controller.js.map