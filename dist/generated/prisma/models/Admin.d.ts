import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Admin
 *
 */
export type AdminModel = runtime.Types.Result.DefaultSelection<Prisma.$AdminPayload>;
export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null;
    _avg: AdminAvgAggregateOutputType | null;
    _sum: AdminSumAggregateOutputType | null;
    _min: AdminMinAggregateOutputType | null;
    _max: AdminMaxAggregateOutputType | null;
};
export type AdminAvgAggregateOutputType = {
    id: number | null;
};
export type AdminSumAggregateOutputType = {
    id: number | null;
};
export type AdminMinAggregateOutputType = {
    id: number | null;
    username: string | null;
    password: string | null;
    namaLengkap: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
};
export type AdminMaxAggregateOutputType = {
    id: number | null;
    username: string | null;
    password: string | null;
    namaLengkap: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
};
export type AdminCountAggregateOutputType = {
    id: number;
    username: number;
    password: number;
    namaLengkap: number;
    isActive: number;
    createdAt: number;
    _all: number;
};
export type AdminAvgAggregateInputType = {
    id?: true;
};
export type AdminSumAggregateInputType = {
    id?: true;
};
export type AdminMinAggregateInputType = {
    id?: true;
    username?: true;
    password?: true;
    namaLengkap?: true;
    isActive?: true;
    createdAt?: true;
};
export type AdminMaxAggregateInputType = {
    id?: true;
    username?: true;
    password?: true;
    namaLengkap?: true;
    isActive?: true;
    createdAt?: true;
};
export type AdminCountAggregateInputType = {
    id?: true;
    username?: true;
    password?: true;
    namaLengkap?: true;
    isActive?: true;
    createdAt?: true;
    _all?: true;
};
export type AdminAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: Prisma.AdminWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Admins to fetch.
     */
    orderBy?: Prisma.AdminOrderByWithRelationInput | Prisma.AdminOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.AdminWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Admins.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType;
};
export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
    [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAdmin[P]> : Prisma.GetScalarType<T[P], AggregateAdmin[P]>;
};
export type AdminGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdminWhereInput;
    orderBy?: Prisma.AdminOrderByWithAggregationInput | Prisma.AdminOrderByWithAggregationInput[];
    by: Prisma.AdminScalarFieldEnum[] | Prisma.AdminScalarFieldEnum;
    having?: Prisma.AdminScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AdminCountAggregateInputType | true;
    _avg?: AdminAvgAggregateInputType;
    _sum?: AdminSumAggregateInputType;
    _min?: AdminMinAggregateInputType;
    _max?: AdminMaxAggregateInputType;
};
export type AdminGroupByOutputType = {
    id: number;
    username: string;
    password: string;
    namaLengkap: string;
    isActive: boolean;
    createdAt: Date;
    _count: AdminCountAggregateOutputType | null;
    _avg: AdminAvgAggregateOutputType | null;
    _sum: AdminSumAggregateOutputType | null;
    _min: AdminMinAggregateOutputType | null;
    _max: AdminMaxAggregateOutputType | null;
};
export type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AdminGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AdminGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AdminGroupByOutputType[P]>;
}>>;
export type AdminWhereInput = {
    AND?: Prisma.AdminWhereInput | Prisma.AdminWhereInput[];
    OR?: Prisma.AdminWhereInput[];
    NOT?: Prisma.AdminWhereInput | Prisma.AdminWhereInput[];
    id?: Prisma.IntFilter<"Admin"> | number;
    username?: Prisma.StringFilter<"Admin"> | string;
    password?: Prisma.StringFilter<"Admin"> | string;
    namaLengkap?: Prisma.StringFilter<"Admin"> | string;
    isActive?: Prisma.BoolFilter<"Admin"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Admin"> | Date | string;
    registeredDevices?: Prisma.UserDeviceListRelationFilter;
    sessions?: Prisma.AdminSessionListRelationFilter;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryListRelationFilter;
    securityAuditLogs?: Prisma.SecurityAuditLogListRelationFilter;
    attendanceSessionVersions?: Prisma.AttendanceSessionVersionListRelationFilter;
    disabledAttendanceSessions?: Prisma.AttendanceSessionDefinitionListRelationFilter;
    attendanceCorrections?: Prisma.AttendanceCorrectionLogListRelationFilter;
};
export type AdminOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    namaLengkap?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    registeredDevices?: Prisma.UserDeviceOrderByRelationAggregateInput;
    sessions?: Prisma.AdminSessionOrderByRelationAggregateInput;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryOrderByRelationAggregateInput;
    securityAuditLogs?: Prisma.SecurityAuditLogOrderByRelationAggregateInput;
    attendanceSessionVersions?: Prisma.AttendanceSessionVersionOrderByRelationAggregateInput;
    disabledAttendanceSessions?: Prisma.AttendanceSessionDefinitionOrderByRelationAggregateInput;
    attendanceCorrections?: Prisma.AttendanceCorrectionLogOrderByRelationAggregateInput;
};
export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    username?: string;
    AND?: Prisma.AdminWhereInput | Prisma.AdminWhereInput[];
    OR?: Prisma.AdminWhereInput[];
    NOT?: Prisma.AdminWhereInput | Prisma.AdminWhereInput[];
    password?: Prisma.StringFilter<"Admin"> | string;
    namaLengkap?: Prisma.StringFilter<"Admin"> | string;
    isActive?: Prisma.BoolFilter<"Admin"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Admin"> | Date | string;
    registeredDevices?: Prisma.UserDeviceListRelationFilter;
    sessions?: Prisma.AdminSessionListRelationFilter;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryListRelationFilter;
    securityAuditLogs?: Prisma.SecurityAuditLogListRelationFilter;
    attendanceSessionVersions?: Prisma.AttendanceSessionVersionListRelationFilter;
    disabledAttendanceSessions?: Prisma.AttendanceSessionDefinitionListRelationFilter;
    attendanceCorrections?: Prisma.AttendanceCorrectionLogListRelationFilter;
}, "id" | "username">;
export type AdminOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    namaLengkap?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.AdminCountOrderByAggregateInput;
    _avg?: Prisma.AdminAvgOrderByAggregateInput;
    _max?: Prisma.AdminMaxOrderByAggregateInput;
    _min?: Prisma.AdminMinOrderByAggregateInput;
    _sum?: Prisma.AdminSumOrderByAggregateInput;
};
export type AdminScalarWhereWithAggregatesInput = {
    AND?: Prisma.AdminScalarWhereWithAggregatesInput | Prisma.AdminScalarWhereWithAggregatesInput[];
    OR?: Prisma.AdminScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AdminScalarWhereWithAggregatesInput | Prisma.AdminScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Admin"> | number;
    username?: Prisma.StringWithAggregatesFilter<"Admin"> | string;
    password?: Prisma.StringWithAggregatesFilter<"Admin"> | string;
    namaLengkap?: Prisma.StringWithAggregatesFilter<"Admin"> | string;
    isActive?: Prisma.BoolWithAggregatesFilter<"Admin"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Admin"> | Date | string;
};
export type AdminCreateInput = {
    username: string;
    password: string;
    namaLengkap: string;
    isActive?: boolean;
    createdAt?: Date | string;
    registeredDevices?: Prisma.UserDeviceCreateNestedManyWithoutRegisteredByInput;
    sessions?: Prisma.AdminSessionCreateNestedManyWithoutAdminInput;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryCreateNestedManyWithoutCreatedByAdminInput;
    securityAuditLogs?: Prisma.SecurityAuditLogCreateNestedManyWithoutAdminInput;
    attendanceSessionVersions?: Prisma.AttendanceSessionVersionCreateNestedManyWithoutCreatedByAdminInput;
    disabledAttendanceSessions?: Prisma.AttendanceSessionDefinitionCreateNestedManyWithoutDisabledByAdminInput;
    attendanceCorrections?: Prisma.AttendanceCorrectionLogCreateNestedManyWithoutCorrectedByAdminInput;
};
export type AdminUncheckedCreateInput = {
    id?: number;
    username: string;
    password: string;
    namaLengkap: string;
    isActive?: boolean;
    createdAt?: Date | string;
    registeredDevices?: Prisma.UserDeviceUncheckedCreateNestedManyWithoutRegisteredByInput;
    sessions?: Prisma.AdminSessionUncheckedCreateNestedManyWithoutAdminInput;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryUncheckedCreateNestedManyWithoutCreatedByAdminInput;
    securityAuditLogs?: Prisma.SecurityAuditLogUncheckedCreateNestedManyWithoutAdminInput;
    attendanceSessionVersions?: Prisma.AttendanceSessionVersionUncheckedCreateNestedManyWithoutCreatedByAdminInput;
    disabledAttendanceSessions?: Prisma.AttendanceSessionDefinitionUncheckedCreateNestedManyWithoutDisabledByAdminInput;
    attendanceCorrections?: Prisma.AttendanceCorrectionLogUncheckedCreateNestedManyWithoutCorrectedByAdminInput;
};
export type AdminUpdateInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    namaLengkap?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    registeredDevices?: Prisma.UserDeviceUpdateManyWithoutRegisteredByNestedInput;
    sessions?: Prisma.AdminSessionUpdateManyWithoutAdminNestedInput;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryUpdateManyWithoutCreatedByAdminNestedInput;
    securityAuditLogs?: Prisma.SecurityAuditLogUpdateManyWithoutAdminNestedInput;
    attendanceSessionVersions?: Prisma.AttendanceSessionVersionUpdateManyWithoutCreatedByAdminNestedInput;
    disabledAttendanceSessions?: Prisma.AttendanceSessionDefinitionUpdateManyWithoutDisabledByAdminNestedInput;
    attendanceCorrections?: Prisma.AttendanceCorrectionLogUpdateManyWithoutCorrectedByAdminNestedInput;
};
export type AdminUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    namaLengkap?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    registeredDevices?: Prisma.UserDeviceUncheckedUpdateManyWithoutRegisteredByNestedInput;
    sessions?: Prisma.AdminSessionUncheckedUpdateManyWithoutAdminNestedInput;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryUncheckedUpdateManyWithoutCreatedByAdminNestedInput;
    securityAuditLogs?: Prisma.SecurityAuditLogUncheckedUpdateManyWithoutAdminNestedInput;
    attendanceSessionVersions?: Prisma.AttendanceSessionVersionUncheckedUpdateManyWithoutCreatedByAdminNestedInput;
    disabledAttendanceSessions?: Prisma.AttendanceSessionDefinitionUncheckedUpdateManyWithoutDisabledByAdminNestedInput;
    attendanceCorrections?: Prisma.AttendanceCorrectionLogUncheckedUpdateManyWithoutCorrectedByAdminNestedInput;
};
export type AdminCreateManyInput = {
    id?: number;
    username: string;
    password: string;
    namaLengkap: string;
    isActive?: boolean;
    createdAt?: Date | string;
};
export type AdminUpdateManyMutationInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    namaLengkap?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdminUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    namaLengkap?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdminCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    namaLengkap?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AdminAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type AdminMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    namaLengkap?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AdminMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    namaLengkap?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AdminSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type AdminNullableScalarRelationFilter = {
    is?: Prisma.AdminWhereInput | null;
    isNot?: Prisma.AdminWhereInput | null;
};
export type AdminScalarRelationFilter = {
    is?: Prisma.AdminWhereInput;
    isNot?: Prisma.AdminWhereInput;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type AdminCreateNestedOneWithoutDisabledAttendanceSessionsInput = {
    create?: Prisma.XOR<Prisma.AdminCreateWithoutDisabledAttendanceSessionsInput, Prisma.AdminUncheckedCreateWithoutDisabledAttendanceSessionsInput>;
    connectOrCreate?: Prisma.AdminCreateOrConnectWithoutDisabledAttendanceSessionsInput;
    connect?: Prisma.AdminWhereUniqueInput;
};
export type AdminUpdateOneWithoutDisabledAttendanceSessionsNestedInput = {
    create?: Prisma.XOR<Prisma.AdminCreateWithoutDisabledAttendanceSessionsInput, Prisma.AdminUncheckedCreateWithoutDisabledAttendanceSessionsInput>;
    connectOrCreate?: Prisma.AdminCreateOrConnectWithoutDisabledAttendanceSessionsInput;
    upsert?: Prisma.AdminUpsertWithoutDisabledAttendanceSessionsInput;
    disconnect?: Prisma.AdminWhereInput | boolean;
    delete?: Prisma.AdminWhereInput | boolean;
    connect?: Prisma.AdminWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AdminUpdateToOneWithWhereWithoutDisabledAttendanceSessionsInput, Prisma.AdminUpdateWithoutDisabledAttendanceSessionsInput>, Prisma.AdminUncheckedUpdateWithoutDisabledAttendanceSessionsInput>;
};
export type AdminCreateNestedOneWithoutAttendanceSessionVersionsInput = {
    create?: Prisma.XOR<Prisma.AdminCreateWithoutAttendanceSessionVersionsInput, Prisma.AdminUncheckedCreateWithoutAttendanceSessionVersionsInput>;
    connectOrCreate?: Prisma.AdminCreateOrConnectWithoutAttendanceSessionVersionsInput;
    connect?: Prisma.AdminWhereUniqueInput;
};
export type AdminUpdateOneWithoutAttendanceSessionVersionsNestedInput = {
    create?: Prisma.XOR<Prisma.AdminCreateWithoutAttendanceSessionVersionsInput, Prisma.AdminUncheckedCreateWithoutAttendanceSessionVersionsInput>;
    connectOrCreate?: Prisma.AdminCreateOrConnectWithoutAttendanceSessionVersionsInput;
    upsert?: Prisma.AdminUpsertWithoutAttendanceSessionVersionsInput;
    disconnect?: Prisma.AdminWhereInput | boolean;
    delete?: Prisma.AdminWhereInput | boolean;
    connect?: Prisma.AdminWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AdminUpdateToOneWithWhereWithoutAttendanceSessionVersionsInput, Prisma.AdminUpdateWithoutAttendanceSessionVersionsInput>, Prisma.AdminUncheckedUpdateWithoutAttendanceSessionVersionsInput>;
};
export type AdminCreateNestedOneWithoutAttendanceCorrectionsInput = {
    create?: Prisma.XOR<Prisma.AdminCreateWithoutAttendanceCorrectionsInput, Prisma.AdminUncheckedCreateWithoutAttendanceCorrectionsInput>;
    connectOrCreate?: Prisma.AdminCreateOrConnectWithoutAttendanceCorrectionsInput;
    connect?: Prisma.AdminWhereUniqueInput;
};
export type AdminUpdateOneRequiredWithoutAttendanceCorrectionsNestedInput = {
    create?: Prisma.XOR<Prisma.AdminCreateWithoutAttendanceCorrectionsInput, Prisma.AdminUncheckedCreateWithoutAttendanceCorrectionsInput>;
    connectOrCreate?: Prisma.AdminCreateOrConnectWithoutAttendanceCorrectionsInput;
    upsert?: Prisma.AdminUpsertWithoutAttendanceCorrectionsInput;
    connect?: Prisma.AdminWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AdminUpdateToOneWithWhereWithoutAttendanceCorrectionsInput, Prisma.AdminUpdateWithoutAttendanceCorrectionsInput>, Prisma.AdminUncheckedUpdateWithoutAttendanceCorrectionsInput>;
};
export type AdminCreateNestedOneWithoutRegisteredDevicesInput = {
    create?: Prisma.XOR<Prisma.AdminCreateWithoutRegisteredDevicesInput, Prisma.AdminUncheckedCreateWithoutRegisteredDevicesInput>;
    connectOrCreate?: Prisma.AdminCreateOrConnectWithoutRegisteredDevicesInput;
    connect?: Prisma.AdminWhereUniqueInput;
};
export type AdminUpdateOneWithoutRegisteredDevicesNestedInput = {
    create?: Prisma.XOR<Prisma.AdminCreateWithoutRegisteredDevicesInput, Prisma.AdminUncheckedCreateWithoutRegisteredDevicesInput>;
    connectOrCreate?: Prisma.AdminCreateOrConnectWithoutRegisteredDevicesInput;
    upsert?: Prisma.AdminUpsertWithoutRegisteredDevicesInput;
    disconnect?: Prisma.AdminWhereInput | boolean;
    delete?: Prisma.AdminWhereInput | boolean;
    connect?: Prisma.AdminWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AdminUpdateToOneWithWhereWithoutRegisteredDevicesInput, Prisma.AdminUpdateWithoutRegisteredDevicesInput>, Prisma.AdminUncheckedUpdateWithoutRegisteredDevicesInput>;
};
export type AdminCreateNestedOneWithoutSessionRecoveriesInput = {
    create?: Prisma.XOR<Prisma.AdminCreateWithoutSessionRecoveriesInput, Prisma.AdminUncheckedCreateWithoutSessionRecoveriesInput>;
    connectOrCreate?: Prisma.AdminCreateOrConnectWithoutSessionRecoveriesInput;
    connect?: Prisma.AdminWhereUniqueInput;
};
export type AdminUpdateOneWithoutSessionRecoveriesNestedInput = {
    create?: Prisma.XOR<Prisma.AdminCreateWithoutSessionRecoveriesInput, Prisma.AdminUncheckedCreateWithoutSessionRecoveriesInput>;
    connectOrCreate?: Prisma.AdminCreateOrConnectWithoutSessionRecoveriesInput;
    upsert?: Prisma.AdminUpsertWithoutSessionRecoveriesInput;
    disconnect?: Prisma.AdminWhereInput | boolean;
    delete?: Prisma.AdminWhereInput | boolean;
    connect?: Prisma.AdminWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AdminUpdateToOneWithWhereWithoutSessionRecoveriesInput, Prisma.AdminUpdateWithoutSessionRecoveriesInput>, Prisma.AdminUncheckedUpdateWithoutSessionRecoveriesInput>;
};
export type AdminCreateNestedOneWithoutSecurityAuditLogsInput = {
    create?: Prisma.XOR<Prisma.AdminCreateWithoutSecurityAuditLogsInput, Prisma.AdminUncheckedCreateWithoutSecurityAuditLogsInput>;
    connectOrCreate?: Prisma.AdminCreateOrConnectWithoutSecurityAuditLogsInput;
    connect?: Prisma.AdminWhereUniqueInput;
};
export type AdminUpdateOneWithoutSecurityAuditLogsNestedInput = {
    create?: Prisma.XOR<Prisma.AdminCreateWithoutSecurityAuditLogsInput, Prisma.AdminUncheckedCreateWithoutSecurityAuditLogsInput>;
    connectOrCreate?: Prisma.AdminCreateOrConnectWithoutSecurityAuditLogsInput;
    upsert?: Prisma.AdminUpsertWithoutSecurityAuditLogsInput;
    disconnect?: Prisma.AdminWhereInput | boolean;
    delete?: Prisma.AdminWhereInput | boolean;
    connect?: Prisma.AdminWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AdminUpdateToOneWithWhereWithoutSecurityAuditLogsInput, Prisma.AdminUpdateWithoutSecurityAuditLogsInput>, Prisma.AdminUncheckedUpdateWithoutSecurityAuditLogsInput>;
};
export type AdminCreateNestedOneWithoutSessionsInput = {
    create?: Prisma.XOR<Prisma.AdminCreateWithoutSessionsInput, Prisma.AdminUncheckedCreateWithoutSessionsInput>;
    connectOrCreate?: Prisma.AdminCreateOrConnectWithoutSessionsInput;
    connect?: Prisma.AdminWhereUniqueInput;
};
export type AdminUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: Prisma.XOR<Prisma.AdminCreateWithoutSessionsInput, Prisma.AdminUncheckedCreateWithoutSessionsInput>;
    connectOrCreate?: Prisma.AdminCreateOrConnectWithoutSessionsInput;
    upsert?: Prisma.AdminUpsertWithoutSessionsInput;
    connect?: Prisma.AdminWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AdminUpdateToOneWithWhereWithoutSessionsInput, Prisma.AdminUpdateWithoutSessionsInput>, Prisma.AdminUncheckedUpdateWithoutSessionsInput>;
};
export type AdminCreateWithoutDisabledAttendanceSessionsInput = {
    username: string;
    password: string;
    namaLengkap: string;
    isActive?: boolean;
    createdAt?: Date | string;
    registeredDevices?: Prisma.UserDeviceCreateNestedManyWithoutRegisteredByInput;
    sessions?: Prisma.AdminSessionCreateNestedManyWithoutAdminInput;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryCreateNestedManyWithoutCreatedByAdminInput;
    securityAuditLogs?: Prisma.SecurityAuditLogCreateNestedManyWithoutAdminInput;
    attendanceSessionVersions?: Prisma.AttendanceSessionVersionCreateNestedManyWithoutCreatedByAdminInput;
    attendanceCorrections?: Prisma.AttendanceCorrectionLogCreateNestedManyWithoutCorrectedByAdminInput;
};
export type AdminUncheckedCreateWithoutDisabledAttendanceSessionsInput = {
    id?: number;
    username: string;
    password: string;
    namaLengkap: string;
    isActive?: boolean;
    createdAt?: Date | string;
    registeredDevices?: Prisma.UserDeviceUncheckedCreateNestedManyWithoutRegisteredByInput;
    sessions?: Prisma.AdminSessionUncheckedCreateNestedManyWithoutAdminInput;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryUncheckedCreateNestedManyWithoutCreatedByAdminInput;
    securityAuditLogs?: Prisma.SecurityAuditLogUncheckedCreateNestedManyWithoutAdminInput;
    attendanceSessionVersions?: Prisma.AttendanceSessionVersionUncheckedCreateNestedManyWithoutCreatedByAdminInput;
    attendanceCorrections?: Prisma.AttendanceCorrectionLogUncheckedCreateNestedManyWithoutCorrectedByAdminInput;
};
export type AdminCreateOrConnectWithoutDisabledAttendanceSessionsInput = {
    where: Prisma.AdminWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdminCreateWithoutDisabledAttendanceSessionsInput, Prisma.AdminUncheckedCreateWithoutDisabledAttendanceSessionsInput>;
};
export type AdminUpsertWithoutDisabledAttendanceSessionsInput = {
    update: Prisma.XOR<Prisma.AdminUpdateWithoutDisabledAttendanceSessionsInput, Prisma.AdminUncheckedUpdateWithoutDisabledAttendanceSessionsInput>;
    create: Prisma.XOR<Prisma.AdminCreateWithoutDisabledAttendanceSessionsInput, Prisma.AdminUncheckedCreateWithoutDisabledAttendanceSessionsInput>;
    where?: Prisma.AdminWhereInput;
};
export type AdminUpdateToOneWithWhereWithoutDisabledAttendanceSessionsInput = {
    where?: Prisma.AdminWhereInput;
    data: Prisma.XOR<Prisma.AdminUpdateWithoutDisabledAttendanceSessionsInput, Prisma.AdminUncheckedUpdateWithoutDisabledAttendanceSessionsInput>;
};
export type AdminUpdateWithoutDisabledAttendanceSessionsInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    namaLengkap?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    registeredDevices?: Prisma.UserDeviceUpdateManyWithoutRegisteredByNestedInput;
    sessions?: Prisma.AdminSessionUpdateManyWithoutAdminNestedInput;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryUpdateManyWithoutCreatedByAdminNestedInput;
    securityAuditLogs?: Prisma.SecurityAuditLogUpdateManyWithoutAdminNestedInput;
    attendanceSessionVersions?: Prisma.AttendanceSessionVersionUpdateManyWithoutCreatedByAdminNestedInput;
    attendanceCorrections?: Prisma.AttendanceCorrectionLogUpdateManyWithoutCorrectedByAdminNestedInput;
};
export type AdminUncheckedUpdateWithoutDisabledAttendanceSessionsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    namaLengkap?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    registeredDevices?: Prisma.UserDeviceUncheckedUpdateManyWithoutRegisteredByNestedInput;
    sessions?: Prisma.AdminSessionUncheckedUpdateManyWithoutAdminNestedInput;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryUncheckedUpdateManyWithoutCreatedByAdminNestedInput;
    securityAuditLogs?: Prisma.SecurityAuditLogUncheckedUpdateManyWithoutAdminNestedInput;
    attendanceSessionVersions?: Prisma.AttendanceSessionVersionUncheckedUpdateManyWithoutCreatedByAdminNestedInput;
    attendanceCorrections?: Prisma.AttendanceCorrectionLogUncheckedUpdateManyWithoutCorrectedByAdminNestedInput;
};
export type AdminCreateWithoutAttendanceSessionVersionsInput = {
    username: string;
    password: string;
    namaLengkap: string;
    isActive?: boolean;
    createdAt?: Date | string;
    registeredDevices?: Prisma.UserDeviceCreateNestedManyWithoutRegisteredByInput;
    sessions?: Prisma.AdminSessionCreateNestedManyWithoutAdminInput;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryCreateNestedManyWithoutCreatedByAdminInput;
    securityAuditLogs?: Prisma.SecurityAuditLogCreateNestedManyWithoutAdminInput;
    disabledAttendanceSessions?: Prisma.AttendanceSessionDefinitionCreateNestedManyWithoutDisabledByAdminInput;
    attendanceCorrections?: Prisma.AttendanceCorrectionLogCreateNestedManyWithoutCorrectedByAdminInput;
};
export type AdminUncheckedCreateWithoutAttendanceSessionVersionsInput = {
    id?: number;
    username: string;
    password: string;
    namaLengkap: string;
    isActive?: boolean;
    createdAt?: Date | string;
    registeredDevices?: Prisma.UserDeviceUncheckedCreateNestedManyWithoutRegisteredByInput;
    sessions?: Prisma.AdminSessionUncheckedCreateNestedManyWithoutAdminInput;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryUncheckedCreateNestedManyWithoutCreatedByAdminInput;
    securityAuditLogs?: Prisma.SecurityAuditLogUncheckedCreateNestedManyWithoutAdminInput;
    disabledAttendanceSessions?: Prisma.AttendanceSessionDefinitionUncheckedCreateNestedManyWithoutDisabledByAdminInput;
    attendanceCorrections?: Prisma.AttendanceCorrectionLogUncheckedCreateNestedManyWithoutCorrectedByAdminInput;
};
export type AdminCreateOrConnectWithoutAttendanceSessionVersionsInput = {
    where: Prisma.AdminWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdminCreateWithoutAttendanceSessionVersionsInput, Prisma.AdminUncheckedCreateWithoutAttendanceSessionVersionsInput>;
};
export type AdminUpsertWithoutAttendanceSessionVersionsInput = {
    update: Prisma.XOR<Prisma.AdminUpdateWithoutAttendanceSessionVersionsInput, Prisma.AdminUncheckedUpdateWithoutAttendanceSessionVersionsInput>;
    create: Prisma.XOR<Prisma.AdminCreateWithoutAttendanceSessionVersionsInput, Prisma.AdminUncheckedCreateWithoutAttendanceSessionVersionsInput>;
    where?: Prisma.AdminWhereInput;
};
export type AdminUpdateToOneWithWhereWithoutAttendanceSessionVersionsInput = {
    where?: Prisma.AdminWhereInput;
    data: Prisma.XOR<Prisma.AdminUpdateWithoutAttendanceSessionVersionsInput, Prisma.AdminUncheckedUpdateWithoutAttendanceSessionVersionsInput>;
};
export type AdminUpdateWithoutAttendanceSessionVersionsInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    namaLengkap?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    registeredDevices?: Prisma.UserDeviceUpdateManyWithoutRegisteredByNestedInput;
    sessions?: Prisma.AdminSessionUpdateManyWithoutAdminNestedInput;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryUpdateManyWithoutCreatedByAdminNestedInput;
    securityAuditLogs?: Prisma.SecurityAuditLogUpdateManyWithoutAdminNestedInput;
    disabledAttendanceSessions?: Prisma.AttendanceSessionDefinitionUpdateManyWithoutDisabledByAdminNestedInput;
    attendanceCorrections?: Prisma.AttendanceCorrectionLogUpdateManyWithoutCorrectedByAdminNestedInput;
};
export type AdminUncheckedUpdateWithoutAttendanceSessionVersionsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    namaLengkap?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    registeredDevices?: Prisma.UserDeviceUncheckedUpdateManyWithoutRegisteredByNestedInput;
    sessions?: Prisma.AdminSessionUncheckedUpdateManyWithoutAdminNestedInput;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryUncheckedUpdateManyWithoutCreatedByAdminNestedInput;
    securityAuditLogs?: Prisma.SecurityAuditLogUncheckedUpdateManyWithoutAdminNestedInput;
    disabledAttendanceSessions?: Prisma.AttendanceSessionDefinitionUncheckedUpdateManyWithoutDisabledByAdminNestedInput;
    attendanceCorrections?: Prisma.AttendanceCorrectionLogUncheckedUpdateManyWithoutCorrectedByAdminNestedInput;
};
export type AdminCreateWithoutAttendanceCorrectionsInput = {
    username: string;
    password: string;
    namaLengkap: string;
    isActive?: boolean;
    createdAt?: Date | string;
    registeredDevices?: Prisma.UserDeviceCreateNestedManyWithoutRegisteredByInput;
    sessions?: Prisma.AdminSessionCreateNestedManyWithoutAdminInput;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryCreateNestedManyWithoutCreatedByAdminInput;
    securityAuditLogs?: Prisma.SecurityAuditLogCreateNestedManyWithoutAdminInput;
    attendanceSessionVersions?: Prisma.AttendanceSessionVersionCreateNestedManyWithoutCreatedByAdminInput;
    disabledAttendanceSessions?: Prisma.AttendanceSessionDefinitionCreateNestedManyWithoutDisabledByAdminInput;
};
export type AdminUncheckedCreateWithoutAttendanceCorrectionsInput = {
    id?: number;
    username: string;
    password: string;
    namaLengkap: string;
    isActive?: boolean;
    createdAt?: Date | string;
    registeredDevices?: Prisma.UserDeviceUncheckedCreateNestedManyWithoutRegisteredByInput;
    sessions?: Prisma.AdminSessionUncheckedCreateNestedManyWithoutAdminInput;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryUncheckedCreateNestedManyWithoutCreatedByAdminInput;
    securityAuditLogs?: Prisma.SecurityAuditLogUncheckedCreateNestedManyWithoutAdminInput;
    attendanceSessionVersions?: Prisma.AttendanceSessionVersionUncheckedCreateNestedManyWithoutCreatedByAdminInput;
    disabledAttendanceSessions?: Prisma.AttendanceSessionDefinitionUncheckedCreateNestedManyWithoutDisabledByAdminInput;
};
export type AdminCreateOrConnectWithoutAttendanceCorrectionsInput = {
    where: Prisma.AdminWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdminCreateWithoutAttendanceCorrectionsInput, Prisma.AdminUncheckedCreateWithoutAttendanceCorrectionsInput>;
};
export type AdminUpsertWithoutAttendanceCorrectionsInput = {
    update: Prisma.XOR<Prisma.AdminUpdateWithoutAttendanceCorrectionsInput, Prisma.AdminUncheckedUpdateWithoutAttendanceCorrectionsInput>;
    create: Prisma.XOR<Prisma.AdminCreateWithoutAttendanceCorrectionsInput, Prisma.AdminUncheckedCreateWithoutAttendanceCorrectionsInput>;
    where?: Prisma.AdminWhereInput;
};
export type AdminUpdateToOneWithWhereWithoutAttendanceCorrectionsInput = {
    where?: Prisma.AdminWhereInput;
    data: Prisma.XOR<Prisma.AdminUpdateWithoutAttendanceCorrectionsInput, Prisma.AdminUncheckedUpdateWithoutAttendanceCorrectionsInput>;
};
export type AdminUpdateWithoutAttendanceCorrectionsInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    namaLengkap?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    registeredDevices?: Prisma.UserDeviceUpdateManyWithoutRegisteredByNestedInput;
    sessions?: Prisma.AdminSessionUpdateManyWithoutAdminNestedInput;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryUpdateManyWithoutCreatedByAdminNestedInput;
    securityAuditLogs?: Prisma.SecurityAuditLogUpdateManyWithoutAdminNestedInput;
    attendanceSessionVersions?: Prisma.AttendanceSessionVersionUpdateManyWithoutCreatedByAdminNestedInput;
    disabledAttendanceSessions?: Prisma.AttendanceSessionDefinitionUpdateManyWithoutDisabledByAdminNestedInput;
};
export type AdminUncheckedUpdateWithoutAttendanceCorrectionsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    namaLengkap?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    registeredDevices?: Prisma.UserDeviceUncheckedUpdateManyWithoutRegisteredByNestedInput;
    sessions?: Prisma.AdminSessionUncheckedUpdateManyWithoutAdminNestedInput;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryUncheckedUpdateManyWithoutCreatedByAdminNestedInput;
    securityAuditLogs?: Prisma.SecurityAuditLogUncheckedUpdateManyWithoutAdminNestedInput;
    attendanceSessionVersions?: Prisma.AttendanceSessionVersionUncheckedUpdateManyWithoutCreatedByAdminNestedInput;
    disabledAttendanceSessions?: Prisma.AttendanceSessionDefinitionUncheckedUpdateManyWithoutDisabledByAdminNestedInput;
};
export type AdminCreateWithoutRegisteredDevicesInput = {
    username: string;
    password: string;
    namaLengkap: string;
    isActive?: boolean;
    createdAt?: Date | string;
    sessions?: Prisma.AdminSessionCreateNestedManyWithoutAdminInput;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryCreateNestedManyWithoutCreatedByAdminInput;
    securityAuditLogs?: Prisma.SecurityAuditLogCreateNestedManyWithoutAdminInput;
    attendanceSessionVersions?: Prisma.AttendanceSessionVersionCreateNestedManyWithoutCreatedByAdminInput;
    disabledAttendanceSessions?: Prisma.AttendanceSessionDefinitionCreateNestedManyWithoutDisabledByAdminInput;
    attendanceCorrections?: Prisma.AttendanceCorrectionLogCreateNestedManyWithoutCorrectedByAdminInput;
};
export type AdminUncheckedCreateWithoutRegisteredDevicesInput = {
    id?: number;
    username: string;
    password: string;
    namaLengkap: string;
    isActive?: boolean;
    createdAt?: Date | string;
    sessions?: Prisma.AdminSessionUncheckedCreateNestedManyWithoutAdminInput;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryUncheckedCreateNestedManyWithoutCreatedByAdminInput;
    securityAuditLogs?: Prisma.SecurityAuditLogUncheckedCreateNestedManyWithoutAdminInput;
    attendanceSessionVersions?: Prisma.AttendanceSessionVersionUncheckedCreateNestedManyWithoutCreatedByAdminInput;
    disabledAttendanceSessions?: Prisma.AttendanceSessionDefinitionUncheckedCreateNestedManyWithoutDisabledByAdminInput;
    attendanceCorrections?: Prisma.AttendanceCorrectionLogUncheckedCreateNestedManyWithoutCorrectedByAdminInput;
};
export type AdminCreateOrConnectWithoutRegisteredDevicesInput = {
    where: Prisma.AdminWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdminCreateWithoutRegisteredDevicesInput, Prisma.AdminUncheckedCreateWithoutRegisteredDevicesInput>;
};
export type AdminUpsertWithoutRegisteredDevicesInput = {
    update: Prisma.XOR<Prisma.AdminUpdateWithoutRegisteredDevicesInput, Prisma.AdminUncheckedUpdateWithoutRegisteredDevicesInput>;
    create: Prisma.XOR<Prisma.AdminCreateWithoutRegisteredDevicesInput, Prisma.AdminUncheckedCreateWithoutRegisteredDevicesInput>;
    where?: Prisma.AdminWhereInput;
};
export type AdminUpdateToOneWithWhereWithoutRegisteredDevicesInput = {
    where?: Prisma.AdminWhereInput;
    data: Prisma.XOR<Prisma.AdminUpdateWithoutRegisteredDevicesInput, Prisma.AdminUncheckedUpdateWithoutRegisteredDevicesInput>;
};
export type AdminUpdateWithoutRegisteredDevicesInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    namaLengkap?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.AdminSessionUpdateManyWithoutAdminNestedInput;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryUpdateManyWithoutCreatedByAdminNestedInput;
    securityAuditLogs?: Prisma.SecurityAuditLogUpdateManyWithoutAdminNestedInput;
    attendanceSessionVersions?: Prisma.AttendanceSessionVersionUpdateManyWithoutCreatedByAdminNestedInput;
    disabledAttendanceSessions?: Prisma.AttendanceSessionDefinitionUpdateManyWithoutDisabledByAdminNestedInput;
    attendanceCorrections?: Prisma.AttendanceCorrectionLogUpdateManyWithoutCorrectedByAdminNestedInput;
};
export type AdminUncheckedUpdateWithoutRegisteredDevicesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    namaLengkap?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.AdminSessionUncheckedUpdateManyWithoutAdminNestedInput;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryUncheckedUpdateManyWithoutCreatedByAdminNestedInput;
    securityAuditLogs?: Prisma.SecurityAuditLogUncheckedUpdateManyWithoutAdminNestedInput;
    attendanceSessionVersions?: Prisma.AttendanceSessionVersionUncheckedUpdateManyWithoutCreatedByAdminNestedInput;
    disabledAttendanceSessions?: Prisma.AttendanceSessionDefinitionUncheckedUpdateManyWithoutDisabledByAdminNestedInput;
    attendanceCorrections?: Prisma.AttendanceCorrectionLogUncheckedUpdateManyWithoutCorrectedByAdminNestedInput;
};
export type AdminCreateWithoutSessionRecoveriesInput = {
    username: string;
    password: string;
    namaLengkap: string;
    isActive?: boolean;
    createdAt?: Date | string;
    registeredDevices?: Prisma.UserDeviceCreateNestedManyWithoutRegisteredByInput;
    sessions?: Prisma.AdminSessionCreateNestedManyWithoutAdminInput;
    securityAuditLogs?: Prisma.SecurityAuditLogCreateNestedManyWithoutAdminInput;
    attendanceSessionVersions?: Prisma.AttendanceSessionVersionCreateNestedManyWithoutCreatedByAdminInput;
    disabledAttendanceSessions?: Prisma.AttendanceSessionDefinitionCreateNestedManyWithoutDisabledByAdminInput;
    attendanceCorrections?: Prisma.AttendanceCorrectionLogCreateNestedManyWithoutCorrectedByAdminInput;
};
export type AdminUncheckedCreateWithoutSessionRecoveriesInput = {
    id?: number;
    username: string;
    password: string;
    namaLengkap: string;
    isActive?: boolean;
    createdAt?: Date | string;
    registeredDevices?: Prisma.UserDeviceUncheckedCreateNestedManyWithoutRegisteredByInput;
    sessions?: Prisma.AdminSessionUncheckedCreateNestedManyWithoutAdminInput;
    securityAuditLogs?: Prisma.SecurityAuditLogUncheckedCreateNestedManyWithoutAdminInput;
    attendanceSessionVersions?: Prisma.AttendanceSessionVersionUncheckedCreateNestedManyWithoutCreatedByAdminInput;
    disabledAttendanceSessions?: Prisma.AttendanceSessionDefinitionUncheckedCreateNestedManyWithoutDisabledByAdminInput;
    attendanceCorrections?: Prisma.AttendanceCorrectionLogUncheckedCreateNestedManyWithoutCorrectedByAdminInput;
};
export type AdminCreateOrConnectWithoutSessionRecoveriesInput = {
    where: Prisma.AdminWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdminCreateWithoutSessionRecoveriesInput, Prisma.AdminUncheckedCreateWithoutSessionRecoveriesInput>;
};
export type AdminUpsertWithoutSessionRecoveriesInput = {
    update: Prisma.XOR<Prisma.AdminUpdateWithoutSessionRecoveriesInput, Prisma.AdminUncheckedUpdateWithoutSessionRecoveriesInput>;
    create: Prisma.XOR<Prisma.AdminCreateWithoutSessionRecoveriesInput, Prisma.AdminUncheckedCreateWithoutSessionRecoveriesInput>;
    where?: Prisma.AdminWhereInput;
};
export type AdminUpdateToOneWithWhereWithoutSessionRecoveriesInput = {
    where?: Prisma.AdminWhereInput;
    data: Prisma.XOR<Prisma.AdminUpdateWithoutSessionRecoveriesInput, Prisma.AdminUncheckedUpdateWithoutSessionRecoveriesInput>;
};
export type AdminUpdateWithoutSessionRecoveriesInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    namaLengkap?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    registeredDevices?: Prisma.UserDeviceUpdateManyWithoutRegisteredByNestedInput;
    sessions?: Prisma.AdminSessionUpdateManyWithoutAdminNestedInput;
    securityAuditLogs?: Prisma.SecurityAuditLogUpdateManyWithoutAdminNestedInput;
    attendanceSessionVersions?: Prisma.AttendanceSessionVersionUpdateManyWithoutCreatedByAdminNestedInput;
    disabledAttendanceSessions?: Prisma.AttendanceSessionDefinitionUpdateManyWithoutDisabledByAdminNestedInput;
    attendanceCorrections?: Prisma.AttendanceCorrectionLogUpdateManyWithoutCorrectedByAdminNestedInput;
};
export type AdminUncheckedUpdateWithoutSessionRecoveriesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    namaLengkap?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    registeredDevices?: Prisma.UserDeviceUncheckedUpdateManyWithoutRegisteredByNestedInput;
    sessions?: Prisma.AdminSessionUncheckedUpdateManyWithoutAdminNestedInput;
    securityAuditLogs?: Prisma.SecurityAuditLogUncheckedUpdateManyWithoutAdminNestedInput;
    attendanceSessionVersions?: Prisma.AttendanceSessionVersionUncheckedUpdateManyWithoutCreatedByAdminNestedInput;
    disabledAttendanceSessions?: Prisma.AttendanceSessionDefinitionUncheckedUpdateManyWithoutDisabledByAdminNestedInput;
    attendanceCorrections?: Prisma.AttendanceCorrectionLogUncheckedUpdateManyWithoutCorrectedByAdminNestedInput;
};
export type AdminCreateWithoutSecurityAuditLogsInput = {
    username: string;
    password: string;
    namaLengkap: string;
    isActive?: boolean;
    createdAt?: Date | string;
    registeredDevices?: Prisma.UserDeviceCreateNestedManyWithoutRegisteredByInput;
    sessions?: Prisma.AdminSessionCreateNestedManyWithoutAdminInput;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryCreateNestedManyWithoutCreatedByAdminInput;
    attendanceSessionVersions?: Prisma.AttendanceSessionVersionCreateNestedManyWithoutCreatedByAdminInput;
    disabledAttendanceSessions?: Prisma.AttendanceSessionDefinitionCreateNestedManyWithoutDisabledByAdminInput;
    attendanceCorrections?: Prisma.AttendanceCorrectionLogCreateNestedManyWithoutCorrectedByAdminInput;
};
export type AdminUncheckedCreateWithoutSecurityAuditLogsInput = {
    id?: number;
    username: string;
    password: string;
    namaLengkap: string;
    isActive?: boolean;
    createdAt?: Date | string;
    registeredDevices?: Prisma.UserDeviceUncheckedCreateNestedManyWithoutRegisteredByInput;
    sessions?: Prisma.AdminSessionUncheckedCreateNestedManyWithoutAdminInput;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryUncheckedCreateNestedManyWithoutCreatedByAdminInput;
    attendanceSessionVersions?: Prisma.AttendanceSessionVersionUncheckedCreateNestedManyWithoutCreatedByAdminInput;
    disabledAttendanceSessions?: Prisma.AttendanceSessionDefinitionUncheckedCreateNestedManyWithoutDisabledByAdminInput;
    attendanceCorrections?: Prisma.AttendanceCorrectionLogUncheckedCreateNestedManyWithoutCorrectedByAdminInput;
};
export type AdminCreateOrConnectWithoutSecurityAuditLogsInput = {
    where: Prisma.AdminWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdminCreateWithoutSecurityAuditLogsInput, Prisma.AdminUncheckedCreateWithoutSecurityAuditLogsInput>;
};
export type AdminUpsertWithoutSecurityAuditLogsInput = {
    update: Prisma.XOR<Prisma.AdminUpdateWithoutSecurityAuditLogsInput, Prisma.AdminUncheckedUpdateWithoutSecurityAuditLogsInput>;
    create: Prisma.XOR<Prisma.AdminCreateWithoutSecurityAuditLogsInput, Prisma.AdminUncheckedCreateWithoutSecurityAuditLogsInput>;
    where?: Prisma.AdminWhereInput;
};
export type AdminUpdateToOneWithWhereWithoutSecurityAuditLogsInput = {
    where?: Prisma.AdminWhereInput;
    data: Prisma.XOR<Prisma.AdminUpdateWithoutSecurityAuditLogsInput, Prisma.AdminUncheckedUpdateWithoutSecurityAuditLogsInput>;
};
export type AdminUpdateWithoutSecurityAuditLogsInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    namaLengkap?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    registeredDevices?: Prisma.UserDeviceUpdateManyWithoutRegisteredByNestedInput;
    sessions?: Prisma.AdminSessionUpdateManyWithoutAdminNestedInput;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryUpdateManyWithoutCreatedByAdminNestedInput;
    attendanceSessionVersions?: Prisma.AttendanceSessionVersionUpdateManyWithoutCreatedByAdminNestedInput;
    disabledAttendanceSessions?: Prisma.AttendanceSessionDefinitionUpdateManyWithoutDisabledByAdminNestedInput;
    attendanceCorrections?: Prisma.AttendanceCorrectionLogUpdateManyWithoutCorrectedByAdminNestedInput;
};
export type AdminUncheckedUpdateWithoutSecurityAuditLogsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    namaLengkap?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    registeredDevices?: Prisma.UserDeviceUncheckedUpdateManyWithoutRegisteredByNestedInput;
    sessions?: Prisma.AdminSessionUncheckedUpdateManyWithoutAdminNestedInput;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryUncheckedUpdateManyWithoutCreatedByAdminNestedInput;
    attendanceSessionVersions?: Prisma.AttendanceSessionVersionUncheckedUpdateManyWithoutCreatedByAdminNestedInput;
    disabledAttendanceSessions?: Prisma.AttendanceSessionDefinitionUncheckedUpdateManyWithoutDisabledByAdminNestedInput;
    attendanceCorrections?: Prisma.AttendanceCorrectionLogUncheckedUpdateManyWithoutCorrectedByAdminNestedInput;
};
export type AdminCreateWithoutSessionsInput = {
    username: string;
    password: string;
    namaLengkap: string;
    isActive?: boolean;
    createdAt?: Date | string;
    registeredDevices?: Prisma.UserDeviceCreateNestedManyWithoutRegisteredByInput;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryCreateNestedManyWithoutCreatedByAdminInput;
    securityAuditLogs?: Prisma.SecurityAuditLogCreateNestedManyWithoutAdminInput;
    attendanceSessionVersions?: Prisma.AttendanceSessionVersionCreateNestedManyWithoutCreatedByAdminInput;
    disabledAttendanceSessions?: Prisma.AttendanceSessionDefinitionCreateNestedManyWithoutDisabledByAdminInput;
    attendanceCorrections?: Prisma.AttendanceCorrectionLogCreateNestedManyWithoutCorrectedByAdminInput;
};
export type AdminUncheckedCreateWithoutSessionsInput = {
    id?: number;
    username: string;
    password: string;
    namaLengkap: string;
    isActive?: boolean;
    createdAt?: Date | string;
    registeredDevices?: Prisma.UserDeviceUncheckedCreateNestedManyWithoutRegisteredByInput;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryUncheckedCreateNestedManyWithoutCreatedByAdminInput;
    securityAuditLogs?: Prisma.SecurityAuditLogUncheckedCreateNestedManyWithoutAdminInput;
    attendanceSessionVersions?: Prisma.AttendanceSessionVersionUncheckedCreateNestedManyWithoutCreatedByAdminInput;
    disabledAttendanceSessions?: Prisma.AttendanceSessionDefinitionUncheckedCreateNestedManyWithoutDisabledByAdminInput;
    attendanceCorrections?: Prisma.AttendanceCorrectionLogUncheckedCreateNestedManyWithoutCorrectedByAdminInput;
};
export type AdminCreateOrConnectWithoutSessionsInput = {
    where: Prisma.AdminWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdminCreateWithoutSessionsInput, Prisma.AdminUncheckedCreateWithoutSessionsInput>;
};
export type AdminUpsertWithoutSessionsInput = {
    update: Prisma.XOR<Prisma.AdminUpdateWithoutSessionsInput, Prisma.AdminUncheckedUpdateWithoutSessionsInput>;
    create: Prisma.XOR<Prisma.AdminCreateWithoutSessionsInput, Prisma.AdminUncheckedCreateWithoutSessionsInput>;
    where?: Prisma.AdminWhereInput;
};
export type AdminUpdateToOneWithWhereWithoutSessionsInput = {
    where?: Prisma.AdminWhereInput;
    data: Prisma.XOR<Prisma.AdminUpdateWithoutSessionsInput, Prisma.AdminUncheckedUpdateWithoutSessionsInput>;
};
export type AdminUpdateWithoutSessionsInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    namaLengkap?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    registeredDevices?: Prisma.UserDeviceUpdateManyWithoutRegisteredByNestedInput;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryUpdateManyWithoutCreatedByAdminNestedInput;
    securityAuditLogs?: Prisma.SecurityAuditLogUpdateManyWithoutAdminNestedInput;
    attendanceSessionVersions?: Prisma.AttendanceSessionVersionUpdateManyWithoutCreatedByAdminNestedInput;
    disabledAttendanceSessions?: Prisma.AttendanceSessionDefinitionUpdateManyWithoutDisabledByAdminNestedInput;
    attendanceCorrections?: Prisma.AttendanceCorrectionLogUpdateManyWithoutCorrectedByAdminNestedInput;
};
export type AdminUncheckedUpdateWithoutSessionsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    namaLengkap?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    registeredDevices?: Prisma.UserDeviceUncheckedUpdateManyWithoutRegisteredByNestedInput;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryUncheckedUpdateManyWithoutCreatedByAdminNestedInput;
    securityAuditLogs?: Prisma.SecurityAuditLogUncheckedUpdateManyWithoutAdminNestedInput;
    attendanceSessionVersions?: Prisma.AttendanceSessionVersionUncheckedUpdateManyWithoutCreatedByAdminNestedInput;
    disabledAttendanceSessions?: Prisma.AttendanceSessionDefinitionUncheckedUpdateManyWithoutDisabledByAdminNestedInput;
    attendanceCorrections?: Prisma.AttendanceCorrectionLogUncheckedUpdateManyWithoutCorrectedByAdminNestedInput;
};
/**
 * Count Type AdminCountOutputType
 */
