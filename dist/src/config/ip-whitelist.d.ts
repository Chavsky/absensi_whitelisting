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
export declare function parseWhitelistCidrs(raw: string | undefined): IpWhitelistNetwork[];
export declare function loadIpWhitelistConfig(env?: {
    readonly [key: string]: string | undefined;
}): IpWhitelistConfig;
/**
 * Config dihitung sekali saat startup: whitelist aktif dengan CIDR tidak valid
 * membuat server gagal berjalan (fail closed), konsisten dengan pola modul
 * office-network.middleware.ts.
 */
export declare const ipWhitelistConfig: IpWhitelistConfig;
