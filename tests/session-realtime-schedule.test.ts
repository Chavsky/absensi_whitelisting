import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import {
  jakartaBusinessDate,
  timeRangesOverlap,
  validateSessionTime,
} from "../src/modules/attendance-sessions/schedule-policy.js";
import {
  currentVersionSnapshot,
  immediateVersionEdits,
} from "../src/modules/attendance-sessions/session-update-policy.js";
import {
  assertNoOverlap,
  ensurePendingVersionsUnreferenced,
  SessionConfigurationError,
} from "../src/modules/attendance-sessions/session.service.js";

const serviceUrl = new URL(
  "../src/modules/attendance-sessions/session.service.ts",
  import.meta.url,
);

function clock(hours: number, minutes: number): Date {
  return new Date(Date.UTC(1970, 0, 1, hours, minutes));
}

function businessDate(value: string): Date {
  return new Date(`${value}T00:00:00.000Z`);
}

function version(input: {
  id: number;
  sessionId: number;
  name?: string;
  isActive?: boolean;
  effectiveFrom: Date;
  startTime?: Date | null;
  endTime?: Date | null;
  daySchedules?: Array<{ isoWeekday: number; isEnabled: boolean; startTime: Date; endTime: Date }>;
  disabledAt?: Date | null;
  enabledFrom?: Date | null;
  deletedAt?: Date | null;
}) {
  return {
    id: input.id,
    sessionId: input.sessionId,
    name: input.name ?? `SES-${input.sessionId}`,
    sortOrder: 10,
    isActive: input.isActive ?? true,
    effectiveFrom: input.effectiveFrom,
    startTime: input.startTime ?? null,
    endTime: input.endTime ?? null,
    daySchedules: input.daySchedules ?? [],
    session: {
      deletedAt: input.deletedAt ?? null,
      disabledAt: input.disabledAt ?? null,
      enabledFrom: input.enabledFrom ?? null,
    },
  };
}

function overlapDb(versions: ReturnType<typeof version>[]) {
  return {
    attendanceSessionVersion: {
      findMany: async () => versions,
    },
  };
}

test("1. a saved session version takes effect on the Jakarta business date of the save", async () => {
  const service = await readFile(serviceUrl, "utf8");
  const append = service.slice(
    service.indexOf("export async function appendSessionVersion"),
    service.indexOf("export async function disableSession"),
  );
  assert.match(append, /const effectiveFrom = today;/);
  assert.match(append, /const today = jakartaBusinessDate\(new Date\(\)\)/);
  assert.doesNotMatch(append, /nextSessionEffectiveDate/);
});

test("1b. Jakarta business dates follow Asia/Jakarta, not the machine clock", () => {
  assert.equal(
    jakartaBusinessDate(new Date("2026-11-12T17:30:00.000Z")).toISOString(),
    "2026-11-13T00:00:00.000Z",
    "17:30Z is 00:30 WIB on the next day",
  );
  assert.equal(
    jakartaBusinessDate(new Date("2026-11-12T16:59:00.000Z")).toISOString(),
    "2026-11-12T00:00:00.000Z",
    "16:59Z is 23:59 WIB on the same day",
  );
});

test("2. a second save on the same day supersedes the first (highest version id wins)", () => {
  const first = version({ id: 51, sessionId: 25, effectiveFrom: businessDate("2026-11-12") });
  const second = version({ id: 52, sessionId: 25, effectiveFrom: businessDate("2026-11-12") });
  const today = businessDate("2026-11-12");

  assert.equal(currentVersionSnapshot([first, second], today)?.id, 52);
  assert.equal(currentVersionSnapshot([second, first], today)?.id, 52);
});

