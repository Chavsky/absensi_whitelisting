import { Router } from "express";
import { authenticateAdmin } from "../../middlewares/auth.middleware.js";
import { createEmployee, getEmployee, listEmployees, updateEmployee, updateEmployeeStatus, } from "./employee.controller.js";
const router = Router();
router.get("/", authenticateAdmin, listEmployees);
router.post("/", authenticateAdmin, createEmployee);
router.get("/:nik", authenticateAdmin, getEmployee);
router.patch("/:nik/status", authenticateAdmin, updateEmployeeStatus);
router.patch("/:nik", authenticateAdmin, updateEmployee);
export default router;
//# sourceMappingURL=employee.routes.js.map