export type AdminCountOutputType = {
    registeredDevices: number;
    sessions: number;
    sessionRecoveries: number;
    securityAuditLogs: number;
    attendanceSessionVersions: number;
    disabledAttendanceSessions: number;
    attendanceCorrections: number;
};
export type AdminCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    registeredDevices?: boolean | AdminCountOutputTypeCountRegisteredDevicesArgs;
    sessions?: boolean | AdminCountOutputTypeCountSessionsArgs;
    sessionRecoveries?: boolean | AdminCountOutputTypeCountSessionRecoveriesArgs;
    securityAuditLogs?: boolean | AdminCountOutputTypeCountSecurityAuditLogsArgs;
    attendanceSessionVersions?: boolean | AdminCountOutputTypeCountAttendanceSessionVersionsArgs;
    disabledAttendanceSessions?: boolean | AdminCountOutputTypeCountDisabledAttendanceSessionsArgs;
    attendanceCorrections?: boolean | AdminCountOutputTypeCountAttendanceCorrectionsArgs;
};
/**
 * AdminCountOutputType without action
 */
export type AdminCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCountOutputType
     */
    select?: Prisma.AdminCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * AdminCountOutputType without action
 */
export type AdminCountOutputTypeCountRegisteredDevicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserDeviceWhereInput;
};
/**
 * AdminCountOutputType without action
 */
export type AdminCountOutputTypeCountSessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdminSessionWhereInput;
};
/**
 * AdminCountOutputType without action
 */
export type AdminCountOutputTypeCountSessionRecoveriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DeviceSessionRecoveryWhereInput;
};
/**
 * AdminCountOutputType without action
 */
export type AdminCountOutputTypeCountSecurityAuditLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SecurityAuditLogWhereInput;
};
/**
 * AdminCountOutputType without action
 */
export type AdminCountOutputTypeCountAttendanceSessionVersionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceSessionVersionWhereInput;
};
/**
 * AdminCountOutputType without action
 */
export type AdminCountOutputTypeCountDisabledAttendanceSessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceSessionDefinitionWhereInput;
};
/**
 * AdminCountOutputType without action
 */
export type AdminCountOutputTypeCountAttendanceCorrectionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceCorrectionLogWhereInput;
};
export type AdminSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    username?: boolean;
    password?: boolean;
    namaLengkap?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    registeredDevices?: boolean | Prisma.Admin$registeredDevicesArgs<ExtArgs>;
    sessions?: boolean | Prisma.Admin$sessionsArgs<ExtArgs>;
    sessionRecoveries?: boolean | Prisma.Admin$sessionRecoveriesArgs<ExtArgs>;
    securityAuditLogs?: boolean | Prisma.Admin$securityAuditLogsArgs<ExtArgs>;
    attendanceSessionVersions?: boolean | Prisma.Admin$attendanceSessionVersionsArgs<ExtArgs>;
    disabledAttendanceSessions?: boolean | Prisma.Admin$disabledAttendanceSessionsArgs<ExtArgs>;
    attendanceCorrections?: boolean | Prisma.Admin$attendanceCorrectionsArgs<ExtArgs>;
    _count?: boolean | Prisma.AdminCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["admin"]>;
