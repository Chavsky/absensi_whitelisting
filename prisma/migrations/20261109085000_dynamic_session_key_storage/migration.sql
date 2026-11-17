BEGIN;

ALTER TABLE "attendances"
ALTER COLUMN "sesi" TYPE VARCHAR(64)
USING "sesi"::text;

DROP TYPE "AttendanceSession";

COMMIT;
