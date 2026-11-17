ALTER TABLE "attendance_session_versions"
  ADD COLUMN "start_time" TIME(0),
  ADD COLUMN "end_time" TIME(0);

ALTER TABLE "attendance_session_versions"
  ADD CONSTRAINT "attendance_session_versions_time_pair_check"
    CHECK (("start_time" IS NULL) = ("end_time" IS NULL)),
  ADD CONSTRAINT "attendance_session_versions_time_range_check"
    CHECK ("start_time" IS NULL OR "start_time" < "end_time");

UPDATE "attendance_session_versions" AS versions
SET
  "start_time" = workday_hours."start_time",
  "end_time" = workday_hours."end_time"
FROM (
  SELECT
    "session_version_id",
    MIN("start_time") AS "start_time",
    MIN("end_time") AS "end_time"
  FROM "attendance_session_day_schedules"
  WHERE "iso_weekday" BETWEEN 1 AND 5 AND "is_enabled"
  GROUP BY "session_version_id"
  HAVING COUNT(*) = 5
    AND COUNT(DISTINCT "start_time") = 1
    AND COUNT(DISTINCT "end_time") = 1
) AS workday_hours
WHERE versions."id" = workday_hours."session_version_id";

COMMENT ON COLUMN "attendance_session_versions"."start_time" IS
  'Unified Asia/Jakarta workday session start; NULL denotes a retained legacy weekly schedule.';
COMMENT ON COLUMN "attendance_session_versions"."end_time" IS
  'Unified Asia/Jakarta workday session end; NULL denotes a retained legacy weekly schedule.';
