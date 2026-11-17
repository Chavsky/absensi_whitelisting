import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const migrationUrl = new URL(
  "../prisma/migrations/20261106100000_dynamic_attendance_sessions/migration.sql",
  import.meta.url,
);
const schemaUrl = new URL("../prisma/schema.prisma", import.meta.url);
const workdayMigrationUrl = new URL(
  "../prisma/migrations/20261106111500_weekday_session_times/migration.sql",
  import.meta.url,
);
const archiveMigrationUrl = new URL(
  "../prisma/migrations/20261109014000_archive_attendance_sessions/migration.sql",
  import.meta.url,
);
const sessionServiceUrl = new URL(
  "../src/modules/attendance-sessions/session.service.ts",
  import.meta.url,
);
const attendanceServiceUrl = new URL("../src/modules/attendance/attendance.service.ts", import.meta.url);
const sessionRoutesUrl = new URL("../src/modules/attendance-sessions/session.routes.ts", import.meta.url);
const reportServiceUrl = new URL("../src/modules/reports/report.service.ts", import.meta.url);
const sessionControllerUrl = new URL(
  "../src/modules/attendance-sessions/session.controller.ts",
  import.meta.url,
);
const dynamicKeyMigrationUrl = new URL(
  "../prisma/migrations/20261109085000_dynamic_session_key_storage/migration.sql",
  import.meta.url,
);

test("migration fails explicitly for unsupported historical statuses without rewriting them", async () => {
  const migration = await readFile(migrationUrl, "utf8");
  assert.match(migration, /WHERE "status" NOT IN \('Hadir', 'Tidak Hadir'\)/);
  assert.match(migration, /RAISE EXCEPTION[\s\S]*unsupported historical attendance status value/);
  assert.doesNotMatch(migration, /SET\s+"status"\s*=/);
});

