import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import {
  currentVersionSnapshot,
  immediateDefinitionUpdate,
  immediateVersionEdits,
} from "../src/modules/attendance-sessions/session-update-policy.js";
import { isSessionEnabledByConfiguration } from "../src/modules/attendance-sessions/schedule-policy.js";

const today = new Date("2026-11-09T00:00:00.000Z");
const tomorrow = new Date("2026-11-10T00:00:00.000Z");
const dayAfter = new Date("2026-11-11T00:00:00.000Z");
const nextEffective = new Date("2026-11-12T00:00:00.000Z");

type Patch = { id: number; data: { name: string; sortOrder: number; isActive: boolean } };

function version(
  id: number,
  name: string,
  isActive: boolean,
  effectiveFrom: Date,
) {
  return { id, name, sortOrder: 10, isActive, effectiveFrom };
}

function readBack(versions: ReturnType<typeof version>[], patches: Patch[]) {
  return versions.map((item) => {
    const patch = patches.find((entry) => entry.id === item.id);
    return patch ? { ...item, ...patch.data } : item;
  });
}

test("a renamed session is readable immediately from the current version", () => {
  const versions = [
    version(7, "ABSEN LAMA", true, today),
    version(8, "ABSEN BARU", true, tomorrow),
  ];
  const edit = { name: "ABSEN PAGI", sortOrder: 20, isActive: true };
  const patches = immediateVersionEdits(versions, nextEffective, today, edit);

  assert.deepEqual(patches, [
    { id: 7, data: edit },
    { id: 8, data: edit },
  ]);

  const current = currentVersionSnapshot(readBack(versions, patches), today);
  assert.equal(current?.id, 7);
  assert.equal(current?.name, "ABSEN PAGI");
  assert.equal(current?.sortOrder, 20);
});

test("activating a disabled session takes effect today and reads back as enabled", () => {
  const versions = [
    version(7, "ABSEN PAGI", false, today),
    version(8, "ABSEN PAGI", true, tomorrow),
  ];
  const edit = { name: "ABSEN PAGI", sortOrder: 10, isActive: true };
  const now = new Date("2026-11-09T03:00:00.000Z");
  const disabledAt = new Date("2026-11-08T03:00:00.000Z");

  const versionPatches = immediateVersionEdits(versions, nextEffective, today, edit);
  const definitionPatch = immediateDefinitionUpdate({
    isActive: true,
    disabledAt,
    enabledFrom: null,
    businessDate: today,
    now,
    adminId: 1,
    adminUsername: "admin",
  });

  assert.equal(versionPatches.length, 2);
  assert.deepEqual(definitionPatch, { enabledFrom: today });

  const readVersions = readBack(versions, versionPatches);
  const current = currentVersionSnapshot(readVersions, today);
  assert.equal(current?.isActive, true);
  assert.equal(
    isSessionEnabledByConfiguration(disabledAt, today, today),
    true,
  );
});

test("deactivating an active session takes effect today and reads back as disabled", () => {
  const versions = [
    version(7, "ABSEN PAGI", true, today),
    version(8, "ABSEN PAGI", true, tomorrow),
  ];
  const edit = { name: "ABSEN PAGI", sortOrder: 10, isActive: false };
  const now = new Date("2026-11-09T03:00:00.000Z");

  const versionPatches = immediateVersionEdits(versions, nextEffective, today, edit);
  const definitionPatch = immediateDefinitionUpdate({
    isActive: false,
    disabledAt: null,
    enabledFrom: null,
    businessDate: today,
    now,
    adminId: 1,
    adminUsername: "admin",
  });

  assert.equal(versionPatches.length, 2);
  assert.deepEqual(definitionPatch, {
    disabledAt: now,
    enabledFrom: null,
    disabledByAdminId: 1,
    disabledByAdminUsername: "admin",
  });

  const current = currentVersionSnapshot(readBack(versions, versionPatches), today);
  assert.equal(current?.isActive, false);
  assert.equal(
    isSessionEnabledByConfiguration(now, null, today),
    false,
  );
});

