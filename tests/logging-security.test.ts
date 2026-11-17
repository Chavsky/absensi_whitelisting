import assert from "node:assert/strict";
import { once } from "node:events";
import test from "node:test";
import express from "express";
import { safeErrorHandler } from "../src/middlewares/error.middleware.js";
import { logSafeError } from "../src/utils/safe-error-logger.js";

function captureConsoleError<T>(callback: () => T): { value: T; output: string } {
  const original = console.error;
  const output: string[] = [];
  console.error = (...args: unknown[]) => output.push(args.map(String).join(" "));
  try {
    return { value: callback(), output: output.join("\n") };
  } finally {
    console.error = original;
  }
}

test("safe error logger omits dummy credentials, messages, stack, and arbitrary fields", () => {
  const error = new Error("DUMMY_PASSWORD DUMMY_JWT DUMMY_COOKIE DUMMY_DB_URL");
  Object.assign(error, {
    code: "P2010",
    token: "DUMMY_SESSION_TOKEN",
    query: "DUMMY_SQL_WITH_SECRET",
  });
  const { output } = captureConsoleError(() => logSafeError("TEST ERROR", error));
  assert.match(output, /TEST ERROR.*P2010/);
  for (const marker of [
    "DUMMY_PASSWORD", "DUMMY_JWT", "DUMMY_COOKIE", "DUMMY_DB_URL",
    "DUMMY_SESSION_TOKEN", "DUMMY_SQL_WITH_SECRET",
  ]) assert.equal(output.includes(marker), false);

  const hashAsCode = Object.assign(new Error("DUMMY_HASH_MESSAGE"), { code: "DEADBEEF0123456789ABCDEF" });
  const hashResult = captureConsoleError(() => logSafeError("HASH CODE TEST", hashAsCode));
  assert.equal(hashResult.output.includes("DEADBEEF"), false);
  assert.equal(hashResult.output.includes("DUMMY_HASH_MESSAGE"), false);
});

test("central error handler preserves safe status and never returns stack or error details", async () => {
  const app = express();
  app.use(express.json());
  app.post("/throw", (_req, _res, next) => {
    const error = new Error("DUMMY_PASSWORD DUMMY_COOKIE DUMMY_POSTGRES_DETAIL") as Error & { status: number; code: string };
    error.status = 400;
    error.code = "P2010";
    next(error);
  });
  app.use(safeErrorHandler);

  const server = app.listen(0, "127.0.0.1");
  await once(server, "listening");
  const address = server.address();
  if (!address || typeof address === "string") throw new Error("Test server did not bind");
  const original = console.error;
  const logLines: string[] = [];
  console.error = (...args: unknown[]) => logLines.push(args.map(String).join(" "));
  try {
    const response = await fetch(`http://127.0.0.1:${address.port}/throw`, { method: "POST", body: "{}" });
    assert.equal(response.status, 400);
    const body = await response.text();
    assert.match(body, /Request tidak valid/);
    for (const marker of ["DUMMY_PASSWORD", "DUMMY_COOKIE", "DUMMY_POSTGRES_DETAIL", "stack"]) {
      assert.equal(body.includes(marker), false);
    }
    assert.equal(logLines.length, 1);
    assert.match(logLines[0], /HTTP ERROR.*P2010/);
    for (const marker of ["DUMMY_PASSWORD", "DUMMY_COOKIE", "DUMMY_POSTGRES_DETAIL"]) {
      assert.equal(logLines.join("\n").includes(marker), false);
    }
  } finally {
    console.error = original;
    server.close();
    await once(server, "close");
  }
});

test("malformed JSON receives a generic client error without parser details", async () => {
  const app = express();
  app.use(express.json());
  app.post("/probe", (_req, res) => res.json({ success: true }));
  app.use(safeErrorHandler);
  const server = app.listen(0, "127.0.0.1");
  await once(server, "listening");
  const address = server.address();
  if (!address || typeof address === "string") throw new Error("Test server did not bind");
  try {
    const response = await fetch(`http://127.0.0.1:${address.port}/probe`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: '{"password":"DUMMY_PASSWORD",',
    });
    assert.equal(response.status, 400);
    const body = await response.text();
    assert.match(body, /Request tidak valid/);
    assert.equal(body.includes("DUMMY_PASSWORD"), false);
    assert.equal(body.includes("SyntaxError"), false);
  } finally {
    server.close();
    await once(server, "close");
  }
});
