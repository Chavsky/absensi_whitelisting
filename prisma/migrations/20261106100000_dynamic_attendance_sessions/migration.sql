BEGIN;

LOCK TABLE "attendances" IN SHARE ROW EXCLUSIVE MODE;

DO $$
DECLARE
  unsupported_statuses TEXT;
BEGIN
  SELECT string_agg(DISTINCT quote_literal("status"), ', ' ORDER BY quote_literal("status"))
  INTO unsupported_statuses
  FROM "attendances"
  WHERE "status" NOT IN ('Hadir', 'Tidak Hadir');

  IF unsupported_statuses IS NOT NULL THEN
    RAISE EXCEPTION
      'Dynamic attendance migration aborted: unsupported historical attendance status value(s): %',
      unsupported_statuses
      USING ERRCODE = 'check_violation';
  END IF;
END;
$$;

CREATE TYPE "AttendanceSource" AS ENUM ('LEGACY', 'PWA', 'ADMIN');

CREATE TABLE "attendance_sessions" (
  "id" SERIAL NOT NULL,
  "key" VARCHAR(64) NOT NULL,
  "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "attendance_sessions_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "attendance_sessions_key_key" UNIQUE ("key"),
  CONSTRAINT "attendance_sessions_key_format_check" CHECK ("key" ~ '^[a-z0-9][a-z0-9_-]{0,63}$')
);

