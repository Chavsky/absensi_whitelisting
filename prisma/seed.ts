import "dotenv/config";
import bcrypt from "bcryptjs";
import { prisma } from "../src/config/database.js";

async function main() {
  const username = process.env.ADMIN_USERNAME?.trim();
  const password = process.env.ADMIN_PASSWORD;
  const namaLengkap = process.env.ADMIN_NAME?.trim();

  if (!username || !password || !namaLengkap) {
    throw new Error(
      "ADMIN_USERNAME, ADMIN_PASSWORD, dan ADMIN_NAME wajib diisi."
    );
  }

  if (
    password.length < 12 ||
    Buffer.byteLength(password, "utf8") > 72 ||
    !/[a-z]/.test(password) ||
    !/[A-Z]/.test(password) ||
    !/[0-9]/.test(password) ||
    !/[^A-Za-z0-9]/.test(password)
  ) {
    throw new Error("Password admin harus minimal 12 karakter dan mengandung huruf besar, huruf kecil, angka, serta simbol.");
  }

  const existingAdmin = await prisma.admin.findUnique({
    where: { username },
  });

  if (existingAdmin) {
    throw new Error(
      `Admin dengan username "${username}" sudah terdaftar.`
    );
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const admin = await prisma.admin.create({
    data: {
      username,
      password: hashedPassword,
      namaLengkap,
    },
  });

  console.log("================================");
  console.log("ADMIN BERHASIL DIBUAT");
  console.log("================================");
  console.log(`ID       : ${admin.id}`);
  console.log(`Username : ${admin.username}`);
  console.log(`Nama     : ${admin.namaLengkap}`);
}

main()
  .catch((error) => {
    console.error("Gagal membuat admin:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
