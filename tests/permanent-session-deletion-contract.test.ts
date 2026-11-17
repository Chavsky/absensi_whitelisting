import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const adminWebRoot = "../../FRONTEND ABSEN GOOGLE AI STUDIO/src";
const pwaRoot = "../../FRONTEND ABSEN GOOGLE AI STUDIO USER/src";

const serviceUrl = new URL("../src/modules/attendance-sessions/session.service.ts", import.meta.url);
const controllerUrl = new URL("../src/modules/attendance-sessions/session.controller.ts", import.meta.url);
const routesUrl = new URL("../src/modules/attendance-sessions/session.routes.ts", import.meta.url);
const reportServiceUrl = new URL("../src/modules/reports/report.service.ts", import.meta.url);
const adminSessionsPageUrl = new URL(`${adminWebRoot}/features/attendance-sessions/AttendanceSessionsPage.tsx`, import.meta.url);
const adminReportTypesUrl = new URL(`${adminWebRoot}/types/report.ts`, import.meta.url);
const adminDashboardUrl = new URL(`${adminWebRoot}/features/dashboard/DashboardPage.tsx`, import.meta.url);
const adminStatisticsUrl = new URL(`${adminWebRoot}/features/statistics/StatisticsPage.tsx`, import.meta.url);
const adminReportsUrl = new URL(`${adminWebRoot}/features/reports/ReportsPage.tsx`, import.meta.url);
const pwaDashboardUrl = new URL(`${pwaRoot}/features/dashboard/DashboardPage.tsx`, import.meta.url);
const pwaApiUrl = new URL(`${pwaRoot}/services/api.ts`, import.meta.url);

function section(source: string, startMarker: string, endMarker?: string): string {
  const start = source.indexOf(startMarker);
  assert.notEqual(start, -1, `missing marker ${startMarker}`);
  const end = endMarker ? source.indexOf(endMarker, start) : source.length;
  assert.notEqual(end, -1, `missing end marker ${endMarker}`);
  return source.slice(start, end);
}

