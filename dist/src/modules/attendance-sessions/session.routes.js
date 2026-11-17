import { Router } from "express";
import { authenticateAdmin, authenticateUser } from "../../middlewares/auth.middleware.js";
import { addAdminSessionVersion, archiveAdminSession, createAdminSession, correctAdminAttendance, deleteAdminSessionPermanently, disableAdminSession, listAdminSessions, listArchivedAdminSessions, listAdminAttendanceCorrections, todaySessions, } from "./session.controller.js";
export const employeeSessionRouter = Router();
employeeSessionRouter.get("/today", authenticateUser, todaySessions);
export const adminSessionRouter = Router();
adminSessionRouter.use(authenticateAdmin);
adminSessionRouter.get("/", listAdminSessions);
adminSessionRouter.get("/archived", listArchivedAdminSessions);
adminSessionRouter.post("/", createAdminSession);
adminSessionRouter.post("/:key/versions", addAdminSessionVersion);
adminSessionRouter.delete("/:key", disableAdminSession);
adminSessionRouter.delete("/:key/archive", archiveAdminSession);
adminSessionRouter.delete("/:key/permanent", deleteAdminSessionPermanently);
adminSessionRouter.get("/:key/corrections", listAdminAttendanceCorrections);
adminSessionRouter.post("/:key/corrections", correctAdminAttendance);
//# sourceMappingURL=session.routes.js.map