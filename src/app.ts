import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { corsOptions, rejectDisallowedCorsOrigin } from "./config/cors.js";
import { safeErrorHandler } from "./middlewares/error.middleware.js";

import { officeNetworkOnly } from "./middlewares/office-network.middleware.js";
import { ipWhitelistOnly } from "./middlewares/ip-whitelist.middleware.js";
import authRoutes from "./modules/auth/auth.routes.js";
import deviceRoutes from "./modules/devices/device.routes.js";
import userRoutes from "./modules/users/user.routes.js";
import attendanceRoutes from "./modules/attendance/attendance.routes.js";
import employeeRoutes from "./modules/employees/employee.routes.js";
import adminManagementRoutes from "./modules/admins/admin.routes.js";
import reportRoutes from "./modules/reports/report.routes.js";
import { adminSessionRouter, employeeSessionRouter } from "./modules/attendance-sessions/session.routes.js";

const app = express();

app.use(rejectDisallowedCorsOrigin);
app.use(cors(corsOptions));

// Middleware parser harus sebelum routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// Lapisan jaringan kantor (OFFICE_CIDRS, selalu aktif) dan lapisan IP whitelist
// (IP_WHITELIST_ENABLED/IP_WHITELIST_CIDRS, dapat dimatikan). IP yang ditolak
// tidak pernah mencapai handler API mana pun.
app.use(officeNetworkOnly);
app.use(ipWhitelistOnly);

app.use("/api/auth", authRoutes);
app.use("/api/devices", deviceRoutes);
app.use("/api/users", userRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/attendance/sessions", employeeSessionRouter);
app.use("/api/admins/attendance-sessions", adminSessionRouter);
app.use("/api/employees", employeeRoutes);
app.use("/api/admins", adminManagementRoutes);
app.use("/api/reports", reportRoutes);

// Health check
app.get("/api/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Attendance API is running",
    timestamp: new Date().toISOString(),
  });
});

app.use(safeErrorHandler);

export default app;
