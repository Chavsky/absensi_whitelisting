-- CreateEnum
CREATE TYPE "AdminRole" AS ENUM ('superadmin', 'hrd');

-- CreateEnum
CREATE TYPE "AttendanceSession" AS ENUM ('masuk_pagi', 'istirahat_keluar', 'istirahat_masuk', 'pulang');

-- CreateEnum
CREATE TYPE "DeviceStatus" AS ENUM ('pending', 'active', 'revoked');

-- CreateTable
CREATE TABLE "users" (
    "nik" VARCHAR(50) NOT NULL,
    "nama_lengkap" VARCHAR(100) NOT NULL,
    "signature_path" VARCHAR(255),
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("nik")
);

-- CreateTable
CREATE TABLE "admins" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "nama_lengkap" VARCHAR(100) NOT NULL,
    "role" "AdminRole" NOT NULL DEFAULT 'hrd',
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "admins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "attendances" (
    "id" SERIAL NOT NULL,
    "nik" VARCHAR(50) NOT NULL,
    "tanggal" DATE NOT NULL,
    "sesi" "AttendanceSession" NOT NULL,
    "waktu_absen" TIMESTAMPTZ(3) NOT NULL,
    "status" VARCHAR(20) NOT NULL DEFAULT 'Hadir',

    CONSTRAINT "attendances_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_devices" (
    "id" SERIAL NOT NULL,
    "nik" VARCHAR(50) NOT NULL,
    "device_uuid" VARCHAR(100),
    "status" "DeviceStatus" NOT NULL DEFAULT 'pending',
    "device_name" VARCHAR(100),
    "enrollment_code_hash" VARCHAR(255),
    "enrollment_expires_at" TIMESTAMPTZ(3),
    "enrollment_used_at" TIMESTAMPTZ(3),
    "registered_by_admin_id" INTEGER,
    "registered_at" TIMESTAMPTZ(3),
    "activated_at" TIMESTAMPTZ(3),
    "last_used_at" TIMESTAMPTZ(3),
    "revoked_at" TIMESTAMPTZ(3),
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "user_devices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_sessions" (
    "id" SERIAL NOT NULL,
    "device_id" INTEGER NOT NULL,
    "token_hash" VARCHAR(255) NOT NULL,
    "ip_address" VARCHAR(45),
    "user_agent" TEXT,
    "expires_at" TIMESTAMPTZ(3) NOT NULL,
    "last_used_at" TIMESTAMPTZ(3),
    "revoked_at" TIMESTAMPTZ(3),
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "admins_username_key" ON "admins"("username");

-- CreateIndex
CREATE INDEX "attendances_tanggal_idx" ON "attendances"("tanggal");

-- CreateIndex
CREATE UNIQUE INDEX "attendances_nik_tanggal_sesi_key" ON "attendances"("nik", "tanggal", "sesi");

-- CreateIndex
CREATE UNIQUE INDEX "user_devices_nik_key" ON "user_devices"("nik");

-- CreateIndex
CREATE UNIQUE INDEX "user_devices_device_uuid_key" ON "user_devices"("device_uuid");

-- CreateIndex
CREATE UNIQUE INDEX "user_sessions_token_hash_key" ON "user_sessions"("token_hash");

-- CreateIndex
CREATE INDEX "user_sessions_device_id_idx" ON "user_sessions"("device_id");

-- CreateIndex
CREATE INDEX "user_sessions_expires_at_idx" ON "user_sessions"("expires_at");

-- AddForeignKey
ALTER TABLE "attendances" ADD CONSTRAINT "attendances_nik_fkey" FOREIGN KEY ("nik") REFERENCES "users"("nik") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_devices" ADD CONSTRAINT "user_devices_nik_fkey" FOREIGN KEY ("nik") REFERENCES "users"("nik") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_devices" ADD CONSTRAINT "user_devices_registered_by_admin_id_fkey" FOREIGN KEY ("registered_by_admin_id") REFERENCES "admins"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_sessions" ADD CONSTRAINT "user_sessions_device_id_fkey" FOREIGN KEY ("device_id") REFERENCES "user_devices"("id") ON DELETE CASCADE ON UPDATE CASCADE;
