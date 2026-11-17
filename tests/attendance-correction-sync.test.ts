import assert from "node:assert/strict";
import test from "node:test";

import { prisma } from "../src/config/database.js";
import {
  getAttendanceHistory,
  getTodayAttendance,
} from "../src/modules/attendance/attendance.service.js";

/**
 * Unit tests for correction synchronization on the employee-facing endpoints
 * (GET /api/attendance/today and GET /api/attendance/history).
 *
 * All Prisma delegates are replaced with in-memory stubs; no database is
 * touched. Fixtures model Wednesday 2026-11-11 (Asia/Jakarta) with one active
 * session 08:00-10:00 WIB per session ID.
 */

const TANGGAL = new Date("2026-11-11T00:00:00.000Z"); // Wednesday, business date
const NOW_IN_WINDOW = new Date("2026-11-11T02:00:00.000Z"); // 09:00 WIB
const NOW_AFTER = new Date("2026-11-11T04:30:00.000Z"); // 11:30 WIB, finished
const START = new Date(Date.UTC(1970, 0, 1, 8, 0)); // stored clock label 08:00
const END = new Date(Date.UTC(1970, 0, 1, 10, 0)); // stored clock label 10:00
const WAKTU_ABSEN = new Date("2026-11-11T02:05:41.000Z"); // 09:05:41 WIB
const NIK = "EMP-1";

interface TodayFixture {
  sessions: unknown[];
  records: unknown[];
  corrections: unknown[];
}

interface HistoryFixture {
  rows: unknown[];
  total: number;
  corrections: unknown[];
}

interface CallTracker {
  sessions: number;
  records: number;
  corrections: number;
  recordArgs: Array<Record<string, unknown>>;
  correctionArgs: Array<Record<string, unknown>>;
}

function attendanceRecord(sessionId: number, status: string) {
  return {
    id: sessionId * 100 + 1,
    sessionId,
    sessionNameSnapshot: `Sesi ${sessionId}`,
    status,
    waktuAbsen: WAKTU_ABSEN,
  };
}

function sessionDefinition(id: number, key: string, sortOrder: number) {
  return {
    id,
    key,
    deletedAt: null,
    disabledAt: null,
    enabledFrom: null,
    createdAt: TANGGAL,
    versions: [
      {
        id: id * 10,
        isActive: true,
        name: `Sesi ${id}`,
        sortOrder,
        effectiveFrom: TANGGAL,
        startTime: START,
        endTime: END,
        daySchedules: [],
      },
    ],
  };
}

function installStubs(
  key: "attendance" | "attendanceSessionDefinition" | "attendanceCorrectionLog" | "$transaction",
  impl: unknown,
): PropertyDescriptor | undefined {
  const target = prisma as unknown as Record<string, unknown>;
  const previous = Object.getOwnPropertyDescriptor(target, key);
  Object.defineProperty(target, key, {
    value: impl,
    configurable: true,
    writable: true,
  });
  return previous;
}

function restoreAll(entries: Array<[string, PropertyDescriptor | undefined]>) {
  const target = prisma as unknown as Record<string, unknown>;
  for (const [key, previous] of entries) {
    if (previous) Object.defineProperty(target, key, previous);
    else delete target[key];
  }
}

function installTodayStubs(fixture: TodayFixture) {
  const calls: CallTracker = {
    sessions: 0,
    records: 0,
    corrections: 0,
    recordArgs: [],
    correctionArgs: [],
  };
  const saved: Array<[string, PropertyDescriptor | undefined]> = [];
  saved.push([
    "attendanceSessionDefinition",
    installStubs("attendanceSessionDefinition", {
      findMany: async () => {
        calls.sessions += 1;
        return fixture.sessions;
      },
    }),
  ]);
  saved.push([
    "attendance",
    installStubs("attendance", {
      findMany: async (args: Record<string, unknown>) => {
        calls.records += 1;
        calls.recordArgs.push(args);
        return fixture.records;
      },
      count: async () => 0,
    }),
  ]);
  saved.push([
    "attendanceCorrectionLog",
    installStubs("attendanceCorrectionLog", {
      findMany: async (args: Record<string, unknown>) => {
        calls.corrections += 1;
        calls.correctionArgs.push(args);
        return fixture.corrections;
      },
    }),
  ]);
  saved.push([
    "$transaction",
    installStubs(
      "$transaction",
      async (operations: Promise<unknown>[]) => Promise.all(operations),
    ),
  ]);
  return {
    calls,
    restore: () => restoreAll(saved),
  };
}

