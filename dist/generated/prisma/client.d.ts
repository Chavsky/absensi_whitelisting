import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class.js";
import * as Prisma from "./internal/prismaNamespace.js";
export * as $Enums from './enums.js';
export * from "./enums.js";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
/**
 * Model Admin
 *
 */
export type Admin = Prisma.AdminModel;
/**
 * Model Attendance
 *
 */
export type Attendance = Prisma.AttendanceModel;
/**
 * Model AttendanceSessionDefinition
 *
 */
export type AttendanceSessionDefinition = Prisma.AttendanceSessionDefinitionModel;
/**
 * Model AttendanceSessionVersion
 *
 */
export type AttendanceSessionVersion = Prisma.AttendanceSessionVersionModel;
/**
 * Model AttendanceSessionDaySchedule
 *
 */
export type AttendanceSessionDaySchedule = Prisma.AttendanceSessionDayScheduleModel;
/**
 * Model AttendanceCorrectionLog
 *
 */
export type AttendanceCorrectionLog = Prisma.AttendanceCorrectionLogModel;
/**
 * Model UserDevice
 *
 */
export type UserDevice = Prisma.UserDeviceModel;
/**
 * Model UserSession
 *
 */
export type UserSession = Prisma.UserSessionModel;
/**
 * Model DeviceSessionRecovery
 *
 */
export type DeviceSessionRecovery = Prisma.DeviceSessionRecoveryModel;
/**
 * Model SecurityAuditLog
 *
 */
export type SecurityAuditLog = Prisma.SecurityAuditLogModel;
/**
 * Model AdminSession
 *
 */
export type AdminSession = Prisma.AdminSessionModel;
