import ipaddr from "ipaddr.js";
import { logSafeError } from "../utils/safe-error-logger.js";
const configuredCidrs = process.env.OFFICE_CIDRS;
if (!configuredCidrs) {
    throw new Error("OFFICE_CIDRS belum dikonfigurasi di file .env");
}
// Parse seluruh CIDR jaringan kantor
const allowedNetworks = configuredCidrs
    .split(",")
    .map((cidr) => cidr.trim())
    .filter(Boolean)
    .map((cidr) => {
    try {
        return ipaddr.parseCIDR(cidr);
    }
    catch {
        throw new Error(`Format OFFICE_CIDRS tidak valid: ${cidr}`);
    }
});
export function officeNetworkOnly(req, res, next) {
    const clientIp = req.socket.remoteAddress;
    if (!clientIp) {
        return res.status(403).json({
            success: false,
            message: "Alamat IP tidak dapat diverifikasi",
        });
    }
    try {
        // Normalisasi IPv4-mapped IPv6
        const address = ipaddr.process(clientIp);
        const isAllowed = allowedNetworks.some(([network, prefix]) => {
            // Periksa jenis IP terlebih dahulu
            if (address.kind() !== network.kind()) {
                return false;
            }
            // Pemeriksaan IPv4
            if (address.kind() === "ipv4" && network.kind() === "ipv4") {
                return address.match(network, prefix);
            }
            // Pemeriksaan IPv6
            if (address.kind() === "ipv6" && network.kind() === "ipv6") {
                return address.match(network, prefix);
            }
            return false;
        });
        if (!isAllowed) {
            console.warn(`[IP BLOCKED] ${clientIp}`);
            return res.status(403).json({
                success: false,
                message: "Akses ditolak. Anda tidak berada di jaringan yang diizinkan.",
            });
        }
        next();
    }
    catch (error) {
        logSafeError("IP VALIDATION", error);
        return res.status(403).json({
            success: false,
            message: "Alamat IP tidak valid",
        });
    }
}
//# sourceMappingURL=office-network.middleware.js.map