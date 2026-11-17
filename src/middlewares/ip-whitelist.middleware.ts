import type { Request, Response, NextFunction } from "express";
import ipaddr from "ipaddr.js";
import { logSafeError } from "../utils/safe-error-logger.js";
import {
  ipWhitelistConfig,
  type IpWhitelistConfig,
  type IpWhitelistNetwork,
} from "../config/ip-whitelist.js";

/**
 * IP Whitelisting middleware (lapisan tambahan di atas office-network).
 *
 * Sumber IP client:
 *   - Hanya `req.socket.remoteAddress` — alamat koneksi TCP nyata yang diterima
 *     server. Backend saat ini diakses langsung melalui LAN tanpa reverse proxy.
 *   - Header `X-Forwarded-For` TIDAK PERNAH dibaca karena dapat dipalsukan
 *     client. `trust proxy` tidak diaktifkan.
 *   - Bila kelak memakai reverse proxy, dukungan proxy harus ditambahkan
 *     secara eksplisit dan hanya mempercayai proxy yang dikenal.
 *
 * Keamanan logging: hanya alamat IP yang dicatat — tanpa cookie, session token,
 * activation code, atau recovery code.
 */

export function isIpAllowed(
  rawIp: string | undefined,
  networks: IpWhitelistNetwork[],
): boolean {
  if (!rawIp) return false;

  let address: ipaddr.IPv4 | ipaddr.IPv6;
  try {
    // `process` menormalkan IPv4-mapped IPv6 (::ffff:192.168.30.174) ke IPv4.
    address = ipaddr.process(rawIp);
  } catch {
    return false;
  }

  return networks.some(([network, prefix]) => {
    if (address.kind() !== network.kind()) return false;
    if (address.kind() === "ipv4") {
      return (address as ipaddr.IPv4).match(network as ipaddr.IPv4, prefix);
    }
    return (address as ipaddr.IPv6).match(network as ipaddr.IPv6, prefix);
  });
}

export function createIpWhitelistMiddleware(
  config: IpWhitelistConfig,
): (req: Request, res: Response, next: NextFunction) => void {
  // Nonaktif secara eksplisit => tidak memblokir apa pun (perilaku development).
  if (!config.enabled) {
    return (_req: Request, _res: Response, next: NextFunction) => next();
  }

  // Enabled dengan daftar kosong tidak mungkin lolos dari validasi startup,
  // namun tetap ditolak semua di sini sebagai pertahanan kedua (fail closed).
  if (config.networks.length === 0) {
    return (_req: Request, res: Response, _next: NextFunction) => {
      res.status(403).json({
        success: false,
        message: "Akses ditolak. Whitelist aktif tanpa CIDR yang valid.",
      });
    };
  }

  return (req: Request, res: Response, next: NextFunction) => {
    const clientIp = req.socket.remoteAddress;

    if (!isIpAllowed(clientIp, config.networks)) {
      console.warn(`[IP WHITELIST BLOCKED] ${clientIp ?? "(tidak terbaca)"}`);
      return res.status(403).json({
        success: false,
        message: "Akses ditolak. Alamat IP Anda tidak termasuk dalam whitelist.",
      });
    }

    return next();
  };
}

export function ipWhitelistOnly(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  try {
    createIpWhitelistMiddleware(ipWhitelistConfig)(req, res, next);
  } catch (error) {
    logSafeError("IP WHITELIST", error);
    res.status(403).json({
      success: false,
      message: "Akses ditolak. Alamat IP tidak dapat diverifikasi.",
    });
  }
}
