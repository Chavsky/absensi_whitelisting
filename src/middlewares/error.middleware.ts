import type { ErrorRequestHandler } from "express";
import { logSafeError } from "../utils/safe-error-logger.js";

export const safeErrorHandler: ErrorRequestHandler = (error, _req, res, _next) => {
  logSafeError("HTTP ERROR", error);

  if (res.headersSent) {
    res.end();
    return;
  }

  const status =
    typeof error === "object" && error !== null && "status" in error &&
    typeof error.status === "number" &&
    Number.isInteger(error.status) &&
    error.status >= 400 &&
    error.status <= 599
      ? error.status
      : 500;

  res.status(status).json({
    success: false,
    message: status < 500 ? "Request tidak valid." : "Terjadi kesalahan pada server.",
  });
};
