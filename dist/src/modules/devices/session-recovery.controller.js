import { createSessionRecoveryCode, redeemSessionRecoveryCode, } from "./session-recovery.service.js";
import { USER_SESSION_COOKIE_NAME, userSessionCookieOptions, } from "../users/user-session.cookie.js";
import { logSafeError } from "../../utils/safe-error-logger.js";
export async function issueSessionRecovery(req, res) {
    const nik = req.params.nik;
    if (typeof nik !== "string" || !nik.trim() || !req.admin) {
        return res.status(400).json({ success: false, message: "Permintaan tidak valid." });
    }
    try {
        const result = await createSessionRecoveryCode(nik.trim(), req.admin.id);
        return res.status(201).json({
            success: true,
            message: "Kode pemulihan sesi berhasil dibuat.",
            data: { code: result.code, expiresAt: result.expiresAt },
        });
    }
    catch (error) {
        if (error instanceof Error && error.message === "RECOVERY_DEVICE_UNAVAILABLE") {
            return res.status(404).json({ success: false, message: "Perangkat aktif tidak tersedia." });
        }
        logSafeError("SESSION RECOVERY ISSUE", error);
        return res.status(500).json({ success: false, message: "Terjadi kesalahan pada server." });
    }
}
export async function recoverEmployeeSession(req, res) {
    const { nik, recoveryCode } = req.body ?? {};
    if (typeof nik !== "string" ||
        !nik.trim() ||
        typeof recoveryCode !== "string" ||
        !/^[a-f0-9]{32}$/i.test(recoveryCode.trim())) {
        return res.status(400).json({ success: false, message: "NIK atau kode pemulihan tidak valid." });
    }
    try {
        const result = await redeemSessionRecoveryCode(nik.trim(), recoveryCode, req.socket.remoteAddress, req.get("user-agent"));
        res.cookie(USER_SESSION_COOKIE_NAME, result.token, userSessionCookieOptions);
        return res.status(200).json({
            success: true,
            message: "Sesi karyawan berhasil dipulihkan.",
            data: { expiresAt: result.expiresAt },
        });
    }
    catch (error) {
        if (error instanceof Error && error.message === "RECOVERY_INVALID") {
            return res.status(400).json({ success: false, message: "NIK atau kode pemulihan tidak valid." });
        }
        logSafeError("SESSION RECOVERY REDEEM", error);
        return res.status(500).json({ success: false, message: "Terjadi kesalahan pada server." });
    }
}
//# sourceMappingURL=session-recovery.controller.js.map