function installHistoryStubs(fixture: HistoryFixture) {
  const calls: CallTracker = {
    sessions: 0,
    records: 0,
    corrections: 0,
    recordArgs: [],
    correctionArgs: [],
  };
  const saved: Array<[string, PropertyDescriptor | undefined]> = [];
  saved.push([
    "attendance",
    installStubs("attendance", {
      findMany: async (args: Record<string, unknown>) => {
        calls.records += 1;
        calls.recordArgs.push(args);
        return fixture.rows;
      },
      count: async () => fixture.total,
    }),
  ]);
  saved.push([
    "attendanceCorrectionLog",
    installStubs("attendanceCorrectionLog", {
      findMany: async (args: Record<string, unknown>) => {
        calls.corrections += 1;
        calls.correctionArgs.push(args);
        return fixture.corrections;
      },
    }),
  ]);
  saved.push([
    "$transaction",
    installStubs(
      "$transaction",
      async (operations: Promise<unknown>[]) => Promise.all(operations),
    ),
  ]);
  return {
    calls,
    restore: () => restoreAll(saved),
  };
}

test("today: uncorrected Hadir keeps original status, time, and guard fields", async () => {
  const fixture: TodayFixture = {
    sessions: [sessionDefinition(7, "sesi_007", 1), sessionDefinition(8, "sesi_008", 2)],
    records: [attendanceRecord(7, "Hadir")],
    corrections: [],
  };
  const stubs = installTodayStubs(fixture);
  test.after(stubs.restore);

  const rows = await getTodayAttendance(NIK, NOW_IN_WINDOW);
  assert.equal(rows.length, 2);

  const sessionA = rows.find((row) => row.key === "sesi_007");
  const sessionB = rows.find((row) => row.key === "sesi_008");
  assert.ok(sessionA);
  assert.ok(sessionB);

  assert.equal(sessionA.status, "Hadir");
  assert.equal(sessionA.id, 701);
  assert.ok(sessionA.finalized);
  assert.equal(sessionA.canAttend, false);
  assert.equal(sessionA.waktuAbsen?.getTime(), WAKTU_ABSEN.getTime());
  assert.equal(sessionA.startTime, "08:00");
  assert.equal(sessionA.endTime, "10:00");

  assert.equal(sessionB.status, null);
  assert.equal(sessionB.canAttend, true);
  assert.equal(sessionB.finalized, false);
  assert.equal(sessionB.waktuAbsen, null);

  // Exactly one batched correction query, scoped to the employee and date.
  assert.equal(stubs.calls.corrections, 1);
  assert.equal(stubs.calls.records, 1);
  const recordArgs = stubs.calls.recordArgs[0];
  assert.equal((recordArgs.where as Record<string, unknown>).nik, NIK);
  assert.equal(
    ((recordArgs.where as Record<string, unknown>).tanggal as Date).getTime(),
    TANGGAL.getTime(),
  );
  const correctionArgs = stubs.calls.correctionArgs[0];
  assert.equal((correctionArgs.where as Record<string, unknown>).nik, NIK);
  assert.equal(
    ((correctionArgs.where as Record<string, unknown>).attendanceDate as Date).getTime(),
    TANGGAL.getTime(),
  );
});