test("reactivation overrides an older pending deactivation version", () => {
  const versions = [
    version(7, "ABSEN PAGI", false, today),
    version(8, "ABSEN PAGI", false, tomorrow),
    version(9, "ABSEN PAGI", true, dayAfter),
  ];
  const edit = { name: "ABSEN PAGI", sortOrder: 10, isActive: true };

  const patches = immediateVersionEdits(versions, nextEffective, today, edit);
  const readVersions = readBack(versions, patches);

  assert.equal(currentVersionSnapshot(readVersions, today)?.isActive, true);
  assert.equal(currentVersionSnapshot(readVersions, tomorrow)?.isActive, true);
  assert.equal(currentVersionSnapshot(readVersions, dayAfter)?.isActive, true);
});

test("a version effective today is itself the current version and needs no mirror", () => {
  const versions = [version(7, "ABSEN LAMA", true, new Date("2026-11-08T00:00:00.000Z"))];
  const edit = { name: "ABSEN PAGI", sortOrder: 10, isActive: true };

  assert.deepEqual(immediateVersionEdits(versions, today, today, edit), []);
  assert.equal(
    currentVersionSnapshot(versions, today)?.name,
    "ABSEN LAMA",
    "no retroactive edit is made when the new version already applies today",
  );
});

test("no mirror is attempted when the session has no currently effective version", () => {
  const versions = [version(9, "FUTURE SESSION", true, dayAfter)];
  const edit = { name: "FUTURE SESSION", sortOrder: 10, isActive: true };

  assert.deepEqual(
    immediateVersionEdits(versions, new Date("2026-11-13T00:00:00.000Z"), today, edit),
    [],
  );
});

test("activation does not rewrite an already enabled definition", () => {
  assert.equal(
    immediateDefinitionUpdate({
      isActive: true,
      disabledAt: null,
      enabledFrom: null,
      businessDate: today,
      now: new Date(),
      adminId: 1,
      adminUsername: "admin",
    }),
    null,
  );
});

test("the admin list response exposes the edited name and enabled state immediately", () => {
  const versions = [
    version(7, "ABSEN LAMA", true, today),
    version(8, "ABSEN LAMA", true, tomorrow),
  ];
  const edit = { name: "ABSEN SORE", sortOrder: 30, isActive: true };
  const patches = immediateVersionEdits(versions, nextEffective, today, edit);
  const updated = readBack(versions, patches);
  const current = currentVersionSnapshot(updated, today);

  const listItem = {
    id: 5,
    key: "sesi_005",
    isEnabled: Boolean(
      current?.isActive &&
      isSessionEnabledByConfiguration(null, null, today),
    ),
    versions: updated.map((item) => ({
      ...item,
      startTime: "14:00",
      endTime: "18:00",
      daySchedules: [],
    })),
  };

  const responseVersion = listItem.versions.find((item) => item.id === current?.id);
  assert.equal(responseVersion?.name, "ABSEN SORE");
  assert.equal(responseVersion?.sortOrder, 30);
  assert.equal(listItem.isEnabled, true);
  assert.equal(listItem.key, "sesi_005");
});

const sessionServiceUrl = new URL(
  "../src/modules/attendance-sessions/session.service.ts",
  import.meta.url,
);
const sessionControllerUrl = new URL(
  "../src/modules/attendance-sessions/session.controller.ts",
  import.meta.url,
);
const sessionRoutesUrl = new URL(
  "../src/modules/attendance-sessions/session.routes.ts",
  import.meta.url,
);

function section(source: string, startMarker: string, endMarker: string): string {
  const start = source.indexOf(startMarker);
  const end = source.indexOf(endMarker);
  assert.notEqual(start, -1, `missing ${startMarker}`);
  assert.notEqual(end, -1, `missing ${endMarker}`);
  assert.ok(end > start, `${endMarker} must follow ${startMarker}`);
  return source.slice(start, end);
}

