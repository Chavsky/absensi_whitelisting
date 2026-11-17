import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import test from "node:test";
import { prisma } from "../src/config/database.js";
import { activateDevice, createEnrollmentCode } from "../src/modules/devices/device.service.js";
import {
  createSessionRecoveryCode,
  redeemSessionRecoveryCode,
} from "../src/modules/devices/session-recovery.service.js";
import {
  revokeEmployeeDevice,
  revokeEmployeeSession,
} from "../src/modules/devices/device-admin.service.js";
import deviceRoutes from "../src/modules/devices/device.routes.js";

function hash(value: string) {
  return createHash("sha256").update(value).digest("hex");
}

async function withTransactionMock<T>(transaction: object, run: () => Promise<T>) {
  const previous = Object.getOwnPropertyDescriptor(prisma, "$transaction");
  Object.defineProperty(prisma, "$transaction", {
    configurable: true,
    value: async (callback: (tx: object) => Promise<unknown>) => callback(transaction),
  });
  try {
    return await run();
  } finally {
    if (previous) Object.defineProperty(prisma, "$transaction", previous);
    else Reflect.deleteProperty(prisma, "$transaction");
  }
}

test("Admin enrollment code is hashed, expires quickly, and is attributed to the issuing Admin", async () => {
  let created: Record<string, unknown> | undefined;
  let audit: Record<string, unknown> | undefined;
  let issuedCode = "";
  const device = { id: 7 };
  const tx = {
    $queryRaw: async () => [{ nik: "EMP-7", is_active: true }],
    userDevice: {
      findUnique: async () => null,
      create: async ({ data }: { data: Record<string, unknown> }) => {
        created = data;
        return device;
      },
    },
    securityAuditLog: {
      create: async ({ data }: { data: Record<string, unknown> }) => { audit = data; },
    },
  };

  await withTransactionMock(tx, async () => {
    const result = await createEnrollmentCode(" EMP-7 ", 22);
    issuedCode = result.code;
    assert.match(result.code, /^[A-F0-9]{16}$/);
    assert.ok(result.expiresAt.getTime() > Date.now());
    assert.ok(result.expiresAt.getTime() <= Date.now() + 10 * 60 * 1000);
    assert.equal(result.deviceId, device.id);
  });

  assert.equal(created?.enrollmentCodeHash, hash(issuedCode));
  assert.equal(created?.registeredByAdminId, 22);
  assert.equal(audit?.action, "enrollment_code_issued");
  assert.equal(audit?.adminId, 22);
  assert.equal("code" in (created ?? {}), false);
});

test("activation creates one persistent hashed session and rejects an active device", async () => {
  const enrollmentCode = "0123456789ABCDEF";
  let sessionData: Record<string, unknown> | undefined;
  let activationAudit: Record<string, unknown> | undefined;
  let createSessionCalls = 0;
  const deviceRow = {
    id: 7,
    nik: "EMP-7",
    status: "pending",
    enrollment_code_hash: hash(enrollmentCode),
    enrollment_expires_at: new Date(Date.now() + 60_000),
    enrollment_used_at: null,
    registered_by_admin_id: 22,
  };
  const tx = {
    $queryRawUnsafe: async () => [{ nik: "EMP-7", is_active: true }],
    $queryRaw: async () => [deviceRow],
    userDevice: {
      update: async () => ({
        id: 7,
        nik: "EMP-7",
        deviceUuid: "new-device-uuid",
        deviceName: "Phone",
        status: "active",
        activatedAt: new Date(),
      }),
    },
    userSession: {
      create: async ({ data }: { data: Record<string, unknown> }) => {
        createSessionCalls += 1;
        sessionData = data;
        return { expiresAt: null };
      },
    },
    securityAuditLog: {
      create: async ({ data }: { data: Record<string, unknown> }) => { activationAudit = data; },
    },
  };

  await withTransactionMock(tx, async () => {
    const result = await activateDevice("EMP-7", enrollmentCode, "Phone");
    assert.match(result.sessionToken, /^[a-f0-9]{64}$/);
    assert.equal(result.expiresAt, null);
    assert.notEqual(sessionData?.tokenHash, result.sessionToken);
  });

  assert.equal(createSessionCalls, 1);
  assert.equal(sessionData?.expiresAt, null);
  assert.equal(activationAudit?.action, "device_activated");
  assert.equal(activationAudit?.adminId, 22);

  const activeTx = {
    ...tx,
    $queryRaw: async () => [{ ...deviceRow, status: "active" }],
    userSession: {
      create: async () => { createSessionCalls += 1; },
    },
  };
  await withTransactionMock(activeTx, async () => {
    await assert.rejects(activateDevice("EMP-7", enrollmentCode), { message: "ENROLLMENT_INVALID" });
  });
  assert.equal(createSessionCalls, 1);
});