export type AdminSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    username?: boolean;
    password?: boolean;
    namaLengkap?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["admin"]>;
export type AdminSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    username?: boolean;
    password?: boolean;
    namaLengkap?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["admin"]>;
export type AdminSelectScalar = {
    id?: boolean;
    username?: boolean;
    password?: boolean;
    namaLengkap?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
};
export type AdminOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "username" | "password" | "namaLengkap" | "isActive" | "createdAt", ExtArgs["result"]["admin"]>;
export type AdminInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    registeredDevices?: boolean | Prisma.Admin$registeredDevicesArgs<ExtArgs>;
    sessions?: boolean | Prisma.Admin$sessionsArgs<ExtArgs>;
    sessionRecoveries?: boolean | Prisma.Admin$sessionRecoveriesArgs<ExtArgs>;
    securityAuditLogs?: boolean | Prisma.Admin$securityAuditLogsArgs<ExtArgs>;
    attendanceSessionVersions?: boolean | Prisma.Admin$attendanceSessionVersionsArgs<ExtArgs>;
    disabledAttendanceSessions?: boolean | Prisma.Admin$disabledAttendanceSessionsArgs<ExtArgs>;
    attendanceCorrections?: boolean | Prisma.Admin$attendanceCorrectionsArgs<ExtArgs>;
    _count?: boolean | Prisma.AdminCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AdminIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type AdminIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $AdminPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Admin";
    objects: {
        registeredDevices: Prisma.$UserDevicePayload<ExtArgs>[];
        sessions: Prisma.$AdminSessionPayload<ExtArgs>[];
        sessionRecoveries: Prisma.$DeviceSessionRecoveryPayload<ExtArgs>[];
        securityAuditLogs: Prisma.$SecurityAuditLogPayload<ExtArgs>[];
        attendanceSessionVersions: Prisma.$AttendanceSessionVersionPayload<ExtArgs>[];
        disabledAttendanceSessions: Prisma.$AttendanceSessionDefinitionPayload<ExtArgs>[];
        attendanceCorrections: Prisma.$AttendanceCorrectionLogPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        username: string;
        password: string;
        namaLengkap: string;
        isActive: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["admin"]>;
    composites: {};
};
export type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AdminPayload, S>;
export type AdminCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AdminCountAggregateInputType | true;
};
export interface AdminDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Admin'];
        meta: {
            name: 'Admin';
        };
    };
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: Prisma.SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AdminClient<runtime.Types.Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AdminClient<runtime.Types.Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: Prisma.SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma.Prisma__AdminClient<runtime.Types.Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AdminClient<runtime.Types.Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     *
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AdminFindManyArgs>(args?: Prisma.SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     *
     */
    create<T extends AdminCreateArgs>(args: Prisma.SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma.Prisma__AdminClient<runtime.Types.Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AdminCreateManyArgs>(args?: Prisma.SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     *
     */
    delete<T extends AdminDeleteArgs>(args: Prisma.SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma.Prisma__AdminClient<runtime.Types.Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AdminUpdateArgs>(args: Prisma.SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma.Prisma__AdminClient<runtime.Types.Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: Prisma.SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AdminUpdateManyArgs>(args: Prisma.SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: Prisma.SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma.Prisma__AdminClient<runtime.Types.Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(args?: Prisma.Subset<T, AdminCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AdminCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Prisma.Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>;
    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends AdminGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AdminGroupByArgs['orderBy'];
    } : {
        orderBy?: AdminGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Admin model
     */
    readonly fields: AdminFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Admin.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__AdminClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    registeredDevices<T extends Prisma.Admin$registeredDevicesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Admin$registeredDevicesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    sessions<T extends Prisma.Admin$sessionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Admin$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdminSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    sessionRecoveries<T extends Prisma.Admin$sessionRecoveriesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Admin$sessionRecoveriesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeviceSessionRecoveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    securityAuditLogs<T extends Prisma.Admin$securityAuditLogsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Admin$securityAuditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SecurityAuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    attendanceSessionVersions<T extends Prisma.Admin$attendanceSessionVersionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Admin$attendanceSessionVersionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    disabledAttendanceSessions<T extends Prisma.Admin$disabledAttendanceSessionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Admin$disabledAttendanceSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionDefinitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    attendanceCorrections<T extends Prisma.Admin$attendanceCorrectionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Admin$attendanceCorrectionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceCorrectionLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Admin model
 */
export interface AdminFieldRefs {
    readonly id: Prisma.FieldRef<"Admin", 'Int'>;
    readonly username: Prisma.FieldRef<"Admin", 'String'>;
    readonly password: Prisma.FieldRef<"Admin", 'String'>;
    readonly namaLengkap: Prisma.FieldRef<"Admin", 'String'>;
    readonly isActive: Prisma.FieldRef<"Admin", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Admin", 'DateTime'>;
}
/**
 * Admin findUnique
 */
export type AdminFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: Prisma.AdminSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Admin
     */
    omit?: Prisma.AdminOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdminInclude<ExtArgs> | null;
    /**
     * Filter, which Admin to fetch.
     */
    where: Prisma.AdminWhereUniqueInput;
};
/**
 * Admin findUniqueOrThrow
 */
export type AdminFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: Prisma.AdminSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Admin
     */
    omit?: Prisma.AdminOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdminInclude<ExtArgs> | null;
    /**
     * Filter, which Admin to fetch.
     */
    where: Prisma.AdminWhereUniqueInput;
};
/**
 * Admin findFirst
 */
export type AdminFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: Prisma.AdminSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Admin
     */
    omit?: Prisma.AdminOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdminInclude<ExtArgs> | null;
    /**
     * Filter, which Admin to fetch.
     */
    where?: Prisma.AdminWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Admins to fetch.
     */
    orderBy?: Prisma.AdminOrderByWithRelationInput | Prisma.AdminOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Admins.
     */
    cursor?: Prisma.AdminWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Admins.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Admins.
     */
    distinct?: Prisma.AdminScalarFieldEnum | Prisma.AdminScalarFieldEnum[];
};
/**
 * Admin findFirstOrThrow
 */
export type AdminFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: Prisma.AdminSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Admin
     */
    omit?: Prisma.AdminOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdminInclude<ExtArgs> | null;
    /**
     * Filter, which Admin to fetch.
     */
    where?: Prisma.AdminWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Admins to fetch.
     */
    orderBy?: Prisma.AdminOrderByWithRelationInput | Prisma.AdminOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Admins.
     */
    cursor?: Prisma.AdminWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Admins.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Admins.
     */
    distinct?: Prisma.AdminScalarFieldEnum | Prisma.AdminScalarFieldEnum[];
};
/**
 * Admin findMany
 */
export type AdminFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: Prisma.AdminSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Admin
     */
    omit?: Prisma.AdminOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdminInclude<ExtArgs> | null;
    /**
     * Filter, which Admins to fetch.
     */
    where?: Prisma.AdminWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Admins to fetch.
     */
    orderBy?: Prisma.AdminOrderByWithRelationInput | Prisma.AdminOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Admins.
     */
    cursor?: Prisma.AdminWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Admins.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Admins.
     */
    distinct?: Prisma.AdminScalarFieldEnum | Prisma.AdminScalarFieldEnum[];
};
/**
 * Admin create
 */
export type AdminCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: Prisma.AdminSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Admin
     */
    omit?: Prisma.AdminOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdminInclude<ExtArgs> | null;
    /**
     * The data needed to create a Admin.
     */
    data: Prisma.XOR<Prisma.AdminCreateInput, Prisma.AdminUncheckedCreateInput>;
};
/**
 * Admin createMany
 */
export type AdminCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: Prisma.AdminCreateManyInput | Prisma.AdminCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Admin createManyAndReturn
 */
export type AdminCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: Prisma.AdminSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Admin
     */
    omit?: Prisma.AdminOmit<ExtArgs> | null;
    /**
     * The data used to create many Admins.
     */
    data: Prisma.AdminCreateManyInput | Prisma.AdminCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Admin update
 */
export type AdminUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: Prisma.AdminSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Admin
     */
    omit?: Prisma.AdminOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdminInclude<ExtArgs> | null;
    /**
     * The data needed to update a Admin.
     */
    data: Prisma.XOR<Prisma.AdminUpdateInput, Prisma.AdminUncheckedUpdateInput>;
    /**
     * Choose, which Admin to update.
     */
    where: Prisma.AdminWhereUniqueInput;
};
/**
 * Admin updateMany
 */
