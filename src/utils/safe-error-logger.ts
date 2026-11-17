export function logSafeError(context: string, error: unknown): void {
  const category = error instanceof Error ? "Error" : "UnknownError";
  const rawCode =
    typeof error === "object" && error !== null && "code" in error
      ? error.code
      : undefined;
  const code =
    typeof rawCode === "string" && /^(?:P\d{4}|[0-9A-Z]{5})$/.test(rawCode)
      ? rawCode
      : undefined;

  console.error(`[${context}] ${category}${code ? ` code=${code}` : ""}`);
}