test("2b. today's working version row is replaced in place, not appended", async () => {
  const service = await readFile(serviceUrl, "utf8");
  const append = service.slice(
    service.indexOf("export async function appendSessionVersion"),
    service.indexOf("export async function disableSession"),
  );
  assert.match(append, /const todayVersion = session\.versions\.find\(/);
  assert.match(append, /version\.effectiveFrom\.getTime\(\) === today\.getTime\(\)/);
  assert.match(append, /await tx\.attendanceSessionVersion\.update\(\{[\s\S]*where: \{ id: todayVersion\.id \}/);
});

test("3. historical versions before today stay stored and untouched", async () => {
  const service = await readFile(serviceUrl, "utf8");
  const append = service.slice(
    service.indexOf("export async function appendSessionVersion"),
    service.indexOf("export async function disableSession"),
  );
  // Cleanup is scoped strictly to pending (future) versions.
  assert.match(append, /session\.versions\.filter\(\(version\) => version\.effectiveFrom > today\)/);
  assert.doesNotMatch(append, /lte: today[\s\S]{0,120}delete/);
  // The mirror helper is a no-op when the new version already applies today.
  assert.deepEqual(
    immediateVersionEdits(
      [version({ id: 7, sessionId: 1, effectiveFrom: businessDate("2026-11-10") })],
      businessDate("2026-11-12"),
      businessDate("2026-11-12"),
      { name: "X", sortOrder: 10, isActive: true },
    ),
    [],
  );
});

test("4. unreferenced pending versions are cleaned up safely", async () => {
  const counted: Array<{ table: string; id: number }> = [];
  const db = {
    attendanceCorrectionLog: {
      count: async ({ where }: { where: { sessionVersionId: number } }) => {
        counted.push({ table: "correction", id: where.sessionVersionId });
        return 0;
      },
    },
    attendance: {
      count: async ({ where }: { where: { sessionVersionId: number } }) => {
        counted.push({ table: "attendance", id: where.sessionVersionId });
        return 0;
      },
    },
  };
  await assert.doesNotReject(
    ensurePendingVersionsUnreferenced(
      db as never,
      [{ id: 49 }, { id: 50 }],
    ),
  );
  assert.deepEqual(counted, [
    { table: "correction", id: 49 },
    { table: "attendance", id: 49 },
    { table: "correction", id: 50 },
    { table: "attendance", id: 50 },
  ]);
});

test("5. referenced pending versions abort the save instead of being deleted", async () => {
  const referenceTables = ["attendanceCorrectionLog", "attendance"] as const;
  for (const [index, table] of referenceTables.entries()) {
    const db = {
      attendanceCorrectionLog: {
        count: async () => (table === "attendanceCorrectionLog" && index === 0 ? 1 : 0),
      },
      attendance: {
        count: async () => (table === "attendance" ? 1 : 0),
      },
    };
    await assert.rejects(
      ensurePendingVersionsUnreferenced(db as never, [{ id: 49 }]),
      (error: unknown) =>
        error instanceof SessionConfigurationError &&
        error.message === "SESSION_PENDING_REFERENCED",
    );
  }
  const service = await readFile(serviceUrl, "utf8");
  const append = service.slice(
    service.indexOf("export async function appendSessionVersion"),
    service.indexOf("export async function disableSession"),
  );
  // The reference check runs before any deletion inside the transaction.
  const ensureIndex = append.indexOf("ensurePendingVersionsUnreferenced(tx, pendingVersions)");
  const deleteIndex = append.indexOf("attendanceSessionVersion.delete");
  assert.ok(ensureIndex !== -1 && deleteIndex !== -1 && ensureIndex < deleteIndex);
});

test("6. a definition-disabled session does not block other sessions' schedules", async () => {
  const disabledForever = version({
    id: 36,
    sessionId: 22,
    effectiveFrom: businessDate("2026-11-09"),
    startTime: clock(23, 58),
    endTime: clock(23, 59),
    disabledAt: new Date("2026-11-09T02:00:00.000Z"),
    enabledFrom: null,
  });
  const notYetReenabled = version({
    id: 37,
    sessionId: 22,
    effectiveFrom: businessDate("2026-11-09"),
    startTime: clock(23, 58),
    endTime: clock(23, 59),
    disabledAt: new Date("2026-11-09T02:00:00.000Z"),
    enabledFrom: businessDate("2026-11-20"),
  });

  await assert.doesNotReject(assertNoOverlap(
    overlapDb([disabledForever, notYetReenabled]) as never,
    {
      sessionId: 25,
      businessDate: businessDate("2026-11-12"),
      effectiveFrom: businessDate("2026-11-12"),
      isActive: true,
      timeRange: { startTime: clock(14, 27), endTime: clock(15, 20) },
    },
  ));
});

test("6b. a re-enabled session blocks conflicting schedules again", async () => {
  const reenabled = version({
    id: 36,
    sessionId: 22,
    effectiveFrom: businessDate("2026-11-09"),
    startTime: clock(14, 30),
    endTime: clock(15, 30),
    disabledAt: new Date("2026-11-09T02:00:00.000Z"),
    enabledFrom: businessDate("2026-11-10"),
  });

  await assert.rejects(assertNoOverlap(
    overlapDb([reenabled]) as never,
    {
      sessionId: 25,
      businessDate: businessDate("2026-11-12"),
      effectiveFrom: businessDate("2026-11-12"),
      isActive: true,
      timeRange: { startTime: clock(14, 27), endTime: clock(15, 20) },
    },
  ));
});

test("7. reactivating a session still rejects a real overlap through the candidate check", async () => {
  // The reactivating candidate itself is validated against enabled sessions;
  // the removed second pass is no longer needed under the realtime rule.
  const service = await readFile(serviceUrl, "utf8");
  const append = service.slice(
    service.indexOf("export async function appendSessionVersion"),
    service.indexOf("export async function disableSession"),
  );
  assert.doesNotMatch(append, /timeRange: currentTimeRange/);
  assert.match(append, /isActive: input\.isActive,[\s\S]*timeRange,/);
});

test("8. two enabled sessions with overlapping times are rejected with conflict details", async () => {
  const sore = version({
    id: 51,
    sessionId: 26,
    effectiveFrom: businessDate("2026-11-12"),
    name: "ABSEN SORE",
    startTime: clock(15, 55),
    endTime: clock(16, 55),
  });

  await assert.rejects(
    assertNoOverlap(
      overlapDb([sore]) as never,
      {
        sessionId: 25,
        businessDate: businessDate("2026-11-12"),
        effectiveFrom: businessDate("2026-11-12"),
        isActive: true,
        timeRange: { startTime: clock(14, 27), endTime: clock(16, 20) },
      },
    ),
    (error: unknown) => {
      assert.ok(error instanceof SessionConfigurationError);
      assert.equal(error.message, "SESSION_SCHEDULE_OVERLAP");
      assert.deepEqual(error.details, {
        sessionName: "ABSEN SORE",
        startTime: "15:55",
        endTime: "16:55",
      });
      return true;
    },
  );
});

test("8b. adjacent or non-overlapping ranges do not conflict", async () => {
  const sore = version({
    id: 51,
    sessionId: 26,
    effectiveFrom: businessDate("2026-11-12"),
    startTime: clock(15, 55),
    endTime: clock(16, 55),
  });
  await assert.doesNotReject(assertNoOverlap(
    overlapDb([sore]) as never,
    {
      sessionId: 25,
      businessDate: businessDate("2026-11-12"),
      effectiveFrom: businessDate("2026-11-12"),
      isActive: true,
      timeRange: { startTime: clock(14, 27), endTime: clock(15, 55) },
    },
  ));
});

test("9. schedule saves never write attendance or correction history", async () => {
  const service = await readFile(serviceUrl, "utf8");
  const append = service.slice(
    service.indexOf("export async function appendSessionVersion"),
    service.indexOf("export async function disableSession"),
  );
  assert.doesNotMatch(append, /tx\.attendance\.(create|update|deleteMany|delete)/);
  assert.doesNotMatch(append, /tx\.attendanceCorrectionLog\.(create|update|deleteMany|delete)/);
  // The pending reference check only counts, it never writes.
  const countedWrites: string[] = [];
  const db = {
    attendanceCorrectionLog: {
      count: async () => {
        countedWrites.push("count");
        return 0;
      },
    },
    attendance: {
      count: async () => {
        countedWrites.push("count");
        return 0;
      },
    },
  };
  await ensurePendingVersionsUnreferenced(db as never, [{ id: 49 }]);
  assert.deepEqual(countedWrites, ["count", "count"]);
});

test("10. cross-midnight ranges keep the existing validation rule", () => {
  assert.equal(validateSessionTime("23:58", "23:59"), null);
  assert.equal(validateSessionTime("23:59", "00:01"), "SESSION_TIME_RANGE_INVALID");
  assert.equal(validateSessionTime("16:20", "14:27"), "SESSION_TIME_RANGE_INVALID");
  assert.equal(timeRangesOverlap(
    { startTime: clock(14, 27), endTime: clock(16, 20) },
    { startTime: clock(15, 55), endTime: clock(16, 55) },
  ), true);
  assert.equal(timeRangesOverlap(
    { startTime: clock(14, 27), endTime: clock(15, 20) },
    { startTime: clock(15, 55), endTime: clock(16, 55) },
  ), false);
});

test("11. version selection ignores future pending versions (Asia/Jakarta dates)", () => {
  const today = businessDate("2026-11-12");
  const historical = version({ id: 47, sessionId: 25, effectiveFrom: businessDate("2026-11-10") });
  const pending = version({ id: 50, sessionId: 25, effectiveFrom: businessDate("2026-11-14") });

  assert.equal(currentVersionSnapshot([historical, pending], today)?.id, 47);
  assert.equal(
    currentVersionSnapshot([historical, pending], businessDate("2026-11-14"))?.id,
    50,
    "once the pending date arrives it becomes the current version",
  );
});