export type AdminUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: Prisma.XOR<Prisma.AdminUpdateManyMutationInput, Prisma.AdminUncheckedUpdateManyInput>;
    /**
     * Filter which Admins to update
     */
    where?: Prisma.AdminWhereInput;
    /**
     * Limit how many Admins to update.
     */
    limit?: number;
};
/**
 * Admin updateManyAndReturn
 */
export type AdminUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: Prisma.AdminSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Admin
     */
    omit?: Prisma.AdminOmit<ExtArgs> | null;
    /**
     * The data used to update Admins.
     */
    data: Prisma.XOR<Prisma.AdminUpdateManyMutationInput, Prisma.AdminUncheckedUpdateManyInput>;
    /**
     * Filter which Admins to update
     */
    where?: Prisma.AdminWhereInput;
    /**
     * Limit how many Admins to update.
     */
    limit?: number;
};
/**
 * Admin upsert
 */
export type AdminUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: Prisma.AdminSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Admin
     */
    omit?: Prisma.AdminOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdminInclude<ExtArgs> | null;
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: Prisma.AdminWhereUniqueInput;
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: Prisma.XOR<Prisma.AdminCreateInput, Prisma.AdminUncheckedCreateInput>;
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.AdminUpdateInput, Prisma.AdminUncheckedUpdateInput>;
};
/**
 * Admin delete
 */
