import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model UserDevice
 *
 */
export type UserDeviceModel = runtime.Types.Result.DefaultSelection<Prisma.$UserDevicePayload>;
export type AggregateUserDevice = {
    _count: UserDeviceCountAggregateOutputType | null;
    _avg: UserDeviceAvgAggregateOutputType | null;
    _sum: UserDeviceSumAggregateOutputType | null;
    _min: UserDeviceMinAggregateOutputType | null;
    _max: UserDeviceMaxAggregateOutputType | null;
};
export type UserDeviceAvgAggregateOutputType = {
    id: number | null;
    registeredByAdminId: number | null;
};
export type UserDeviceSumAggregateOutputType = {
    id: number | null;
    registeredByAdminId: number | null;
};
export type UserDeviceMinAggregateOutputType = {
    id: number | null;
    nik: string | null;
    deviceUuid: string | null;
    status: $Enums.DeviceStatus | null;
    deviceName: string | null;
    enrollmentCodeHash: string | null;
    enrollmentExpiresAt: Date | null;
    enrollmentUsedAt: Date | null;
    registeredByAdminId: number | null;
    registeredAt: Date | null;
    activatedAt: Date | null;
    lastUsedAt: Date | null;
    revokedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserDeviceMaxAggregateOutputType = {
    id: number | null;
    nik: string | null;
    deviceUuid: string | null;
    status: $Enums.DeviceStatus | null;
    deviceName: string | null;
    enrollmentCodeHash: string | null;
    enrollmentExpiresAt: Date | null;
    enrollmentUsedAt: Date | null;
    registeredByAdminId: number | null;
    registeredAt: Date | null;
    activatedAt: Date | null;
    lastUsedAt: Date | null;
    revokedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserDeviceCountAggregateOutputType = {
    id: number;
    nik: number;
    deviceUuid: number;
    status: number;
    deviceName: number;
    enrollmentCodeHash: number;
    enrollmentExpiresAt: number;
    enrollmentUsedAt: number;
    registeredByAdminId: number;
    registeredAt: number;
    activatedAt: number;
    lastUsedAt: number;
    revokedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UserDeviceAvgAggregateInputType = {
    id?: true;
    registeredByAdminId?: true;
};
export type UserDeviceSumAggregateInputType = {
    id?: true;
    registeredByAdminId?: true;
};
export type UserDeviceMinAggregateInputType = {
    id?: true;
    nik?: true;
    deviceUuid?: true;
    status?: true;
    deviceName?: true;
    enrollmentCodeHash?: true;
    enrollmentExpiresAt?: true;
    enrollmentUsedAt?: true;
    registeredByAdminId?: true;
    registeredAt?: true;
    activatedAt?: true;
    lastUsedAt?: true;
    revokedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserDeviceMaxAggregateInputType = {
    id?: true;
    nik?: true;
    deviceUuid?: true;
    status?: true;
    deviceName?: true;
    enrollmentCodeHash?: true;
    enrollmentExpiresAt?: true;
    enrollmentUsedAt?: true;
    registeredByAdminId?: true;
    registeredAt?: true;
    activatedAt?: true;
    lastUsedAt?: true;
    revokedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserDeviceCountAggregateInputType = {
    id?: true;
    nik?: true;
    deviceUuid?: true;
    status?: true;
    deviceName?: true;
    enrollmentCodeHash?: true;
    enrollmentExpiresAt?: true;
    enrollmentUsedAt?: true;
    registeredByAdminId?: true;
    registeredAt?: true;
    activatedAt?: true;
    lastUsedAt?: true;
    revokedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UserDeviceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which UserDevice to aggregate.
     */
    where?: Prisma.UserDeviceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserDevices to fetch.
     */
    orderBy?: Prisma.UserDeviceOrderByWithRelationInput | Prisma.UserDeviceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.UserDeviceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserDevices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserDevices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned UserDevices
    **/
    _count?: true | UserDeviceCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: UserDeviceAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: UserDeviceSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: UserDeviceMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: UserDeviceMaxAggregateInputType;
};
export type GetUserDeviceAggregateType<T extends UserDeviceAggregateArgs> = {
    [P in keyof T & keyof AggregateUserDevice]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUserDevice[P]> : Prisma.GetScalarType<T[P], AggregateUserDevice[P]>;
};
export type UserDeviceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserDeviceWhereInput;
    orderBy?: Prisma.UserDeviceOrderByWithAggregationInput | Prisma.UserDeviceOrderByWithAggregationInput[];
    by: Prisma.UserDeviceScalarFieldEnum[] | Prisma.UserDeviceScalarFieldEnum;
    having?: Prisma.UserDeviceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserDeviceCountAggregateInputType | true;
    _avg?: UserDeviceAvgAggregateInputType;
    _sum?: UserDeviceSumAggregateInputType;
    _min?: UserDeviceMinAggregateInputType;
    _max?: UserDeviceMaxAggregateInputType;
};
export type UserDeviceGroupByOutputType = {
    id: number;
    nik: string;
    deviceUuid: string | null;
    status: $Enums.DeviceStatus;
    deviceName: string | null;
    enrollmentCodeHash: string | null;
    enrollmentExpiresAt: Date | null;
    enrollmentUsedAt: Date | null;
    registeredByAdminId: number | null;
    registeredAt: Date | null;
    activatedAt: Date | null;
    lastUsedAt: Date | null;
    revokedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: UserDeviceCountAggregateOutputType | null;
    _avg: UserDeviceAvgAggregateOutputType | null;
    _sum: UserDeviceSumAggregateOutputType | null;
    _min: UserDeviceMinAggregateOutputType | null;
    _max: UserDeviceMaxAggregateOutputType | null;
};
export type GetUserDeviceGroupByPayload<T extends UserDeviceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserDeviceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserDeviceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserDeviceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserDeviceGroupByOutputType[P]>;
}>>;
export type UserDeviceWhereInput = {
    AND?: Prisma.UserDeviceWhereInput | Prisma.UserDeviceWhereInput[];
    OR?: Prisma.UserDeviceWhereInput[];
    NOT?: Prisma.UserDeviceWhereInput | Prisma.UserDeviceWhereInput[];
    id?: Prisma.IntFilter<"UserDevice"> | number;
    nik?: Prisma.StringFilter<"UserDevice"> | string;
    deviceUuid?: Prisma.StringNullableFilter<"UserDevice"> | string | null;
    status?: Prisma.EnumDeviceStatusFilter<"UserDevice"> | $Enums.DeviceStatus;
    deviceName?: Prisma.StringNullableFilter<"UserDevice"> | string | null;
    enrollmentCodeHash?: Prisma.StringNullableFilter<"UserDevice"> | string | null;
    enrollmentExpiresAt?: Prisma.DateTimeNullableFilter<"UserDevice"> | Date | string | null;
    enrollmentUsedAt?: Prisma.DateTimeNullableFilter<"UserDevice"> | Date | string | null;
    registeredByAdminId?: Prisma.IntNullableFilter<"UserDevice"> | number | null;
    registeredAt?: Prisma.DateTimeNullableFilter<"UserDevice"> | Date | string | null;
    activatedAt?: Prisma.DateTimeNullableFilter<"UserDevice"> | Date | string | null;
    lastUsedAt?: Prisma.DateTimeNullableFilter<"UserDevice"> | Date | string | null;
    revokedAt?: Prisma.DateTimeNullableFilter<"UserDevice"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"UserDevice"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"UserDevice"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    registeredBy?: Prisma.XOR<Prisma.AdminNullableScalarRelationFilter, Prisma.AdminWhereInput> | null;
    sessions?: Prisma.UserSessionListRelationFilter;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryListRelationFilter;
    securityAuditLogs?: Prisma.SecurityAuditLogListRelationFilter;
};
export type UserDeviceOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nik?: Prisma.SortOrder;
    deviceUuid?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    deviceName?: Prisma.SortOrderInput | Prisma.SortOrder;
    enrollmentCodeHash?: Prisma.SortOrderInput | Prisma.SortOrder;
    enrollmentExpiresAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    enrollmentUsedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    registeredByAdminId?: Prisma.SortOrderInput | Prisma.SortOrder;
    registeredAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    activatedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastUsedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    revokedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    registeredBy?: Prisma.AdminOrderByWithRelationInput;
    sessions?: Prisma.UserSessionOrderByRelationAggregateInput;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryOrderByRelationAggregateInput;
    securityAuditLogs?: Prisma.SecurityAuditLogOrderByRelationAggregateInput;
};
export type UserDeviceWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    nik?: string;
    deviceUuid?: string;
    AND?: Prisma.UserDeviceWhereInput | Prisma.UserDeviceWhereInput[];
    OR?: Prisma.UserDeviceWhereInput[];
    NOT?: Prisma.UserDeviceWhereInput | Prisma.UserDeviceWhereInput[];
    status?: Prisma.EnumDeviceStatusFilter<"UserDevice"> | $Enums.DeviceStatus;
    deviceName?: Prisma.StringNullableFilter<"UserDevice"> | string | null;
    enrollmentCodeHash?: Prisma.StringNullableFilter<"UserDevice"> | string | null;
    enrollmentExpiresAt?: Prisma.DateTimeNullableFilter<"UserDevice"> | Date | string | null;
    enrollmentUsedAt?: Prisma.DateTimeNullableFilter<"UserDevice"> | Date | string | null;
    registeredByAdminId?: Prisma.IntNullableFilter<"UserDevice"> | number | null;
    registeredAt?: Prisma.DateTimeNullableFilter<"UserDevice"> | Date | string | null;
    activatedAt?: Prisma.DateTimeNullableFilter<"UserDevice"> | Date | string | null;
    lastUsedAt?: Prisma.DateTimeNullableFilter<"UserDevice"> | Date | string | null;
    revokedAt?: Prisma.DateTimeNullableFilter<"UserDevice"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"UserDevice"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"UserDevice"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    registeredBy?: Prisma.XOR<Prisma.AdminNullableScalarRelationFilter, Prisma.AdminWhereInput> | null;
    sessions?: Prisma.UserSessionListRelationFilter;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryListRelationFilter;
    securityAuditLogs?: Prisma.SecurityAuditLogListRelationFilter;
}, "id" | "nik" | "deviceUuid">;
export type UserDeviceOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nik?: Prisma.SortOrder;
    deviceUuid?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    deviceName?: Prisma.SortOrderInput | Prisma.SortOrder;
    enrollmentCodeHash?: Prisma.SortOrderInput | Prisma.SortOrder;
    enrollmentExpiresAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    enrollmentUsedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    registeredByAdminId?: Prisma.SortOrderInput | Prisma.SortOrder;
    registeredAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    activatedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastUsedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    revokedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UserDeviceCountOrderByAggregateInput;
    _avg?: Prisma.UserDeviceAvgOrderByAggregateInput;
    _max?: Prisma.UserDeviceMaxOrderByAggregateInput;
    _min?: Prisma.UserDeviceMinOrderByAggregateInput;
    _sum?: Prisma.UserDeviceSumOrderByAggregateInput;
};
export type UserDeviceScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserDeviceScalarWhereWithAggregatesInput | Prisma.UserDeviceScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserDeviceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserDeviceScalarWhereWithAggregatesInput | Prisma.UserDeviceScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"UserDevice"> | number;
    nik?: Prisma.StringWithAggregatesFilter<"UserDevice"> | string;
    deviceUuid?: Prisma.StringNullableWithAggregatesFilter<"UserDevice"> | string | null;
    status?: Prisma.EnumDeviceStatusWithAggregatesFilter<"UserDevice"> | $Enums.DeviceStatus;
    deviceName?: Prisma.StringNullableWithAggregatesFilter<"UserDevice"> | string | null;
    enrollmentCodeHash?: Prisma.StringNullableWithAggregatesFilter<"UserDevice"> | string | null;
    enrollmentExpiresAt?: Prisma.DateTimeNullableWithAggregatesFilter<"UserDevice"> | Date | string | null;
    enrollmentUsedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"UserDevice"> | Date | string | null;
    registeredByAdminId?: Prisma.IntNullableWithAggregatesFilter<"UserDevice"> | number | null;
    registeredAt?: Prisma.DateTimeNullableWithAggregatesFilter<"UserDevice"> | Date | string | null;
    activatedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"UserDevice"> | Date | string | null;
    lastUsedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"UserDevice"> | Date | string | null;
    revokedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"UserDevice"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"UserDevice"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"UserDevice"> | Date | string;
};
export type UserDeviceCreateInput = {
    deviceUuid?: string | null;
    status?: $Enums.DeviceStatus;
    deviceName?: string | null;
    enrollmentCodeHash?: string | null;
    enrollmentExpiresAt?: Date | string | null;
    enrollmentUsedAt?: Date | string | null;
    registeredAt?: Date | string | null;
    activatedAt?: Date | string | null;
    lastUsedAt?: Date | string | null;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutDeviceInput;
    registeredBy?: Prisma.AdminCreateNestedOneWithoutRegisteredDevicesInput;
    sessions?: Prisma.UserSessionCreateNestedManyWithoutDeviceInput;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryCreateNestedManyWithoutDeviceInput;
    securityAuditLogs?: Prisma.SecurityAuditLogCreateNestedManyWithoutDeviceInput;
};
export type UserDeviceUncheckedCreateInput = {
    id?: number;
    nik: string;
    deviceUuid?: string | null;
    status?: $Enums.DeviceStatus;
    deviceName?: string | null;
    enrollmentCodeHash?: string | null;
    enrollmentExpiresAt?: Date | string | null;
    enrollmentUsedAt?: Date | string | null;
    registeredByAdminId?: number | null;
    registeredAt?: Date | string | null;
    activatedAt?: Date | string | null;
    lastUsedAt?: Date | string | null;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sessions?: Prisma.UserSessionUncheckedCreateNestedManyWithoutDeviceInput;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryUncheckedCreateNestedManyWithoutDeviceInput;
    securityAuditLogs?: Prisma.SecurityAuditLogUncheckedCreateNestedManyWithoutDeviceInput;
};
export type UserDeviceUpdateInput = {
    deviceUuid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus;
    deviceName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enrollmentCodeHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enrollmentExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    enrollmentUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    registeredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutDeviceNestedInput;
    registeredBy?: Prisma.AdminUpdateOneWithoutRegisteredDevicesNestedInput;
    sessions?: Prisma.UserSessionUpdateManyWithoutDeviceNestedInput;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryUpdateManyWithoutDeviceNestedInput;
    securityAuditLogs?: Prisma.SecurityAuditLogUpdateManyWithoutDeviceNestedInput;
};
export type UserDeviceUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nik?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceUuid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus;
    deviceName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enrollmentCodeHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enrollmentExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    enrollmentUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    registeredByAdminId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    registeredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.UserSessionUncheckedUpdateManyWithoutDeviceNestedInput;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryUncheckedUpdateManyWithoutDeviceNestedInput;
    securityAuditLogs?: Prisma.SecurityAuditLogUncheckedUpdateManyWithoutDeviceNestedInput;
};
export type UserDeviceCreateManyInput = {
    id?: number;
    nik: string;
    deviceUuid?: string | null;
    status?: $Enums.DeviceStatus;
    deviceName?: string | null;
    enrollmentCodeHash?: string | null;
    enrollmentExpiresAt?: Date | string | null;
    enrollmentUsedAt?: Date | string | null;
    registeredByAdminId?: number | null;
    registeredAt?: Date | string | null;
    activatedAt?: Date | string | null;
    lastUsedAt?: Date | string | null;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserDeviceUpdateManyMutationInput = {
    deviceUuid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus;
    deviceName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enrollmentCodeHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enrollmentExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    enrollmentUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    registeredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserDeviceUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nik?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceUuid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus;
    deviceName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enrollmentCodeHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enrollmentExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    enrollmentUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    registeredByAdminId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    registeredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserDeviceNullableScalarRelationFilter = {
    is?: Prisma.UserDeviceWhereInput | null;
    isNot?: Prisma.UserDeviceWhereInput | null;
};
export type UserDeviceListRelationFilter = {
    every?: Prisma.UserDeviceWhereInput;
    some?: Prisma.UserDeviceWhereInput;
    none?: Prisma.UserDeviceWhereInput;
};
export type UserDeviceOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type UserDeviceCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nik?: Prisma.SortOrder;
    deviceUuid?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    deviceName?: Prisma.SortOrder;
    enrollmentCodeHash?: Prisma.SortOrder;
    enrollmentExpiresAt?: Prisma.SortOrder;
    enrollmentUsedAt?: Prisma.SortOrder;
    registeredByAdminId?: Prisma.SortOrder;
    registeredAt?: Prisma.SortOrder;
    activatedAt?: Prisma.SortOrder;
    lastUsedAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserDeviceAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    registeredByAdminId?: Prisma.SortOrder;
};
export type UserDeviceMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nik?: Prisma.SortOrder;
    deviceUuid?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    deviceName?: Prisma.SortOrder;
    enrollmentCodeHash?: Prisma.SortOrder;
    enrollmentExpiresAt?: Prisma.SortOrder;
    enrollmentUsedAt?: Prisma.SortOrder;
    registeredByAdminId?: Prisma.SortOrder;
    registeredAt?: Prisma.SortOrder;
    activatedAt?: Prisma.SortOrder;
    lastUsedAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserDeviceMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nik?: Prisma.SortOrder;
    deviceUuid?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    deviceName?: Prisma.SortOrder;
    enrollmentCodeHash?: Prisma.SortOrder;
    enrollmentExpiresAt?: Prisma.SortOrder;
    enrollmentUsedAt?: Prisma.SortOrder;
    registeredByAdminId?: Prisma.SortOrder;
    registeredAt?: Prisma.SortOrder;
    activatedAt?: Prisma.SortOrder;
    lastUsedAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserDeviceSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    registeredByAdminId?: Prisma.SortOrder;
};
export type UserDeviceScalarRelationFilter = {
    is?: Prisma.UserDeviceWhereInput;
    isNot?: Prisma.UserDeviceWhereInput;
};
export type UserDeviceCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserDeviceCreateWithoutUserInput, Prisma.UserDeviceUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.UserDeviceCreateOrConnectWithoutUserInput;
    connect?: Prisma.UserDeviceWhereUniqueInput;
};
export type UserDeviceUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserDeviceCreateWithoutUserInput, Prisma.UserDeviceUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.UserDeviceCreateOrConnectWithoutUserInput;
    connect?: Prisma.UserDeviceWhereUniqueInput;
};
export type UserDeviceUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserDeviceCreateWithoutUserInput, Prisma.UserDeviceUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.UserDeviceCreateOrConnectWithoutUserInput;
    upsert?: Prisma.UserDeviceUpsertWithoutUserInput;
    disconnect?: Prisma.UserDeviceWhereInput | boolean;
    delete?: Prisma.UserDeviceWhereInput | boolean;
    connect?: Prisma.UserDeviceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserDeviceUpdateToOneWithWhereWithoutUserInput, Prisma.UserDeviceUpdateWithoutUserInput>, Prisma.UserDeviceUncheckedUpdateWithoutUserInput>;
};
export type UserDeviceUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserDeviceCreateWithoutUserInput, Prisma.UserDeviceUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.UserDeviceCreateOrConnectWithoutUserInput;
    upsert?: Prisma.UserDeviceUpsertWithoutUserInput;
    disconnect?: Prisma.UserDeviceWhereInput | boolean;
    delete?: Prisma.UserDeviceWhereInput | boolean;
    connect?: Prisma.UserDeviceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserDeviceUpdateToOneWithWhereWithoutUserInput, Prisma.UserDeviceUpdateWithoutUserInput>, Prisma.UserDeviceUncheckedUpdateWithoutUserInput>;
};
export type UserDeviceCreateNestedManyWithoutRegisteredByInput = {
    create?: Prisma.XOR<Prisma.UserDeviceCreateWithoutRegisteredByInput, Prisma.UserDeviceUncheckedCreateWithoutRegisteredByInput> | Prisma.UserDeviceCreateWithoutRegisteredByInput[] | Prisma.UserDeviceUncheckedCreateWithoutRegisteredByInput[];
    connectOrCreate?: Prisma.UserDeviceCreateOrConnectWithoutRegisteredByInput | Prisma.UserDeviceCreateOrConnectWithoutRegisteredByInput[];
    createMany?: Prisma.UserDeviceCreateManyRegisteredByInputEnvelope;
    connect?: Prisma.UserDeviceWhereUniqueInput | Prisma.UserDeviceWhereUniqueInput[];
};
export type UserDeviceUncheckedCreateNestedManyWithoutRegisteredByInput = {
    create?: Prisma.XOR<Prisma.UserDeviceCreateWithoutRegisteredByInput, Prisma.UserDeviceUncheckedCreateWithoutRegisteredByInput> | Prisma.UserDeviceCreateWithoutRegisteredByInput[] | Prisma.UserDeviceUncheckedCreateWithoutRegisteredByInput[];
    connectOrCreate?: Prisma.UserDeviceCreateOrConnectWithoutRegisteredByInput | Prisma.UserDeviceCreateOrConnectWithoutRegisteredByInput[];
    createMany?: Prisma.UserDeviceCreateManyRegisteredByInputEnvelope;
    connect?: Prisma.UserDeviceWhereUniqueInput | Prisma.UserDeviceWhereUniqueInput[];
};
export type UserDeviceUpdateManyWithoutRegisteredByNestedInput = {
    create?: Prisma.XOR<Prisma.UserDeviceCreateWithoutRegisteredByInput, Prisma.UserDeviceUncheckedCreateWithoutRegisteredByInput> | Prisma.UserDeviceCreateWithoutRegisteredByInput[] | Prisma.UserDeviceUncheckedCreateWithoutRegisteredByInput[];
    connectOrCreate?: Prisma.UserDeviceCreateOrConnectWithoutRegisteredByInput | Prisma.UserDeviceCreateOrConnectWithoutRegisteredByInput[];
    upsert?: Prisma.UserDeviceUpsertWithWhereUniqueWithoutRegisteredByInput | Prisma.UserDeviceUpsertWithWhereUniqueWithoutRegisteredByInput[];
    createMany?: Prisma.UserDeviceCreateManyRegisteredByInputEnvelope;
    set?: Prisma.UserDeviceWhereUniqueInput | Prisma.UserDeviceWhereUniqueInput[];
    disconnect?: Prisma.UserDeviceWhereUniqueInput | Prisma.UserDeviceWhereUniqueInput[];
    delete?: Prisma.UserDeviceWhereUniqueInput | Prisma.UserDeviceWhereUniqueInput[];
    connect?: Prisma.UserDeviceWhereUniqueInput | Prisma.UserDeviceWhereUniqueInput[];
    update?: Prisma.UserDeviceUpdateWithWhereUniqueWithoutRegisteredByInput | Prisma.UserDeviceUpdateWithWhereUniqueWithoutRegisteredByInput[];
    updateMany?: Prisma.UserDeviceUpdateManyWithWhereWithoutRegisteredByInput | Prisma.UserDeviceUpdateManyWithWhereWithoutRegisteredByInput[];
    deleteMany?: Prisma.UserDeviceScalarWhereInput | Prisma.UserDeviceScalarWhereInput[];
};
export type UserDeviceUncheckedUpdateManyWithoutRegisteredByNestedInput = {
    create?: Prisma.XOR<Prisma.UserDeviceCreateWithoutRegisteredByInput, Prisma.UserDeviceUncheckedCreateWithoutRegisteredByInput> | Prisma.UserDeviceCreateWithoutRegisteredByInput[] | Prisma.UserDeviceUncheckedCreateWithoutRegisteredByInput[];
    connectOrCreate?: Prisma.UserDeviceCreateOrConnectWithoutRegisteredByInput | Prisma.UserDeviceCreateOrConnectWithoutRegisteredByInput[];
    upsert?: Prisma.UserDeviceUpsertWithWhereUniqueWithoutRegisteredByInput | Prisma.UserDeviceUpsertWithWhereUniqueWithoutRegisteredByInput[];
    createMany?: Prisma.UserDeviceCreateManyRegisteredByInputEnvelope;
    set?: Prisma.UserDeviceWhereUniqueInput | Prisma.UserDeviceWhereUniqueInput[];
    disconnect?: Prisma.UserDeviceWhereUniqueInput | Prisma.UserDeviceWhereUniqueInput[];
    delete?: Prisma.UserDeviceWhereUniqueInput | Prisma.UserDeviceWhereUniqueInput[];
    connect?: Prisma.UserDeviceWhereUniqueInput | Prisma.UserDeviceWhereUniqueInput[];
    update?: Prisma.UserDeviceUpdateWithWhereUniqueWithoutRegisteredByInput | Prisma.UserDeviceUpdateWithWhereUniqueWithoutRegisteredByInput[];
    updateMany?: Prisma.UserDeviceUpdateManyWithWhereWithoutRegisteredByInput | Prisma.UserDeviceUpdateManyWithWhereWithoutRegisteredByInput[];
    deleteMany?: Prisma.UserDeviceScalarWhereInput | Prisma.UserDeviceScalarWhereInput[];
};
export type EnumDeviceStatusFieldUpdateOperationsInput = {
    set?: $Enums.DeviceStatus;
};
export type UserDeviceCreateNestedOneWithoutSessionsInput = {
    create?: Prisma.XOR<Prisma.UserDeviceCreateWithoutSessionsInput, Prisma.UserDeviceUncheckedCreateWithoutSessionsInput>;
    connectOrCreate?: Prisma.UserDeviceCreateOrConnectWithoutSessionsInput;
    connect?: Prisma.UserDeviceWhereUniqueInput;
};
export type UserDeviceUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: Prisma.XOR<Prisma.UserDeviceCreateWithoutSessionsInput, Prisma.UserDeviceUncheckedCreateWithoutSessionsInput>;
    connectOrCreate?: Prisma.UserDeviceCreateOrConnectWithoutSessionsInput;
    upsert?: Prisma.UserDeviceUpsertWithoutSessionsInput;
    connect?: Prisma.UserDeviceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserDeviceUpdateToOneWithWhereWithoutSessionsInput, Prisma.UserDeviceUpdateWithoutSessionsInput>, Prisma.UserDeviceUncheckedUpdateWithoutSessionsInput>;
};
export type UserDeviceCreateNestedOneWithoutSessionRecoveriesInput = {
    create?: Prisma.XOR<Prisma.UserDeviceCreateWithoutSessionRecoveriesInput, Prisma.UserDeviceUncheckedCreateWithoutSessionRecoveriesInput>;
    connectOrCreate?: Prisma.UserDeviceCreateOrConnectWithoutSessionRecoveriesInput;
    connect?: Prisma.UserDeviceWhereUniqueInput;
};
export type UserDeviceUpdateOneRequiredWithoutSessionRecoveriesNestedInput = {
    create?: Prisma.XOR<Prisma.UserDeviceCreateWithoutSessionRecoveriesInput, Prisma.UserDeviceUncheckedCreateWithoutSessionRecoveriesInput>;
    connectOrCreate?: Prisma.UserDeviceCreateOrConnectWithoutSessionRecoveriesInput;
    upsert?: Prisma.UserDeviceUpsertWithoutSessionRecoveriesInput;
    connect?: Prisma.UserDeviceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserDeviceUpdateToOneWithWhereWithoutSessionRecoveriesInput, Prisma.UserDeviceUpdateWithoutSessionRecoveriesInput>, Prisma.UserDeviceUncheckedUpdateWithoutSessionRecoveriesInput>;
};
export type UserDeviceCreateNestedOneWithoutSecurityAuditLogsInput = {
    create?: Prisma.XOR<Prisma.UserDeviceCreateWithoutSecurityAuditLogsInput, Prisma.UserDeviceUncheckedCreateWithoutSecurityAuditLogsInput>;
    connectOrCreate?: Prisma.UserDeviceCreateOrConnectWithoutSecurityAuditLogsInput;
    connect?: Prisma.UserDeviceWhereUniqueInput;
};
export type UserDeviceUpdateOneWithoutSecurityAuditLogsNestedInput = {
    create?: Prisma.XOR<Prisma.UserDeviceCreateWithoutSecurityAuditLogsInput, Prisma.UserDeviceUncheckedCreateWithoutSecurityAuditLogsInput>;
    connectOrCreate?: Prisma.UserDeviceCreateOrConnectWithoutSecurityAuditLogsInput;
    upsert?: Prisma.UserDeviceUpsertWithoutSecurityAuditLogsInput;
    disconnect?: Prisma.UserDeviceWhereInput | boolean;
    delete?: Prisma.UserDeviceWhereInput | boolean;
    connect?: Prisma.UserDeviceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserDeviceUpdateToOneWithWhereWithoutSecurityAuditLogsInput, Prisma.UserDeviceUpdateWithoutSecurityAuditLogsInput>, Prisma.UserDeviceUncheckedUpdateWithoutSecurityAuditLogsInput>;
};
export type UserDeviceCreateWithoutUserInput = {
    deviceUuid?: string | null;
    status?: $Enums.DeviceStatus;
    deviceName?: string | null;
    enrollmentCodeHash?: string | null;
    enrollmentExpiresAt?: Date | string | null;
    enrollmentUsedAt?: Date | string | null;
    registeredAt?: Date | string | null;
    activatedAt?: Date | string | null;
    lastUsedAt?: Date | string | null;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    registeredBy?: Prisma.AdminCreateNestedOneWithoutRegisteredDevicesInput;
    sessions?: Prisma.UserSessionCreateNestedManyWithoutDeviceInput;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryCreateNestedManyWithoutDeviceInput;
    securityAuditLogs?: Prisma.SecurityAuditLogCreateNestedManyWithoutDeviceInput;
};
export type UserDeviceUncheckedCreateWithoutUserInput = {
    id?: number;
    deviceUuid?: string | null;
    status?: $Enums.DeviceStatus;
    deviceName?: string | null;
    enrollmentCodeHash?: string | null;
    enrollmentExpiresAt?: Date | string | null;
    enrollmentUsedAt?: Date | string | null;
    registeredByAdminId?: number | null;
    registeredAt?: Date | string | null;
    activatedAt?: Date | string | null;
    lastUsedAt?: Date | string | null;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sessions?: Prisma.UserSessionUncheckedCreateNestedManyWithoutDeviceInput;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryUncheckedCreateNestedManyWithoutDeviceInput;
    securityAuditLogs?: Prisma.SecurityAuditLogUncheckedCreateNestedManyWithoutDeviceInput;
};
export type UserDeviceCreateOrConnectWithoutUserInput = {
    where: Prisma.UserDeviceWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserDeviceCreateWithoutUserInput, Prisma.UserDeviceUncheckedCreateWithoutUserInput>;
};
export type UserDeviceUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.UserDeviceUpdateWithoutUserInput, Prisma.UserDeviceUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.UserDeviceCreateWithoutUserInput, Prisma.UserDeviceUncheckedCreateWithoutUserInput>;
    where?: Prisma.UserDeviceWhereInput;
};
export type UserDeviceUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.UserDeviceWhereInput;
    data: Prisma.XOR<Prisma.UserDeviceUpdateWithoutUserInput, Prisma.UserDeviceUncheckedUpdateWithoutUserInput>;
};
export type UserDeviceUpdateWithoutUserInput = {
    deviceUuid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus;
    deviceName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enrollmentCodeHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enrollmentExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    enrollmentUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    registeredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    registeredBy?: Prisma.AdminUpdateOneWithoutRegisteredDevicesNestedInput;
    sessions?: Prisma.UserSessionUpdateManyWithoutDeviceNestedInput;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryUpdateManyWithoutDeviceNestedInput;
    securityAuditLogs?: Prisma.SecurityAuditLogUpdateManyWithoutDeviceNestedInput;
};
export type UserDeviceUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    deviceUuid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus;
    deviceName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enrollmentCodeHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enrollmentExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    enrollmentUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    registeredByAdminId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    registeredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.UserSessionUncheckedUpdateManyWithoutDeviceNestedInput;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryUncheckedUpdateManyWithoutDeviceNestedInput;
    securityAuditLogs?: Prisma.SecurityAuditLogUncheckedUpdateManyWithoutDeviceNestedInput;
};
export type UserDeviceCreateWithoutRegisteredByInput = {
    deviceUuid?: string | null;
    status?: $Enums.DeviceStatus;
    deviceName?: string | null;
    enrollmentCodeHash?: string | null;
    enrollmentExpiresAt?: Date | string | null;
    enrollmentUsedAt?: Date | string | null;
    registeredAt?: Date | string | null;
    activatedAt?: Date | string | null;
    lastUsedAt?: Date | string | null;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutDeviceInput;
    sessions?: Prisma.UserSessionCreateNestedManyWithoutDeviceInput;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryCreateNestedManyWithoutDeviceInput;
    securityAuditLogs?: Prisma.SecurityAuditLogCreateNestedManyWithoutDeviceInput;
};
export type UserDeviceUncheckedCreateWithoutRegisteredByInput = {
    id?: number;
    nik: string;
    deviceUuid?: string | null;
    status?: $Enums.DeviceStatus;
    deviceName?: string | null;
    enrollmentCodeHash?: string | null;
    enrollmentExpiresAt?: Date | string | null;
    enrollmentUsedAt?: Date | string | null;
    registeredAt?: Date | string | null;
    activatedAt?: Date | string | null;
    lastUsedAt?: Date | string | null;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sessions?: Prisma.UserSessionUncheckedCreateNestedManyWithoutDeviceInput;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryUncheckedCreateNestedManyWithoutDeviceInput;
    securityAuditLogs?: Prisma.SecurityAuditLogUncheckedCreateNestedManyWithoutDeviceInput;
};
export type UserDeviceCreateOrConnectWithoutRegisteredByInput = {
    where: Prisma.UserDeviceWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserDeviceCreateWithoutRegisteredByInput, Prisma.UserDeviceUncheckedCreateWithoutRegisteredByInput>;
};
export type UserDeviceCreateManyRegisteredByInputEnvelope = {
    data: Prisma.UserDeviceCreateManyRegisteredByInput | Prisma.UserDeviceCreateManyRegisteredByInput[];
    skipDuplicates?: boolean;
};
export type UserDeviceUpsertWithWhereUniqueWithoutRegisteredByInput = {
    where: Prisma.UserDeviceWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserDeviceUpdateWithoutRegisteredByInput, Prisma.UserDeviceUncheckedUpdateWithoutRegisteredByInput>;
    create: Prisma.XOR<Prisma.UserDeviceCreateWithoutRegisteredByInput, Prisma.UserDeviceUncheckedCreateWithoutRegisteredByInput>;
};
export type UserDeviceUpdateWithWhereUniqueWithoutRegisteredByInput = {
    where: Prisma.UserDeviceWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserDeviceUpdateWithoutRegisteredByInput, Prisma.UserDeviceUncheckedUpdateWithoutRegisteredByInput>;
};
export type UserDeviceUpdateManyWithWhereWithoutRegisteredByInput = {
    where: Prisma.UserDeviceScalarWhereInput;
    data: Prisma.XOR<Prisma.UserDeviceUpdateManyMutationInput, Prisma.UserDeviceUncheckedUpdateManyWithoutRegisteredByInput>;
};
export type UserDeviceScalarWhereInput = {
    AND?: Prisma.UserDeviceScalarWhereInput | Prisma.UserDeviceScalarWhereInput[];
    OR?: Prisma.UserDeviceScalarWhereInput[];
    NOT?: Prisma.UserDeviceScalarWhereInput | Prisma.UserDeviceScalarWhereInput[];
    id?: Prisma.IntFilter<"UserDevice"> | number;
    nik?: Prisma.StringFilter<"UserDevice"> | string;
    deviceUuid?: Prisma.StringNullableFilter<"UserDevice"> | string | null;
    status?: Prisma.EnumDeviceStatusFilter<"UserDevice"> | $Enums.DeviceStatus;
    deviceName?: Prisma.StringNullableFilter<"UserDevice"> | string | null;
    enrollmentCodeHash?: Prisma.StringNullableFilter<"UserDevice"> | string | null;
    enrollmentExpiresAt?: Prisma.DateTimeNullableFilter<"UserDevice"> | Date | string | null;
    enrollmentUsedAt?: Prisma.DateTimeNullableFilter<"UserDevice"> | Date | string | null;
    registeredByAdminId?: Prisma.IntNullableFilter<"UserDevice"> | number | null;
    registeredAt?: Prisma.DateTimeNullableFilter<"UserDevice"> | Date | string | null;
    activatedAt?: Prisma.DateTimeNullableFilter<"UserDevice"> | Date | string | null;
    lastUsedAt?: Prisma.DateTimeNullableFilter<"UserDevice"> | Date | string | null;
    revokedAt?: Prisma.DateTimeNullableFilter<"UserDevice"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"UserDevice"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"UserDevice"> | Date | string;
};
export type UserDeviceCreateWithoutSessionsInput = {
    deviceUuid?: string | null;
    status?: $Enums.DeviceStatus;
    deviceName?: string | null;
    enrollmentCodeHash?: string | null;
    enrollmentExpiresAt?: Date | string | null;
    enrollmentUsedAt?: Date | string | null;
    registeredAt?: Date | string | null;
    activatedAt?: Date | string | null;
    lastUsedAt?: Date | string | null;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutDeviceInput;
    registeredBy?: Prisma.AdminCreateNestedOneWithoutRegisteredDevicesInput;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryCreateNestedManyWithoutDeviceInput;
    securityAuditLogs?: Prisma.SecurityAuditLogCreateNestedManyWithoutDeviceInput;
};
export type UserDeviceUncheckedCreateWithoutSessionsInput = {
    id?: number;
    nik: string;
    deviceUuid?: string | null;
    status?: $Enums.DeviceStatus;
    deviceName?: string | null;
    enrollmentCodeHash?: string | null;
    enrollmentExpiresAt?: Date | string | null;
    enrollmentUsedAt?: Date | string | null;
    registeredByAdminId?: number | null;
    registeredAt?: Date | string | null;
    activatedAt?: Date | string | null;
    lastUsedAt?: Date | string | null;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryUncheckedCreateNestedManyWithoutDeviceInput;
    securityAuditLogs?: Prisma.SecurityAuditLogUncheckedCreateNestedManyWithoutDeviceInput;
};
export type UserDeviceCreateOrConnectWithoutSessionsInput = {
    where: Prisma.UserDeviceWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserDeviceCreateWithoutSessionsInput, Prisma.UserDeviceUncheckedCreateWithoutSessionsInput>;
};
export type UserDeviceUpsertWithoutSessionsInput = {
    update: Prisma.XOR<Prisma.UserDeviceUpdateWithoutSessionsInput, Prisma.UserDeviceUncheckedUpdateWithoutSessionsInput>;
    create: Prisma.XOR<Prisma.UserDeviceCreateWithoutSessionsInput, Prisma.UserDeviceUncheckedCreateWithoutSessionsInput>;
    where?: Prisma.UserDeviceWhereInput;
};
export type UserDeviceUpdateToOneWithWhereWithoutSessionsInput = {
    where?: Prisma.UserDeviceWhereInput;
    data: Prisma.XOR<Prisma.UserDeviceUpdateWithoutSessionsInput, Prisma.UserDeviceUncheckedUpdateWithoutSessionsInput>;
};
export type UserDeviceUpdateWithoutSessionsInput = {
    deviceUuid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus;
    deviceName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enrollmentCodeHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enrollmentExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    enrollmentUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    registeredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutDeviceNestedInput;
    registeredBy?: Prisma.AdminUpdateOneWithoutRegisteredDevicesNestedInput;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryUpdateManyWithoutDeviceNestedInput;
    securityAuditLogs?: Prisma.SecurityAuditLogUpdateManyWithoutDeviceNestedInput;
};
export type UserDeviceUncheckedUpdateWithoutSessionsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nik?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceUuid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus;
    deviceName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enrollmentCodeHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enrollmentExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    enrollmentUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    registeredByAdminId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    registeredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryUncheckedUpdateManyWithoutDeviceNestedInput;
    securityAuditLogs?: Prisma.SecurityAuditLogUncheckedUpdateManyWithoutDeviceNestedInput;
};
export type UserDeviceCreateWithoutSessionRecoveriesInput = {
    deviceUuid?: string | null;
    status?: $Enums.DeviceStatus;
    deviceName?: string | null;
    enrollmentCodeHash?: string | null;
    enrollmentExpiresAt?: Date | string | null;
    enrollmentUsedAt?: Date | string | null;
    registeredAt?: Date | string | null;
    activatedAt?: Date | string | null;
    lastUsedAt?: Date | string | null;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutDeviceInput;
    registeredBy?: Prisma.AdminCreateNestedOneWithoutRegisteredDevicesInput;
    sessions?: Prisma.UserSessionCreateNestedManyWithoutDeviceInput;
    securityAuditLogs?: Prisma.SecurityAuditLogCreateNestedManyWithoutDeviceInput;
};
export type UserDeviceUncheckedCreateWithoutSessionRecoveriesInput = {
    id?: number;
    nik: string;
    deviceUuid?: string | null;
    status?: $Enums.DeviceStatus;
    deviceName?: string | null;
    enrollmentCodeHash?: string | null;
    enrollmentExpiresAt?: Date | string | null;
    enrollmentUsedAt?: Date | string | null;
    registeredByAdminId?: number | null;
    registeredAt?: Date | string | null;
    activatedAt?: Date | string | null;
    lastUsedAt?: Date | string | null;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sessions?: Prisma.UserSessionUncheckedCreateNestedManyWithoutDeviceInput;
    securityAuditLogs?: Prisma.SecurityAuditLogUncheckedCreateNestedManyWithoutDeviceInput;
};
export type UserDeviceCreateOrConnectWithoutSessionRecoveriesInput = {
    where: Prisma.UserDeviceWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserDeviceCreateWithoutSessionRecoveriesInput, Prisma.UserDeviceUncheckedCreateWithoutSessionRecoveriesInput>;
};
export type UserDeviceUpsertWithoutSessionRecoveriesInput = {
    update: Prisma.XOR<Prisma.UserDeviceUpdateWithoutSessionRecoveriesInput, Prisma.UserDeviceUncheckedUpdateWithoutSessionRecoveriesInput>;
    create: Prisma.XOR<Prisma.UserDeviceCreateWithoutSessionRecoveriesInput, Prisma.UserDeviceUncheckedCreateWithoutSessionRecoveriesInput>;
    where?: Prisma.UserDeviceWhereInput;
};
export type UserDeviceUpdateToOneWithWhereWithoutSessionRecoveriesInput = {
    where?: Prisma.UserDeviceWhereInput;
    data: Prisma.XOR<Prisma.UserDeviceUpdateWithoutSessionRecoveriesInput, Prisma.UserDeviceUncheckedUpdateWithoutSessionRecoveriesInput>;
};
export type UserDeviceUpdateWithoutSessionRecoveriesInput = {
    deviceUuid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus;
    deviceName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enrollmentCodeHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enrollmentExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    enrollmentUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    registeredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutDeviceNestedInput;
    registeredBy?: Prisma.AdminUpdateOneWithoutRegisteredDevicesNestedInput;
    sessions?: Prisma.UserSessionUpdateManyWithoutDeviceNestedInput;
    securityAuditLogs?: Prisma.SecurityAuditLogUpdateManyWithoutDeviceNestedInput;
};
export type UserDeviceUncheckedUpdateWithoutSessionRecoveriesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nik?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceUuid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus;
    deviceName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enrollmentCodeHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enrollmentExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    enrollmentUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    registeredByAdminId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    registeredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.UserSessionUncheckedUpdateManyWithoutDeviceNestedInput;
    securityAuditLogs?: Prisma.SecurityAuditLogUncheckedUpdateManyWithoutDeviceNestedInput;
};
export type UserDeviceCreateWithoutSecurityAuditLogsInput = {
    deviceUuid?: string | null;
    status?: $Enums.DeviceStatus;
    deviceName?: string | null;
    enrollmentCodeHash?: string | null;
    enrollmentExpiresAt?: Date | string | null;
    enrollmentUsedAt?: Date | string | null;
    registeredAt?: Date | string | null;
    activatedAt?: Date | string | null;
    lastUsedAt?: Date | string | null;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutDeviceInput;
    registeredBy?: Prisma.AdminCreateNestedOneWithoutRegisteredDevicesInput;
    sessions?: Prisma.UserSessionCreateNestedManyWithoutDeviceInput;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryCreateNestedManyWithoutDeviceInput;
};
export type UserDeviceUncheckedCreateWithoutSecurityAuditLogsInput = {
    id?: number;
    nik: string;
    deviceUuid?: string | null;
    status?: $Enums.DeviceStatus;
    deviceName?: string | null;
    enrollmentCodeHash?: string | null;
    enrollmentExpiresAt?: Date | string | null;
    enrollmentUsedAt?: Date | string | null;
    registeredByAdminId?: number | null;
    registeredAt?: Date | string | null;
    activatedAt?: Date | string | null;
    lastUsedAt?: Date | string | null;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sessions?: Prisma.UserSessionUncheckedCreateNestedManyWithoutDeviceInput;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryUncheckedCreateNestedManyWithoutDeviceInput;
};
export type UserDeviceCreateOrConnectWithoutSecurityAuditLogsInput = {
    where: Prisma.UserDeviceWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserDeviceCreateWithoutSecurityAuditLogsInput, Prisma.UserDeviceUncheckedCreateWithoutSecurityAuditLogsInput>;
};
export type UserDeviceUpsertWithoutSecurityAuditLogsInput = {
    update: Prisma.XOR<Prisma.UserDeviceUpdateWithoutSecurityAuditLogsInput, Prisma.UserDeviceUncheckedUpdateWithoutSecurityAuditLogsInput>;
    create: Prisma.XOR<Prisma.UserDeviceCreateWithoutSecurityAuditLogsInput, Prisma.UserDeviceUncheckedCreateWithoutSecurityAuditLogsInput>;
    where?: Prisma.UserDeviceWhereInput;
};
export type UserDeviceUpdateToOneWithWhereWithoutSecurityAuditLogsInput = {
    where?: Prisma.UserDeviceWhereInput;
    data: Prisma.XOR<Prisma.UserDeviceUpdateWithoutSecurityAuditLogsInput, Prisma.UserDeviceUncheckedUpdateWithoutSecurityAuditLogsInput>;
};
export type UserDeviceUpdateWithoutSecurityAuditLogsInput = {
    deviceUuid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus;
    deviceName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enrollmentCodeHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enrollmentExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    enrollmentUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    registeredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutDeviceNestedInput;
    registeredBy?: Prisma.AdminUpdateOneWithoutRegisteredDevicesNestedInput;
    sessions?: Prisma.UserSessionUpdateManyWithoutDeviceNestedInput;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryUpdateManyWithoutDeviceNestedInput;
};
export type UserDeviceUncheckedUpdateWithoutSecurityAuditLogsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nik?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceUuid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus;
    deviceName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enrollmentCodeHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enrollmentExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    enrollmentUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    registeredByAdminId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    registeredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.UserSessionUncheckedUpdateManyWithoutDeviceNestedInput;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryUncheckedUpdateManyWithoutDeviceNestedInput;
};
export type UserDeviceCreateManyRegisteredByInput = {
    id?: number;
    nik: string;
    deviceUuid?: string | null;
    status?: $Enums.DeviceStatus;
    deviceName?: string | null;
    enrollmentCodeHash?: string | null;
    enrollmentExpiresAt?: Date | string | null;
    enrollmentUsedAt?: Date | string | null;
    registeredAt?: Date | string | null;
    activatedAt?: Date | string | null;
    lastUsedAt?: Date | string | null;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserDeviceUpdateWithoutRegisteredByInput = {
    deviceUuid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus;
    deviceName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enrollmentCodeHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enrollmentExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    enrollmentUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    registeredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutDeviceNestedInput;
    sessions?: Prisma.UserSessionUpdateManyWithoutDeviceNestedInput;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryUpdateManyWithoutDeviceNestedInput;
    securityAuditLogs?: Prisma.SecurityAuditLogUpdateManyWithoutDeviceNestedInput;
};
export type UserDeviceUncheckedUpdateWithoutRegisteredByInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nik?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceUuid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus;
    deviceName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enrollmentCodeHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enrollmentExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    enrollmentUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    registeredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.UserSessionUncheckedUpdateManyWithoutDeviceNestedInput;
    sessionRecoveries?: Prisma.DeviceSessionRecoveryUncheckedUpdateManyWithoutDeviceNestedInput;
    securityAuditLogs?: Prisma.SecurityAuditLogUncheckedUpdateManyWithoutDeviceNestedInput;
};
export type UserDeviceUncheckedUpdateManyWithoutRegisteredByInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nik?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceUuid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus;
    deviceName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enrollmentCodeHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enrollmentExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    enrollmentUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    registeredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type UserDeviceCountOutputType
 */
