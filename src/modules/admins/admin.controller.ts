import type { Request, Response } from "express";
import { logSafeError } from "../../utils/safe-error-logger.js";
import {
  AdminAlreadyExistsError,
  AdminForbiddenError,
  AdminNotFoundError,
  changeAdminPassword,
  createAdmin as createAdminRecord,
  CurrentPasswordInvalidError,
  getAdmin as loadAdmin,
  LastActiveAdminError,
  listAdmins as loadAdmins,
  setAdminStatus,
  updateAdmin as updateAdminRecord,
} from "./admin.service.js";

function parseId(value: unknown): number | null {
  if (typeof value !== "string" || !/^[1-9][0-9]*$/.test(value)) return null;
  const id = Number(value);
  return Number.isSafeInteger(id) ? id : null;
}

function parsePositiveInteger(value: unknown, fallback: number, maximum?: number): number | null {
  if (value === undefined) return fallback;
  if (typeof value !== "string" || !/^[0-9]+$/.test(value)) return null;
  const number = Number(value);
  if (!Number.isSafeInteger(number) || number < 1 || (maximum !== undefined && number > maximum)) return null;
  return number;
}

function validPassword(password: string): boolean {
  return password.length >= 12 &&
    Buffer.byteLength(password, "utf8") <= 72 &&
    /[a-z]/.test(password) &&
    /[A-Z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[^A-Za-z0-9]/.test(password);
}

function handleAdminError(error: unknown, res: Response) {
  if (error instanceof AdminAlreadyExistsError) {
    return res.status(409).json({ success: false, message: "Username sudah digunakan." });
  }
  if (error instanceof AdminNotFoundError) {
    return res.status(404).json({ success: false, message: "Admin tidak ditemukan." });
  }
  if (error instanceof AdminForbiddenError) {
    return res.status(403).json({ success: false, message: "Tindakan ini tidak diizinkan." });
  }
  if (error instanceof LastActiveAdminError) {
    return res.status(409).json({ success: false, message: "Akun admin aktif terakhir tidak dapat dinonaktifkan." });
  }
  if (error instanceof CurrentPasswordInvalidError) {
    return res.status(400).json({ success: false, message: "Password lama tidak sesuai." });
  }
  logSafeError("ADMIN MANAGEMENT", error);
  return res.status(500).json({ success: false, message: "Terjadi kesalahan pada server." });
}

export async function listAdmins(req: Request, res: Response) {
  const page = parsePositiveInteger(req.query.page, 1);
  const limit = parsePositiveInteger(req.query.limit, 10, 100);
  const search = req.query.search;
  const statusValue = req.query.isActive;
  if (
    page === null ||
    limit === null ||
    (search !== undefined && (typeof search !== "string" || search.length > 100))
  ) {
    return res.status(400).json({ success: false, message: "Parameter pencarian atau pagination tidak valid." });
  }

  let isActive: boolean | undefined;
  if (statusValue !== undefined) {
    if (statusValue === "true" || statusValue === "active") isActive = true;
    else if (statusValue === "false" || statusValue === "inactive") isActive = false;
    else return res.status(400).json({ success: false, message: "Filter isActive harus true atau false." });
  }

  try {
    const result = await loadAdmins({ page, limit, search: search as string | undefined, isActive });
    return res.status(200).json({ success: true, data: result.data, pagination: result.pagination });
  } catch (error) {
    return handleAdminError(error, res);
  }
}

export async function getAdmin(req: Request, res: Response) {
  const id = parseId(req.params.id);
  if (id === null) return res.status(400).json({ success: false, message: "ID admin tidak valid." });
  try {
    const admin = await loadAdmin(id);
    if (!admin) return res.status(404).json({ success: false, message: "Admin tidak ditemukan." });
    return res.status(200).json({ success: true, data: admin });
  } catch (error) {
    return handleAdminError(error, res);
  }
}

export async function createAdmin(req: Request, res: Response) {
  const body = req.body;
  if (!req.admin) return res.status(401).json({ success: false, message: "Silakan login terlebih dahulu." });
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return res.status(400).json({ success: false, message: "Body request tidak valid." });
  }
  if (Object.keys(body).some((key) => !["username", "password", "namaLengkap"].includes(key))) {
    return res.status(400).json({ success: false, message: "Terdapat field yang tidak diizinkan." });
  }
  const { username, password, namaLengkap } = body as Record<string, unknown>;
  if (
    typeof username !== "string" || !/^[A-Za-z0-9._-]{3,50}$/.test(username) ||
    typeof namaLengkap !== "string" || !namaLengkap.trim() || namaLengkap.trim().length > 100 ||
    typeof password !== "string" || !validPassword(password)
  ) {
    return res.status(400).json({
      success: false,
      message: "Input admin tidak valid. Password minimal 12 karakter dan harus mengandung huruf besar, huruf kecil, angka, serta simbol.",
    });
  }

  try {
    const admin = await createAdminRecord({ username, password, namaLengkap: namaLengkap.trim() });
    return res.status(201).json({ success: true, message: "Admin berhasil dibuat.", data: admin });
  } catch (error) {
    return handleAdminError(error, res);
  }
}

