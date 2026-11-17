export interface JakartaBusinessDateRange {
    /** UTC-midnight representations of PostgreSQL DATE calendar labels. */
    start: Date;
    end: Date;
}
/**
 * Attendance.tanggal stores the Jakarta business date as a PostgreSQL DATE,
 * represented by Prisma as UTC midnight. These bounds compare date labels,
 * not UTC instants, so a Jakarta day is never shifted to the prior UTC date.
 */
export declare function parseJakartaBusinessDateRange(value: unknown): JakartaBusinessDateRange | null;
