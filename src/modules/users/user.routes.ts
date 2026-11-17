import { Router } from "express";
import { authenticateUser } from "../../middlewares/auth.middleware.js";
import { profile } from "./user.controller.js";

const router = Router();

router.get("/me", authenticateUser, profile);

export default router;
