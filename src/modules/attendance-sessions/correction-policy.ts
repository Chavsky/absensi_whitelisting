export interface CorrectionRevision<TValue> {
  key: string;
  revision: number;
  value: TValue;
}

export function isAttendanceStatus(value: string | undefined): value is "Hadir" | "Tidak Hadir" {
  return value === "Hadir" || value === "Tidak Hadir";
}

export function latestCorrectionByRevision<TValue>(
  corrections: CorrectionRevision<TValue>[],
): Map<string, CorrectionRevision<TValue>> {
  const latest = new Map<string, CorrectionRevision<TValue>>();
  for (const correction of corrections) {
    const current = latest.get(correction.key);
    if (!current || correction.revision > current.revision) {
      latest.set(correction.key, correction);
    }
  }
  return latest;
}

export function effectiveAttendanceStatus(input: {
  correctionStatus?: string;
  attendanceStatus?: string;
  sessionFinished: boolean;
}): "Hadir" | "Tidak Hadir" | null {
  if (isAttendanceStatus(input.correctionStatus)) return input.correctionStatus;
  if (isAttendanceStatus(input.attendanceStatus)) return input.attendanceStatus;
  return input.sessionFinished ? "Tidak Hadir" : null;
}
