export function isAttendanceStatus(value) {
    return value === "Hadir" || value === "Tidak Hadir";
}
export function latestCorrectionByRevision(corrections) {
    const latest = new Map();
    for (const correction of corrections) {
        const current = latest.get(correction.key);
        if (!current || correction.revision > current.revision) {
            latest.set(correction.key, correction);
        }
    }
    return latest;
}
export function effectiveAttendanceStatus(input) {
    if (isAttendanceStatus(input.correctionStatus))
        return input.correctionStatus;
    if (isAttendanceStatus(input.attendanceStatus))
        return input.attendanceStatus;
    return input.sessionFinished ? "Tidak Hadir" : null;
}
//# sourceMappingURL=correction-policy.js.map