import assert from "node:assert/strict";
import test from "node:test";
import {
  effectiveAttendanceStatus,
  isAttendanceStatus,
  latestCorrectionByRevision,
} from "../src/modules/attendance-sessions/correction-policy.js";

test("latest correction is selected by revision rather than transaction timestamp or row order", () => {
  const latest = latestCorrectionByRevision([
    { key: "employee:session:date", revision: 2, value: "Tidak Hadir" },
    { key: "employee:session:date", revision: 1, value: "Hadir" },
    { key: "other:session:date", revision: 3, value: "Hadir" },
  ]);
  assert.equal(latest.get("employee:session:date")?.value, "Tidak Hadir");
  assert.equal(latest.get("other:session:date")?.value, "Hadir");
});

test("correction policy supports both status directions and leaves a future session pending", () => {
  assert.equal(effectiveAttendanceStatus({
    correctionStatus: "Hadir",
    attendanceStatus: "Tidak Hadir",
    sessionFinished: true,
  }), "Hadir");
  assert.equal(effectiveAttendanceStatus({
    correctionStatus: "Tidak Hadir",
    attendanceStatus: "Hadir",
    sessionFinished: true,
  }), "Tidak Hadir");
  assert.equal(effectiveAttendanceStatus({
    sessionFinished: false,
  }), null);
});

test("only the two supported attendance statuses are recognized", () => {
  assert.equal(isAttendanceStatus("Hadir"), true);
  assert.equal(isAttendanceStatus("Tidak Hadir"), true);
  assert.equal(isAttendanceStatus("Belum Absen"), false);
  assert.equal(isAttendanceStatus("Terlambat"), false);
  assert.equal(effectiveAttendanceStatus({
    attendanceStatus: "LegacyUnknown",
    sessionFinished: false,
  }), null);
});
