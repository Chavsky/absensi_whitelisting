import { Router } from "express";
import rateLimit from "express-rate-limit";

import { authenticateAdmin } from "../../middlewares/auth.middleware.js";

import {
  createEnrollment,
  activateDeviceController,
} from "./device.controller.js";
import {
  issueSessionRecovery,
  recoverEmployeeSession,
} from "./session-recovery.controller.js";
import {
  revokeEmployeeDeviceController,
  revokeEmployeeSessionController,
} from "./device-admin.controller.js";

const router = Router();

// Membatasi percobaan aktivasi
const activationLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: {
    success: false,
    message: "Terlalu banyak percobaan aktivasi. Silakan coba kembali nanti.",
  },
});

const sessionRecoveryLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: {
    success: false,
    message: "Terlalu banyak percobaan pemulihan sesi. Silakan coba kembali nanti.",
  },
});

// Aktivasi perangkat karyawan
router.post(
  "/activate",
  activationLimiter,
  activateDeviceController
);

router.post(
  "/recover-session",
  sessionRecoveryLimiter,
  recoverEmployeeSession,
);

// Pembuatan kode aktivasi oleh admin
router.post(
  "/:nik/enrollment",
  authenticateAdmin,
  createEnrollment
);

router.post(
  "/:nik/session-recovery",
  authenticateAdmin,
  sessionRecoveryLimiter,
  issueSessionRecovery,
);

router.post(
  "/:nik/session/revoke",
  authenticateAdmin,
  revokeEmployeeSessionController,
);

router.post(
  "/:nik/revoke",
  authenticateAdmin,
  revokeEmployeeDeviceController,
);

export default router;
