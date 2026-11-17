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
export declare function currentVersionSnapshot<T extends {
    id: number;
    effectiveFrom: Date;
}>(versions: readonly T[], businessDate: Date): T | undefined;
/**
 * A new version that only takes effect in the future would leave today's
 * displayed name, order, and active flag unchanged. Mirror those editable
 * fields onto the currently effective version and every pending future
 * version so Admin changes stay visible immediately and are not reverted by
 * an older pending version. Schedule times keep their own effective dates.
 */
export declare function immediateVersionEdits(versions: readonly {
    id: number;
    effectiveFrom: Date;
}[], newEffectiveFrom: Date, businessDate: Date, edit: SessionVersionEdit): Array<{
    id: number;
    data: SessionVersionEdit;
}>;
export type SessionDefinitionUpdate = {
    enabledFrom: Date;
} | {
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
export declare function immediateDefinitionUpdate(input: {
    isActive: boolean;
    disabledAt: Date | null;
    enabledFrom: Date | null;
    businessDate: Date;
    now: Date;
    adminId: number;
    adminUsername: string;
}): SessionDefinitionUpdate | null;
