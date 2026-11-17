BEGIN;

-- Wait for in-flight writers, then prevent session writes until the index exists.
LOCK TABLE "user_sessions" IN SHARE ROW EXCLUSIVE MODE;

-- Expired and otherwise unauthorized sessions cannot survive the policy change.
UPDATE "user_sessions"
SET "revoked_at" = CURRENT_TIMESTAMP
WHERE "revoked_at" IS NULL
  AND "expires_at" IS NOT NULL
  AND "expires_at" <= CURRENT_TIMESTAMP;

UPDATE "user_sessions" AS s
SET "revoked_at" = CURRENT_TIMESTAMP
FROM "user_devices" AS device
JOIN "users" AS employee ON employee."nik" = device."nik"
WHERE s."device_id" = device."id"
  AND s."revoked_at" IS NULL
  AND (device."status" <> 'active' OR employee."is_active" = FALSE);

-- Keep the newest still-valid session per device, deterministically breaking
-- timestamp ties by the generated session ID. Retain all history rows.
WITH ranked_sessions AS (
  SELECT
    "id",
    ROW_NUMBER() OVER (
      PARTITION BY "device_id"
      ORDER BY "created_at" DESC, "id" DESC
    ) AS position
  FROM "user_sessions"
  WHERE "revoked_at" IS NULL
)
UPDATE "user_sessions" AS s
SET "revoked_at" = CURRENT_TIMESTAMP
FROM ranked_sessions
WHERE s."id" = ranked_sessions."id"
  AND ranked_sessions.position > 1;

ALTER TABLE "user_sessions"
ALTER COLUMN "expires_at" DROP NOT NULL;

UPDATE "user_sessions"
SET "expires_at" = NULL
WHERE "revoked_at" IS NULL;

CREATE UNIQUE INDEX "user_sessions_one_unrevoked_per_device_key"
ON "user_sessions"("device_id")
WHERE "revoked_at" IS NULL;

CREATE TABLE "security_audit_logs" (
  "id" SERIAL NOT NULL,
  "action" VARCHAR(50) NOT NULL,
  "nik" VARCHAR(50),
  "admin_id" INTEGER,
  "device_id" INTEGER,
  "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT "security_audit_logs_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "security_audit_logs_nik_created_at_idx"
ON "security_audit_logs"("nik", "created_at");

CREATE INDEX "security_audit_logs_admin_id_created_at_idx"
ON "security_audit_logs"("admin_id", "created_at");

ALTER TABLE "security_audit_logs"
ADD CONSTRAINT "security_audit_logs_admin_id_fkey"
FOREIGN KEY ("admin_id") REFERENCES "admins"("id")
ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "security_audit_logs"
ADD CONSTRAINT "security_audit_logs_device_id_fkey"
FOREIGN KEY ("device_id") REFERENCES "user_devices"("id")
ON DELETE SET NULL ON UPDATE CASCADE;

COMMIT;