export async function updateAdmin(req: Request, res: Response) {
  const id = parseId(req.params.id);
  if (id === null) return res.status(400).json({ success: false, message: "ID admin tidak valid." });
  if (!req.admin) return res.status(401).json({ success: false, message: "Silakan login terlebih dahulu." });

  const body = req.body;
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return res.status(400).json({ success: false, message: "Body request tidak valid." });
  }
  if (Object.keys(body).length === 0 || Object.keys(body).some((key) => !["username", "namaLengkap"].includes(key))) {
    return res.status(400).json({ success: false, message: "Field perubahan admin tidak valid." });
  }

  const input = body as Record<string, unknown>;
  const updates: { username?: string; namaLengkap?: string } = {};
  if ("username" in input) {
    if (typeof input.username !== "string" || !/^[A-Za-z0-9._-]{3,50}$/.test(input.username)) {
      return res.status(400).json({ success: false, message: "Username tidak valid." });
    }
    updates.username = input.username;
  }
  if ("namaLengkap" in input) {
    if (typeof input.namaLengkap !== "string" || !input.namaLengkap.trim() || input.namaLengkap.trim().length > 100) {
      return res.status(400).json({ success: false, message: "Nama lengkap tidak valid." });
    }
    updates.namaLengkap = input.namaLengkap.trim();
  }

  try {
    const admin = await updateAdminRecord(id, updates);
    return res.status(200).json({ success: true, message: "Data admin berhasil diperbarui.", data: admin });
  } catch (error) {
    return handleAdminError(error, res);
  }
}

export async function updateAdminStatus(req: Request, res: Response) {
  const id = parseId(req.params.id);
  if (id === null) return res.status(400).json({ success: false, message: "ID admin tidak valid." });
  if (!req.admin) return res.status(401).json({ success: false, message: "Silakan login terlebih dahulu." });
  const body = req.body;
  if (!body || typeof body !== "object" || Array.isArray(body) || Object.keys(body).length !== 1 || typeof body.isActive !== "boolean") {
    return res.status(400).json({ success: false, message: "Body harus berisi isActive boolean." });
  }
  try {
    const admin = await setAdminStatus(id, body.isActive, req.admin.id);
    return res.status(200).json({
      success: true,
      message: body.isActive ? "Admin berhasil diaktifkan." : "Admin berhasil dinonaktifkan.",
      data: admin,
    });
  } catch (error) {
    return handleAdminError(error, res);
  }
}

export async function updateAdminPassword(req: Request, res: Response) {
  const id = parseId(req.params.id);
  if (id === null) return res.status(400).json({ success: false, message: "ID admin tidak valid." });
  if (!req.admin) return res.status(401).json({ success: false, message: "Silakan login terlebih dahulu." });
  const body = req.body;
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return res.status(400).json({ success: false, message: "Body request tidak valid." });
  }

  const self = id === req.admin.id;
  const expectedKeys = self ? ["currentPassword", "newPassword"] : ["newPassword"];
  if (Object.keys(body).length !== expectedKeys.length || Object.keys(body).some((key) => !expectedKeys.includes(key))) {
    return res.status(400).json({
      success: false,
      message: self
        ? "Perubahan password sendiri memerlukan currentPassword dan newPassword."
        : "Reset password admin lain hanya menerima newPassword.",
    });
  }
  const { currentPassword, newPassword } = body as Record<string, unknown>;
  if ((self && (typeof currentPassword !== "string" || !currentPassword)) || typeof newPassword !== "string" || !validPassword(newPassword)) {
    return res.status(400).json({
      success: false,
      message: "Password baru minimal 12 karakter dan harus mengandung huruf besar, huruf kecil, angka, serta simbol.",
    });
  }

  try {
    await changeAdminPassword({
      targetId: id,
      actorId: req.admin.id,
      currentPassword: typeof currentPassword === "string" ? currentPassword : undefined,
      newPassword,
    });
    return res.status(200).json({ success: true, message: "Password admin berhasil diubah. Silakan login kembali." });
  } catch (error) {
    return handleAdminError(error, res);
  }
}