test("today: Hadir corrected to Tidak Hadir no longer shows attendance evidence", async () => {
  const fixture: TodayFixture = {
    sessions: [sessionDefinition(7, "sesi_007", 1), sessionDefinition(8, "sesi_008", 2)],
    records: [attendanceRecord(7, "Hadir")],
    corrections: [{ sessionId: 7, revision: 1, newStatus: "Tidak Hadir" }],
  };
  const stubs = installTodayStubs(fixture);
  test.after(stubs.restore);

  const rows = await getTodayAttendance(NIK, NOW_IN_WINDOW);
  const sessionA = rows.find((row) => row.key === "sesi_007");
  const sessionB = rows.find((row) => row.key === "sesi_008");
  assert.ok(sessionA);
  assert.ok(sessionB);

  assert.equal(sessionA.status, "Tidak Hadir");
  assert.equal(sessionA.waktuAbsen, null);
  assert.ok(sessionA.finalized, "original record keeps finalized true");
  assert.equal(sessionA.canAttend, false, "record still blocks re-attendance");

  assert.equal(sessionB.status, null, "other session untouched");
  assert.equal(sessionB.canAttend, true);
});

test("today: derived Tidak Hadir corrected to Hadir uses the correction", async () => {
  const fixture: TodayFixture = {
    sessions: [sessionDefinition(7, "sesi_007", 1)],
    records: [],
    corrections: [],
  };
  const stubs = installTodayStubs(fixture);
  test.after(stubs.restore);

  // Baseline: session finished with no record and no correction -> Tidak Hadir.
  const baseline = await getTodayAttendance(NIK, NOW_AFTER);
  assert.equal(baseline[0].status, "Tidak Hadir");
  assert.ok(baseline[0].finalized);
  assert.equal(baseline[0].canAttend, false);
  assert.equal(baseline[0].waktuAbsen, null);

  // Admin corrects the derived absence to Hadir.
  fixture.corrections = [{ sessionId: 7, revision: 1, newStatus: "Hadir" }];
  const corrected = await getTodayAttendance(NIK, NOW_AFTER);
  assert.equal(corrected[0].status, "Hadir");
  assert.equal(corrected[0].waktuAbsen, null, "no attendance row means no time");
  assert.ok(corrected[0].finalized);
  assert.equal(corrected[0].canAttend, false);
});

test("today: highest revision wins regardless of log order", async () => {
  const fixture: TodayFixture = {
    sessions: [sessionDefinition(7, "sesi_007", 1)],
    records: [attendanceRecord(7, "Hadir")],
    corrections: [
      { sessionId: 7, revision: 1, newStatus: "Tidak Hadir" },
      { sessionId: 7, revision: 2, newStatus: "Hadir" },
    ],
  };
  const stubs = installTodayStubs(fixture);
  test.after(stubs.restore);

  const naturalOrder = await getTodayAttendance(NIK, NOW_IN_WINDOW);
  assert.equal(naturalOrder[0].status, "Hadir");

  fixture.corrections = [
    { sessionId: 7, revision: 2, newStatus: "Hadir" },
    { sessionId: 7, revision: 1, newStatus: "Tidak Hadir" },
  ];
  const reversedOrder = await getTodayAttendance(NIK, NOW_IN_WINDOW);
  assert.equal(reversedOrder[0].status, "Hadir");
});

test("today: latest Tidak Hadir revision wins over older Hadir correction", async () => {
  const fixture: TodayFixture = {
    sessions: [sessionDefinition(7, "sesi_007", 1)],
    records: [attendanceRecord(7, "Hadir")],
    corrections: [
      { sessionId: 7, revision: 1, newStatus: "Hadir" },
      { sessionId: 7, revision: 2, newStatus: "Tidak Hadir" },
    ],
  };
  const stubs = installTodayStubs(fixture);
  test.after(stubs.restore);

  const rows = await getTodayAttendance(NIK, NOW_IN_WINDOW);
  assert.equal(rows[0].status, "Tidak Hadir");
  assert.equal(rows[0].waktuAbsen, null);
  assert.equal(rows[0].canAttend, false);
});