export type AdminDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: Prisma.AdminSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Admin
     */
    omit?: Prisma.AdminOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdminInclude<ExtArgs> | null;
    /**
     * Filter which Admin to delete.
     */
    where: Prisma.AdminWhereUniqueInput;
};
/**
 * Admin deleteMany
 */
export type AdminDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: Prisma.AdminWhereInput;
    /**
     * Limit how many Admins to delete.
     */
    limit?: number;
};
/**
 * Admin.registeredDevices
 */
export type Admin$registeredDevicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: Prisma.UserDeviceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserDevice
     */
    omit?: Prisma.UserDeviceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserDeviceInclude<ExtArgs> | null;
    where?: Prisma.UserDeviceWhereInput;
    orderBy?: Prisma.UserDeviceOrderByWithRelationInput | Prisma.UserDeviceOrderByWithRelationInput[];
    cursor?: Prisma.UserDeviceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserDeviceScalarFieldEnum | Prisma.UserDeviceScalarFieldEnum[];
};
/**
 * Admin.sessions
 */
export type Admin$sessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminSession
     */
    select?: Prisma.AdminSessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdminSession
     */
    omit?: Prisma.AdminSessionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdminSessionInclude<ExtArgs> | null;
    where?: Prisma.AdminSessionWhereInput;
    orderBy?: Prisma.AdminSessionOrderByWithRelationInput | Prisma.AdminSessionOrderByWithRelationInput[];
    cursor?: Prisma.AdminSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdminSessionScalarFieldEnum | Prisma.AdminSessionScalarFieldEnum[];
};
/**
 * Admin.sessionRecoveries
 */