export type UserDeviceCountOutputType = {
    sessions: number;
    sessionRecoveries: number;
    securityAuditLogs: number;
};
export type UserDeviceCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sessions?: boolean | UserDeviceCountOutputTypeCountSessionsArgs;
    sessionRecoveries?: boolean | UserDeviceCountOutputTypeCountSessionRecoveriesArgs;
    securityAuditLogs?: boolean | UserDeviceCountOutputTypeCountSecurityAuditLogsArgs;
};
/**
 * UserDeviceCountOutputType without action
 */
export type UserDeviceCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDeviceCountOutputType
     */
    select?: Prisma.UserDeviceCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * UserDeviceCountOutputType without action
 */
export type UserDeviceCountOutputTypeCountSessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserSessionWhereInput;
};
/**
 * UserDeviceCountOutputType without action
 */
export type UserDeviceCountOutputTypeCountSessionRecoveriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DeviceSessionRecoveryWhereInput;
};
/**
 * UserDeviceCountOutputType without action
 */
export type UserDeviceCountOutputTypeCountSecurityAuditLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SecurityAuditLogWhereInput;
};
export type UserDeviceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nik?: boolean;
    deviceUuid?: boolean;
    status?: boolean;
    deviceName?: boolean;
    enrollmentCodeHash?: boolean;
    enrollmentExpiresAt?: boolean;
    enrollmentUsedAt?: boolean;
    registeredByAdminId?: boolean;
    registeredAt?: boolean;
    activatedAt?: boolean;
    lastUsedAt?: boolean;
    revokedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    registeredBy?: boolean | Prisma.UserDevice$registeredByArgs<ExtArgs>;
    sessions?: boolean | Prisma.UserDevice$sessionsArgs<ExtArgs>;
    sessionRecoveries?: boolean | Prisma.UserDevice$sessionRecoveriesArgs<ExtArgs>;
    securityAuditLogs?: boolean | Prisma.UserDevice$securityAuditLogsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserDeviceCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userDevice"]>;