test("today: PWA response shape stays within the validated contract", async () => {
  const fixture: TodayFixture = {
    sessions: [sessionDefinition(7, "sesi_007", 1)],
    records: [attendanceRecord(7, "Hadir")],
    corrections: [],
  };
  const stubs = installTodayStubs(fixture);
  test.after(stubs.restore);

  const rows = await getTodayAttendance(NIK, NOW_IN_WINDOW);
  const expectedKeys = [
    "sessionId",
    "key",
    "name",
    "sortOrder",
    "startTime",
    "endTime",
    "isEnabled",
    "status",
    "finalized",
    "canAttend",
    "waktuAbsen",
    "id",
  ].sort();
  assert.deepEqual(Object.keys(rows[0]).sort(), expectedKeys);
  assert.deepEqual(
    [rows[0].status, rows[0].finalized, rows[0].canAttend],
    ["Hadir", true, false],
  );
});

test("history: corrected record shows the effective status with intact pagination", async () => {
  const fixture: HistoryFixture = {
    rows: [
      {
        id: 201,
        tanggal: TANGGAL,
        sesi: null,
        sessionId: 7,
        sessionNameSnapshot: "Sesi 7",
        session: { key: "sesi_007" },
        waktuAbsen: WAKTU_ABSEN,
        status: "Hadir",
      },
    ],
    total: 1,
    corrections: [
      { sessionId: 7, attendanceDate: TANGGAL, revision: 1, newStatus: "Tidak Hadir" },
    ],
  };
  const stubs = installHistoryStubs(fixture);
  test.after(stubs.restore);

  const result = await getAttendanceHistory(NIK, 1, 10, { start: TANGGAL, end: TANGGAL });
  assert.equal(result.data.length, 1);
  assert.equal(result.data[0].status, "Tidak Hadir");
  assert.equal(result.data[0].sessionKey, "sesi_007");
  assert.equal(result.data[0].sessionName, "Sesi 7");
  assert.equal("sessionId" in result.data[0], false, "raw sessionId stays internal");
  assert.equal("session" in result.data[0], false);
  assert.deepEqual(result.pagination, { page: 1, limit: 10, total: 1, totalPages: 1 });
  assert.equal(stubs.calls.corrections, 1, "one batched correction query");
  const correctionArgs = stubs.calls.correctionArgs[0];
  assert.equal((correctionArgs.where as Record<string, unknown>).nik, NIK);
  assert.deepEqual(
    (correctionArgs.where as Record<string, unknown>).attendanceDate,
    { in: [TANGGAL] },
  );
});

test("history: records without corrections keep their original status", async () => {
  const fixture: HistoryFixture = {
    rows: [
      {
        id: 202,
        tanggal: TANGGAL,
        sesi: null,
        sessionId: 8,
        sessionNameSnapshot: "Sesi 8",
        session: { key: "sesi_008" },
        waktuAbsen: WAKTU_ABSEN,
        status: "Hadir",
      },
    ],
    total: 1,
    corrections: [],
  };
  const stubs = installHistoryStubs(fixture);
  test.after(stubs.restore);

  const result = await getAttendanceHistory(NIK, 1, 10);
  assert.equal(result.data[0].status, "Hadir");
});

test("history: pagination, date filter, and query shape stay unchanged", async () => {
  const fixture: HistoryFixture = { rows: [], total: 0, corrections: [] };
  const stubs = installHistoryStubs(fixture);
  test.after(stubs.restore);

  const nextDay = new Date(TANGGAL.getTime() + 86_400_000);
  const result = await getAttendanceHistory(NIK, 2, 5, { start: TANGGAL, end: nextDay });
  assert.deepEqual(result.data, []);
  assert.deepEqual(result.pagination, { page: 2, limit: 5, total: 0, totalPages: 0 });

  const args = stubs.calls.recordArgs[0];
  assert.equal(args.skip, 5);
  assert.equal(args.take, 5);
  const where = args.where as Record<string, unknown>;
  assert.equal(where.nik, NIK);
  assert.deepEqual((where.tanggal as Record<string, unknown>).gte, TANGGAL);
  assert.deepEqual((where.tanggal as Record<string, unknown>).lt, nextDay);
});
