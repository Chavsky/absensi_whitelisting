export function sessionKeyForId(sessionId: number): string {
  if (!Number.isSafeInteger(sessionId) || sessionId <= 0) {
    throw new Error("INVALID_SESSION_ID");
  }
  return `sesi_${String(sessionId).padStart(3, "0")}`;
}
