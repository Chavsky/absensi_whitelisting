import assert from "node:assert/strict";
import test from "node:test";
import { sessionKeyForId } from "../src/modules/attendance-sessions/session-identity.js";

test("session keys are generated from permanent IDs, not editable names", () => {
  assert.equal(sessionKeyForId(1), "sesi_001");
  assert.equal(sessionKeyForId(2), "sesi_002");
  assert.equal(sessionKeyForId(1000), "sesi_1000");
  assert.notEqual(sessionKeyForId(1), sessionKeyForId(2));
  assert.throws(() => sessionKeyForId(0), /INVALID_SESSION_ID/);
});
