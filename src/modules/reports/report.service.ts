import { prisma } from "../../config/database.js";
import {
  isSessionEnabledByConfiguration,
  isTimeRangeFinished,
  isoWeekdayForDate,
  resolveSessionTimeRange,
} from "../attendance-sessions/schedule-policy.js";
import {
  effectiveAttendanceStatus,
  latestCorrectionByRevision,
} from "../attendance-sessions/correction-policy.js";

export type ReportSession = string;

export interface ReportPeriod {
  startDate: Date;
  endDate: Date;
  search?: string;
  sesi?: ReportSession;
}

export function parseBusinessDate(value: string): Date | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(0);
  date.setUTCFullYear(year, month - 1, day);
  if (
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() !== month - 1 ||
    date.getUTCDate() !== day
  ) return null;
  return date;
}

function jakartaBusinessDate(instant: Date): Date {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Jakarta",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(instant);
  const value = (type: Intl.DateTimeFormatPartTypes) => parts.find((part) => part.type === type)?.value;
  const year = value("year");
  const month = value("month");
  const day = value("day");
  if (!year || !month || !day) throw new Error("JAKARTA_DATE_UNAVAILABLE");
  const date = parseBusinessDate(`${year}-${month}-${day}`);
  if (!date) throw new Error("JAKARTA_DATE_UNAVAILABLE");
  return date;
}

function jakartaDayEndExclusive(date: Date): Date {
  return new Date(date.getTime() + 86400000 - 7 * 3600000);
}