export type UserDeviceSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nik?: boolean;
    deviceUuid?: boolean;
    status?: boolean;
    deviceName?: boolean;
    enrollmentCodeHash?: boolean;
    enrollmentExpiresAt?: boolean;
    enrollmentUsedAt?: boolean;
    registeredByAdminId?: boolean;
    registeredAt?: boolean;
    activatedAt?: boolean;
    lastUsedAt?: boolean;
    revokedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    registeredBy?: boolean | Prisma.UserDevice$registeredByArgs<ExtArgs>;
}, ExtArgs["result"]["userDevice"]>;
export type UserDeviceSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nik?: boolean;
    deviceUuid?: boolean;
    status?: boolean;
    deviceName?: boolean;
    enrollmentCodeHash?: boolean;
    enrollmentExpiresAt?: boolean;
    enrollmentUsedAt?: boolean;
    registeredByAdminId?: boolean;
    registeredAt?: boolean;
    activatedAt?: boolean;
    lastUsedAt?: boolean;
    revokedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    registeredBy?: boolean | Prisma.UserDevice$registeredByArgs<ExtArgs>;
}, ExtArgs["result"]["userDevice"]>;
export type UserDeviceSelectScalar = {
    id?: boolean;
    nik?: boolean;
    deviceUuid?: boolean;
    status?: boolean;
    deviceName?: boolean;
    enrollmentCodeHash?: boolean;
    enrollmentExpiresAt?: boolean;
    enrollmentUsedAt?: boolean;
    registeredByAdminId?: boolean;
    registeredAt?: boolean;
    activatedAt?: boolean;
    lastUsedAt?: boolean;
    revokedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type UserDeviceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nik" | "deviceUuid" | "status" | "deviceName" | "enrollmentCodeHash" | "enrollmentExpiresAt" | "enrollmentUsedAt" | "registeredByAdminId" | "registeredAt" | "activatedAt" | "lastUsedAt" | "revokedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["userDevice"]>;
export type UserDeviceInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    registeredBy?: boolean | Prisma.UserDevice$registeredByArgs<ExtArgs>;
    sessions?: boolean | Prisma.UserDevice$sessionsArgs<ExtArgs>;
    sessionRecoveries?: boolean | Prisma.UserDevice$sessionRecoveriesArgs<ExtArgs>;
    securityAuditLogs?: boolean | Prisma.UserDevice$securityAuditLogsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserDeviceCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserDeviceIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    registeredBy?: boolean | Prisma.UserDevice$registeredByArgs<ExtArgs>;
};
export type UserDeviceIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    registeredBy?: boolean | Prisma.UserDevice$registeredByArgs<ExtArgs>;
};
export type $UserDevicePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "UserDevice";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        registeredBy: Prisma.$AdminPayload<ExtArgs> | null;
        sessions: Prisma.$UserSessionPayload<ExtArgs>[];
        sessionRecoveries: Prisma.$DeviceSessionRecoveryPayload<ExtArgs>[];
        securityAuditLogs: Prisma.$SecurityAuditLogPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nik: string;
        deviceUuid: string | null;
        status: $Enums.DeviceStatus;
        deviceName: string | null;
        enrollmentCodeHash: string | null;
        enrollmentExpiresAt: Date | null;
        enrollmentUsedAt: Date | null;
        registeredByAdminId: number | null;
        registeredAt: Date | null;
        activatedAt: Date | null;
        lastUsedAt: Date | null;
        revokedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["userDevice"]>;
    composites: {};
};
export type UserDeviceGetPayload<S extends boolean | null | undefined | UserDeviceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserDevicePayload, S>;
export type UserDeviceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserDeviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserDeviceCountAggregateInputType | true;
};
export interface UserDeviceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['UserDevice'];
        meta: {
            name: 'UserDevice';
        };
    };
    /**
     * Find zero or one UserDevice that matches the filter.
     * @param {UserDeviceFindUniqueArgs} args - Arguments to find a UserDevice
     * @example
     * // Get one UserDevice
     * const userDevice = await prisma.userDevice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserDeviceFindUniqueArgs>(args: Prisma.SelectSubset<T, UserDeviceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserDeviceClient<runtime.Types.Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one UserDevice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserDeviceFindUniqueOrThrowArgs} args - Arguments to find a UserDevice
     * @example
     * // Get one UserDevice
     * const userDevice = await prisma.userDevice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserDeviceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserDeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserDeviceClient<runtime.Types.Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first UserDevice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDeviceFindFirstArgs} args - Arguments to find a UserDevice
     * @example
     * // Get one UserDevice
     * const userDevice = await prisma.userDevice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserDeviceFindFirstArgs>(args?: Prisma.SelectSubset<T, UserDeviceFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserDeviceClient<runtime.Types.Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first UserDevice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDeviceFindFirstOrThrowArgs} args - Arguments to find a UserDevice
     * @example
     * // Get one UserDevice
     * const userDevice = await prisma.userDevice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserDeviceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserDeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserDeviceClient<runtime.Types.Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more UserDevices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDeviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserDevices
     * const userDevices = await prisma.userDevice.findMany()
     *
     * // Get first 10 UserDevices
     * const userDevices = await prisma.userDevice.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userDeviceWithIdOnly = await prisma.userDevice.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserDeviceFindManyArgs>(args?: Prisma.SelectSubset<T, UserDeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a UserDevice.
     * @param {UserDeviceCreateArgs} args - Arguments to create a UserDevice.
     * @example
     * // Create one UserDevice
     * const UserDevice = await prisma.userDevice.create({
     *   data: {
     *     // ... data to create a UserDevice
     *   }
     * })
     *
     */
    create<T extends UserDeviceCreateArgs>(args: Prisma.SelectSubset<T, UserDeviceCreateArgs<ExtArgs>>): Prisma.Prisma__UserDeviceClient<runtime.Types.Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many UserDevices.
     * @param {UserDeviceCreateManyArgs} args - Arguments to create many UserDevices.
     * @example
     * // Create many UserDevices
     * const userDevice = await prisma.userDevice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserDeviceCreateManyArgs>(args?: Prisma.SelectSubset<T, UserDeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many UserDevices and returns the data saved in the database.
     * @param {UserDeviceCreateManyAndReturnArgs} args - Arguments to create many UserDevices.
     * @example
     * // Create many UserDevices
     * const userDevice = await prisma.userDevice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many UserDevices and only return the `id`
     * const userDeviceWithIdOnly = await prisma.userDevice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserDeviceCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserDeviceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a UserDevice.
     * @param {UserDeviceDeleteArgs} args - Arguments to delete one UserDevice.
     * @example
     * // Delete one UserDevice
     * const UserDevice = await prisma.userDevice.delete({
     *   where: {
     *     // ... filter to delete one UserDevice
     *   }
     * })
     *
     */
    delete<T extends UserDeviceDeleteArgs>(args: Prisma.SelectSubset<T, UserDeviceDeleteArgs<ExtArgs>>): Prisma.Prisma__UserDeviceClient<runtime.Types.Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one UserDevice.
     * @param {UserDeviceUpdateArgs} args - Arguments to update one UserDevice.
     * @example
     * // Update one UserDevice
     * const userDevice = await prisma.userDevice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserDeviceUpdateArgs>(args: Prisma.SelectSubset<T, UserDeviceUpdateArgs<ExtArgs>>): Prisma.Prisma__UserDeviceClient<runtime.Types.Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more UserDevices.
     * @param {UserDeviceDeleteManyArgs} args - Arguments to filter UserDevices to delete.
     * @example
     * // Delete a few UserDevices
     * const { count } = await prisma.userDevice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeviceDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more UserDevices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserDevices
     * const userDevice = await prisma.userDevice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserDeviceUpdateManyArgs>(args: Prisma.SelectSubset<T, UserDeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more UserDevices and returns the data updated in the database.
     * @param {UserDeviceUpdateManyAndReturnArgs} args - Arguments to update many UserDevices.
     * @example
     * // Update many UserDevices
     * const userDevice = await prisma.userDevice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more UserDevices and only return the `id`
     * const userDeviceWithIdOnly = await prisma.userDevice.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserDeviceUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserDeviceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one UserDevice.
     * @param {UserDeviceUpsertArgs} args - Arguments to update or create a UserDevice.
     * @example
     * // Update or create a UserDevice
     * const userDevice = await prisma.userDevice.upsert({
     *   create: {
     *     // ... data to create a UserDevice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserDevice we want to update
     *   }
     * })
     */
    upsert<T extends UserDeviceUpsertArgs>(args: Prisma.SelectSubset<T, UserDeviceUpsertArgs<ExtArgs>>): Prisma.Prisma__UserDeviceClient<runtime.Types.Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of UserDevices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDeviceCountArgs} args - Arguments to filter UserDevices to count.
     * @example
     * // Count the number of UserDevices
     * const count = await prisma.userDevice.count({
     *   where: {
     *     // ... the filter for the UserDevices we want to count
     *   }
     * })
    **/
    count<T extends UserDeviceCountArgs>(args?: Prisma.Subset<T, UserDeviceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserDeviceCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a UserDevice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserDeviceAggregateArgs>(args: Prisma.Subset<T, UserDeviceAggregateArgs>): Prisma.PrismaPromise<GetUserDeviceAggregateType<T>>;
    /**
     * Group by UserDevice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDeviceGroupByArgs} args - Group by arguments.
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
    groupBy<T extends UserDeviceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserDeviceGroupByArgs['orderBy'];
    } : {
        orderBy?: UserDeviceGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserDeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the UserDevice model
     */
    readonly fields: UserDeviceFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for UserDevice.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__UserDeviceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    registeredBy<T extends Prisma.UserDevice$registeredByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDevice$registeredByArgs<ExtArgs>>): Prisma.Prisma__AdminClient<runtime.Types.Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    sessions<T extends Prisma.UserDevice$sessionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDevice$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    sessionRecoveries<T extends Prisma.UserDevice$sessionRecoveriesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDevice$sessionRecoveriesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeviceSessionRecoveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    securityAuditLogs<T extends Prisma.UserDevice$securityAuditLogsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDevice$securityAuditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SecurityAuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the UserDevice model
 */
export interface UserDeviceFieldRefs {
    readonly id: Prisma.FieldRef<"UserDevice", 'Int'>;
    readonly nik: Prisma.FieldRef<"UserDevice", 'String'>;
    readonly deviceUuid: Prisma.FieldRef<"UserDevice", 'String'>;
    readonly status: Prisma.FieldRef<"UserDevice", 'DeviceStatus'>;
    readonly deviceName: Prisma.FieldRef<"UserDevice", 'String'>;
    readonly enrollmentCodeHash: Prisma.FieldRef<"UserDevice", 'String'>;
    readonly enrollmentExpiresAt: Prisma.FieldRef<"UserDevice", 'DateTime'>;
    readonly enrollmentUsedAt: Prisma.FieldRef<"UserDevice", 'DateTime'>;
    readonly registeredByAdminId: Prisma.FieldRef<"UserDevice", 'Int'>;
    readonly registeredAt: Prisma.FieldRef<"UserDevice", 'DateTime'>;
    readonly activatedAt: Prisma.FieldRef<"UserDevice", 'DateTime'>;
    readonly lastUsedAt: Prisma.FieldRef<"UserDevice", 'DateTime'>;
    readonly revokedAt: Prisma.FieldRef<"UserDevice", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"UserDevice", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"UserDevice", 'DateTime'>;
}
/**
 * UserDevice findUnique
 */
export type UserDeviceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which UserDevice to fetch.
     */
    where: Prisma.UserDeviceWhereUniqueInput;
};
/**
 * UserDevice findUniqueOrThrow
 */
