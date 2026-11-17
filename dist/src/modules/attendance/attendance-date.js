/**
 * Attendance.tanggal stores the Jakarta business date as a PostgreSQL DATE,
 * represented by Prisma as UTC midnight. These bounds compare date labels,
 * not UTC instants, so a Jakarta day is never shifted to the prior UTC date.
 */
export function parseJakartaBusinessDateRange(value) {
    if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value))
        return null;
    const start = new Date(value + "T00:00:00.000Z");
    if (Number.isNaN(start.getTime()) || start.toISOString().slice(0, 10) !== value)
        return null;
    const nextCalendarDay = new Date(start);
    nextCalendarDay.setUTCDate(nextCalendarDay.getUTCDate() + 1);
    const nextDate = nextCalendarDay.toISOString().slice(0, 10);
    const end = new Date(nextDate + "T00:00:00.000Z");
    if (Number.isNaN(end.getTime()))
        return null;
    return { start, end };
}
//# sourceMappingURL=attendance-date.js.map