test("legacy enum seeding is scoped to the current schema", async () => {
  const [migration, schema] = await Promise.all([
    readFile(migrationUrl, "utf8"),
    readFile(schemaUrl, "utf8"),
  ]);
  assert.match(migration, /JOIN pg_namespace AS n ON n\.oid = t\.typnamespace/);
  assert.match(migration, /n\.nspname = current_schema\(\)/);
  assert.match(migration, /INSERT INTO "attendance_sessions"[\s\S]*SELECT e\.enumlabel[\s\S]*FROM pg_enum/);
  assert.doesNotMatch(schema, /enum AttendanceSession\s*\{/);
});

test("Prisma and SQL use matching named indexes and composite integrity constraints", async () => {
  const [migration, schema] = await Promise.all([
    readFile(migrationUrl, "utf8"),
    readFile(schemaUrl, "utf8"),
  ]);
  for (const name of [
    "attendance_session_day_schedules_version_weekday_key",
    "attendance_correction_logs_nik_date_session_corrected_idx",
    "attendance_correction_logs_nik_date_session_revision_key",
    "attendance_session_versions_id_session_id_key",
    "attendances_id_nik_tanggal_session_id_key",
  ]) {
    assert.ok(migration.includes(name), `migration missing ${name}`);
    assert.ok(schema.includes(name), `Prisma schema missing map for ${name}`);
  }
  assert.match(migration, /FOREIGN KEY \("session_version_id", "session_id"\)[\s\S]*REFERENCES "attendance_session_versions"\("id", "session_id"\)/);
  assert.match(migration, /FOREIGN KEY \("attendance_id", "nik", "attendance_date", "session_id"\)[\s\S]*REFERENCES "attendances"\("id", "nik", "tanggal", "session_id"\)/);
  assert.match(migration, /DEFAULT statement_timestamp\(\)/);
  assert.match(schema, /@default\(dbgenerated\("statement_timestamp\(\)"\)\)/);
});

test("workday migration adds unified hours without removing historical schedules", async () => {
  const [migration, schema] = await Promise.all([
    readFile(workdayMigrationUrl, "utf8"),
    readFile(schemaUrl, "utf8"),
  ]);
  assert.match(migration, /ADD COLUMN "start_time" TIME\(0\)/);
  assert.match(migration, /ADD COLUMN "end_time" TIME\(0\)/);
  assert.match(migration, /"start_time" IS NULL OR "start_time" < "end_time"/);
  assert.match(migration, /HAVING COUNT\(\*\) = 5[\s\S]*COUNT\(DISTINCT "start_time"\) = 1[\s\S]*COUNT\(DISTINCT "end_time"\) = 1/);
  assert.match(migration, /UPDATE "attendance_session_versions"/);
  assert.match(schema, /startTime\s+DateTime\?\s+@map\("start_time"\)\s+@db\.Time\(0\)/);
  assert.match(schema, /endTime\s+DateTime\?\s+@map\("end_time"\)\s+@db\.Time\(0\)/);
  assert.match(schema, /daySchedules\s+AttendanceSessionDaySchedule\[\]/);
  assert.doesNotMatch(migration, /DROP\s+TABLE|DROP\s+COLUMN|DELETE\s+FROM|UPDATE\s+"attendance_session_day_schedules"/i);
});

test("session archive migration only adds a nullable soft-delete timestamp", async () => {
  const [migration, schema] = await Promise.all([
    readFile(archiveMigrationUrl, "utf8"),
    readFile(schemaUrl, "utf8"),
  ]);
  assert.match(migration, /ADD COLUMN "deleted_at" TIMESTAMPTZ\(3\)/);
  assert.match(schema, /deletedAt\s+DateTime\?\s+@map\("deleted_at"\)\s+@db\.Timestamptz\(3\)/);
  assert.doesNotMatch(migration, /DROP\s+TABLE|DROP\s+COLUMN|DELETE\s+FROM|UPDATE\s+/i);
});

test("archiving is admin-only, rejects active sessions, and serializes with attendance writes", async () => {
  const [sessionService, attendanceService, routes] = await Promise.all([
    readFile(sessionServiceUrl, "utf8"),
    readFile(attendanceServiceUrl, "utf8"),
    readFile(sessionRoutesUrl, "utf8"),
  ]);
  const archiveService = sessionService.slice(
    sessionService.indexOf("export async function archiveSession"),
    sessionService.indexOf("export async function correctAttendance"),
  );
  assert.match(archiveService, /await lockConfiguration\(tx\)/);
  assert.match(archiveService, /if \(isEnabled\) throw new SessionConfigurationError\("SESSION_ACTIVE"\)/);
  assert.match(archiveService, /data: \{ deletedAt \}/);
  assert.match(attendanceService, /LOCK TABLE "attendance_session_versions" IN SHARE MODE/);
  assert.match(attendanceService, /if \(session\.deletedAt\) throw new AttendanceScheduleError\("SESSION_NOT_FOUND"\)/);
  assert.match(attendanceService, /where: \{ deletedAt: null \}/);
  assert.match(routes, /adminSessionRouter\.use\(authenticateAdmin\);[\s\S]*delete\("\/:key\/archive"/);
});

test("new session identity comes from the database sequence and ignores archived schedules", async () => {
  const [sessionService, sessionController] = await Promise.all([
    readFile(sessionServiceUrl, "utf8"),
    readFile(sessionControllerUrl, "utf8"),
  ]);
  assert.match(sessionService, /nextval\(pg_get_serial_sequence\('attendance_sessions', 'id'\)\)/);
  assert.match(sessionService, /const key = sessionKeyForId\(id\)/);
  assert.match(sessionService, /where: \{ OR: \[\{ id \}, \{ key \}\] \}/);
  assert.match(sessionService, /data: identity/);
  assert.match(sessionService, /where: \{ session: \{ is: \{ deletedAt: null \} \} \}/);
  const createHandler = sessionController.slice(
    sessionController.indexOf("export async function createAdminSession"),
    sessionController.indexOf("export async function addAdminSessionVersion"),
  );
  const createService = sessionService.slice(
    sessionService.indexOf("export async function createSession"),
    sessionService.indexOf("export async function appendSessionVersion"),
  );
  const versionService = sessionService.slice(
    sessionService.indexOf("export async function appendSessionVersion"),
    sessionService.indexOf("export async function disableSession"),
  );
  assert.match(createHandler, /createSession\(\{[\s\S]*\.\.\.body/);
  assert.doesNotMatch(createHandler, /\bkey,/);
  assert.match(createService, /await lockConfiguration\(tx\);[\s\S]*await assertNoOverlap\(tx/);
  assert.match(versionService, /await lockConfiguration\(tx\);[\s\S]*await assertNoOverlap\(tx/);
  assert.match(sessionService, /LOCK TABLE "attendance_session_versions" IN SHARE ROW EXCLUSIVE MODE/);
});

test("legacy attendance session values are preserved while removing the fixed enum", async () => {
  const [migration, schema] = await Promise.all([
    readFile(dynamicKeyMigrationUrl, "utf8"),
    readFile(schemaUrl, "utf8"),
  ]);
  assert.match(migration, /ALTER COLUMN "sesi" TYPE VARCHAR\(64\)\s+USING "sesi"::text/);
  assert.match(migration, /DROP TYPE "AttendanceSession"/);
  assert.match(schema, /sesi\s+String\?\s+@db\.VarChar\(64\)/);
  assert.doesNotMatch(schema, /enum AttendanceSession\s*\{/);
  assert.doesNotMatch(migration, /DELETE\s+FROM|UPDATE\s+/i);
});

test("reports keep archived session metadata for historical rows but never infer absence from them", async () => {
  const [reportService, sessionService] = await Promise.all([
    readFile(reportServiceUrl, "utf8"),
    readFile(sessionServiceUrl, "utf8"),
  ]);
  const dailyReport = reportService.slice(
    reportService.indexOf("export async function getDailyAttendanceReport"),
    reportService.indexOf("export async function getAttendancePeriodReport"),
  );
  // Only non-archived, configuration-enabled, active sessions may expand into
  // schedule-derived "Tidak Hadir" rows. Historical attendance rows of archived
  // sessions remain available through the record-based endpoints.
  assert.match(dailyReport, /where: \{ deletedAt: null, \.\.\.\(sessionWhere \?\? \{\}\) \}/);
  assert.match(dailyReport, /isSessionEnabledByConfiguration\(/);
  assert.match(dailyReport, /return version\?\.isActive && enabled && timeRange/);
  assert.doesNotMatch(sessionService, /setval|ALTER SEQUENCE/i);
});