export type Admin$sessionRecoveriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSessionRecovery
     */
    select?: Prisma.DeviceSessionRecoverySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceSessionRecovery
     */
    omit?: Prisma.DeviceSessionRecoveryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DeviceSessionRecoveryInclude<ExtArgs> | null;
    where?: Prisma.DeviceSessionRecoveryWhereInput;
    orderBy?: Prisma.DeviceSessionRecoveryOrderByWithRelationInput | Prisma.DeviceSessionRecoveryOrderByWithRelationInput[];
    cursor?: Prisma.DeviceSessionRecoveryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DeviceSessionRecoveryScalarFieldEnum | Prisma.DeviceSessionRecoveryScalarFieldEnum[];
};
/**
 * Admin.securityAuditLogs
 */
export type Admin$securityAuditLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityAuditLog
     */
    select?: Prisma.SecurityAuditLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SecurityAuditLog
     */
    omit?: Prisma.SecurityAuditLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SecurityAuditLogInclude<ExtArgs> | null;
    where?: Prisma.SecurityAuditLogWhereInput;
    orderBy?: Prisma.SecurityAuditLogOrderByWithRelationInput | Prisma.SecurityAuditLogOrderByWithRelationInput[];
    cursor?: Prisma.SecurityAuditLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SecurityAuditLogScalarFieldEnum | Prisma.SecurityAuditLogScalarFieldEnum[];
};
/**
 * Admin.attendanceSessionVersions
 */
