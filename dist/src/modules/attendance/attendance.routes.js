import { Router } from "express";
import { authenticateUser } from "../../middlewares/auth.middleware.js";
import { createAttendance, getAttendanceHistory, getTodayAttendance, } from "./attendance.controller.js";
const router = Router();
router.post("/", authenticateUser, createAttendance);
router.get("/today", authenticateUser, getTodayAttendance);
router.get("/history", authenticateUser, getAttendanceHistory);
export default router;
//# sourceMappingURL=attendance.routes.js.map