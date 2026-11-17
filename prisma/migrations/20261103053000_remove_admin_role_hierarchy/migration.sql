-- Admin accounts now have equal permissions; keep all accounts and drop only role metadata.
ALTER TABLE "admins" DROP COLUMN "role";

-- Drop the role enum after removing its only column reference.
DROP TYPE "AdminRole";
