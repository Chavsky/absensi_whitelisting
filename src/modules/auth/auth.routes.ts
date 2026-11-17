import { Router } from "express";
import rateLimit from "express-rate-limit";

import {
  login,
  profile,
  logout,
} from "./auth.controller.js";

import {
  authenticateAdmin,
} from "../../middlewares/auth.middleware.js";

const router = Router();

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: {
    success: false,
    message: "Terlalu banyak percobaan login. Silakan coba kembali nanti.",
  },
});

router.post("/login", loginLimiter, login);

router.get(
  "/me",
  authenticateAdmin,
  profile
);

router.post(
  "/logout",
  logout
);

export default router;
