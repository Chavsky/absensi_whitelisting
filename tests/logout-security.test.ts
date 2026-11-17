import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { once } from "node:events";
import test from "node:test";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import {
  adminSessionCookieClearOptions,
  adminSessionCookieOptions,
  userSessionCookieClearOptions,
  userSessionCookieOptions,
} from "../src/config/session-cookies.js";
import { allowedCorsOrigins, corsOptions, rejectDisallowedCorsOrigin } from "../src/config/cors.js";
import authRoutes from "../src/modules/auth/auth.routes.js";
import userRoutes from "../src/modules/users/user.routes.js";
import attendanceRoutes from "../src/modules/attendance/attendance.routes.js";
import deviceRoutes from "../src/modules/devices/device.routes.js";
import { createAdminLogoutHandler } from "../src/modules/auth/auth.controller.js";
import { createUserAuthenticator } from "../src/middlewares/auth.middleware.js";
import { isUserSessionValid } from "../src/modules/users/user.service.js";
import type { Request, Response } from "express";

type MockSession = { revokedAt: number | null; expiresAt: number };

function makeSessionStore(entries: Record<string, MockSession>) {
  const sessions = new Map(Object.entries(entries));
  const revocationCalls: string[] = [];
  const revoke = async (token: string) => {
    revocationCalls.push(token);
    const session = sessions.get(token);
    if (session && session.revokedAt === null) session.revokedAt = Date.now();
  };
  return { sessions, revocationCalls, revoke };
}

function makeResponse() {
  const result: {
    statusCode: number;
    body?: unknown;
    cleared?: { name: string; options: Record<string, unknown> };
  } = { statusCode: 200 };
  const response = {
    status(code: number) { result.statusCode = code; return response; },
    json(body: unknown) { result.body = body; return response; },
    clearCookie(name: string, options: Record<string, unknown>) {
      result.cleared = { name, options };
      return response;
    },
  };
  return { result, response: response as unknown as Response };
}

async function exerciseLogout(
  kind: "admin",
  token?: string,
  body?: unknown,
) {
  const cookieName = kind === "admin" ? "admin_session" : "user_session";
  const handler = createAdminLogoutHandler;
  const otherToken = `${kind}-unrelated-session-fixture`;
  const expiredToken = `${kind}-expired-session-fixture`;
  const revokedToken = `${kind}-revoked-session-fixture`;
  const sessions = makeSessionStore({
    [`${kind}-valid-session-fixture`]: { revokedAt: null, expiresAt: Date.now() + 60_000 },
    [expiredToken]: { revokedAt: null, expiresAt: Date.now() - 60_000 },
    [revokedToken]: { revokedAt: 123, expiresAt: Date.now() + 60_000 },
    [otherToken]: { revokedAt: null, expiresAt: Date.now() + 60_000 },
  });
  const { result, response } = makeResponse();
  const cookies = token === undefined ? {} : { [cookieName]: token };
  await handler(sessions.revoke)(
    { cookies, body } as unknown as Request,
    response,
  );
  return { ...sessions, result, cookieName, otherToken, expiredToken, revokedToken };
}

