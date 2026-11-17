import "dotenv/config";
import type { Request, Response, NextFunction } from "express";
import type { CorsOptions } from "cors";

const configuredOrigins = process.env.CORS_ORIGINS?.trim();
const isProduction = process.env.NODE_ENV === "production";
const developmentOrigins = ["http://localhost:3001", "http://localhost:5173"];

if (!configuredOrigins && isProduction) {
  throw new Error("CORS_ORIGINS wajib dikonfigurasi pada production.");
}

const configuredOriginList = (configuredOrigins || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);
const originList = isProduction
  ? configuredOriginList
  : [...developmentOrigins, ...configuredOriginList];

function validateOrigin(origin: string): string {
  if (origin === "*") {
    throw new Error("CORS_ORIGINS tidak boleh menggunakan wildcard.");
  }

  let parsed: URL;
  try {
    parsed = new URL(origin);
  } catch {
    throw new Error("Format CORS_ORIGINS tidak valid.");
  }

  if (
    (parsed.protocol !== "http:" && parsed.protocol !== "https:") ||
    parsed.origin !== origin
  ) {
    throw new Error("CORS_ORIGINS harus berisi origin HTTP/HTTPS tanpa path.");
  }

  return origin;
}

export const allowedCorsOrigins = new Set(originList.map(validateOrigin));
if (allowedCorsOrigins.size === 0) {
  throw new Error("CORS_ORIGINS harus berisi setidaknya satu origin yang diizinkan.");
}

export function rejectDisallowedCorsOrigin(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const origin = req.get("origin");
  if (origin && !allowedCorsOrigins.has(origin)) {
    return res.status(403).json({
      success: false,
      message: "Origin tidak diizinkan.",
    });
  }
  return next();
}

export const corsOptions: CorsOptions = {
  origin: (origin, callback) => callback(null, !origin || allowedCorsOrigins.has(origin)),
  credentials: true,
};