export type UserDeviceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which UserDevice to fetch.
     */
    where: Prisma.UserDeviceWhereUniqueInput;
};
/**
 * UserDevice findFirst
 */
export type UserDeviceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which UserDevice to fetch.
     */
    where?: Prisma.UserDeviceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserDevices to fetch.
     */
    orderBy?: Prisma.UserDeviceOrderByWithRelationInput | Prisma.UserDeviceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UserDevices.
     */
    cursor?: Prisma.UserDeviceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserDevices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserDevices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserDevices.
     */
    distinct?: Prisma.UserDeviceScalarFieldEnum | Prisma.UserDeviceScalarFieldEnum[];
};
/**
 * UserDevice findFirstOrThrow
 */
export type UserDeviceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which UserDevice to fetch.
     */
    where?: Prisma.UserDeviceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserDevices to fetch.
     */
    orderBy?: Prisma.UserDeviceOrderByWithRelationInput | Prisma.UserDeviceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UserDevices.
     */
    cursor?: Prisma.UserDeviceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserDevices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserDevices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserDevices.
     */
    distinct?: Prisma.UserDeviceScalarFieldEnum | Prisma.UserDeviceScalarFieldEnum[];
};
/**
 * UserDevice findMany
 */
export type UserDeviceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which UserDevices to fetch.
     */
    where?: Prisma.UserDeviceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserDevices to fetch.
     */
    orderBy?: Prisma.UserDeviceOrderByWithRelationInput | Prisma.UserDeviceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing UserDevices.
     */
    cursor?: Prisma.UserDeviceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserDevices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserDevices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserDevices.
     */
    distinct?: Prisma.UserDeviceScalarFieldEnum | Prisma.UserDeviceScalarFieldEnum[];
};
/**
 * UserDevice create
 */
