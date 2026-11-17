import { logSafeError } from "../../utils/safe-error-logger.js";
import { revokeEmployeeDevice, revokeEmployeeSession, } from "./device-admin.service.js";
function handleRevocationError(error, res) {
    if (error instanceof Error) {
        if (error.message === "USER_NOT_FOUND" || error.message === "DEVICE_NOT_FOUND") {
            return res.status(404).json({ success: false, message: "Perangkat karyawan tidak ditemukan." });
        }
        if (error.message === "SESSION_NOT_FOUND") {
            return res.status(404).json({ success: false, message: "Sesi aktif tidak ditemukan." });
        }
    }
    logSafeError("DEVICE REVOCATION", error);
    return res.status(500).json({ success: false, message: "Terjadi kesalahan pada server." });
}
function getAdminAndNik(req, res) {
    const nik = req.params.nik;
    if (typeof nik !== "string" || !nik.trim()) {
        res.status(400).json({ success: false, message: "NIK tidak valid." });
        return null;
    }
    if (!req.admin) {
        res.status(401).json({ success: false, message: "Silakan login terlebih dahulu." });
        return null;
    }
    return { nik: nik.trim(), adminId: req.admin.id };
}
export async function revokeEmployeeSessionController(req, res) {
    const input = getAdminAndNik(req, res);
    if (!input)
        return;
    try {
        const data = await revokeEmployeeSession(input.nik, input.adminId);
        return res.status(200).json({ success: true, message: "Sesi karyawan berhasil dicabut.", data });
    }
    catch (error) {
        return handleRevocationError(error, res);
    }
}
export async function revokeEmployeeDeviceController(req, res) {
    const input = getAdminAndNik(req, res);
    if (!input)
        return;
    try {
        const data = await revokeEmployeeDevice(input.nik, input.adminId);
        return res.status(200).json({ success: true, message: "Perangkat karyawan berhasil dicabut.", data });
    }
    catch (error) {
        return handleRevocationError(error, res);
    }
}
//# sourceMappingURL=device-admin.controller.js.map