test("the version endpoint applies the immediate edit and returns the saved version", async () => {
  const [service, controller] = await Promise.all([
    readFile(sessionServiceUrl, "utf8"),
    readFile(sessionControllerUrl, "utf8"),
  ]);
  const append = section(
    service,
    "export async function appendSessionVersion",
    "export async function disableSession",
  );
  const handler = section(
    controller,
    "export async function addAdminSessionVersion",
    "export async function disableAdminSession",
  );

  assert.match(append, /orderBy: \[\{ effectiveFrom: "desc" \}, \{ id: "desc" \}\]/);
  assert.match(append, /include: \{ daySchedules: true \}/);
  assert.match(append, /const effectiveFrom = today;/);
  assert.doesNotMatch(append, /nextSessionEffectiveDate/);
  assert.match(append, /ensurePendingVersionsUnreferenced\(tx, pendingVersions\)/);
  assert.match(append, /version\.effectiveFrom > today/);
  assert.match(append, /await tx\.attendanceSessionDaySchedule\.deleteMany\(\{[\s\S]*where: \{ sessionVersionId: pending\.id \}/);
  assert.match(append, /await tx\.attendanceSessionVersion\.delete\(\{ where: \{ id: pending\.id \} \}\)/);
  assert.match(append, /const todayVersion = session\.versions\.find\(/);
  assert.match(append, /await tx\.attendanceSessionVersion\.update\(\{[\s\S]*where: \{ id: todayVersion\.id \}/);
  assert.match(append, /const currentEdits = immediateVersionEdits\(session\.versions, effectiveFrom, today, edit\)/);
  assert.match(append, /for \(const currentEdit of currentEdits\)/);
  assert.match(append, /await tx\.attendanceSessionVersion\.update\(\{[\s\S]*where: \{ id: currentEdit\.id \}[\s\S]*data: currentEdit\.data/);
  assert.doesNotMatch(append, /timeRange: currentTimeRange/);
  assert.match(append, /isActive: input\.isActive,[\s\S]*timeRange,/);
  assert.match(append, /const definitionUpdate = immediateDefinitionUpdate\(\{/);
  assert.match(append, /await tx\.attendanceSessionDefinition\.update\(\{[\s\S]*data: definitionUpdate/);
  assert.match(append, /name: input\.name\.trim\(\)/);
  assert.match(append, /sortOrder: input\.sortOrder/);
  assert.match(append, /isActive: input\.isActive/);
  assert.match(append, /return version;/);

  assert.match(handler, /appendSessionVersion\(\{/);
  assert.match(handler, /res\.status\(201\)\.json\(\{ success: true, data: serializeVersion\(data\) \}\)/);
});

test("the admin list reads enabled state from the updated current version", async () => {
  const service = await readFile(sessionServiceUrl, "utf8");
  const list = section(
    service,
    "export async function listSessionsForAdmin",
    "export async function createSession",
  );

  assert.match(list, /const currentVersion = currentVersionSnapshot\(session\.versions, date\)/);
  assert.match(list, /isEnabled: Boolean\([\s\S]*currentVersion\?\.isActive[\s\S]*isSessionEnabledByConfiguration\(session\.disabledAt, session\.enabledFrom, date\)/);
});

test("the admin response keeps the session key and serialized version fields", async () => {
  const [controller, routes] = await Promise.all([
    readFile(sessionControllerUrl, "utf8"),
    readFile(sessionRoutesUrl, "utf8"),
  ]);

  assert.match(controller, /function serializeVersion[\s\S]*\.\.\.version/);
  assert.match(controller, /daySchedules: version\.daySchedules\.map/);
  assert.match(
    routes,
    /adminSessionRouter\.post\(\s*"\/:key\/versions",\s*addAdminSessionVersion\s*\)/,
  );
});
