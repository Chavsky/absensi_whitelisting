export interface CorrectionRevision<TValue> {
    key: string;
    revision: number;
    value: TValue;
}
export declare function isAttendanceStatus(value: string | undefined): value is "Hadir" | "Tidak Hadir";
export declare function latestCorrectionByRevision<TValue>(corrections: CorrectionRevision<TValue>[]): Map<string, CorrectionRevision<TValue>>;
export declare function effectiveAttendanceStatus(input: {
    correctionStatus?: string;
    attendanceStatus?: string;
    sessionFinished: boolean;
}): "Hadir" | "Tidak Hadir" | null;
