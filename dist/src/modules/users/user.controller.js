export function profile(req, res) {
    if (!req.user) {
        return res.status(401).json({ success: false, message: "Sesi tidak valid." });
    }
    return res.status(200).json({
        success: true,
        data: { nik: req.user.nik, namaLengkap: req.user.namaLengkap },
    });
}
//# sourceMappingURL=user.controller.js.map