CREATE TABLE "attendance_session_versions" (
  "id" SERIAL NOT NULL,
  "session_id" INTEGER NOT NULL,
  "name" VARCHAR(100) NOT NULL,
  "sort_order" INTEGER NOT NULL,
  "is_active" BOOLEAN NOT NULL DEFAULT true,
  "effective_from" DATE NOT NULL,
  "created_by_admin_id" INTEGER,
  "created_by_admin_username" VARCHAR(50),
  "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "attendance_session_versions_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "attendance_session_versions_sort_order_check" CHECK ("sort_order" >= 0),
  CONSTRAINT "attendance_session_versions_session_id_fkey"
    FOREIGN KEY ("session_id") REFERENCES "attendance_sessions"("id")
    ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT "attendance_session_versions_created_by_admin_id_fkey"
    FOREIGN KEY ("created_by_admin_id") REFERENCES "admins"("id")
    ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE TABLE "attendance_session_day_schedules" (
  "id" SERIAL NOT NULL,
  "session_version_id" INTEGER NOT NULL,
  "iso_weekday" SMALLINT NOT NULL,
  "is_enabled" BOOLEAN NOT NULL DEFAULT false,
  "start_time" TIME(0) NOT NULL,
  "end_time" TIME(0) NOT NULL,
  CONSTRAINT "attendance_session_day_schedules_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "attendance_session_day_schedules_weekday_check" CHECK ("iso_weekday" BETWEEN 1 AND 7),
  CONSTRAINT "attendance_session_day_schedules_time_range_check" CHECK ("start_time" < "end_time"),
  CONSTRAINT "attendance_session_day_schedules_session_version_id_fkey"
    FOREIGN KEY ("session_version_id") REFERENCES "attendance_session_versions"("id")
    ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE TABLE "attendance_correction_logs" (
  "id" SERIAL NOT NULL,
  "nik" VARCHAR(50) NOT NULL,
  "attendance_date" DATE NOT NULL,
  "session_id" INTEGER NOT NULL,
  "session_version_id" INTEGER,
  "attendance_id" INTEGER,
  "previous_status" VARCHAR(20) NOT NULL,
  "new_status" VARCHAR(20) NOT NULL,
  "revision" INTEGER NOT NULL,
  "reason" VARCHAR(500) NOT NULL,
  "corrected_by_admin_id" INTEGER NOT NULL,
  "corrected_by_admin_username" VARCHAR(50) NOT NULL,
  "corrected_at" TIMESTAMPTZ(3) NOT NULL DEFAULT statement_timestamp(),
  CONSTRAINT "attendance_correction_logs_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "attendance_correction_logs_previous_status_check"
    CHECK ("previous_status" IN ('Hadir', 'Tidak Hadir')),
  CONSTRAINT "attendance_correction_logs_new_status_check"
    CHECK ("new_status" IN ('Hadir', 'Tidak Hadir')),
  CONSTRAINT "attendance_correction_logs_nik_fkey"
    FOREIGN KEY ("nik") REFERENCES "users"("nik")
    ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT "attendance_correction_logs_session_id_fkey"
    FOREIGN KEY ("session_id") REFERENCES "attendance_sessions"("id")
    ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT "attendance_correction_logs_corrected_by_admin_id_fkey"
    FOREIGN KEY ("corrected_by_admin_id") REFERENCES "admins"("id")
    ON DELETE RESTRICT ON UPDATE CASCADE
);

INSERT INTO "attendance_sessions" ("key")
SELECT e.enumlabel
FROM pg_enum AS e
JOIN pg_type AS t ON t.oid = e.enumtypid
JOIN pg_namespace AS n ON n.oid = t.typnamespace
WHERE t.typname = 'AttendanceSession'
  AND n.nspname = current_schema()
ORDER BY e.enumsortorder;

ALTER TABLE "attendances"
ADD COLUMN "session_id" INTEGER,
ADD COLUMN "session_version_id" INTEGER,
ADD COLUMN "session_name_snapshot" VARCHAR(100),
ADD COLUMN "source" "AttendanceSource" NOT NULL DEFAULT 'LEGACY';

UPDATE "attendances" AS attendance
SET "session_id" = session."id",
    "session_name_snapshot" = attendance."sesi"::text
FROM "attendance_sessions" AS session
WHERE session."key" = attendance."sesi"::text;

ALTER TABLE "attendances"
ALTER COLUMN "session_id" SET NOT NULL,
ALTER COLUMN "session_name_snapshot" SET NOT NULL,
ALTER COLUMN "sesi" DROP NOT NULL,
ADD CONSTRAINT "attendances_session_id_fkey"
  FOREIGN KEY ("session_id") REFERENCES "attendance_sessions"("id")
  ON DELETE RESTRICT ON UPDATE CASCADE,
ADD CONSTRAINT "attendances_status_check"
  CHECK ("status" IN ('Hadir', 'Tidak Hadir'));

CREATE UNIQUE INDEX "attendances_nik_tanggal_session_id_key"
ON "attendances"("nik", "tanggal", "session_id");

CREATE UNIQUE INDEX "attendances_id_nik_tanggal_session_id_key"
ON "attendances"("id", "nik", "tanggal", "session_id");

CREATE INDEX "attendances_session_id_tanggal_idx"
ON "attendances"("session_id", "tanggal");

CREATE UNIQUE INDEX "attendance_session_versions_session_id_effective_from_key"
ON "attendance_session_versions"("session_id", "effective_from");

CREATE UNIQUE INDEX "attendance_session_versions_id_session_id_key"
ON "attendance_session_versions"("id", "session_id");

CREATE INDEX "attendance_session_versions_effective_from_idx"
ON "attendance_session_versions"("effective_from");

CREATE UNIQUE INDEX "attendance_session_day_schedules_version_weekday_key"
ON "attendance_session_day_schedules"("session_version_id", "iso_weekday");

ALTER TABLE "attendances"
ADD CONSTRAINT "attendances_session_version_id_session_id_fkey"
  FOREIGN KEY ("session_version_id", "session_id")
  REFERENCES "attendance_session_versions"("id", "session_id")
  ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "attendance_correction_logs"
ADD CONSTRAINT "attendance_correction_logs_session_version_id_session_id_fkey"
  FOREIGN KEY ("session_version_id", "session_id")
  REFERENCES "attendance_session_versions"("id", "session_id")
  ON DELETE RESTRICT ON UPDATE CASCADE,
ADD CONSTRAINT "attendance_correction_logs_attendance_nik_date_session_fkey"
  FOREIGN KEY ("attendance_id", "nik", "attendance_date", "session_id")
  REFERENCES "attendances"("id", "nik", "tanggal", "session_id")
  ON DELETE RESTRICT ON UPDATE CASCADE;

CREATE UNIQUE INDEX "attendance_correction_logs_nik_date_session_revision_key"
ON "attendance_correction_logs"("nik", "attendance_date", "session_id", "revision");

CREATE INDEX "attendance_correction_logs_nik_date_session_corrected_idx"
ON "attendance_correction_logs"("nik", "attendance_date", "session_id", "corrected_at");

CREATE INDEX "attendance_correction_logs_attendance_id_idx"
ON "attendance_correction_logs"("attendance_id");

COMMIT;