export type UserDeviceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a UserDevice.
     */
    data: Prisma.XOR<Prisma.UserDeviceCreateInput, Prisma.UserDeviceUncheckedCreateInput>;
};
/**
 * UserDevice createMany
 */
export type UserDeviceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserDevices.
     */
    data: Prisma.UserDeviceCreateManyInput | Prisma.UserDeviceCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * UserDevice createManyAndReturn
 */
export type UserDeviceCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: Prisma.UserDeviceSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the UserDevice
     */
    omit?: Prisma.UserDeviceOmit<ExtArgs> | null;
    /**
     * The data used to create many UserDevices.
     */
    data: Prisma.UserDeviceCreateManyInput | Prisma.UserDeviceCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserDeviceIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * UserDevice update
 */
export type UserDeviceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a UserDevice.
     */
    data: Prisma.XOR<Prisma.UserDeviceUpdateInput, Prisma.UserDeviceUncheckedUpdateInput>;
    /**
     * Choose, which UserDevice to update.
     */
    where: Prisma.UserDeviceWhereUniqueInput;
};
/**
 * UserDevice updateMany
 */
export type UserDeviceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update UserDevices.
     */
    data: Prisma.XOR<Prisma.UserDeviceUpdateManyMutationInput, Prisma.UserDeviceUncheckedUpdateManyInput>;
    /**
     * Filter which UserDevices to update
     */
    where?: Prisma.UserDeviceWhereInput;
    /**
     * Limit how many UserDevices to update.
     */
    limit?: number;
};
/**
 * UserDevice updateManyAndReturn
 */
