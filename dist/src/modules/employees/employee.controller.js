import { logSafeError } from "../../utils/safe-error-logger.js";
import { createEmployee as createEmployeeRecord, EmployeeAlreadyExistsError, EmployeeNotFoundError, getEmployee as loadEmployee, listEmployees as loadEmployees, setEmployeeActiveStatus, updateEmployeeName, } from "./employee.service.js";
function parsePositiveInteger(value, fallback, max) {
    if (value === undefined)
        return fallback;
    if (typeof value !== "string" || !/^[0-9]+$/.test(value))
        return null;
    const number = Number(value);
    if (!Number.isSafeInteger(number) || number < 1 || (max !== undefined && number > max))
        return null;
    return number;
}
function handleEmployeeError(error, res) {
    if (error instanceof EmployeeAlreadyExistsError) {
        return res.status(409).json({ success: false, message: "NIK karyawan sudah terdaftar." });
    }
    if (error instanceof EmployeeNotFoundError) {
        return res.status(404).json({ success: false, message: "Karyawan tidak ditemukan." });
    }
    logSafeError("EMPLOYEE MANAGEMENT", error);
    return res.status(500).json({ success: false, message: "Terjadi kesalahan pada server." });
}
export async function listEmployees(req, res) {
    const page = parsePositiveInteger(req.query.page, 1);
    const limit = parsePositiveInteger(req.query.limit, 10, 100);
    const search = req.query.search;
    const activeFilter = req.query.isActive;
    if (page === null ||
        limit === null ||
        (search !== undefined && (typeof search !== "string" || search.length > 100))) {
        return res.status(400).json({ success: false, message: "Parameter pencarian atau pagination tidak valid." });
    }
    let isActive;
    if (activeFilter !== undefined) {
        if (activeFilter === "true" || activeFilter === "active")
            isActive = true;
        else if (activeFilter === "false" || activeFilter === "inactive")
            isActive = false;
        else
            return res.status(400).json({ success: false, message: "Filter isActive harus true atau false." });
    }
    try {
        const result = await loadEmployees({ page, limit, search: search, isActive });
        return res.status(200).json({ success: true, data: result.data, pagination: result.pagination });
    }
    catch (error) {
        return handleEmployeeError(error, res);
    }
}
export async function getEmployee(req, res) {
    const nik = req.params.nik;
    if (typeof nik !== "string" || !nik.trim()) {
        return res.status(400).json({ success: false, message: "NIK tidak valid." });
    }
    try {
        const employee = await loadEmployee(nik.trim());
        if (!employee)
            return res.status(404).json({ success: false, message: "Karyawan tidak ditemukan." });
        return res.status(200).json({ success: true, data: employee });
    }
    catch (error) {
        return handleEmployeeError(error, res);
    }
}
export async function createEmployee(req, res) {
    const body = req.body;
    if (!body || typeof body !== "object" || Array.isArray(body)) {
        return res.status(400).json({ success: false, message: "Body request tidak valid." });
    }
    if (Object.keys(body).some((key) => !["nik", "namaLengkap"].includes(key))) {
        return res.status(400).json({ success: false, message: "Input hanya boleh berisi NIK dan nama lengkap." });
    }
    const { nik, namaLengkap } = body;
    if (typeof nik !== "string" ||
        !nik.trim() ||
        nik.trim().length > 50 ||
        typeof namaLengkap !== "string" ||
        !namaLengkap.trim() ||
        namaLengkap.trim().length > 100) {
        return res.status(400).json({ success: false, message: "NIK dan nama lengkap wajib diisi dengan format yang valid." });
    }
    try {
        const employee = await createEmployeeRecord(nik.trim(), namaLengkap.trim());
        return res.status(201).json({ success: true, message: "Karyawan berhasil ditambahkan.", data: employee });
    }
    catch (error) {
        return handleEmployeeError(error, res);
    }
}
export async function updateEmployee(req, res) {
    const nik = req.params.nik;
    const body = req.body;
    if (typeof nik !== "string" || !nik.trim() || !body || typeof body !== "object" || Array.isArray(body)) {
        return res.status(400).json({ success: false, message: "Parameter atau body request tidak valid." });
    }
    if ("nik" in body) {
        return res.status(400).json({ success: false, message: "NIK tidak dapat diubah." });
    }
    if (Object.keys(body).length !== 1 || !("namaLengkap" in body)) {
        return res.status(400).json({ success: false, message: "Input harus berisi namaLengkap saja." });
    }
    const { namaLengkap } = body;
    if (typeof namaLengkap !== "string" || !namaLengkap.trim() || namaLengkap.trim().length > 100) {
        return res.status(400).json({ success: false, message: "Nama lengkap tidak valid." });
    }
    try {
        const employee = await updateEmployeeName(nik.trim(), namaLengkap.trim());
        return res.status(200).json({ success: true, message: "Data karyawan berhasil diperbarui.", data: employee });
    }
    catch (error) {
        return handleEmployeeError(error, res);
    }
}
export async function updateEmployeeStatus(req, res) {
    const nik = req.params.nik;
    const body = req.body;
    if (typeof nik !== "string" || !nik.trim() || !body || typeof body !== "object" || Array.isArray(body)) {
        return res.status(400).json({ success: false, message: "Parameter atau body request tidak valid." });
    }
    if (Object.keys(body).length !== 1 || typeof body.isActive !== "boolean") {
        return res.status(400).json({ success: false, message: "Body harus berisi isActive boolean." });
    }
    try {
        if (!req.admin) {
            return res.status(401).json({ success: false, message: "Silakan login terlebih dahulu." });
        }
        const isActive = body.isActive;
        const employee = await setEmployeeActiveStatus(nik.trim(), isActive, req.admin.id);
        return res.status(200).json({
            success: true,
            message: isActive ? "Karyawan berhasil diaktifkan." : "Karyawan berhasil dinonaktifkan.",
            data: employee,
        });
    }
    catch (error) {
        return handleEmployeeError(error, res);
    }
}
//# sourceMappingURL=employee.controller.js.map