for (const kind of ["admin"] as const) {
  test(`${kind} logout: valid session is revoked and cookie cleared`, async () => {
    const token = `${kind}-valid-session-fixture`;
    const { sessions, revocationCalls, result, cookieName, otherToken } = await exerciseLogout(kind, token);
    assert.equal(result.statusCode, 200);
    assert.equal((result.body as { success: boolean }).success, true);
    assert.equal(result.cleared?.name, cookieName);
    assert.notEqual(sessions.get(token)?.revokedAt, null);
    assert.equal(sessions.get(otherToken)?.revokedAt, null);
    assert.deepEqual(revocationCalls, [token]);
  });

  test(`${kind} logout: expired session clears cookie without reactivating it`, async () => {
    const token = `${kind}-expired-session-fixture`;
    const { sessions, result } = await exerciseLogout(kind, token);
    assert.equal(result.statusCode, 200);
    assert.ok(result.cleared);
    assert.notEqual(sessions.get(token)?.revokedAt, null);
  });

  test(`${kind} logout: revoked session stays revoked and cookie clears`, async () => {
    const token = `${kind}-revoked-session-fixture`;
    const { sessions, result } = await exerciseLogout(kind, token);
    assert.equal(result.statusCode, 200);
    assert.ok(result.cleared);
    assert.equal(sessions.get(token)?.revokedAt, 123);
  });

  test(`${kind} logout: missing cookie clears the named cookie consistently`, async () => {
    const { revocationCalls, result, cookieName } = await exerciseLogout(kind);
    assert.equal(result.statusCode, 200);
    assert.equal(result.cleared?.name, cookieName);
    assert.deepEqual(revocationCalls, []);
  });

  test(`${kind} logout: invalid cookie cannot revoke another session and body token is ignored`, async () => {
    const { sessions, revocationCalls, result, otherToken } = await exerciseLogout(
      kind,
      `${kind}-invalid-session-fixture`,
      { token: `${kind}-unrelated-session-fixture` },
    );
    assert.equal(result.statusCode, 200);
    assert.ok(result.cleared);
    assert.equal(sessions.get(otherToken)?.revokedAt, null);
    assert.deepEqual(revocationCalls, [`${kind}-invalid-session-fixture`]);
  });
}

test("admin and user cookie options retain security attributes with separate durations", () => {
  const keys = ["httpOnly", "secure", "sameSite", "path"] as const;
  for (const [setOptions, clearOptions, maxAge] of [
    [adminSessionCookieOptions, adminSessionCookieClearOptions, 8 * 60 * 60 * 1000],
    [userSessionCookieOptions, userSessionCookieClearOptions, 400 * 24 * 60 * 60 * 1000],
  ] as const) {
    assert.equal(setOptions.httpOnly, true);
    assert.equal(setOptions.sameSite, "strict");
    assert.equal(setOptions.path, "/");
    assert.equal(setOptions.maxAge, maxAge);
    for (const key of keys) assert.equal(clearOptions[key], setOptions[key]);
  }
  assert.equal(adminSessionCookieOptions.secure, userSessionCookieOptions.secure);
});

test("COOKIE_SECURE production and development configuration branches", () => {
  const cases = [
    ["production rejects missing", "production", null, false, true],
    ["production rejects false", "production", "false", false, true],
    ["production accepts true", "production", "true", true, false],
    ["development accepts false", "development", "false", false, false],
  ] as const;

  for (const [label, nodeEnv, secureValue, expected, shouldReject] of cases) {
    const env = { ...process.env, NODE_ENV: nodeEnv };
    if (secureValue === null) delete env.COOKIE_SECURE;
    else env.COOKIE_SECURE = secureValue;
    const source = `import('./src/config/session-cookies.ts').then(m => { if (m.COOKIE_SECURE !== ${expected}) process.exitCode = 10; if (${shouldReject}) process.exitCode = 11; }).catch(() => { if (!${shouldReject}) process.exitCode = 12; });`;
    const child = spawnSync(process.execPath, ["--import", "tsx/esm", "--input-type=module", "-e", source], {
      cwd: process.cwd(), env, encoding: "utf8",
    });
    assert.equal(child.status, 0, `cookie configuration case failed: ${label}`);
  }
});

