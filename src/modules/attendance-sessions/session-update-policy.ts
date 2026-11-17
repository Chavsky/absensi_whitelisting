import { isSessionEnabledByConfiguration } from "./schedule-policy.js";

export interface SessionVersionSnapshot {
  id: number;
  name: string;
  sortOrder: number;
  isActive: boolean;
  effectiveFrom: Date;
}

export interface SessionVersionEdit {
  name: string;
  sortOrder: number;
  isActive: boolean;
}

export function currentVersionSnapshot<T extends { id: number; effectiveFrom: Date }>(
  versions: readonly T[],
  businessDate: Date,
): T | undefined {
  let current: T | undefined;
  for (const version of versions) {
    if (version.effectiveFrom > businessDate) continue;
    if (
      !current ||
      version.effectiveFrom > current.effectiveFrom ||
      (version.effectiveFrom.getTime() === current.effectiveFrom.getTime() &&
        version.id > current.id)
    ) current = version;
  }
  return current;
}

/**
 * A new version that only takes effect in the future would leave today's
 * displayed name, order, and active flag unchanged. Mirror those editable
 * fields onto the currently effective version and every pending future
 * version so Admin changes stay visible immediately and are not reverted by
 * an older pending version. Schedule times keep their own effective dates.
 */
export function immediateVersionEdits(
  versions: readonly { id: number; effectiveFrom: Date }[],
  newEffectiveFrom: Date,
  businessDate: Date,
  edit: SessionVersionEdit,
): Array<{ id: number; data: SessionVersionEdit }> {
  if (newEffectiveFrom <= businessDate) return [];
  const current = currentVersionSnapshot(versions, businessDate);
  if (!current) return [];
  return versions
    .filter((version) => version.effectiveFrom >= current.effectiveFrom)
    .map((version) => ({ id: version.id, data: { ...edit } }));
}

export type SessionDefinitionUpdate =
  | { enabledFrom: Date }
  | {
      disabledAt: Date;
      enabledFrom: null;
      disabledByAdminId: number;
      disabledByAdminUsername: string;
    };

/**
 * Activation must clear the effective wait of a previously disabled session
 * so the Admin list and the Employee endpoints see it as enabled today.
 * Deactivation keeps the existing realtime semantics by stamping disabledAt.
 */
export function immediateDefinitionUpdate(input: {
  isActive: boolean;
  disabledAt: Date | null;
  enabledFrom: Date | null;
  businessDate: Date;
  now: Date;
  adminId: number;
  adminUsername: string;
}): SessionDefinitionUpdate | null {
  const configEnabled = isSessionEnabledByConfiguration(
    input.disabledAt,
    input.enabledFrom,
    input.businessDate,
  );
  if (input.isActive) {
    return input.disabledAt !== null && !configEnabled
      ? { enabledFrom: input.businessDate }
      : null;
  }
  if (!configEnabled) return null;
  return {
    disabledAt: input.now,
    enabledFrom: null,
    disabledByAdminId: input.adminId,
    disabledByAdminUsername: input.adminUsername,
  };
}
