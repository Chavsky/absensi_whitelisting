import "dotenv/config";

const ADMIN_SESSION_DURATION_MS = 8 * 60 * 60 * 1000;
export const USER_SESSION_COOKIE_DURATION_MS = 400 * 24 * 60 * 60 * 1000;
const configuredCookieSecure = process.env.COOKIE_SECURE;

if (
  configuredCookieSecure !== undefined &&
  configuredCookieSecure !== "true" &&
  configuredCookieSecure !== "false"
) {
  throw new Error("COOKIE_SECURE harus bernilai true atau false.");
}

export const COOKIE_SECURE = configuredCookieSecure === "true";
if (process.env.NODE_ENV === "production" && !COOKIE_SECURE) {
  throw new Error("COOKIE_SECURE=true wajib dikonfigurasi pada production.");
}

const sharedCookieOptions = {
  httpOnly: true,
  secure: COOKIE_SECURE,
  sameSite: "strict" as const,
  path: "/",
};

export const ADMIN_SESSION_COOKIE_NAME = "admin_session";
export const USER_SESSION_COOKIE_NAME = "user_session";

export const adminSessionCookieOptions = {
  ...sharedCookieOptions,
  maxAge: ADMIN_SESSION_DURATION_MS,
};

export const userSessionCookieOptions = {
  ...sharedCookieOptions,
  maxAge: USER_SESSION_COOKIE_DURATION_MS,
};

export const adminSessionCookieClearOptions = { ...sharedCookieOptions };
export const userSessionCookieClearOptions = { ...sharedCookieOptions };