test("CORS allowlist rejects unknown origins and supports credentialed preflight", async () => {
  const allowedOrigin = [...allowedCorsOrigins][0];
  assert.ok(allowedOrigin);
  const app = express();
  app.use(rejectDisallowedCorsOrigin);
  app.use(cors(corsOptions));
  app.post("/probe", (_req, res) => res.status(200).json({ success: true }));
  const server = app.listen(0, "127.0.0.1");
  await once(server, "listening");
  const address = server.address();
  if (!address || typeof address === "string") throw new Error("Test server did not bind");
  const baseUrl = `http://127.0.0.1:${address.port}`;

  try {
    const allowed = await fetch(`${baseUrl}/probe`, { headers: { Origin: allowedOrigin } });
    assert.equal(allowed.status, 404);
    assert.equal(allowed.headers.get("access-control-allow-origin"), allowedOrigin);
    assert.equal(allowed.headers.get("access-control-allow-credentials"), "true");

    const denied = await fetch(`${baseUrl}/probe`, { headers: { Origin: "https://unlisted.invalid" } });
    assert.equal(denied.status, 403);

    const preflight = await fetch(`${baseUrl}/probe`, {
      method: "OPTIONS",
      headers: {
        Origin: allowedOrigin,
        "Access-Control-Request-Method": "POST",
        "Access-Control-Request-Headers": "content-type",
      },
    });
    assert.equal(preflight.status, 204);
    assert.equal(preflight.headers.get("access-control-allow-credentials"), "true");
  } finally {
    server.close();
    await once(server, "close");
  }
});

test("logout routes are unauthenticated while profile and attendance routes remain protected", () => {
  const routeFor = (router: any, path: string) => router.stack.find((layer: any) => layer.route?.path === path)?.route;
  const adminLogout = routeFor(authRoutes, "/logout");
  const adminProfile = routeFor(authRoutes, "/me");
  const userLogout = routeFor(userRoutes, "/logout");
  const userProfile = routeFor(userRoutes, "/me");

  assert.equal(adminLogout.stack.length, 1);
  assert.equal(userLogout, undefined);
  assert.equal(adminProfile.stack[0].name, "authenticateAdmin");
  assert.equal(userProfile.stack[0].name, "authenticateUser");
  for (const layer of attendanceRoutes.stack) {
    if (layer.route) assert.equal(layer.route.stack[0].name, "authenticateUser");
  }
});

test("Admin device revocation routes are protected by authenticateAdmin", () => {
  const routeFor = (path: string) => deviceRoutes.stack.find(
    (layer: { route?: { path?: string } }) => layer.route?.path === path,
  )?.route;
  for (const path of ["/:nik/session/revoke", "/:nik/revoke"]) {
    assert.equal(routeFor(path)?.stack[0].name, "authenticateAdmin");
  }
});

test("logout endpoints clear absent cookies and protected endpoints still return 401", async () => {
  const app = express();
  app.use(express.json());
  app.use(cookieParser());
  app.use("/api/auth", authRoutes);
  app.use("/api/users", userRoutes);
  app.use("/api/attendance", attendanceRoutes);
  const server = app.listen(0, "127.0.0.1");
  await once(server, "listening");
  const address = server.address();
  if (!address || typeof address === "string") throw new Error("Test server did not bind");
  const baseUrl = `http://127.0.0.1:${address.port}`;

  try {
    for (const [path, cookieName] of [
      ["/api/auth/logout", "admin_session"],
    ]) {
      const response = await fetch(`${baseUrl}${path}`, { method: "POST" });
      assert.equal(response.status, 200);
      assert.match(response.headers.get("set-cookie") ?? "", new RegExp(`^${cookieName}=`));
      assert.match(response.headers.get("set-cookie") ?? "", /Expires=Thu, 01 Jan 1970/i);
    }

    const employeeLogout = await fetch(`${baseUrl}/api/users/logout`, { method: "POST" });
    assert.equal(employeeLogout.status, 404);

    for (const [path, method] of [
      ["/api/auth/me", "GET"],
      ["/api/users/me", "GET"],
      ["/api/attendance", "POST"],
      ["/api/attendance/today", "GET"],
      ["/api/attendance/history", "GET"],
    ] as const) {
      const response = await fetch(`${baseUrl}${path}`, {
        method,
        ...(method === "POST" ? { headers: { "content-type": "application/json" }, body: "{}" } : {}),
      });
      assert.equal(response.status, 401, `${method} ${path} must remain protected`);
    }
  } finally {
    server.close();
    await once(server, "close");
  }
});

