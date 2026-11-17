import assert from "node:assert/strict";
import test from "node:test";
import {
  formatClockTime,
  isJakartaWorkday,
  isSessionEnabledByConfiguration,
  isTimeRangeFinished,
  isWithinTimeRange,
  jakartaBusinessDate,
  jakartaDateKey,
  nextSessionEffectiveDate,
  resolveSessionTimeRange,
  timeRangesOverlap,
  validateSessionTime,
} from "../src/modules/attendance-sessions/schedule-policy.js";

function instant(value: string): Date {
  return new Date(value);
}

test("session attendance window is inclusive at start and exclusive at end in Jakarta time", () => {
  const range = {
    startTime: new Date("1970-01-01T08:00:00Z"),
    endTime: new Date("1970-01-01T09:00:00Z"),
  };
  assert.equal(isWithinTimeRange(instant("2026-11-09T01:00:00Z"), range), true);
  assert.equal(isWithinTimeRange(instant("2026-11-09T01:59:59Z"), range), true);
  assert.equal(isWithinTimeRange(instant("2026-11-09T02:00:00Z"), range), false);
});

test("global workdays include Monday through Friday and exclude Saturday and Sunday", () => {
  for (const date of [
    "2026-11-09",
    "2026-11-10",
    "2026-11-11",
    "2026-11-12",
    "2026-11-13",
  ]) {
    assert.equal(isJakartaWorkday(jakartaBusinessDate(instant(`${date}T00:00:00Z`))), true, date);
  }
  for (const date of ["2026-11-14", "2026-11-15"]) {
    assert.equal(isJakartaWorkday(jakartaBusinessDate(instant(`${date}T00:00:00Z`))), false, date);
  }
});

test("effective dates are selected automatically without retroactively changing versions", () => {
  const today = instant("2026-11-06T00:00:00.000Z");
  assert.equal(nextSessionEffectiveDate(today).toISOString(), today.toISOString());
  assert.equal(
    nextSessionEffectiveDate(today, instant("2026-11-05T00:00:00.000Z")).toISOString(),
    today.toISOString(),
  );
  assert.equal(
    nextSessionEffectiveDate(today, today).toISOString(),
    "2026-11-07T00:00:00.000Z",
  );
  assert.equal(
    nextSessionEffectiveDate(today, instant("2026-11-10T00:00:00.000Z")).toISOString(),
    "2026-11-11T00:00:00.000Z",
  );
});

test("realtime deactivation blocks the current session until its configured reactivation date", () => {
  const today = instant("2026-11-06T00:00:00.000Z");
  const tomorrow = instant("2026-11-07T00:00:00.000Z");
  const disabledAt = instant("2026-11-06T08:15:00.000Z");

  assert.equal(isSessionEnabledByConfiguration(null, null, today), true);
  assert.equal(isSessionEnabledByConfiguration(disabledAt, null, today), false);
  assert.equal(isSessionEnabledByConfiguration(disabledAt, tomorrow, today), false);
  assert.equal(isSessionEnabledByConfiguration(disabledAt, tomorrow, tomorrow), true);
});

test("a unified session time range applies on every workday and never on weekends", () => {
  const version = {
    startTime: new Date("1970-01-01T08:00:00Z"),
    endTime: new Date("1970-01-01T09:00:00Z"),
    daySchedules: [],
  };
  for (const date of [
    "2026-11-09",
    "2026-11-10",
    "2026-11-11",
    "2026-11-12",
    "2026-11-13",
  ]) {
    const businessDate = jakartaBusinessDate(instant(`${date}T00:00:00Z`));
    assert.deepEqual(resolveSessionTimeRange(version, businessDate), {
      startTime: version.startTime,
      endTime: version.endTime,
    });
  }
  for (const date of ["2026-11-14", "2026-11-15"]) {
    assert.equal(resolveSessionTimeRange(
      version,
      jakartaBusinessDate(instant(`${date}T00:00:00Z`)),
    ), null);
  }
});

test("unified attendance window uses inclusive start and exclusive end boundaries", () => {
  const range = {
    startTime: new Date("1970-01-01T08:00:00Z"),
    endTime: new Date("1970-01-01T09:00:00Z"),
  };
  assert.equal(isWithinTimeRange(instant("2026-11-09T00:59:59Z"), range), false);
  assert.equal(isWithinTimeRange(instant("2026-11-09T01:00:00Z"), range), true);
  assert.equal(isWithinTimeRange(instant("2026-11-09T01:30:00Z"), range), true);
  assert.equal(isWithinTimeRange(instant("2026-11-09T02:00:00Z"), range), false);
  assert.equal(isWithinTimeRange(instant("2026-11-09T02:00:01Z"), range), false);
  const monday = jakartaBusinessDate(instant("2026-11-09T00:00:00Z"));
  assert.equal(isTimeRangeFinished(instant("2026-11-09T01:59:59Z"), monday, range), false);
  assert.equal(isTimeRangeFinished(instant("2026-11-09T02:00:00Z"), monday, range), true);
  assert.equal(formatClockTime(range.startTime), "08:00");
  assert.equal(formatClockTime("16:45:00"), "16:45");
});

test("legacy weekly versions remain readable but weekend schedules are ignored", () => {
  const legacy = {
    daySchedules: [
      { isoWeekday: 1, isEnabled: true, startTime: "08:00", endTime: "09:00" },
      { isoWeekday: 6, isEnabled: true, startTime: "10:00", endTime: "11:00" },
    ],
  };
  assert.deepEqual(resolveSessionTimeRange(
    legacy,
    jakartaBusinessDate(instant("2026-11-09T00:00:00Z")),
  ), { startTime: "08:00", endTime: "09:00" });
  assert.equal(resolveSessionTimeRange(
    legacy,
    jakartaBusinessDate(instant("2026-11-14T00:00:00Z")),
  ), null);
});

test("unified session time validation rejects invalid and cross-midnight ranges", () => {
  assert.equal(validateSessionTime("08:00", "09:00"), null);
  assert.equal(validateSessionTime("08:00", "08:00"), "SESSION_TIME_RANGE_INVALID");
  assert.equal(validateSessionTime("09:00", "08:00"), "SESSION_TIME_RANGE_INVALID");
  assert.equal(validateSessionTime("24:00", "25:00"), "SESSION_TIME_INVALID");
});

test("unified session overlap validation ignores touching boundaries", () => {
  assert.equal(timeRangesOverlap(
    { startTime: "08:00", endTime: "09:00" },
    { startTime: "09:00", endTime: "10:00" },
  ), false);
  assert.equal(timeRangesOverlap(
    { startTime: "08:00", endTime: "09:00" },
    { startTime: "08:30", endTime: "10:00" },
  ), true);
});

test("session finalization uses the Jakarta calendar date and end boundary", () => {
  const date = jakartaBusinessDate(instant("2026-11-09T00:00:00Z"));
  const range = {
    startTime: new Date("1970-01-01T08:00:00Z"),
    endTime: new Date("1970-01-01T09:00:00Z"),
  };
  assert.equal(jakartaDateKey(instant("2026-11-08T17:00:00Z")), "2026-11-09");
  assert.equal(isTimeRangeFinished(instant("2026-11-09T01:59:00Z"), date, range), false);
  assert.equal(isTimeRangeFinished(instant("2026-11-09T02:00:00Z"), date, range), true);
  assert.equal(isTimeRangeFinished(instant("2026-11-10T00:00:00Z"), date, range), true);
});
