import assert from "node:assert/strict";
import test from "node:test";
import { parseJakartaBusinessDateRange } from "../src/modules/attendance/attendance-date.js";

test("date range uses business calendar day bounds", () => {
  const range = parseJakartaBusinessDateRange("2026-11-05");
  assert.ok(range);
  assert.equal(range.start.toISOString(), "2026-11-05T00:00:00.000Z");
  assert.equal(range.end.toISOString(), "2026-11-06T00:00:00.000Z");
});

test("date range handles leap day and year boundary", () => {
  const leapDay = parseJakartaBusinessDateRange("2024-02-29");
  assert.ok(leapDay);
  assert.equal(leapDay.end.toISOString(), "2024-03-01T00:00:00.000Z");

  const yearEnd = parseJakartaBusinessDateRange("2026-12-31");
  assert.ok(yearEnd);
  assert.equal(yearEnd.end.toISOString(), "2027-01-01T00:00:00.000Z");
});

test("date range rejects malformed and impossible calendar dates", () => {
  assert.equal(parseJakartaBusinessDateRange(undefined), null);
  assert.equal(parseJakartaBusinessDateRange("2026-2-05"), null);
  assert.equal(parseJakartaBusinessDateRange("2026-02-30"), null);
  assert.equal(parseJakartaBusinessDateRange("05-11-2026"), null);
});
