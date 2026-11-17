import { Router } from "express";
import { authenticateAdmin } from "../../middlewares/auth.middleware.js";
import { attendanceStatisticsReport, attendanceSummaryReport, dailyAttendanceReport, employeeAttendanceReport, exportAttendanceCsv, periodAttendanceReport, } from "./report.controller.js";
const router = Router();
router.get("/attendance/daily", authenticateAdmin, dailyAttendanceReport);
router.get("/attendance/period", authenticateAdmin, periodAttendanceReport);
router.get("/attendance/summary", authenticateAdmin, attendanceSummaryReport);
router.get("/attendance/statistics", authenticateAdmin, attendanceStatisticsReport);
router.get("/attendance/export", authenticateAdmin, exportAttendanceCsv);
router.get("/attendance/employee/:nik", authenticateAdmin, employeeAttendanceReport);
export default router;
//# sourceMappingURL=report.routes.js.map