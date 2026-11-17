import ipaddr from "ipaddr.js";
export function parseWhitelistCidrs(raw) {
    const entries = (raw ?? "")
        .split(",")
        .map((entry) => entry.trim())
        .filter(Boolean);
    if (entries.length === 0) {
        throw new Error("IP_WHITELIST_CIDRS wajib diisi ketika IP_WHITELIST_ENABLED=true (fail closed).");
    }
    return entries.map((entry) => {
        try {
            return ipaddr.parseCIDR(entry);
        }
        catch {
            throw new Error(`Format IP_WHITELIST_CIDRS tidak valid: ${entry} (fail closed).`);
        }
    });
}
export function loadIpWhitelistConfig(env = process.env) {
    // Hanya nilai persis "true" yang mengaktifkan (tanpa trim) agar toggle
    // keamanan tidak nyala karena nilai yang samar.
    const enabled = env.IP_WHITELIST_ENABLED === "true";
    if (!enabled) {
        return { enabled: false, networks: [] };
    }
    return { enabled: true, networks: parseWhitelistCidrs(env.IP_WHITELIST_CIDRS) };
}
/**
 * Config dihitung sekali saat startup: whitelist aktif dengan CIDR tidak valid
 * membuat server gagal berjalan (fail closed), konsisten dengan pola modul
 * office-network.middleware.ts.
 */
export const ipWhitelistConfig = loadIpWhitelistConfig();
//# sourceMappingURL=ip-whitelist.js.map