export type Admin$attendanceSessionVersionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceSessionVersion
     */
    select?: Prisma.AttendanceSessionVersionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AttendanceSessionVersion
     */
    omit?: Prisma.AttendanceSessionVersionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AttendanceSessionVersionInclude<ExtArgs> | null;
    where?: Prisma.AttendanceSessionVersionWhereInput;
    orderBy?: Prisma.AttendanceSessionVersionOrderByWithRelationInput | Prisma.AttendanceSessionVersionOrderByWithRelationInput[];
    cursor?: Prisma.AttendanceSessionVersionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AttendanceSessionVersionScalarFieldEnum | Prisma.AttendanceSessionVersionScalarFieldEnum[];
};
/**
 * Admin.disabledAttendanceSessions
 */
export type Admin$disabledAttendanceSessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceSessionDefinition
     */
    select?: Prisma.AttendanceSessionDefinitionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AttendanceSessionDefinition
     */
    omit?: Prisma.AttendanceSessionDefinitionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AttendanceSessionDefinitionInclude<ExtArgs> | null;
    where?: Prisma.AttendanceSessionDefinitionWhereInput;
    orderBy?: Prisma.AttendanceSessionDefinitionOrderByWithRelationInput | Prisma.AttendanceSessionDefinitionOrderByWithRelationInput[];
    cursor?: Prisma.AttendanceSessionDefinitionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AttendanceSessionDefinitionScalarFieldEnum | Prisma.AttendanceSessionDefinitionScalarFieldEnum[];
};
/**
 * Admin.attendanceCorrections
 */
export type Admin$attendanceCorrectionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceCorrectionLog
     */
    select?: Prisma.AttendanceCorrectionLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AttendanceCorrectionLog
     */
    omit?: Prisma.AttendanceCorrectionLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AttendanceCorrectionLogInclude<ExtArgs> | null;
    where?: Prisma.AttendanceCorrectionLogWhereInput;
    orderBy?: Prisma.AttendanceCorrectionLogOrderByWithRelationInput | Prisma.AttendanceCorrectionLogOrderByWithRelationInput[];
    cursor?: Prisma.AttendanceCorrectionLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AttendanceCorrectionLogScalarFieldEnum | Prisma.AttendanceCorrectionLogScalarFieldEnum[];
};
/**
 * Admin without action
 */
export type AdminDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: Prisma.AdminSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Admin
     */
    omit?: Prisma.AdminOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdminInclude<ExtArgs> | null;
};
