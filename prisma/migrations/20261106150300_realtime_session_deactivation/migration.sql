ALTER TABLE "attendance_sessions"
  ADD COLUMN "disabled_at" TIMESTAMPTZ(3),
  ADD COLUMN "disabled_by_admin_id" INTEGER,
  ADD COLUMN "disabled_by_admin_username" VARCHAR(50),
  ADD COLUMN "enabled_from" DATE;

ALTER TABLE "attendance_sessions"
  ADD CONSTRAINT "attendance_sessions_disabled_by_admin_id_fkey"
  FOREIGN KEY ("disabled_by_admin_id") REFERENCES "admins"("id")
  ON DELETE SET NULL ON UPDATE CASCADE;

CREATE INDEX "attendance_sessions_disabled_by_admin_id_idx"
  ON "attendance_sessions"("disabled_by_admin_id");