test("persistent employee sessions remain valid after 8 and 24 hours until revoked", () => {
  const now = new Date("2026-11-05T00:00:00.000Z");
  const session = {
    revokedAt: null,
    expiresAt: null,
    device: { status: "active", user: { isActive: true } },
  };
  assert.equal(isUserSessionValid(session, new Date(now.getTime() + 8 * 60 * 60 * 1000)), true);
  assert.equal(isUserSessionValid(session, new Date(now.getTime() + 24 * 60 * 60 * 1000)), true);
  assert.equal(isUserSessionValid({ ...session, revokedAt: now }, now), false);
  assert.equal(isUserSessionValid({ ...session, device: { ...session.device, status: "revoked" } }, now), false);
  assert.equal(isUserSessionValid({ ...session, device: { ...session.device, user: { isActive: false } } }, now), false);
});

test("authenticated employee requests renew the same token cookie without creating a session", async () => {
  const token = "existing-random-session-token";
  const renewed: Array<{ name: string; value: string; options: Record<string, unknown> }> = [];
  let activityUpdates = 0;
  let nextCalled = false;
  const authenticateUser = createUserAuthenticator(
    async (receivedToken) => receivedToken === token
      ? {
          session: { id: 45, lastUsedAt: new Date() },
          user: { nik: "EMP-45", namaLengkap: "Employee" },
        }
      : null,
    async () => { activityUpdates += 1; return true; },
  );
  const response = {
    status() { return this; },
    json() { return this; },
    cookie(name: string, value: string, options: Record<string, unknown>) {
      renewed.push({ name, value, options });
      return this;
    },
  };

  await authenticateUser(
    { cookies: { user_session: token } } as never,
    response as never,
    (() => { nextCalled = true; }) as never,
  );

  assert.equal(nextCalled, true);
  assert.equal(renewed.length, 1);
  assert.equal(renewed[0].name, "user_session");
  assert.equal(renewed[0].value, token);
  assert.equal(renewed[0].options.maxAge, 400 * 24 * 60 * 60 * 1000);
  assert.equal(activityUpdates, 0);
});

test("invalid employee sessions neither renew the cookie nor reach protected handlers", async () => {
  const renewed: string[] = [];
  let nextCalled = false;
  let statusCode = 200;
  const authenticateUser = createUserAuthenticator(async () => null);
  const response = {
    status(code: number) { statusCode = code; return this; },
    json() { return this; },
    cookie(name: string) { renewed.push(name); return this; },
  };
  await authenticateUser(
    { cookies: { user_session: "revoked-session-token" } } as never,
    response as never,
    (() => { nextCalled = true; }) as never,
  );
  assert.equal(statusCode, 401);
  assert.equal(nextCalled, false);
  assert.deepEqual(renewed, []);
});

test("persistent-session migration reconciles data and enforces one unrevoked session per device", () => {
  const migration = readFileSync(
    new URL("../prisma/migrations/20261105120000_persistent_device_sessions/migration.sql", import.meta.url),
    "utf8",
  );
  assert.match(migration, /"expires_at" <= CURRENT_TIMESTAMP/);
  assert.match(migration, /ROW_NUMBER\(\) OVER\s*\(\s*PARTITION BY "device_id"\s*ORDER BY "created_at" DESC, "id" DESC/s);
  assert.match(migration, /ranked_sessions\.position > 1/);
  assert.match(migration, /ALTER COLUMN "expires_at" DROP NOT NULL/);
  assert.match(migration, /UPDATE "user_sessions"\s+SET "expires_at" = NULL\s+WHERE "revoked_at" IS NULL/s);
  assert.match(migration, /CREATE UNIQUE INDEX "user_sessions_one_unrevoked_per_device_key"\s+ON "user_sessions"\("device_id"\)\s+WHERE "revoked_at" IS NULL/s);
  const activeSessionIndex = migration.match(/CREATE UNIQUE INDEX "user_sessions_one_unrevoked_per_device_key"[\s\S]*?;/)?.[0] ?? "";
  assert.doesNotMatch(activeSessionIndex, /expires_at|NOW\(\)|CURRENT_TIMESTAMP/i);
  assert.doesNotMatch(migration, /DELETE\s+FROM\s+"user_sessions"/i);
});
