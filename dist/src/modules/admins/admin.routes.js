import { Router } from "express";
import { authenticateAdmin } from "../../middlewares/auth.middleware.js";
import { createAdmin, getAdmin, listAdmins, updateAdmin, updateAdminPassword, updateAdminStatus, } from "./admin.controller.js";
const router = Router();
router.get("/", authenticateAdmin, listAdmins);
router.get("/:id", authenticateAdmin, getAdmin);
router.post("/", authenticateAdmin, createAdmin);
router.patch("/:id/password", authenticateAdmin, updateAdminPassword);
router.patch("/:id/status", authenticateAdmin, updateAdminStatus);
router.patch("/:id", authenticateAdmin, updateAdmin);
export default router;
//# sourceMappingURL=admin.routes.js.map