export type UserDeviceUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: Prisma.UserDeviceSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the UserDevice
     */
    omit?: Prisma.UserDeviceOmit<ExtArgs> | null;
    /**
     * The data used to update UserDevices.
     */
    data: Prisma.XOR<Prisma.UserDeviceUpdateManyMutationInput, Prisma.UserDeviceUncheckedUpdateManyInput>;
    /**
     * Filter which UserDevices to update
     */
    where?: Prisma.UserDeviceWhereInput;
    /**
     * Limit how many UserDevices to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserDeviceIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * UserDevice upsert
 */
export type UserDeviceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the UserDevice to update in case it exists.
     */
    where: Prisma.UserDeviceWhereUniqueInput;
    /**
     * In case the UserDevice found by the `where` argument doesn't exist, create a new UserDevice with this data.
     */
    create: Prisma.XOR<Prisma.UserDeviceCreateInput, Prisma.UserDeviceUncheckedCreateInput>;
    /**
     * In case the UserDevice was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.UserDeviceUpdateInput, Prisma.UserDeviceUncheckedUpdateInput>;
};
/**
 * UserDevice delete
 */
export type UserDeviceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which UserDevice to delete.
     */
    where: Prisma.UserDeviceWhereUniqueInput;
};
/**
 * UserDevice deleteMany
 */
export type UserDeviceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which UserDevices to delete
     */
    where?: Prisma.UserDeviceWhereInput;
    /**
     * Limit how many UserDevices to delete.
     */
    limit?: number;
};
/**
 * UserDevice.registeredBy
 */
export type UserDevice$registeredByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.AdminWhereInput;
};
/**
 * UserDevice.sessions
 */
export type UserDevice$sessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: Prisma.UserSessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserSession
     */
    omit?: Prisma.UserSessionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserSessionInclude<ExtArgs> | null;
    where?: Prisma.UserSessionWhereInput;
    orderBy?: Prisma.UserSessionOrderByWithRelationInput | Prisma.UserSessionOrderByWithRelationInput[];
    cursor?: Prisma.UserSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserSessionScalarFieldEnum | Prisma.UserSessionScalarFieldEnum[];
};
/**
 * UserDevice.sessionRecoveries
 */
export type UserDevice$sessionRecoveriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * UserDevice.securityAuditLogs
 */
export type UserDevice$securityAuditLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * UserDevice without action
 */
export type UserDeviceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
