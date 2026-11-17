import ipaddr from "ipaddr.js";

/**
 * Konfigurasi IP whitelist yang dapat dinonaktifkan/diaktifkan secara eksplisit
 * melalui environment variable:
 *
 *   IP_WHITELIST_ENABLED=true          (hanya nilai "true" yang mengaktifkan)
 *   IP_WHITELIST_CIDRS=192.168.30.0/24 (wajib bila diaktifkan; boleh dipisah koma)
 *
 * Sifat kegagalan:
 * - Enabled tanpa CIDR, dengan CIDR kosong, atau dengan CIDR tidak valid
 *   => throw saat startup (fail closed); server menolak berjalan daripada
 *   diam-diam mengizinkan semua IP.
 * - Disabled => tidak memerlukan CIDR dan tidak memblokir apa pun
 *   (lapisan jaringan kantor tetap berlaku terpisah).
 */

export type IpWhitelistNetwork = [ipaddr.IPv4 | ipaddr.IPv6, number];

export interface IpWhitelistConfig {
  enabled: boolean;
  networks: IpWhitelistNetwork[];
}

export function parseWhitelistCidrs(raw: string | undefined): IpWhitelistNetwork[] {
  const entries = (raw ?? "")
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean);

  if (entries.length === 0) {
    throw new Error(
      "IP_WHITELIST_CIDRS wajib diisi ketika IP_WHITELIST_ENABLED=true (fail closed).",
    );
  }

  return entries.map((entry) => {
    try {
      return ipaddr.parseCIDR(entry) as IpWhitelistNetwork;
    } catch {
      throw new Error(`Format IP_WHITELIST_CIDRS tidak valid: ${entry} (fail closed).`);
    }
  });
}

export function loadIpWhitelistConfig(
  env: { readonly [key: string]: string | undefined } = process.env,
): IpWhitelistConfig {
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
export const ipWhitelistConfig: IpWhitelistConfig = loadIpWhitelistConfig();