test("activation rejects expired and already-used enrollment codes", async () => {
  const enrollmentCode = "0123456789ABCDEF";
  const makeTx = (expiresAt: Date, usedAt: Date | null) => ({
    $queryRawUnsafe: async () => [{ nik: "EMP-7", is_active: true }],
    $queryRaw: async () => [{
      id: 7,
      nik: "EMP-7",
      status: "pending",
      enrollment_code_hash: hash(enrollmentCode),
      enrollment_expires_at: expiresAt,
      enrollment_used_at: usedAt,
      registered_by_admin_id: 22,
    }],
  });
  await withTransactionMock(makeTx(new Date(Date.now() - 1), null), async () => {
    await assert.rejects(activateDevice("EMP-7", enrollmentCode), { message: "ENROLLMENT_EXPIRED" });
  });
  await withTransactionMock(makeTx(new Date(Date.now() + 60_000), new Date()), async () => {
    await assert.rejects(activateDevice("EMP-7", enrollmentCode), { message: "ENROLLMENT_INVALID" });
  });
});

test("Admin recovery issuance is attributed and a recovery code can be redeemed only once", async () => {
  let issuedCode = "";
  let storedRecovery: { codeHash: string; expiresAt: Date; usedAt: Date | null; invalidatedAt: Date | null } | null = null;
  let audit: Record<string, unknown> | undefined;
  let issueRawCalls = 0;
  const issueTx = {
    $queryRaw: async () => {
      issueRawCalls += 1;
      return issueRawCalls === 1 ? [{ nik: "EMP-7", is_active: true }] : [{ id: 7 }];
    },
    userDevice: {
      findUnique: async () => ({ id: 7, status: "active", deviceUuid: "device-uuid" }),
    },
    deviceSessionRecovery: {
      updateMany: async () => ({ count: 0 }),
      create: async ({ data }: { data: { codeHash: string; expiresAt: Date } }) => {
        storedRecovery = { ...data, usedAt: null, invalidatedAt: null };
      },
    },
    securityAuditLog: {
      create: async ({ data }: { data: Record<string, unknown> }) => { audit = data; },
    },
  };

  await withTransactionMock(issueTx, async () => {
    const result = await createSessionRecoveryCode("EMP-7", 22);
    issuedCode = result.code;
    assert.match(result.code, /^[A-F0-9]{32}$/);
    assert.ok(result.expiresAt.getTime() <= Date.now() + 10 * 60 * 1000);
  });
  assert.equal(storedRecovery?.codeHash, hash(issuedCode));
  assert.equal(audit?.adminId, 22);
  assert.equal(audit?.action, "session_recovery_code_issued");

  const issuedCodeHash = (storedRecovery as { codeHash: string }).codeHash;
  let consumed = false;
  let createdSessions = 0;
  let revokedOldSessions = 0;
  const redeemTx = {
    $queryRaw: async () => {
      const count = (redeemTx.rawCalls += 1);
      if (count === 1) return [{ nik: "EMP-7", is_active: true }];
      if (count === 2) return [{ id: 7 }];
      return [{ id: 3 }];
    },
    rawCalls: 0,
    userDevice: { findUnique: async () => ({ id: 7, status: "active" }) },
    deviceSessionRecovery: {
      findFirst: async () => ({
        id: 3,
        deviceId: 7,
        codeHash: issuedCodeHash,
        expiresAt: new Date(Date.now() + 60_000),
        usedAt: consumed ? new Date() : null,
        invalidatedAt: null,
      }),
      updateMany: async () => {
        if (consumed) return { count: 0 };
        consumed = true;
        return { count: 1 };
      },
    },
    userSession: {
      updateMany: async () => { revokedOldSessions += 1; return { count: 1 }; },
      create: async ({ data }: { data: Record<string, unknown> }) => {
        createdSessions += 1;
        assert.equal(data.expiresAt, null);
        return { id: 99 };
      },
    },
    securityAuditLog: {
      create: async ({ data }: { data: Record<string, unknown> }) => { audit = data; },
    },
  };
  await withTransactionMock(redeemTx, async () => {
    const result = await redeemSessionRecoveryCode("EMP-7", issuedCode);
    assert.match(result.token, /^[a-f0-9]{64}$/);
    assert.equal(result.expiresAt, null);
    await assert.rejects(redeemSessionRecoveryCode("EMP-7", issuedCode), { message: "RECOVERY_INVALID" });
  });
  assert.equal(revokedOldSessions, 1);
  assert.equal(createdSessions, 1);
  assert.equal(audit?.action, "session_recovered");
});

