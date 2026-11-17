import type { Request, Response, NextFunction } from "express";
import { type IpWhitelistConfig, type IpWhitelistNetwork } from "../config/ip-whitelist.js";
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
export declare function isIpAllowed(rawIp: string | undefined, networks: IpWhitelistNetwork[]): boolean;
export declare function createIpWhitelistMiddleware(config: IpWhitelistConfig): (req: Request, res: Response, next: NextFunction) => void;
export declare function ipWhitelistOnly(req: Request, res: Response, next: NextFunction): void;