test("permanent delete is a single transaction that deletes relations in FK-safe order", async () => {
  const service = await readFile(serviceUrl, "utf8");
  const block = section(
    service,
    "export async function deleteSessionPermanently",
    "export async function correctAttendance",
  );

  assert.match(block, /prisma\.\$transaction\(async \(tx\)/);
  assert.match(block, /await lockConfiguration\(tx\)/);
  assert.match(block, /FOR UPDATE/);

  const steps = [
    "attendanceCorrectionLog.deleteMany",
    "attendance.deleteMany",
    "attendanceSessionDaySchedule.deleteMany",
    "attendanceSessionVersion.deleteMany",
    "attendanceSessionDefinition.delete",
  ].map((call) => block.indexOf(call));
  for (const [index, position] of steps.entries()) {
    assert.ok(position !== -1, `missing delete step ${steps[index - 1]} -> ${steps[index]}`);
    if (index > 0) assert.ok(position > steps[index - 1], `delete step ${index} out of FK order`);
  }

  // Real deletion: no soft-delete columns are written anywhere in the block.
  assert.doesNotMatch(block, /deletedAt:|isArchived|disabledAt:/);
});

test("permanent delete rejects active sessions and archives are still deletable", async () => {
  const service = await readFile(serviceUrl, "utf8");
  const block = section(
    service,
    "export async function deleteSessionPermanently",
    "export async function correctAttendance",
  );
  assert.match(block, /session\.deletedAt === null && Boolean\(/);
  assert.match(block, /if \(isEnabled\) throw new SessionConfigurationError\("SESSION_ACTIVE"\)/);
});

test("permanent delete preserves general audit logs and records the admin identity from the backend", async () => {
  const service = await readFile(serviceUrl, "utf8");
  const block = section(
    service,
    "export async function deleteSessionPermanently",
    "export async function correctAttendance",
  );
  assert.match(block, /securityAuditLog\.create\(/);
  assert.match(block, /action: "attendance_session_deleted_permanently"/);
  assert.match(block, /adminId: input\.adminId/);
  assert.doesNotMatch(block, /adminIdentity|req\.body/);
});

test("permanent delete never resets the key sequence and session keys stay sequence-derived", async () => {
  const service = await readFile(serviceUrl, "utf8");
  assert.match(service, /nextval\(pg_get_serial_sequence\('attendance_sessions', 'id'\)\)/);
  const deleteBlock = section(
    service,
    "export async function deleteSessionPermanently",
    "export async function correctAttendance",
  );
  assert.doesNotMatch(deleteBlock, /setval|ALTER SEQUENCE|TRUNCATE/i);
});

test("permanent delete endpoint is admin-only, separate from disable and archive", async () => {
  const [controller, routes] = await Promise.all([
    readFile(controllerUrl, "utf8"),
    readFile(routesUrl, "utf8"),
  ]);
  assert.match(routes, /adminSessionRouter\.use\(authenticateAdmin\);[\s\S]*delete\("\/:key\/permanent", deleteAdminSessionPermanently\)/);
  assert.match(routes, /delete\("\/:key\/archive", archiveAdminSession\)/);
  assert.match(routes, /delete\("\/:key", disableAdminSession\)/);
  const handler = section(
    controller,
    "export async function deleteAdminSessionPermanently",
    "export async function correctAdminAttendance",
  );
  assert.match(handler, /deleteSessionPermanently\(\{[\s\S]*key: req\.params\.key[\s\S]*adminId: req\.admin\.id/);
  assert.match(handler, /configurationError\(error, res\)/);
});

test("archived sessions have an explicit admin-only read path for one-by-one deletion", async () => {
  const [service, routes] = await Promise.all([
    readFile(serviceUrl, "utf8"),
    readFile(routesUrl, "utf8"),
  ]);
  const archivedList = section(
    service,
    "export async function listArchivedSessionsForAdmin",
    "export async function createSession",
  );
  assert.match(archivedList, /where: \{ deletedAt: \{ not: null \} \}/);
  assert.match(routes, /get\("\/archived", listArchivedAdminSessions\)/);
});

test("admin UI exposes permanent delete distinctly and never deletes archived sessions automatically", async () => {
  const page = await readFile(adminSessionsPageUrl, "utf8");
  assert.match(page, /\/permanent`/);
  assert.match(page, /Hapus Permanen/);
  assert.match(page, /Nonaktifkan Sesi/);
  assert.match(page, /Arsipkan/);
  assert.match(page, /Sesi Terarsip/);
  assert.match(page, /showArchived/);
  // Every permanent delete is triggered by an explicit admin click on a single session.
  assert.match(page, /permanentDeleteMutation\.mutate\(permanentDeleteTarget\)/);
  assert.match(page, /invalidateQueries\(\{ queryKey: \['attendanceSessions'\] \}\)/);
  assert.doesNotMatch(page, /Promise\.all\(\s*sessions\.map|forEach[\s\S]*permanentDeleteMutation/);
});

test("admin UI keeps version history hidden and lists archived sessions compactly", async () => {
  const page = await readFile(adminSessionsPageUrl, "utf8");
  assert.match(page, /latestVersion\(session\)/);
  assert.doesNotMatch(page, /Riwayat Versi|VersionHistory|riwayat versi/i);
});

test("admin report types are dynamic and no longer carry the fixed four-session fields", async () => {
  const types = await readFile(adminReportTypesUrl, "utf8");
  assert.match(types, /recordPerSesi: Array<\{ key: string; count: number \}>/);
  assert.match(types, /sessions: AttendanceSummarySession\[\]/);
  assert.doesNotMatch(types, /recordMasukPagi|recordIstirahatKeluar|recordIstirahatMasuk|recordPulang/);
  assert.doesNotMatch(types, /jumlahMasukPagi|jumlahIstirahatKeluar|jumlahIstirahatMasuk|jumlahPulang|jumlahSesiBelumDiisi/);
});

test("admin dashboard, statistics, and reports render every backend session without fixed caps", async () => {
  const [dashboard, statistics, reports] = await Promise.all([
    readFile(adminDashboardUrl, "utf8"),
    readFile(adminStatisticsUrl, "utf8"),
    readFile(adminReportsUrl, "utf8"),
  ]);
  assert.match(dashboard, /metrics\.recordPerSesi\.map/);
  assert.match(dashboard, /employee\.sessions\.map/);
  assert.doesNotMatch(dashboard, /slice\(0,\s*10\)|slice\(0,\s*4\)/);
  assert.match(statistics, /metrics\.recordPerSesi\.map/);
  assert.doesNotMatch(statistics, /recordMasukPagi|Istirahat/);
  assert.match(reports, /summarySessionKeys/);
  assert.match(reports, /row\.sessions\.find/);
  assert.doesNotMatch(reports, /jumlahMasukPagi|jumlahSesiBelumDiisi/);
});

test("employee PWA stays fully dynamic with no fixed session count", async () => {
  const [pwaDashboard, pwaApi] = await Promise.all([
    readFile(pwaDashboardUrl, "utf8"),
    readFile(pwaApiUrl, "utf8"),
  ]);
  assert.match(pwaDashboard, /todayData\?\.map\(\(sessionState\)/);
  assert.doesNotMatch(pwaDashboard, /slice\(0,\s*(4|10)\)|\.length\s*[<>=!]+\s*(4|10)/);
  // The PWA requires a backend session id; no static session array exists.
  assert.match(pwaApi, /sessionId/);
  assert.doesNotMatch(pwaApi, /sesi_\d|MASUK_PAGI|ISTIRAHAT|PULANG/);
});

test("backend daily report never derives Tidak Hadir from archived or disabled sessions", async () => {
  const reportService = await readFile(reportServiceUrl, "utf8");
  const daily = section(
    reportService,
    "export async function getDailyAttendanceReport",
    "export async function getAttendancePeriodReport",
  );
  assert.match(daily, /where: \{ deletedAt: null, \.\.\.\(sessionWhere \?\? \{\}\) \}/);
  assert.match(daily, /const enabled = isSessionEnabledByConfiguration\(/);
  assert.match(daily, /return version\?\.isActive && enabled && timeRange/);
});

test("backend statistics list every existing session including those without records", async () => {
  const reportService = await readFile(reportServiceUrl, "utf8");
  const statistics = section(
    reportService,
    "export async function getAttendanceStatistics",
    "export async function* iterateAttendanceExport",
  );
  assert.match(statistics, /prisma\.attendanceSessionDefinition\.findMany\(\{\s*orderBy: \{ key: "asc" \}/);
  assert.match(statistics, /recordPerSesi: sessions\.map\(\(session\) => \(\{/);
});