test("activation and recovery code issuance routes require Admin authentication", () => {
  const routeFor = (path: string) => deviceRoutes.stack.find(
    (layer: { route?: { path?: string } }) => layer.route?.path === path,
  )?.route;
  assert.equal(routeFor("/:nik/enrollment")?.stack[0].name, "authenticateAdmin");
  assert.equal(routeFor("/:nik/session-recovery")?.stack[0].name, "authenticateAdmin");
});

test("Admin session and device revocation updates authorization and records audit events", async () => {
  const sessionAudit: Record<string, unknown>[] = [];
  const sessionTx = {
    $queryRaw: async (query: TemplateStringsArray) =>
      query.join("").includes("user_devices") ? [{ id: 7 }] : [{ nik: "EMP-7" }],
    userSession: {
      updateMany: async () => ({ count: 1 }),
    },
    securityAuditLog: {
      create: async ({ data }: { data: Record<string, unknown> }) => { sessionAudit.push(data); },
    },
  };
  await withTransactionMock(sessionTx, async () => {
    const result = await revokeEmployeeSession("EMP-7", 22);
    assert.equal(result.nik, "EMP-7");
    assert.ok(result.revokedAt instanceof Date);
  });
  assert.equal(sessionAudit[0].action, "session_revoked");
  assert.equal(sessionAudit[0].adminId, 22);

  const deviceAudit: Record<string, unknown>[] = [];
  let deviceUpdate: Record<string, unknown> | undefined;
  let sessionRevocations = 0;
  let recoveryInvalidations = 0;
  let deviceRawCalls = 0;
  const deviceTx = {
    $queryRaw: async () => {
      deviceRawCalls += 1;
      return deviceRawCalls === 1 ? [{ nik: "EMP-7" }] : [{ id: 7 }];
    },
    userDevice: {
      update: async ({ data }: { data: Record<string, unknown> }) => {
        deviceUpdate = data;
        return { id: 7, nik: "EMP-7", status: "revoked", revokedAt: new Date() };
      },
    },
    userSession: {
      updateMany: async () => { sessionRevocations += 1; return { count: 1 }; },
    },
    deviceSessionRecovery: {
      updateMany: async () => { recoveryInvalidations += 1; return { count: 1 }; },
    },
    securityAuditLog: {
      create: async ({ data }: { data: Record<string, unknown> }) => { deviceAudit.push(data); },
    },
  };
  await withTransactionMock(deviceTx, async () => {
    const result = await revokeEmployeeDevice("EMP-7", 22);
    assert.equal(result.status, "revoked");
  });
  assert.equal(deviceUpdate?.status, "revoked");
  assert.equal(sessionRevocations, 1);
  assert.equal(recoveryInvalidations, 1);
  assert.equal(deviceAudit[0].action, "device_revoked");
  assert.equal(deviceAudit[0].adminId, 22);
});
