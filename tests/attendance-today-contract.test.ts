import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const attendanceServiceUrl = new URL(
  "../src/modules/attendance/attendance.service.ts",
  import.meta.url,
);
const attendanceControllerUrl = new URL(
  "../src/modules/attendance/attendance.controller.ts",
  import.meta.url,
);
const attendanceRoutesUrl = new URL(
  "../src/modules/attendance/attendance.routes.ts",
  import.meta.url,
);

function section(source: string, startMarker: string, endMarker: string): string {
  const start = source.indexOf(startMarker);
  const end = source.indexOf(endMarker);
  assert.notEqual(start, -1, `missing ${startMarker}`);
  assert.notEqual(end, -1, `missing ${endMarker}`);
  assert.ok(end > start, `${endMarker} must follow ${startMarker}`);
  return source.slice(start, end);
}

async function loadContracts() {
  const [service, controller, routes] = await Promise.all([
    readFile(attendanceServiceUrl, "utf8"),
    readFile(attendanceControllerUrl, "utf8"),
    readFile(attendanceRoutesUrl, "utf8"),
  ]);
  return {
    service,
    todayService: section(
      service,
      "export async function getTodayAttendance",
      "export async function getAttendanceHistory",
    ),
    createService: section(
      service,
      "export async function createAttendance",
      "export async function getTodayAttendance",
    ),
    todayController: section(
      controller,
      "export async function getTodayAttendance",
      "export async function getAttendanceHistory",
    ),
    createController: section(
      controller,
      "export async function createAttendance",
      "export async function getTodayAttendance",
    ),
    routes,
  };
}

test("attendance today exposes the database session ID and every PWA-required field", async () => {
  const { todayService } = await loadContracts();

  // sessionId must come from the persisted session definition, never from the
  // editable key or from a client-supplied value.
  assert.match(todayService, /sessionId:\s*session\.id/);
  assert.doesNotMatch(todayService, /sessionId:\s*Number\(/);

  assert.match(todayService, /key:\s*session\.key/);
  assert.match(todayService, /name:\s*version\.name/);
  assert.match(todayService, /sortOrder:\s*version\.sortOrder/);
  assert.match(todayService, /startTime:\s*formatClockTime\(timeRange\.startTime\)/);
  assert.match(todayService, /endTime:\s*formatClockTime\(timeRange\.endTime\)/);
  assert.match(todayService, /isEnabled,/);
  assert.match(todayService, /attendanceCorrectionLog\.findMany\(/);
  assert.match(todayService, /latestCorrectionByRevision\(/);
  assert.match(
    todayService,
    /const status = effectiveAttendanceStatus\(\{\s*correctionStatus:\s*latestCorrections\.get\(String\(session\.id\)\)\?\.newStatus,\s*attendanceStatus:\s*record\?\.status,\s*sessionFinished:\s*finished,\s*\}\)/,
  );
  assert.match(todayService, /\n\s+status,\r?\n\s+finalized:/);
  assert.match(todayService, /finalized:\s*Boolean\(record\)\s*\|\|\s*\(isEnabled\s*&&\s*finished\)/);
  assert.match(
    todayService,
    /canAttend:\s*isEnabled\s*&&\s*!record\s*&&\s*isWithinTimeRange\(now,\s*timeRange\)/,
  );
  assert.match(
    todayService,
    /waktuAbsen:\s*status === "Hadir"\s*\?\s*record\?\.waktuAbsen\s*\?\?\s*null\s*:\s*null/,
  );
});

test("attendance today keeps archived sessions hidden and realtime deactivation effective", async () => {
  const { todayService } = await loadContracts();

  assert.match(todayService, /where:\s*\{\s*deletedAt:\s*null\s*\}/);
  assert.match(todayService, /isSessionEnabledByConfiguration\(/);
  assert.match(todayService, /resolveSessionTimeRange\(version,\s*tanggal\)/);
  assert.match(todayService, /if \(!version\?\.isActive\) return \[\];/);
});

test("attendance today is dynamic, ordered, and valid when there are no sessions", async () => {
  const { todayService } = await loadContracts();

  assert.match(todayService, /if \(!isJakartaWorkday\(tanggal\)\) return \[\];/);
  assert.match(todayService, /\.flatMap\(/);
  assert.match(todayService, /\.sort\(/);
  assert.doesNotMatch(todayService, /slice\(0,\s*4\)/);
  assert.doesNotMatch(todayService, /masuk_pagi|istirahat_keluar|istirahat_masuk|"pulang"/);
});

test("attendance today controller keeps the standard envelope and employee authentication", async () => {
  const { todayController, routes } = await loadContracts();

  assert.match(todayController, /res\.status\(200\)\.json\(\{ success: true, data \}\)/);
  assert.match(routes, /router\.get\("\/today",\s*authenticateUser,\s*getTodayAttendance\)/);
});

test("attendance history applies the latest correction without exposing sessionId", async () => {
  const { service } = await loadContracts();
  const historyStart = service.indexOf("export async function getAttendanceHistory");
  assert.notEqual(historyStart, -1);
  const historyService = service.slice(historyStart);

  assert.match(historyService, /attendanceCorrectionLog\.findMany\(/);
  assert.match(historyService, /attendanceDate:\s*\{\s*in:\s*data\.map\(\(record\) => record\.tanggal\)\s*\}/);
  assert.match(historyService, /latestCorrectionByRevision\(/);
  assert.match(historyService, /effectiveAttendanceStatus\(\{/);
  assert.match(historyService, /sessionFinished:\s*false/);
  assert.match(historyService, /\(\{ session, sessionNameSnapshot, sessionId, \.\.\.record \}\)/);
});

test("attendance POST remains key-based and does not accept sessionId from the client", async () => {
  const { createController, createService, routes } = await loadContracts();

  assert.match(createController, /const \{ sesi \} = req\.body \?\? \{\};/);
  assert.match(createController, /createAttendanceRecord\(nik, sesi\)/);
  assert.doesNotMatch(createController, /sessionId/);

  assert.match(createService, /sesi:\s*null/);
  assert.match(createService, /sessionId:\s*session\.id/);
  assert.match(createService, /sessionVersionId:\s*version\.id/);
  assert.match(createService, /source:\s*"PWA"/);

  assert.match(routes, /router\.post\("\/",\s*authenticateUser,\s*createAttendance\)/);
});