export function formatBusinessDate(date: Date): string {
  const year = date.getUTCFullYear().toString().padStart(4, "0");
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
  const day = date.getUTCDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function employeeSearch(search?: string) {
  if (!search) return undefined;
  return {
    OR: [
      { nik: { contains: search, mode: "insensitive" as const } },
      { namaLengkap: { contains: search, mode: "insensitive" as const } },
    ],
  };
}

function attendanceWhere(period: ReportPeriod) {
  return {
    tanggal: { gte: period.startDate, lte: period.endDate },
    ...(period.sesi ? { session: { key: period.sesi } } : {}),
    ...(period.search ? { user: { is: employeeSearch(period.search) } } : {}),
  };
}

function correctionKey(nik: string, sessionId: number, date: Date): string {
  return `${nik}:${sessionId}:${formatBusinessDate(date)}`;
}

async function latestCorrections(
  nikList: string[],
  startDate: Date,
  endDate: Date,
  sessionKey?: string,
) {
  if (nikList.length === 0) {
    return new Map<string, {
      nik: string;
      sessionId: number;
      attendanceDate: Date;
      newStatus: string;
      id: number;
      revision: number;
    }>();
  }
  const logs = await prisma.attendanceCorrectionLog.findMany({
    where: {
      nik: { in: nikList },
      attendanceDate: { gte: startDate, lte: endDate },
      ...(sessionKey ? { session: { key: sessionKey } } : {}),
    },
    select: {
      id: true,
      nik: true,
      sessionId: true,
      attendanceDate: true,
      newStatus: true,
      revision: true,
    },
  });
  return new Map(
    [...latestCorrectionByRevision(logs.map((log) => ({
      key: correctionKey(log.nik, log.sessionId, log.attendanceDate),
      revision: log.revision,
      value: log,
    })))].map(([key, correction]) => [key, correction.value]),
  );
}

export async function getDailyAttendanceReport(input: {
  date: Date;
  page: number;
  limit: number;
  search?: string;
  sesi?: ReportSession;
  now?: Date;
}) {
  const userWhere = {
    createdAt: { lt: jakartaDayEndExclusive(input.date) },
    ...(input.search ? employeeSearch(input.search) : {}),
  };
  const [employees, totalEmployees] = await prisma.$transaction([
    prisma.user.findMany({
      where: userWhere,
      orderBy: [{ namaLengkap: "asc" }, { nik: "asc" }],
      skip: (input.page - 1) * input.limit,
      take: input.limit,
      select: { nik: true, namaLengkap: true, isActive: true },
    }),
    prisma.user.count({ where: userWhere }),
  ]);
  const sessionWhere = input.sesi ? { key: input.sesi } : undefined;
  const sessions = await prisma.attendanceSessionDefinition.findMany({
    where: { deletedAt: null, ...(sessionWhere ?? {}) },
    include: {
      versions: {
        where: { effectiveFrom: { lte: input.date } },
        orderBy: { effectiveFrom: "desc" },
        take: 1,
        include: { daySchedules: { where: { isoWeekday: isoWeekdayForDate(input.date) } } },
      },
    },
  });
  const activeSessions = sessions.flatMap((session) => {
    const version = session.versions[0];
    const timeRange = version ? resolveSessionTimeRange(version, input.date) : null;
    const enabled = isSessionEnabledByConfiguration(
      session.disabledAt,
      session.enabledFrom,
      input.date,
    );
    return version?.isActive && enabled && timeRange
      ? [{ id: session.id, key: session.key, name: version.name, sortOrder: version.sortOrder, timeRange }]
      : [];
  }).sort((a, b) => a.sortOrder - b.sortOrder || a.key.localeCompare(b.key));
  const niks = employees.map((employee) => employee.nik);
  const records = niks.length === 0
    ? []
    : await prisma.attendance.findMany({
        where: {
          nik: { in: niks },
          tanggal: input.date,
          ...(input.sesi ? { session: { key: input.sesi } } : {}),
        },
        select: {
          id: true,
          nik: true,
          sessionId: true,
          sessionNameSnapshot: true,
          waktuAbsen: true,
          status: true,
          session: { select: { key: true } },
        },
      });
  const recordMap = new Map(records.map((record) => [
    correctionKey(record.nik, record.sessionId, input.date),
    record,
  ]));
  const corrections = await latestCorrections(niks, input.date, input.date, input.sesi);
  const now = input.now ?? new Date();
  const activeSessionIds = new Set(activeSessions.map((session) => session.id));
  const data = employees.flatMap((employee) => {
    const activeRows = activeSessions.map((session) => {
      const key = correctionKey(employee.nik, session.id, input.date);
      const record = recordMap.get(key);
      const correction = corrections.get(key);
      const finished = isTimeRangeFinished(now, input.date, session.timeRange);
      const status = effectiveAttendanceStatus({
        correctionStatus: correction?.newStatus,
        attendanceStatus: record?.status,
        sessionFinished: finished,
      });
      return {
        nik: employee.nik,
        namaLengkap: employee.namaLengkap,
        tanggal: formatBusinessDate(input.date),
        isActive: employee.isActive,
        statusKaryawan: employee.isActive ? "Aktif" : "Nonaktif",
        sesi: session.key,
        sessionKey: session.key,
        sessionName: record?.sessionNameSnapshot ?? session.name,
        waktuAbsen: record?.waktuAbsen ?? null,
        statusAbsensi: status,
        finalized: finished,
        ...(record ? { attendanceId: record.id } : {}),
        ...(correction ? { correctionId: correction.id } : {}),
      };
    });
    const historicalRows = records
      .filter((record) => record.nik === employee.nik && !activeSessionIds.has(record.sessionId))
      .map((record) => {
        const correction = corrections.get(correctionKey(employee.nik, record.sessionId, input.date));
        return {
          nik: employee.nik,
          namaLengkap: employee.namaLengkap,
          tanggal: formatBusinessDate(input.date),
          isActive: employee.isActive,
          statusKaryawan: employee.isActive ? "Aktif" : "Nonaktif",
          sesi: record.session.key,
          sessionKey: record.session.key,
          sessionName: record.sessionNameSnapshot,
          waktuAbsen: record.waktuAbsen,
          statusAbsensi: correction?.newStatus ?? record.status,
          finalized: true,
          scheduleKnown: false,
          attendanceId: record.id,
          ...(correction ? { correctionId: correction.id } : {}),
        };
      });
    return [...activeRows, ...historicalRows];
  });
  return {
    data,
    statusScope: "SCHEDULE_EFFECTIVE_DAILY",
    statusDefinition: {
      Hadir: "Attendance row with effective status Hadir or the latest Admin correction.",
      TidakHadir: "An active scheduled session has ended in Asia/Jakarta, with no attendance row or overriding correction.",
      pending: "The active scheduled session has not ended; statusAbsensi is null and is not a final attendance status.",
      legacy: "Rows with no applicable active schedule are shown only when an attendance row exists; no historical absence is inferred.",
    },
    pagination: {
      page: input.page,
      limit: input.limit,
      total: totalEmployees,
      totalPages: Math.ceil(totalEmployees / input.limit),
      unit: "karyawan",
    },
  };
}

export async function getAttendancePeriodReport(input: ReportPeriod & { page: number; limit: number }) {
  const where = attendanceWhere(input);
  const [records, total] = await prisma.$transaction([
    prisma.attendance.findMany({
      where,
      orderBy: [{ tanggal: "desc" }, { waktuAbsen: "desc" }, { id: "desc" }],
      skip: (input.page - 1) * input.limit,
      take: input.limit,
      select: {
        id: true, nik: true, tanggal: true, sessionId: true, sessionNameSnapshot: true,
        waktuAbsen: true, status: true,
        session: { select: { key: true } },
        user: { select: { namaLengkap: true, isActive: true } },
      },
    }),
    prisma.attendance.count({ where }),
  ]);
  const corrections = await latestCorrections(
    [...new Set(records.map((record) => record.nik))],
    input.startDate,
    input.endDate,
    input.sesi,
  );
  return {
    data: records.map((record) => ({
      id: record.id,
      nik: record.nik,
      namaLengkap: record.user.namaLengkap,
      tanggal: formatBusinessDate(record.tanggal),
      isActive: record.user.isActive,
      statusKaryawan: record.user.isActive ? "Aktif" : "Nonaktif",
      sesi: record.session.key,
      sessionKey: record.session.key,
      sessionName: record.sessionNameSnapshot,
      waktuAbsen: record.waktuAbsen,
      statusAbsensi: corrections.get(correctionKey(record.nik, record.sessionId, record.tanggal))?.newStatus ?? record.status,
    })),
    statusScope: "RECORDED_ATTENDANCE_ONLY",
    statusDefinition: "Period rows represent persisted attendance records only; status reflects the latest Admin correction when one exists. Schedule-derived absences are not expanded into this record-history endpoint.",
    pagination: {
      page: input.page,
      limit: input.limit,
      total,
      totalPages: Math.ceil(total / input.limit),
    },
  };
}

export async function getAttendanceSummary(input: ReportPeriod & { page: number; limit: number }) {
  const employeeWhere = { ...(input.search ? employeeSearch(input.search) : {}) };
  const [employees, totalEmployees] = await prisma.$transaction([
    prisma.user.findMany({
      where: employeeWhere,
      orderBy: [{ namaLengkap: "asc" }, { nik: "asc" }],
      skip: (input.page - 1) * input.limit,
      take: input.limit,
      select: { nik: true, namaLengkap: true, isActive: true },
    }),
    prisma.user.count({ where: employeeWhere }),
  ]);
  const niks = employees.map((employee) => employee.nik);
  const sessions = await prisma.attendanceSessionDefinition.findMany({
    where: input.sesi ? { key: input.sesi } : undefined,
    orderBy: { key: "asc" },
    select: { id: true, key: true },
  });
  const records = niks.length === 0
    ? []
    : await prisma.attendance.findMany({
        where: {
          nik: { in: niks },
          tanggal: { gte: input.startDate, lte: input.endDate },
          sessionId: { in: sessions.map((session) => session.id) },
        },
        select: { nik: true, sessionId: true, tanggal: true, status: true },
      });
  const corrections = await latestCorrections(niks, input.startDate, input.endDate, input.sesi);
  const statusCounts = new Map<string, { Hadir: number; TidakHadir: number }>();
  const attendanceEntryKeys = new Set<string>();
  const countStatus = (nik: string, sessionId: number, status: string) => {
    const aggregateKey = JSON.stringify([nik, sessionId]);
    const counts = statusCounts.get(aggregateKey) ?? { Hadir: 0, TidakHadir: 0 };
    if (status === "Hadir") counts.Hadir += 1;
    if (status === "Tidak Hadir") counts.TidakHadir += 1;
    statusCounts.set(aggregateKey, counts);
  };
  for (const record of records) {
    const key = correctionKey(record.nik, record.sessionId, record.tanggal);
    attendanceEntryKeys.add(key);
    countStatus(record.nik, record.sessionId, corrections.get(key)?.newStatus ?? record.status);
  }
  for (const [key, correction] of corrections) {
    if (!attendanceEntryKeys.has(key)) {
      countStatus(correction.nik, correction.sessionId, correction.newStatus);
    }
  }
  return {
    data: employees.map((employee) => ({
      nik: employee.nik,
      namaLengkap: employee.namaLengkap,
      isActive: employee.isActive,
      statusKaryawan: employee.isActive ? "Aktif" : "Nonaktif",
      totalRecordAbsensi: sessions.reduce(
        (sum, session) =>
          sum + records.filter((record) =>
            record.nik === employee.nik && record.sessionId === session.id,
          ).length,
        0,
      ),
      sessions: sessions.map((session) => ({
        key: session.key,
        jumlahHadir: statusCounts.get(JSON.stringify([employee.nik, session.id]))?.Hadir ?? 0,
        jumlahTidakHadir: statusCounts.get(JSON.stringify([employee.nik, session.id]))?.TidakHadir ?? 0,
      })),
    })),
    statusScope: "RECORDED_ATTENDANCE_AND_ADMIN_CORRECTIONS",
    statusDefinition: "Counts include persisted attendance rows and correction-only statuses. Schedule-derived absences without an Admin correction are not included in this aggregate.",
    definition: {
      totalRecordAbsensi: "Jumlah row attendance yang tersimpan; nilai ini tidak berubah oleh koreksi status.",
      jumlahHadir: "Jumlah status Hadir dari record dan koreksi Admin dalam rentang tanggal; ketidakhadiran tanpa koreksi hanya dihitung pada laporan harian dari jadwal efektif yang sudah berakhir.",
      jumlahTidakHadir: "Jumlah status Tidak Hadir dari record dan koreksi Admin dalam rentang tanggal; ketidakhadiran tanpa koreksi hanya dihitung pada laporan harian dari jadwal efektif yang sudah berakhir.",
    },
    pagination: {
      page: input.page,
      limit: input.limit,
      total: totalEmployees,
      totalPages: Math.ceil(totalEmployees / input.limit),
      unit: "karyawan",
    },
  };
}

export async function getEmployeeAttendanceHistory(input: ReportPeriod & { nik: string; page: number; limit: number }) {
  const employee = await prisma.user.findUnique({
    where: { nik: input.nik },
    select: { nik: true, namaLengkap: true, isActive: true },
  });
  if (!employee) return null;
  const where = {
    nik: input.nik,
    tanggal: { gte: input.startDate, lte: input.endDate },
    ...(input.sesi ? { session: { key: input.sesi } } : {}),
  };
  const [records, total] = await prisma.$transaction([
    prisma.attendance.findMany({
      where,
      orderBy: [{ tanggal: "desc" }, { waktuAbsen: "desc" }, { id: "desc" }],
      skip: (input.page - 1) * input.limit,
      take: input.limit,
      select: {
        id: true, tanggal: true, sesi: true, sessionId: true, sessionNameSnapshot: true,
        waktuAbsen: true, status: true, session: { select: { key: true } },
      },
    }),
    prisma.attendance.count({ where }),
  ]);
  const corrections = await latestCorrections(
    [input.nik],
    input.startDate,
    input.endDate,
    input.sesi,
  );
  return {
    employee: { ...employee, statusKaryawan: employee.isActive ? "Aktif" : "Nonaktif" },
    data: records.map((record) => ({
      id: record.id,
      tanggal: formatBusinessDate(record.tanggal),
      sesi: record.session.key,
      sessionKey: record.session.key,
      sessionName: record.sessionNameSnapshot,
      waktuAbsen: record.waktuAbsen,
      status: corrections.get(correctionKey(input.nik, record.sessionId, record.tanggal))?.newStatus ?? record.status,
    })),
    statusScope: "RECORDED_ATTENDANCE_ONLY",
    statusDefinition: "History lists persisted attendance rows only, with the latest Admin correction applied. Schedule-derived absences are not attendance records and are not listed here.",
    pagination: {
      page: input.page,
      limit: input.limit,
      total,
      totalPages: Math.ceil(total / input.limit),
    },
  };
}

export async function getAttendanceStatistics(input: ReportPeriod) {
  const [totalKaryawan, totalAktif, totalNonaktif, grouped, employeeGroups, sessions] = await prisma.$transaction([
    prisma.user.count(),
    prisma.user.count({ where: { isActive: true } }),
    prisma.user.count({ where: { isActive: false } }),
    prisma.attendance.groupBy({
      by: ["sessionId"],
      where: { tanggal: { gte: input.startDate, lte: input.endDate } },
      _count: { _all: true },
    }),
    prisma.attendance.groupBy({
      by: ["nik"],
      where: { tanggal: { gte: input.startDate, lte: input.endDate } },
      _count: { _all: true },
    }),
    prisma.attendanceSessionDefinition.findMany({
      orderBy: { key: "asc" },
      select: { id: true, key: true },
    }),
  ]);
  const counts = new Map(grouped.map((group) => [group.sessionId, group._count._all]));
  const totalRecords = grouped.reduce((total, group) => total + group._count._all, 0);
  const employeesWithRecords = employeeGroups.length;
  return {
    periode: {
      startDate: formatBusinessDate(input.startDate),
      endDate: formatBusinessDate(input.endDate),
    },
    metrics: {
      totalKaryawanTerdaftar: totalKaryawan,
      totalKaryawanAktif: totalAktif,
      totalKaryawanNonaktif: totalNonaktif,
      totalRecordAbsensi: totalRecords,
      recordPerSesi: sessions.map((session) => ({
        key: session.key,
        count: counts.get(session.id) ?? 0,
      })),
      karyawanDenganRecordDalamPeriode: employeesWithRecords,
      karyawanTanpaRecordDalamPeriode: totalKaryawan - employeesWithRecords,
    },
    statusScope: "RECORDED_ATTENDANCE_ONLY",
    definition: {
      totalKaryawanTerdaftar: "Jumlah seluruh record User saat laporan dijalankan.",
      totalKaryawanAktif: "Jumlah User dengan isActive=true saat laporan dijalankan.",
      totalKaryawanNonaktif: "Jumlah User dengan isActive=false saat laporan dijalankan.",
      totalRecordAbsensi: "Jumlah record Attendance pada rentang tanggal inklusif.",
      recordPerSesi: "Jumlah record Attendance per identitas sesi dinamis.",
      karyawanDenganRecordDalamPeriode: "Jumlah NIK unik dengan setidaknya satu record Attendance pada rentang tersebut.",
      karyawanTanpaRecordDalamPeriode: "Jumlah karyawan terdaftar dikurangi NIK unik yang memiliki record; ini bukan jumlah karyawan yang tidak hadir.",
    },
  };
}

export async function* iterateAttendanceExport(input: ReportPeriod, batchSize = 500) {
  const date = new Date(input.startDate);
  while (date <= input.endDate) {
    let page = 1;
    while (true) {
      const report = await getDailyAttendanceReport({
        date: new Date(date),
        page,
        limit: batchSize,
        search: input.search,
        sesi: input.sesi,
      });
      for (const row of report.data) {
        yield {
          id: row.attendanceId ?? null,
          nik: row.nik,
          tanggal: new Date(date),
          sesi: row.sessionKey,
          sessionNameSnapshot: row.sessionName,
          waktuAbsen: row.waktuAbsen,
          status: row.statusAbsensi ?? "",
          user: { namaLengkap: row.namaLengkap, isActive: row.isActive },
        };
      }
      if (page >= report.pagination.totalPages) break;
      page += 1;
    }
    date.setUTCDate(date.getUTCDate() + 1);
  }
}
