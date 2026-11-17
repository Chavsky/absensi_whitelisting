import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
/**
 * Prisma Errors
 */
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
/**
 * Decimal.js
 */
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
/**
* Extensions
*/
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
/**
 * Prisma Client JS version: 7.10.1
 * Query Engine version: d1b3f377ca835d73fd50954a5e22128b9ebdd6b8
 */
export declare const prismaVersion: PrismaVersion;
/**
 * Utility Types
 */
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: runtime.DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: runtime.JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
/**
 * Resolved type of the argument passed to the `PrismaClient` constructor.
 *
 * When called without a narrower options type (the common case), this resolves
 * to `PrismaClientOptions` directly, which produces a clear TypeScript error
 * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
 * the argument is missing or incomplete. When the user supplies a narrower
 * options type (e.g. via a literal), it falls back to `Subset` to keep
 * filtering out unknown properties.
 */
export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> = [
    PrismaClientOptions
] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;
/**
 * SelectSubset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
 * Additionally, it validates, if both select and include are present. If the case, it errors.
 */
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
export type XOR<T, U> = T extends object ? U extends object ? ((Without<T, U> & U) | (Without<U, T> & T)) & object : U : T;
/**
 * Is T a Record?
 */
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
/**
 * If it's T[], return T
 */
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
/**
 * From ts-toolbelt
 */
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
/** Helper Types for "Merge" **/
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | ({
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O) : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
/**
 * Exclude all keys with underscores
 */
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly User: 'User';
    readonly Admin: 'Admin';
    readonly Attendance: 'Attendance';
    readonly AttendanceSessionDefinition: 'AttendanceSessionDefinition';
    readonly AttendanceSessionVersion: 'AttendanceSessionVersion';
    readonly AttendanceSessionDaySchedule: 'AttendanceSessionDaySchedule';
    readonly AttendanceCorrectionLog: 'AttendanceCorrectionLog';
    readonly UserDevice: 'UserDevice';
    readonly UserSession: 'UserSession';
    readonly DeviceSessionRecovery: 'DeviceSessionRecovery';
    readonly SecurityAuditLog: 'SecurityAuditLog';
    readonly AdminSession: 'AdminSession';
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "user" | "admin" | "attendance" | "attendanceSessionDefinition" | "attendanceSessionVersion" | "attendanceSessionDaySchedule" | "attendanceCorrectionLog" | "userDevice" | "userSession" | "deviceSessionRecovery" | "securityAuditLog" | "adminSession";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        Admin: {
            payload: Prisma.$AdminPayload<ExtArgs>;
            fields: Prisma.AdminFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AdminFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminPayload>;
                };
                findFirst: {
                    args: Prisma.AdminFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminPayload>;
                };
                findMany: {
                    args: Prisma.AdminFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminPayload>[];
                };
                create: {
                    args: Prisma.AdminCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminPayload>;
                };
                createMany: {
                    args: Prisma.AdminCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminPayload>[];
                };
                delete: {
                    args: Prisma.AdminDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminPayload>;
                };
                update: {
                    args: Prisma.AdminUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminPayload>;
                };
                deleteMany: {
                    args: Prisma.AdminDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AdminUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminPayload>[];
                };
                upsert: {
                    args: Prisma.AdminUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminPayload>;
                };
                aggregate: {
                    args: Prisma.AdminAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAdmin>;
                };
                groupBy: {
                    args: Prisma.AdminGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdminGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AdminCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdminCountAggregateOutputType> | number;
                };
            };
        };
        Attendance: {
            payload: Prisma.$AttendancePayload<ExtArgs>;
            fields: Prisma.AttendanceFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AttendanceFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendancePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AttendanceFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendancePayload>;
                };
                findFirst: {
                    args: Prisma.AttendanceFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendancePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AttendanceFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendancePayload>;
                };
                findMany: {
                    args: Prisma.AttendanceFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendancePayload>[];
                };
                create: {
                    args: Prisma.AttendanceCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendancePayload>;
                };
                createMany: {
                    args: Prisma.AttendanceCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AttendanceCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendancePayload>[];
                };
                delete: {
                    args: Prisma.AttendanceDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendancePayload>;
                };
                update: {
                    args: Prisma.AttendanceUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendancePayload>;
                };
                deleteMany: {
                    args: Prisma.AttendanceDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AttendanceUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AttendanceUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendancePayload>[];
                };
                upsert: {
                    args: Prisma.AttendanceUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendancePayload>;
                };
                aggregate: {
                    args: Prisma.AttendanceAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAttendance>;
                };
                groupBy: {
                    args: Prisma.AttendanceGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AttendanceGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AttendanceCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AttendanceCountAggregateOutputType> | number;
                };
            };
        };
        AttendanceSessionDefinition: {
            payload: Prisma.$AttendanceSessionDefinitionPayload<ExtArgs>;
            fields: Prisma.AttendanceSessionDefinitionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AttendanceSessionDefinitionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceSessionDefinitionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AttendanceSessionDefinitionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceSessionDefinitionPayload>;
                };
                findFirst: {
                    args: Prisma.AttendanceSessionDefinitionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceSessionDefinitionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AttendanceSessionDefinitionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceSessionDefinitionPayload>;
                };
                findMany: {
                    args: Prisma.AttendanceSessionDefinitionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceSessionDefinitionPayload>[];
                };
                create: {
                    args: Prisma.AttendanceSessionDefinitionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceSessionDefinitionPayload>;
                };
                createMany: {
                    args: Prisma.AttendanceSessionDefinitionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AttendanceSessionDefinitionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceSessionDefinitionPayload>[];
                };
                delete: {
                    args: Prisma.AttendanceSessionDefinitionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceSessionDefinitionPayload>;
                };
                update: {
                    args: Prisma.AttendanceSessionDefinitionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceSessionDefinitionPayload>;
                };
                deleteMany: {
                    args: Prisma.AttendanceSessionDefinitionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AttendanceSessionDefinitionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AttendanceSessionDefinitionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceSessionDefinitionPayload>[];
                };
                upsert: {
                    args: Prisma.AttendanceSessionDefinitionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceSessionDefinitionPayload>;
                };
                aggregate: {
                    args: Prisma.AttendanceSessionDefinitionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAttendanceSessionDefinition>;
                };
                groupBy: {
                    args: Prisma.AttendanceSessionDefinitionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AttendanceSessionDefinitionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AttendanceSessionDefinitionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AttendanceSessionDefinitionCountAggregateOutputType> | number;
                };
            };
        };
        AttendanceSessionVersion: {
            payload: Prisma.$AttendanceSessionVersionPayload<ExtArgs>;
            fields: Prisma.AttendanceSessionVersionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AttendanceSessionVersionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceSessionVersionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AttendanceSessionVersionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceSessionVersionPayload>;
                };
                findFirst: {
                    args: Prisma.AttendanceSessionVersionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceSessionVersionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AttendanceSessionVersionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceSessionVersionPayload>;
                };
                findMany: {
                    args: Prisma.AttendanceSessionVersionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceSessionVersionPayload>[];
                };
                create: {
                    args: Prisma.AttendanceSessionVersionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceSessionVersionPayload>;
                };
                createMany: {
                    args: Prisma.AttendanceSessionVersionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AttendanceSessionVersionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceSessionVersionPayload>[];
                };
                delete: {
                    args: Prisma.AttendanceSessionVersionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceSessionVersionPayload>;
                };
                update: {
                    args: Prisma.AttendanceSessionVersionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceSessionVersionPayload>;
                };
                deleteMany: {
                    args: Prisma.AttendanceSessionVersionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AttendanceSessionVersionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AttendanceSessionVersionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceSessionVersionPayload>[];
                };
                upsert: {
                    args: Prisma.AttendanceSessionVersionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceSessionVersionPayload>;
                };
                aggregate: {
                    args: Prisma.AttendanceSessionVersionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAttendanceSessionVersion>;
                };
                groupBy: {
                    args: Prisma.AttendanceSessionVersionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AttendanceSessionVersionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AttendanceSessionVersionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AttendanceSessionVersionCountAggregateOutputType> | number;
                };
            };
        };
        AttendanceSessionDaySchedule: {
            payload: Prisma.$AttendanceSessionDaySchedulePayload<ExtArgs>;
            fields: Prisma.AttendanceSessionDayScheduleFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AttendanceSessionDayScheduleFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceSessionDaySchedulePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AttendanceSessionDayScheduleFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceSessionDaySchedulePayload>;
                };
                findFirst: {
                    args: Prisma.AttendanceSessionDayScheduleFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceSessionDaySchedulePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AttendanceSessionDayScheduleFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceSessionDaySchedulePayload>;
                };
                findMany: {
                    args: Prisma.AttendanceSessionDayScheduleFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceSessionDaySchedulePayload>[];
                };
                create: {
                    args: Prisma.AttendanceSessionDayScheduleCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceSessionDaySchedulePayload>;
                };
                createMany: {
                    args: Prisma.AttendanceSessionDayScheduleCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AttendanceSessionDayScheduleCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceSessionDaySchedulePayload>[];
                };
                delete: {
                    args: Prisma.AttendanceSessionDayScheduleDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceSessionDaySchedulePayload>;
                };
                update: {
                    args: Prisma.AttendanceSessionDayScheduleUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceSessionDaySchedulePayload>;
                };
                deleteMany: {
                    args: Prisma.AttendanceSessionDayScheduleDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AttendanceSessionDayScheduleUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AttendanceSessionDayScheduleUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceSessionDaySchedulePayload>[];
                };
                upsert: {
                    args: Prisma.AttendanceSessionDayScheduleUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceSessionDaySchedulePayload>;
                };
                aggregate: {
                    args: Prisma.AttendanceSessionDayScheduleAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAttendanceSessionDaySchedule>;
                };
                groupBy: {
                    args: Prisma.AttendanceSessionDayScheduleGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AttendanceSessionDayScheduleGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AttendanceSessionDayScheduleCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AttendanceSessionDayScheduleCountAggregateOutputType> | number;
                };
            };
        };
        AttendanceCorrectionLog: {
            payload: Prisma.$AttendanceCorrectionLogPayload<ExtArgs>;
            fields: Prisma.AttendanceCorrectionLogFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AttendanceCorrectionLogFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceCorrectionLogPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AttendanceCorrectionLogFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceCorrectionLogPayload>;
                };
                findFirst: {
                    args: Prisma.AttendanceCorrectionLogFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceCorrectionLogPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AttendanceCorrectionLogFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceCorrectionLogPayload>;
                };
                findMany: {
                    args: Prisma.AttendanceCorrectionLogFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceCorrectionLogPayload>[];
                };
                create: {
                    args: Prisma.AttendanceCorrectionLogCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceCorrectionLogPayload>;
                };
                createMany: {
                    args: Prisma.AttendanceCorrectionLogCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AttendanceCorrectionLogCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceCorrectionLogPayload>[];
                };
                delete: {
                    args: Prisma.AttendanceCorrectionLogDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceCorrectionLogPayload>;
                };
                update: {
                    args: Prisma.AttendanceCorrectionLogUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceCorrectionLogPayload>;
                };
                deleteMany: {
                    args: Prisma.AttendanceCorrectionLogDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AttendanceCorrectionLogUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AttendanceCorrectionLogUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceCorrectionLogPayload>[];
                };
                upsert: {
                    args: Prisma.AttendanceCorrectionLogUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceCorrectionLogPayload>;
                };
                aggregate: {
                    args: Prisma.AttendanceCorrectionLogAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAttendanceCorrectionLog>;
                };
                groupBy: {
                    args: Prisma.AttendanceCorrectionLogGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AttendanceCorrectionLogGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AttendanceCorrectionLogCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AttendanceCorrectionLogCountAggregateOutputType> | number;
                };
            };
        };
        UserDevice: {
            payload: Prisma.$UserDevicePayload<ExtArgs>;
            fields: Prisma.UserDeviceFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserDeviceFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserDevicePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserDeviceFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserDevicePayload>;
                };
                findFirst: {
                    args: Prisma.UserDeviceFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserDevicePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserDeviceFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserDevicePayload>;
                };
                findMany: {
                    args: Prisma.UserDeviceFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserDevicePayload>[];
                };
                create: {
                    args: Prisma.UserDeviceCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserDevicePayload>;
                };
                createMany: {
                    args: Prisma.UserDeviceCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserDeviceCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserDevicePayload>[];
                };
                delete: {
                    args: Prisma.UserDeviceDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserDevicePayload>;
                };
                update: {
                    args: Prisma.UserDeviceUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserDevicePayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeviceDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserDeviceUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserDeviceUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserDevicePayload>[];
                };
                upsert: {
                    args: Prisma.UserDeviceUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserDevicePayload>;
                };
                aggregate: {
                    args: Prisma.UserDeviceAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUserDevice>;
                };
                groupBy: {
                    args: Prisma.UserDeviceGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserDeviceGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserDeviceCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserDeviceCountAggregateOutputType> | number;
                };
            };
        };
        UserSession: {
            payload: Prisma.$UserSessionPayload<ExtArgs>;
            fields: Prisma.UserSessionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserSessionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserSessionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserSessionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserSessionPayload>;
                };
                findFirst: {
                    args: Prisma.UserSessionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserSessionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserSessionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserSessionPayload>;
                };
                findMany: {
                    args: Prisma.UserSessionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserSessionPayload>[];
                };
                create: {
                    args: Prisma.UserSessionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserSessionPayload>;
                };
                createMany: {
                    args: Prisma.UserSessionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserSessionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserSessionPayload>[];
                };
                delete: {
                    args: Prisma.UserSessionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserSessionPayload>;
                };
                update: {
                    args: Prisma.UserSessionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserSessionPayload>;
                };
                deleteMany: {
                    args: Prisma.UserSessionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserSessionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserSessionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserSessionPayload>[];
                };
                upsert: {
                    args: Prisma.UserSessionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserSessionPayload>;
                };
                aggregate: {
                    args: Prisma.UserSessionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUserSession>;
                };
                groupBy: {
                    args: Prisma.UserSessionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserSessionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserSessionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserSessionCountAggregateOutputType> | number;
                };
            };
        };
        DeviceSessionRecovery: {
            payload: Prisma.$DeviceSessionRecoveryPayload<ExtArgs>;
            fields: Prisma.DeviceSessionRecoveryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DeviceSessionRecoveryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceSessionRecoveryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DeviceSessionRecoveryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceSessionRecoveryPayload>;
                };
                findFirst: {
                    args: Prisma.DeviceSessionRecoveryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceSessionRecoveryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DeviceSessionRecoveryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceSessionRecoveryPayload>;
                };
                findMany: {
                    args: Prisma.DeviceSessionRecoveryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceSessionRecoveryPayload>[];
                };
                create: {
                    args: Prisma.DeviceSessionRecoveryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceSessionRecoveryPayload>;
                };
                createMany: {
                    args: Prisma.DeviceSessionRecoveryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DeviceSessionRecoveryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceSessionRecoveryPayload>[];
                };
                delete: {
                    args: Prisma.DeviceSessionRecoveryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceSessionRecoveryPayload>;
                };
                update: {
                    args: Prisma.DeviceSessionRecoveryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceSessionRecoveryPayload>;
                };
                deleteMany: {
                    args: Prisma.DeviceSessionRecoveryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DeviceSessionRecoveryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DeviceSessionRecoveryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceSessionRecoveryPayload>[];
                };
                upsert: {
                    args: Prisma.DeviceSessionRecoveryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceSessionRecoveryPayload>;
                };
                aggregate: {
                    args: Prisma.DeviceSessionRecoveryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDeviceSessionRecovery>;
                };
                groupBy: {
                    args: Prisma.DeviceSessionRecoveryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DeviceSessionRecoveryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DeviceSessionRecoveryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DeviceSessionRecoveryCountAggregateOutputType> | number;
                };
            };
        };
        SecurityAuditLog: {
            payload: Prisma.$SecurityAuditLogPayload<ExtArgs>;
            fields: Prisma.SecurityAuditLogFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SecurityAuditLogFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SecurityAuditLogPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SecurityAuditLogFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SecurityAuditLogPayload>;
                };
                findFirst: {
                    args: Prisma.SecurityAuditLogFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SecurityAuditLogPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SecurityAuditLogFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SecurityAuditLogPayload>;
                };
                findMany: {
                    args: Prisma.SecurityAuditLogFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SecurityAuditLogPayload>[];
                };
                create: {
                    args: Prisma.SecurityAuditLogCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SecurityAuditLogPayload>;
                };
                createMany: {
                    args: Prisma.SecurityAuditLogCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SecurityAuditLogCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SecurityAuditLogPayload>[];
                };
                delete: {
                    args: Prisma.SecurityAuditLogDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SecurityAuditLogPayload>;
                };
                update: {
                    args: Prisma.SecurityAuditLogUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SecurityAuditLogPayload>;
                };
                deleteMany: {
                    args: Prisma.SecurityAuditLogDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SecurityAuditLogUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SecurityAuditLogUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SecurityAuditLogPayload>[];
                };
                upsert: {
                    args: Prisma.SecurityAuditLogUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SecurityAuditLogPayload>;
                };
                aggregate: {
                    args: Prisma.SecurityAuditLogAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSecurityAuditLog>;
                };
                groupBy: {
                    args: Prisma.SecurityAuditLogGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SecurityAuditLogGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SecurityAuditLogCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SecurityAuditLogCountAggregateOutputType> | number;
                };
            };
        };
        AdminSession: {
            payload: Prisma.$AdminSessionPayload<ExtArgs>;
            fields: Prisma.AdminSessionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AdminSessionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminSessionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AdminSessionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminSessionPayload>;
                };
                findFirst: {
                    args: Prisma.AdminSessionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminSessionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AdminSessionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminSessionPayload>;
                };
                findMany: {
                    args: Prisma.AdminSessionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminSessionPayload>[];
                };
                create: {
                    args: Prisma.AdminSessionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminSessionPayload>;
                };
                createMany: {
                    args: Prisma.AdminSessionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AdminSessionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminSessionPayload>[];
                };
                delete: {
                    args: Prisma.AdminSessionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminSessionPayload>;
                };
                update: {
                    args: Prisma.AdminSessionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminSessionPayload>;
                };
                deleteMany: {
                    args: Prisma.AdminSessionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AdminSessionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AdminSessionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminSessionPayload>[];
                };
                upsert: {
                    args: Prisma.AdminSessionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminSessionPayload>;
                };
                aggregate: {
                    args: Prisma.AdminSessionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAdminSession>;
                };
                groupBy: {
                    args: Prisma.AdminSessionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdminSessionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AdminSessionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdminSessionCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
/**
 * Enums
 */
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: 'ReadUncommitted';
    readonly ReadCommitted: 'ReadCommitted';
    readonly RepeatableRead: 'RepeatableRead';
    readonly Serializable: 'Serializable';
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly nik: 'nik';
    readonly namaLengkap: 'namaLengkap';
    readonly isActive: 'isActive';
    readonly signaturePath: 'signaturePath';
    readonly createdAt: 'createdAt';
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const AdminScalarFieldEnum: {
    readonly id: 'id';
    readonly username: 'username';
    readonly password: 'password';
    readonly namaLengkap: 'namaLengkap';
    readonly isActive: 'isActive';
    readonly createdAt: 'createdAt';
};
export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum];
export declare const AttendanceScalarFieldEnum: {
    readonly id: 'id';
    readonly nik: 'nik';
    readonly tanggal: 'tanggal';
    readonly sesi: 'sesi';
    readonly sessionId: 'sessionId';
    readonly sessionVersionId: 'sessionVersionId';
    readonly sessionNameSnapshot: 'sessionNameSnapshot';
    readonly source: 'source';
    readonly waktuAbsen: 'waktuAbsen';
    readonly status: 'status';
};
export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum];
export declare const AttendanceSessionDefinitionScalarFieldEnum: {
    readonly id: 'id';
    readonly key: 'key';
    readonly disabledAt: 'disabledAt';
    readonly disabledByAdminId: 'disabledByAdminId';
    readonly disabledByAdminUsername: 'disabledByAdminUsername';
    readonly enabledFrom: 'enabledFrom';
    readonly deletedAt: 'deletedAt';
    readonly createdAt: 'createdAt';
};
export type AttendanceSessionDefinitionScalarFieldEnum = (typeof AttendanceSessionDefinitionScalarFieldEnum)[keyof typeof AttendanceSessionDefinitionScalarFieldEnum];
export declare const AttendanceSessionVersionScalarFieldEnum: {
    readonly id: 'id';
    readonly sessionId: 'sessionId';
    readonly name: 'name';
    readonly sortOrder: 'sortOrder';
    readonly isActive: 'isActive';
    readonly effectiveFrom: 'effectiveFrom';
    readonly startTime: 'startTime';
    readonly endTime: 'endTime';
    readonly createdByAdminId: 'createdByAdminId';
    readonly createdByAdminUsername: 'createdByAdminUsername';
    readonly createdAt: 'createdAt';
};
export type AttendanceSessionVersionScalarFieldEnum = (typeof AttendanceSessionVersionScalarFieldEnum)[keyof typeof AttendanceSessionVersionScalarFieldEnum];
export declare const AttendanceSessionDayScheduleScalarFieldEnum: {
    readonly id: 'id';
    readonly sessionVersionId: 'sessionVersionId';
    readonly isoWeekday: 'isoWeekday';
    readonly isEnabled: 'isEnabled';
    readonly startTime: 'startTime';
    readonly endTime: 'endTime';
};
export type AttendanceSessionDayScheduleScalarFieldEnum = (typeof AttendanceSessionDayScheduleScalarFieldEnum)[keyof typeof AttendanceSessionDayScheduleScalarFieldEnum];
export declare const AttendanceCorrectionLogScalarFieldEnum: {
    readonly id: 'id';
    readonly nik: 'nik';
    readonly attendanceDate: 'attendanceDate';
    readonly sessionId: 'sessionId';
    readonly sessionVersionId: 'sessionVersionId';
    readonly attendanceId: 'attendanceId';
    readonly revision: 'revision';
    readonly previousStatus: 'previousStatus';
    readonly newStatus: 'newStatus';
    readonly reason: 'reason';
    readonly correctedByAdminId: 'correctedByAdminId';
    readonly correctedByAdminUsername: 'correctedByAdminUsername';
    readonly correctedAt: 'correctedAt';
};
export type AttendanceCorrectionLogScalarFieldEnum = (typeof AttendanceCorrectionLogScalarFieldEnum)[keyof typeof AttendanceCorrectionLogScalarFieldEnum];
export declare const UserDeviceScalarFieldEnum: {
    readonly id: 'id';
    readonly nik: 'nik';
    readonly deviceUuid: 'deviceUuid';
    readonly status: 'status';
    readonly deviceName: 'deviceName';
    readonly enrollmentCodeHash: 'enrollmentCodeHash';
    readonly enrollmentExpiresAt: 'enrollmentExpiresAt';
    readonly enrollmentUsedAt: 'enrollmentUsedAt';
    readonly registeredByAdminId: 'registeredByAdminId';
    readonly registeredAt: 'registeredAt';
    readonly activatedAt: 'activatedAt';
    readonly lastUsedAt: 'lastUsedAt';
    readonly revokedAt: 'revokedAt';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type UserDeviceScalarFieldEnum = (typeof UserDeviceScalarFieldEnum)[keyof typeof UserDeviceScalarFieldEnum];
export declare const UserSessionScalarFieldEnum: {
    readonly id: 'id';
    readonly deviceId: 'deviceId';
    readonly tokenHash: 'tokenHash';
    readonly ipAddress: 'ipAddress';
    readonly userAgent: 'userAgent';
    readonly expiresAt: 'expiresAt';
    readonly lastUsedAt: 'lastUsedAt';
    readonly revokedAt: 'revokedAt';
    readonly createdAt: 'createdAt';
};
export type UserSessionScalarFieldEnum = (typeof UserSessionScalarFieldEnum)[keyof typeof UserSessionScalarFieldEnum];
export declare const DeviceSessionRecoveryScalarFieldEnum: {
    readonly id: 'id';
    readonly deviceId: 'deviceId';
    readonly codeHash: 'codeHash';
    readonly expiresAt: 'expiresAt';
    readonly usedAt: 'usedAt';
    readonly invalidatedAt: 'invalidatedAt';
    readonly createdByAdminId: 'createdByAdminId';
    readonly createdAt: 'createdAt';
};
export type DeviceSessionRecoveryScalarFieldEnum = (typeof DeviceSessionRecoveryScalarFieldEnum)[keyof typeof DeviceSessionRecoveryScalarFieldEnum];
export declare const SecurityAuditLogScalarFieldEnum: {
    readonly id: 'id';
    readonly action: 'action';
    readonly nik: 'nik';
    readonly adminId: 'adminId';
    readonly deviceId: 'deviceId';
    readonly createdAt: 'createdAt';
};
export type SecurityAuditLogScalarFieldEnum = (typeof SecurityAuditLogScalarFieldEnum)[keyof typeof SecurityAuditLogScalarFieldEnum];
export declare const AdminSessionScalarFieldEnum: {
    readonly id: 'id';
    readonly adminId: 'adminId';
    readonly tokenHash: 'tokenHash';
    readonly ipAddress: 'ipAddress';
    readonly userAgent: 'userAgent';
    readonly expiresAt: 'expiresAt';
    readonly lastUsedAt: 'lastUsedAt';
    readonly revokedAt: 'revokedAt';
    readonly createdAt: 'createdAt';
};
export type AdminSessionScalarFieldEnum = (typeof AdminSessionScalarFieldEnum)[keyof typeof AdminSessionScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: 'asc';
    readonly desc: 'desc';
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: 'default';
    readonly insensitive: 'insensitive';
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: 'first';
    readonly last: 'last';
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
/**
 * Field references
 */
/**
 * Reference to a field of type 'String'
 */
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
/**
 * Reference to a field of type 'String[]'
 */
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
/**
 * Reference to a field of type 'Boolean'
 */
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
/**
 * Reference to a field of type 'DateTime'
 */
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
/**
 * Reference to a field of type 'DateTime[]'
 */
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
/**
 * Reference to a field of type 'Int'
 */
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
/**
 * Reference to a field of type 'Int[]'
 */
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
/**
 * Reference to a field of type 'AttendanceSource'
 */
export type EnumAttendanceSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceSource'>;
/**
 * Reference to a field of type 'AttendanceSource[]'
 */
export type ListEnumAttendanceSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceSource[]'>;
/**
 * Reference to a field of type 'DeviceStatus'
 */
export type EnumDeviceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeviceStatus'>;
/**
 * Reference to a field of type 'DeviceStatus[]'
 */
export type ListEnumDeviceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeviceStatus[]'>;
/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
/**
 * Reference to a field of type 'Float[]'
 */
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
/**
 * Options common to all variants of `PrismaClientOptions`, regardless of whether you connect to your database through a driver adapter or through Prisma Accelerate.
 */
export interface PrismaClientBaseOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
    /**
     * Optional maximum size for the query plan cache. If not provided, a default size will be used.
     * A value of `0` can be used to disable the cache entirely. A higher cache size can improve
     * performance for applications that execute a large number of unique queries, while a smaller
     * cache size can reduce memory usage.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   queryPlanCacheMaxSize: 100,
     * })
     * ```
     */
    queryPlanCacheMaxSize?: number;
}
/**
 * `PrismaClient` options for connecting to your database through Prisma Accelerate instead of a driver adapter.
 *
 * Learn more: https://pris.ly/d/accelerate
 */
export interface PrismaClientOptionsWithAccelerateUrl extends PrismaClientBaseOptions {
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     *
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl: string;
    adapter?: never;
}
/**
 * `PrismaClient` options for connecting to your database through a driver adapter. This is the common case in Prisma 7.
 *
 * Learn more: https://pris.ly/d/driver-adapters
 */
export interface PrismaClientOptionsWithAdapter extends PrismaClientBaseOptions {
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     *
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     *
     * Learn more: https://pris.ly/d/driver-adapters
     *
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     *
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
}
/**
 * Options passed to the `PrismaClient` constructor.
 *
 * A driver adapter (or, alternatively, a Prisma Accelerate URL) is **required**. See {@link PrismaClientOptionsWithAdapter} and {@link PrismaClientOptionsWithAccelerateUrl} for the two variants. All other properties live in {@link PrismaClientBaseOptions} and are optional.
 *
 * Learn more about driver adapters: https://pris.ly/d/driver-adapters
 */
export type PrismaClientOptions = PrismaClientOptionsWithAccelerateUrl | PrismaClientOptionsWithAdapter;
export type GlobalOmitConfig = {
    user?: Prisma.UserOmit;
    admin?: Prisma.AdminOmit;
    attendance?: Prisma.AttendanceOmit;
    attendanceSessionDefinition?: Prisma.AttendanceSessionDefinitionOmit;
    attendanceSessionVersion?: Prisma.AttendanceSessionVersionOmit;
    attendanceSessionDaySchedule?: Prisma.AttendanceSessionDayScheduleOmit;
    attendanceCorrectionLog?: Prisma.AttendanceCorrectionLogOmit;
    userDevice?: Prisma.UserDeviceOmit;
    userSession?: Prisma.UserSessionOmit;
    deviceSessionRecovery?: Prisma.DeviceSessionRecoveryOmit;
    securityAuditLog?: Prisma.SecurityAuditLogOmit;
    adminSession?: Prisma.AdminSessionOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
/**
 * `PrismaClient` proxy available in interactive transactions.
 */
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
