-- CreateTable
CREATE TABLE "device_session_recoveries" (
    "id" SERIAL NOT NULL,
    "device_id" INTEGER NOT NULL,
    "code_hash" VARCHAR(64) NOT NULL,
    "expires_at" TIMESTAMPTZ(3) NOT NULL,
    "used_at" TIMESTAMPTZ(3),
    "invalidated_at" TIMESTAMPTZ(3),
    "created_by_admin_id" INTEGER,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "device_session_recoveries_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "device_session_recoveries_code_hash_key" ON "device_session_recoveries"("code_hash");

-- CreateIndex
CREATE INDEX "device_session_recoveries_device_id_expires_at_idx" ON "device_session_recoveries"("device_id", "expires_at");

-- AddForeignKey
ALTER TABLE "device_session_recoveries" ADD CONSTRAINT "device_session_recoveries_device_id_fkey" FOREIGN KEY ("device_id") REFERENCES "user_devices"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "device_session_recoveries" ADD CONSTRAINT "device_session_recoveries_created_by_admin_id_fkey" FOREIGN KEY ("created_by_admin_id") REFERENCES "admins"("id") ON DELETE SET NULL ON UPDATE CASCADE;
