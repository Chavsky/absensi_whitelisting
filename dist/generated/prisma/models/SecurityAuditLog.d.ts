import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model SecurityAuditLog
 *
 */
export type SecurityAuditLogModel = runtime.Types.Result.DefaultSelection<Prisma.$SecurityAuditLogPayload>;
export type AggregateSecurityAuditLog = {
    _count: SecurityAuditLogCountAggregateOutputType | null;
    _avg: SecurityAuditLogAvgAggregateOutputType | null;
    _sum: SecurityAuditLogSumAggregateOutputType | null;
    _min: SecurityAuditLogMinAggregateOutputType | null;
    _max: SecurityAuditLogMaxAggregateOutputType | null;
};
export type SecurityAuditLogAvgAggregateOutputType = {
    id: number | null;
    adminId: number | null;
    deviceId: number | null;
};
export type SecurityAuditLogSumAggregateOutputType = {
    id: number | null;
    adminId: number | null;
    deviceId: number | null;
};
export type SecurityAuditLogMinAggregateOutputType = {
    id: number | null;
    action: string | null;
    nik: string | null;
    adminId: number | null;
    deviceId: number | null;
    createdAt: Date | null;
};
export type SecurityAuditLogMaxAggregateOutputType = {
    id: number | null;
    action: string | null;
    nik: string | null;
    adminId: number | null;
    deviceId: number | null;
    createdAt: Date | null;
};
export type SecurityAuditLogCountAggregateOutputType = {
    id: number;
    action: number;
    nik: number;
    adminId: number;
    deviceId: number;
    createdAt: number;
    _all: number;
};
export type SecurityAuditLogAvgAggregateInputType = {
    id?: true;
    adminId?: true;
    deviceId?: true;
};
export type SecurityAuditLogSumAggregateInputType = {
    id?: true;
    adminId?: true;
    deviceId?: true;
};
export type SecurityAuditLogMinAggregateInputType = {
    id?: true;
    action?: true;
    nik?: true;
    adminId?: true;
    deviceId?: true;
    createdAt?: true;
};
export type SecurityAuditLogMaxAggregateInputType = {
    id?: true;
    action?: true;
    nik?: true;
    adminId?: true;
    deviceId?: true;
    createdAt?: true;
};
export type SecurityAuditLogCountAggregateInputType = {
    id?: true;
    action?: true;
    nik?: true;
    adminId?: true;
    deviceId?: true;
    createdAt?: true;
    _all?: true;
};
export type SecurityAuditLogAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SecurityAuditLog to aggregate.
     */
    where?: Prisma.SecurityAuditLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SecurityAuditLogs to fetch.
     */
    orderBy?: Prisma.SecurityAuditLogOrderByWithRelationInput | Prisma.SecurityAuditLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.SecurityAuditLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SecurityAuditLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SecurityAuditLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned SecurityAuditLogs
    **/
    _count?: true | SecurityAuditLogCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: SecurityAuditLogAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: SecurityAuditLogSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: SecurityAuditLogMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: SecurityAuditLogMaxAggregateInputType;
};
export type GetSecurityAuditLogAggregateType<T extends SecurityAuditLogAggregateArgs> = {
    [P in keyof T & keyof AggregateSecurityAuditLog]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSecurityAuditLog[P]> : Prisma.GetScalarType<T[P], AggregateSecurityAuditLog[P]>;
};
export type SecurityAuditLogGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SecurityAuditLogWhereInput;
    orderBy?: Prisma.SecurityAuditLogOrderByWithAggregationInput | Prisma.SecurityAuditLogOrderByWithAggregationInput[];
    by: Prisma.SecurityAuditLogScalarFieldEnum[] | Prisma.SecurityAuditLogScalarFieldEnum;
    having?: Prisma.SecurityAuditLogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SecurityAuditLogCountAggregateInputType | true;
    _avg?: SecurityAuditLogAvgAggregateInputType;
    _sum?: SecurityAuditLogSumAggregateInputType;
    _min?: SecurityAuditLogMinAggregateInputType;
    _max?: SecurityAuditLogMaxAggregateInputType;
};
export type SecurityAuditLogGroupByOutputType = {
    id: number;
    action: string;
    nik: string | null;
    adminId: number | null;
    deviceId: number | null;
    createdAt: Date;
    _count: SecurityAuditLogCountAggregateOutputType | null;
    _avg: SecurityAuditLogAvgAggregateOutputType | null;
    _sum: SecurityAuditLogSumAggregateOutputType | null;
    _min: SecurityAuditLogMinAggregateOutputType | null;
    _max: SecurityAuditLogMaxAggregateOutputType | null;
};
export type GetSecurityAuditLogGroupByPayload<T extends SecurityAuditLogGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SecurityAuditLogGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SecurityAuditLogGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SecurityAuditLogGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SecurityAuditLogGroupByOutputType[P]>;
}>>;
export type SecurityAuditLogWhereInput = {
    AND?: Prisma.SecurityAuditLogWhereInput | Prisma.SecurityAuditLogWhereInput[];
    OR?: Prisma.SecurityAuditLogWhereInput[];
    NOT?: Prisma.SecurityAuditLogWhereInput | Prisma.SecurityAuditLogWhereInput[];
    id?: Prisma.IntFilter<"SecurityAuditLog"> | number;
    action?: Prisma.StringFilter<"SecurityAuditLog"> | string;
    nik?: Prisma.StringNullableFilter<"SecurityAuditLog"> | string | null;
    adminId?: Prisma.IntNullableFilter<"SecurityAuditLog"> | number | null;
    deviceId?: Prisma.IntNullableFilter<"SecurityAuditLog"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"SecurityAuditLog"> | Date | string;
    admin?: Prisma.XOR<Prisma.AdminNullableScalarRelationFilter, Prisma.AdminWhereInput> | null;
    device?: Prisma.XOR<Prisma.UserDeviceNullableScalarRelationFilter, Prisma.UserDeviceWhereInput> | null;
};
export type SecurityAuditLogOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    nik?: Prisma.SortOrderInput | Prisma.SortOrder;
    adminId?: Prisma.SortOrderInput | Prisma.SortOrder;
    deviceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    admin?: Prisma.AdminOrderByWithRelationInput;
    device?: Prisma.UserDeviceOrderByWithRelationInput;
};
export type SecurityAuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.SecurityAuditLogWhereInput | Prisma.SecurityAuditLogWhereInput[];
    OR?: Prisma.SecurityAuditLogWhereInput[];
    NOT?: Prisma.SecurityAuditLogWhereInput | Prisma.SecurityAuditLogWhereInput[];
    action?: Prisma.StringFilter<"SecurityAuditLog"> | string;
    nik?: Prisma.StringNullableFilter<"SecurityAuditLog"> | string | null;
    adminId?: Prisma.IntNullableFilter<"SecurityAuditLog"> | number | null;
    deviceId?: Prisma.IntNullableFilter<"SecurityAuditLog"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"SecurityAuditLog"> | Date | string;
    admin?: Prisma.XOR<Prisma.AdminNullableScalarRelationFilter, Prisma.AdminWhereInput> | null;
    device?: Prisma.XOR<Prisma.UserDeviceNullableScalarRelationFilter, Prisma.UserDeviceWhereInput> | null;
}, "id">;
export type SecurityAuditLogOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    nik?: Prisma.SortOrderInput | Prisma.SortOrder;
    adminId?: Prisma.SortOrderInput | Prisma.SortOrder;
    deviceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.SecurityAuditLogCountOrderByAggregateInput;
    _avg?: Prisma.SecurityAuditLogAvgOrderByAggregateInput;
    _max?: Prisma.SecurityAuditLogMaxOrderByAggregateInput;
    _min?: Prisma.SecurityAuditLogMinOrderByAggregateInput;
    _sum?: Prisma.SecurityAuditLogSumOrderByAggregateInput;
};
export type SecurityAuditLogScalarWhereWithAggregatesInput = {
    AND?: Prisma.SecurityAuditLogScalarWhereWithAggregatesInput | Prisma.SecurityAuditLogScalarWhereWithAggregatesInput[];
    OR?: Prisma.SecurityAuditLogScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SecurityAuditLogScalarWhereWithAggregatesInput | Prisma.SecurityAuditLogScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"SecurityAuditLog"> | number;
    action?: Prisma.StringWithAggregatesFilter<"SecurityAuditLog"> | string;
    nik?: Prisma.StringNullableWithAggregatesFilter<"SecurityAuditLog"> | string | null;
    adminId?: Prisma.IntNullableWithAggregatesFilter<"SecurityAuditLog"> | number | null;
    deviceId?: Prisma.IntNullableWithAggregatesFilter<"SecurityAuditLog"> | number | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"SecurityAuditLog"> | Date | string;
};
export type SecurityAuditLogCreateInput = {
    action: string;
    nik?: string | null;
    createdAt?: Date | string;
    admin?: Prisma.AdminCreateNestedOneWithoutSecurityAuditLogsInput;
    device?: Prisma.UserDeviceCreateNestedOneWithoutSecurityAuditLogsInput;
};
export type SecurityAuditLogUncheckedCreateInput = {
    id?: number;
    action: string;
    nik?: string | null;
    adminId?: number | null;
    deviceId?: number | null;
    createdAt?: Date | string;
};
export type SecurityAuditLogUpdateInput = {
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    nik?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    admin?: Prisma.AdminUpdateOneWithoutSecurityAuditLogsNestedInput;
    device?: Prisma.UserDeviceUpdateOneWithoutSecurityAuditLogsNestedInput;
};
export type SecurityAuditLogUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    nik?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adminId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    deviceId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SecurityAuditLogCreateManyInput = {
    id?: number;
    action: string;
    nik?: string | null;
    adminId?: number | null;
    deviceId?: number | null;
    createdAt?: Date | string;
};
export type SecurityAuditLogUpdateManyMutationInput = {
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    nik?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SecurityAuditLogUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    nik?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adminId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    deviceId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SecurityAuditLogListRelationFilter = {
    every?: Prisma.SecurityAuditLogWhereInput;
    some?: Prisma.SecurityAuditLogWhereInput;
    none?: Prisma.SecurityAuditLogWhereInput;
};
export type SecurityAuditLogOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SecurityAuditLogCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    nik?: Prisma.SortOrder;
    adminId?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SecurityAuditLogAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    adminId?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
};
export type SecurityAuditLogMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    nik?: Prisma.SortOrder;
    adminId?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SecurityAuditLogMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    nik?: Prisma.SortOrder;
    adminId?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SecurityAuditLogSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    adminId?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
};
export type SecurityAuditLogCreateNestedManyWithoutAdminInput = {
    create?: Prisma.XOR<Prisma.SecurityAuditLogCreateWithoutAdminInput, Prisma.SecurityAuditLogUncheckedCreateWithoutAdminInput> | Prisma.SecurityAuditLogCreateWithoutAdminInput[] | Prisma.SecurityAuditLogUncheckedCreateWithoutAdminInput[];
    connectOrCreate?: Prisma.SecurityAuditLogCreateOrConnectWithoutAdminInput | Prisma.SecurityAuditLogCreateOrConnectWithoutAdminInput[];
    createMany?: Prisma.SecurityAuditLogCreateManyAdminInputEnvelope;
    connect?: Prisma.SecurityAuditLogWhereUniqueInput | Prisma.SecurityAuditLogWhereUniqueInput[];
};
export type SecurityAuditLogUncheckedCreateNestedManyWithoutAdminInput = {
    create?: Prisma.XOR<Prisma.SecurityAuditLogCreateWithoutAdminInput, Prisma.SecurityAuditLogUncheckedCreateWithoutAdminInput> | Prisma.SecurityAuditLogCreateWithoutAdminInput[] | Prisma.SecurityAuditLogUncheckedCreateWithoutAdminInput[];
    connectOrCreate?: Prisma.SecurityAuditLogCreateOrConnectWithoutAdminInput | Prisma.SecurityAuditLogCreateOrConnectWithoutAdminInput[];
    createMany?: Prisma.SecurityAuditLogCreateManyAdminInputEnvelope;
    connect?: Prisma.SecurityAuditLogWhereUniqueInput | Prisma.SecurityAuditLogWhereUniqueInput[];
};
export type SecurityAuditLogUpdateManyWithoutAdminNestedInput = {
    create?: Prisma.XOR<Prisma.SecurityAuditLogCreateWithoutAdminInput, Prisma.SecurityAuditLogUncheckedCreateWithoutAdminInput> | Prisma.SecurityAuditLogCreateWithoutAdminInput[] | Prisma.SecurityAuditLogUncheckedCreateWithoutAdminInput[];
    connectOrCreate?: Prisma.SecurityAuditLogCreateOrConnectWithoutAdminInput | Prisma.SecurityAuditLogCreateOrConnectWithoutAdminInput[];
    upsert?: Prisma.SecurityAuditLogUpsertWithWhereUniqueWithoutAdminInput | Prisma.SecurityAuditLogUpsertWithWhereUniqueWithoutAdminInput[];
    createMany?: Prisma.SecurityAuditLogCreateManyAdminInputEnvelope;
    set?: Prisma.SecurityAuditLogWhereUniqueInput | Prisma.SecurityAuditLogWhereUniqueInput[];
    disconnect?: Prisma.SecurityAuditLogWhereUniqueInput | Prisma.SecurityAuditLogWhereUniqueInput[];
    delete?: Prisma.SecurityAuditLogWhereUniqueInput | Prisma.SecurityAuditLogWhereUniqueInput[];
    connect?: Prisma.SecurityAuditLogWhereUniqueInput | Prisma.SecurityAuditLogWhereUniqueInput[];
    update?: Prisma.SecurityAuditLogUpdateWithWhereUniqueWithoutAdminInput | Prisma.SecurityAuditLogUpdateWithWhereUniqueWithoutAdminInput[];
    updateMany?: Prisma.SecurityAuditLogUpdateManyWithWhereWithoutAdminInput | Prisma.SecurityAuditLogUpdateManyWithWhereWithoutAdminInput[];
    deleteMany?: Prisma.SecurityAuditLogScalarWhereInput | Prisma.SecurityAuditLogScalarWhereInput[];
};
export type SecurityAuditLogUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: Prisma.XOR<Prisma.SecurityAuditLogCreateWithoutAdminInput, Prisma.SecurityAuditLogUncheckedCreateWithoutAdminInput> | Prisma.SecurityAuditLogCreateWithoutAdminInput[] | Prisma.SecurityAuditLogUncheckedCreateWithoutAdminInput[];
    connectOrCreate?: Prisma.SecurityAuditLogCreateOrConnectWithoutAdminInput | Prisma.SecurityAuditLogCreateOrConnectWithoutAdminInput[];
    upsert?: Prisma.SecurityAuditLogUpsertWithWhereUniqueWithoutAdminInput | Prisma.SecurityAuditLogUpsertWithWhereUniqueWithoutAdminInput[];
    createMany?: Prisma.SecurityAuditLogCreateManyAdminInputEnvelope;
    set?: Prisma.SecurityAuditLogWhereUniqueInput | Prisma.SecurityAuditLogWhereUniqueInput[];
    disconnect?: Prisma.SecurityAuditLogWhereUniqueInput | Prisma.SecurityAuditLogWhereUniqueInput[];
    delete?: Prisma.SecurityAuditLogWhereUniqueInput | Prisma.SecurityAuditLogWhereUniqueInput[];
    connect?: Prisma.SecurityAuditLogWhereUniqueInput | Prisma.SecurityAuditLogWhereUniqueInput[];
    update?: Prisma.SecurityAuditLogUpdateWithWhereUniqueWithoutAdminInput | Prisma.SecurityAuditLogUpdateWithWhereUniqueWithoutAdminInput[];
    updateMany?: Prisma.SecurityAuditLogUpdateManyWithWhereWithoutAdminInput | Prisma.SecurityAuditLogUpdateManyWithWhereWithoutAdminInput[];
    deleteMany?: Prisma.SecurityAuditLogScalarWhereInput | Prisma.SecurityAuditLogScalarWhereInput[];
};
export type SecurityAuditLogCreateNestedManyWithoutDeviceInput = {
    create?: Prisma.XOR<Prisma.SecurityAuditLogCreateWithoutDeviceInput, Prisma.SecurityAuditLogUncheckedCreateWithoutDeviceInput> | Prisma.SecurityAuditLogCreateWithoutDeviceInput[] | Prisma.SecurityAuditLogUncheckedCreateWithoutDeviceInput[];
    connectOrCreate?: Prisma.SecurityAuditLogCreateOrConnectWithoutDeviceInput | Prisma.SecurityAuditLogCreateOrConnectWithoutDeviceInput[];
    createMany?: Prisma.SecurityAuditLogCreateManyDeviceInputEnvelope;
    connect?: Prisma.SecurityAuditLogWhereUniqueInput | Prisma.SecurityAuditLogWhereUniqueInput[];
};
export type SecurityAuditLogUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: Prisma.XOR<Prisma.SecurityAuditLogCreateWithoutDeviceInput, Prisma.SecurityAuditLogUncheckedCreateWithoutDeviceInput> | Prisma.SecurityAuditLogCreateWithoutDeviceInput[] | Prisma.SecurityAuditLogUncheckedCreateWithoutDeviceInput[];
    connectOrCreate?: Prisma.SecurityAuditLogCreateOrConnectWithoutDeviceInput | Prisma.SecurityAuditLogCreateOrConnectWithoutDeviceInput[];
    createMany?: Prisma.SecurityAuditLogCreateManyDeviceInputEnvelope;
    connect?: Prisma.SecurityAuditLogWhereUniqueInput | Prisma.SecurityAuditLogWhereUniqueInput[];
};
export type SecurityAuditLogUpdateManyWithoutDeviceNestedInput = {
    create?: Prisma.XOR<Prisma.SecurityAuditLogCreateWithoutDeviceInput, Prisma.SecurityAuditLogUncheckedCreateWithoutDeviceInput> | Prisma.SecurityAuditLogCreateWithoutDeviceInput[] | Prisma.SecurityAuditLogUncheckedCreateWithoutDeviceInput[];
    connectOrCreate?: Prisma.SecurityAuditLogCreateOrConnectWithoutDeviceInput | Prisma.SecurityAuditLogCreateOrConnectWithoutDeviceInput[];
    upsert?: Prisma.SecurityAuditLogUpsertWithWhereUniqueWithoutDeviceInput | Prisma.SecurityAuditLogUpsertWithWhereUniqueWithoutDeviceInput[];
    createMany?: Prisma.SecurityAuditLogCreateManyDeviceInputEnvelope;
    set?: Prisma.SecurityAuditLogWhereUniqueInput | Prisma.SecurityAuditLogWhereUniqueInput[];
    disconnect?: Prisma.SecurityAuditLogWhereUniqueInput | Prisma.SecurityAuditLogWhereUniqueInput[];
    delete?: Prisma.SecurityAuditLogWhereUniqueInput | Prisma.SecurityAuditLogWhereUniqueInput[];
    connect?: Prisma.SecurityAuditLogWhereUniqueInput | Prisma.SecurityAuditLogWhereUniqueInput[];
    update?: Prisma.SecurityAuditLogUpdateWithWhereUniqueWithoutDeviceInput | Prisma.SecurityAuditLogUpdateWithWhereUniqueWithoutDeviceInput[];
    updateMany?: Prisma.SecurityAuditLogUpdateManyWithWhereWithoutDeviceInput | Prisma.SecurityAuditLogUpdateManyWithWhereWithoutDeviceInput[];
    deleteMany?: Prisma.SecurityAuditLogScalarWhereInput | Prisma.SecurityAuditLogScalarWhereInput[];
};
export type SecurityAuditLogUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: Prisma.XOR<Prisma.SecurityAuditLogCreateWithoutDeviceInput, Prisma.SecurityAuditLogUncheckedCreateWithoutDeviceInput> | Prisma.SecurityAuditLogCreateWithoutDeviceInput[] | Prisma.SecurityAuditLogUncheckedCreateWithoutDeviceInput[];
    connectOrCreate?: Prisma.SecurityAuditLogCreateOrConnectWithoutDeviceInput | Prisma.SecurityAuditLogCreateOrConnectWithoutDeviceInput[];
    upsert?: Prisma.SecurityAuditLogUpsertWithWhereUniqueWithoutDeviceInput | Prisma.SecurityAuditLogUpsertWithWhereUniqueWithoutDeviceInput[];
    createMany?: Prisma.SecurityAuditLogCreateManyDeviceInputEnvelope;
    set?: Prisma.SecurityAuditLogWhereUniqueInput | Prisma.SecurityAuditLogWhereUniqueInput[];
    disconnect?: Prisma.SecurityAuditLogWhereUniqueInput | Prisma.SecurityAuditLogWhereUniqueInput[];
    delete?: Prisma.SecurityAuditLogWhereUniqueInput | Prisma.SecurityAuditLogWhereUniqueInput[];
    connect?: Prisma.SecurityAuditLogWhereUniqueInput | Prisma.SecurityAuditLogWhereUniqueInput[];
    update?: Prisma.SecurityAuditLogUpdateWithWhereUniqueWithoutDeviceInput | Prisma.SecurityAuditLogUpdateWithWhereUniqueWithoutDeviceInput[];
    updateMany?: Prisma.SecurityAuditLogUpdateManyWithWhereWithoutDeviceInput | Prisma.SecurityAuditLogUpdateManyWithWhereWithoutDeviceInput[];
    deleteMany?: Prisma.SecurityAuditLogScalarWhereInput | Prisma.SecurityAuditLogScalarWhereInput[];
};
export type SecurityAuditLogCreateWithoutAdminInput = {
    action: string;
    nik?: string | null;
    createdAt?: Date | string;
    device?: Prisma.UserDeviceCreateNestedOneWithoutSecurityAuditLogsInput;
};
export type SecurityAuditLogUncheckedCreateWithoutAdminInput = {
    id?: number;
    action: string;
    nik?: string | null;
    deviceId?: number | null;
    createdAt?: Date | string;
};
export type SecurityAuditLogCreateOrConnectWithoutAdminInput = {
    where: Prisma.SecurityAuditLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.SecurityAuditLogCreateWithoutAdminInput, Prisma.SecurityAuditLogUncheckedCreateWithoutAdminInput>;
};
export type SecurityAuditLogCreateManyAdminInputEnvelope = {
    data: Prisma.SecurityAuditLogCreateManyAdminInput | Prisma.SecurityAuditLogCreateManyAdminInput[];
    skipDuplicates?: boolean;
};
export type SecurityAuditLogUpsertWithWhereUniqueWithoutAdminInput = {
    where: Prisma.SecurityAuditLogWhereUniqueInput;
    update: Prisma.XOR<Prisma.SecurityAuditLogUpdateWithoutAdminInput, Prisma.SecurityAuditLogUncheckedUpdateWithoutAdminInput>;
    create: Prisma.XOR<Prisma.SecurityAuditLogCreateWithoutAdminInput, Prisma.SecurityAuditLogUncheckedCreateWithoutAdminInput>;
};
export type SecurityAuditLogUpdateWithWhereUniqueWithoutAdminInput = {
    where: Prisma.SecurityAuditLogWhereUniqueInput;
    data: Prisma.XOR<Prisma.SecurityAuditLogUpdateWithoutAdminInput, Prisma.SecurityAuditLogUncheckedUpdateWithoutAdminInput>;
};
export type SecurityAuditLogUpdateManyWithWhereWithoutAdminInput = {
    where: Prisma.SecurityAuditLogScalarWhereInput;
    data: Prisma.XOR<Prisma.SecurityAuditLogUpdateManyMutationInput, Prisma.SecurityAuditLogUncheckedUpdateManyWithoutAdminInput>;
};
export type SecurityAuditLogScalarWhereInput = {
    AND?: Prisma.SecurityAuditLogScalarWhereInput | Prisma.SecurityAuditLogScalarWhereInput[];
    OR?: Prisma.SecurityAuditLogScalarWhereInput[];
    NOT?: Prisma.SecurityAuditLogScalarWhereInput | Prisma.SecurityAuditLogScalarWhereInput[];
    id?: Prisma.IntFilter<"SecurityAuditLog"> | number;
    action?: Prisma.StringFilter<"SecurityAuditLog"> | string;
    nik?: Prisma.StringNullableFilter<"SecurityAuditLog"> | string | null;
    adminId?: Prisma.IntNullableFilter<"SecurityAuditLog"> | number | null;
    deviceId?: Prisma.IntNullableFilter<"SecurityAuditLog"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"SecurityAuditLog"> | Date | string;
};
export type SecurityAuditLogCreateWithoutDeviceInput = {
    action: string;
    nik?: string | null;
    createdAt?: Date | string;
    admin?: Prisma.AdminCreateNestedOneWithoutSecurityAuditLogsInput;
};
export type SecurityAuditLogUncheckedCreateWithoutDeviceInput = {
    id?: number;
    action: string;
    nik?: string | null;
    adminId?: number | null;
    createdAt?: Date | string;
};
export type SecurityAuditLogCreateOrConnectWithoutDeviceInput = {
    where: Prisma.SecurityAuditLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.SecurityAuditLogCreateWithoutDeviceInput, Prisma.SecurityAuditLogUncheckedCreateWithoutDeviceInput>;
};
export type SecurityAuditLogCreateManyDeviceInputEnvelope = {
    data: Prisma.SecurityAuditLogCreateManyDeviceInput | Prisma.SecurityAuditLogCreateManyDeviceInput[];
    skipDuplicates?: boolean;
};
export type SecurityAuditLogUpsertWithWhereUniqueWithoutDeviceInput = {
    where: Prisma.SecurityAuditLogWhereUniqueInput;
    update: Prisma.XOR<Prisma.SecurityAuditLogUpdateWithoutDeviceInput, Prisma.SecurityAuditLogUncheckedUpdateWithoutDeviceInput>;
    create: Prisma.XOR<Prisma.SecurityAuditLogCreateWithoutDeviceInput, Prisma.SecurityAuditLogUncheckedCreateWithoutDeviceInput>;
};
export type SecurityAuditLogUpdateWithWhereUniqueWithoutDeviceInput = {
    where: Prisma.SecurityAuditLogWhereUniqueInput;
    data: Prisma.XOR<Prisma.SecurityAuditLogUpdateWithoutDeviceInput, Prisma.SecurityAuditLogUncheckedUpdateWithoutDeviceInput>;
};
export type SecurityAuditLogUpdateManyWithWhereWithoutDeviceInput = {
    where: Prisma.SecurityAuditLogScalarWhereInput;
    data: Prisma.XOR<Prisma.SecurityAuditLogUpdateManyMutationInput, Prisma.SecurityAuditLogUncheckedUpdateManyWithoutDeviceInput>;
};
export type SecurityAuditLogCreateManyAdminInput = {
    id?: number;
    action: string;
    nik?: string | null;
    deviceId?: number | null;
    createdAt?: Date | string;
};
export type SecurityAuditLogUpdateWithoutAdminInput = {
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    nik?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    device?: Prisma.UserDeviceUpdateOneWithoutSecurityAuditLogsNestedInput;
};
export type SecurityAuditLogUncheckedUpdateWithoutAdminInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    nik?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deviceId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SecurityAuditLogUncheckedUpdateManyWithoutAdminInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    nik?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deviceId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SecurityAuditLogCreateManyDeviceInput = {
    id?: number;
    action: string;
    nik?: string | null;
    adminId?: number | null;
    createdAt?: Date | string;
};
export type SecurityAuditLogUpdateWithoutDeviceInput = {
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    nik?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    admin?: Prisma.AdminUpdateOneWithoutSecurityAuditLogsNestedInput;
};
export type SecurityAuditLogUncheckedUpdateWithoutDeviceInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    nik?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adminId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SecurityAuditLogUncheckedUpdateManyWithoutDeviceInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    nik?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adminId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SecurityAuditLogSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    action?: boolean;
    nik?: boolean;
    adminId?: boolean;
    deviceId?: boolean;
    createdAt?: boolean;
    admin?: boolean | Prisma.SecurityAuditLog$adminArgs<ExtArgs>;
    device?: boolean | Prisma.SecurityAuditLog$deviceArgs<ExtArgs>;
}, ExtArgs["result"]["securityAuditLog"]>;
export type SecurityAuditLogSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    action?: boolean;
    nik?: boolean;
    adminId?: boolean;
    deviceId?: boolean;
    createdAt?: boolean;
    admin?: boolean | Prisma.SecurityAuditLog$adminArgs<ExtArgs>;
    device?: boolean | Prisma.SecurityAuditLog$deviceArgs<ExtArgs>;
}, ExtArgs["result"]["securityAuditLog"]>;
export type SecurityAuditLogSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    action?: boolean;
    nik?: boolean;
    adminId?: boolean;
    deviceId?: boolean;
    createdAt?: boolean;
    admin?: boolean | Prisma.SecurityAuditLog$adminArgs<ExtArgs>;
    device?: boolean | Prisma.SecurityAuditLog$deviceArgs<ExtArgs>;
}, ExtArgs["result"]["securityAuditLog"]>;
export type SecurityAuditLogSelectScalar = {
    id?: boolean;
    action?: boolean;
    nik?: boolean;
    adminId?: boolean;
    deviceId?: boolean;
    createdAt?: boolean;
};
export type SecurityAuditLogOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "action" | "nik" | "adminId" | "deviceId" | "createdAt", ExtArgs["result"]["securityAuditLog"]>;
export type SecurityAuditLogInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    admin?: boolean | Prisma.SecurityAuditLog$adminArgs<ExtArgs>;
    device?: boolean | Prisma.SecurityAuditLog$deviceArgs<ExtArgs>;
};
export type SecurityAuditLogIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    admin?: boolean | Prisma.SecurityAuditLog$adminArgs<ExtArgs>;
    device?: boolean | Prisma.SecurityAuditLog$deviceArgs<ExtArgs>;
};
export type SecurityAuditLogIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    admin?: boolean | Prisma.SecurityAuditLog$adminArgs<ExtArgs>;
    device?: boolean | Prisma.SecurityAuditLog$deviceArgs<ExtArgs>;
};
export type $SecurityAuditLogPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SecurityAuditLog";
    objects: {
        admin: Prisma.$AdminPayload<ExtArgs> | null;
        device: Prisma.$UserDevicePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        action: string;
        nik: string | null;
        adminId: number | null;
        deviceId: number | null;
        createdAt: Date;
    }, ExtArgs["result"]["securityAuditLog"]>;
    composites: {};
};
export type SecurityAuditLogGetPayload<S extends boolean | null | undefined | SecurityAuditLogDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SecurityAuditLogPayload, S>;
export type SecurityAuditLogCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SecurityAuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SecurityAuditLogCountAggregateInputType | true;
};
export interface SecurityAuditLogDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SecurityAuditLog'];
        meta: {
            name: 'SecurityAuditLog';
        };
    };
    /**
     * Find zero or one SecurityAuditLog that matches the filter.
     * @param {SecurityAuditLogFindUniqueArgs} args - Arguments to find a SecurityAuditLog
     * @example
     * // Get one SecurityAuditLog
     * const securityAuditLog = await prisma.securityAuditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SecurityAuditLogFindUniqueArgs>(args: Prisma.SelectSubset<T, SecurityAuditLogFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SecurityAuditLogClient<runtime.Types.Result.GetResult<Prisma.$SecurityAuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one SecurityAuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SecurityAuditLogFindUniqueOrThrowArgs} args - Arguments to find a SecurityAuditLog
     * @example
     * // Get one SecurityAuditLog
     * const securityAuditLog = await prisma.securityAuditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SecurityAuditLogFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SecurityAuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SecurityAuditLogClient<runtime.Types.Result.GetResult<Prisma.$SecurityAuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SecurityAuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityAuditLogFindFirstArgs} args - Arguments to find a SecurityAuditLog
     * @example
     * // Get one SecurityAuditLog
     * const securityAuditLog = await prisma.securityAuditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SecurityAuditLogFindFirstArgs>(args?: Prisma.SelectSubset<T, SecurityAuditLogFindFirstArgs<ExtArgs>>): Prisma.Prisma__SecurityAuditLogClient<runtime.Types.Result.GetResult<Prisma.$SecurityAuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SecurityAuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityAuditLogFindFirstOrThrowArgs} args - Arguments to find a SecurityAuditLog
     * @example
     * // Get one SecurityAuditLog
     * const securityAuditLog = await prisma.securityAuditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SecurityAuditLogFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SecurityAuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SecurityAuditLogClient<runtime.Types.Result.GetResult<Prisma.$SecurityAuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more SecurityAuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityAuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SecurityAuditLogs
     * const securityAuditLogs = await prisma.securityAuditLog.findMany()
     *
     * // Get first 10 SecurityAuditLogs
     * const securityAuditLogs = await prisma.securityAuditLog.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const securityAuditLogWithIdOnly = await prisma.securityAuditLog.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SecurityAuditLogFindManyArgs>(args?: Prisma.SelectSubset<T, SecurityAuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SecurityAuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a SecurityAuditLog.
     * @param {SecurityAuditLogCreateArgs} args - Arguments to create a SecurityAuditLog.
     * @example
     * // Create one SecurityAuditLog
     * const SecurityAuditLog = await prisma.securityAuditLog.create({
     *   data: {
     *     // ... data to create a SecurityAuditLog
     *   }
     * })
     *
     */
    create<T extends SecurityAuditLogCreateArgs>(args: Prisma.SelectSubset<T, SecurityAuditLogCreateArgs<ExtArgs>>): Prisma.Prisma__SecurityAuditLogClient<runtime.Types.Result.GetResult<Prisma.$SecurityAuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many SecurityAuditLogs.
     * @param {SecurityAuditLogCreateManyArgs} args - Arguments to create many SecurityAuditLogs.
     * @example
     * // Create many SecurityAuditLogs
     * const securityAuditLog = await prisma.securityAuditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SecurityAuditLogCreateManyArgs>(args?: Prisma.SelectSubset<T, SecurityAuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many SecurityAuditLogs and returns the data saved in the database.
     * @param {SecurityAuditLogCreateManyAndReturnArgs} args - Arguments to create many SecurityAuditLogs.
     * @example
     * // Create many SecurityAuditLogs
     * const securityAuditLog = await prisma.securityAuditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many SecurityAuditLogs and only return the `id`
     * const securityAuditLogWithIdOnly = await prisma.securityAuditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SecurityAuditLogCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SecurityAuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SecurityAuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a SecurityAuditLog.
     * @param {SecurityAuditLogDeleteArgs} args - Arguments to delete one SecurityAuditLog.
     * @example
     * // Delete one SecurityAuditLog
     * const SecurityAuditLog = await prisma.securityAuditLog.delete({
     *   where: {
     *     // ... filter to delete one SecurityAuditLog
     *   }
     * })
     *
     */
    delete<T extends SecurityAuditLogDeleteArgs>(args: Prisma.SelectSubset<T, SecurityAuditLogDeleteArgs<ExtArgs>>): Prisma.Prisma__SecurityAuditLogClient<runtime.Types.Result.GetResult<Prisma.$SecurityAuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one SecurityAuditLog.
     * @param {SecurityAuditLogUpdateArgs} args - Arguments to update one SecurityAuditLog.
     * @example
     * // Update one SecurityAuditLog
     * const securityAuditLog = await prisma.securityAuditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SecurityAuditLogUpdateArgs>(args: Prisma.SelectSubset<T, SecurityAuditLogUpdateArgs<ExtArgs>>): Prisma.Prisma__SecurityAuditLogClient<runtime.Types.Result.GetResult<Prisma.$SecurityAuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more SecurityAuditLogs.
     * @param {SecurityAuditLogDeleteManyArgs} args - Arguments to filter SecurityAuditLogs to delete.
     * @example
     * // Delete a few SecurityAuditLogs
     * const { count } = await prisma.securityAuditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SecurityAuditLogDeleteManyArgs>(args?: Prisma.SelectSubset<T, SecurityAuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SecurityAuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityAuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SecurityAuditLogs
     * const securityAuditLog = await prisma.securityAuditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SecurityAuditLogUpdateManyArgs>(args: Prisma.SelectSubset<T, SecurityAuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SecurityAuditLogs and returns the data updated in the database.
     * @param {SecurityAuditLogUpdateManyAndReturnArgs} args - Arguments to update many SecurityAuditLogs.
     * @example
     * // Update many SecurityAuditLogs
     * const securityAuditLog = await prisma.securityAuditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more SecurityAuditLogs and only return the `id`
     * const securityAuditLogWithIdOnly = await prisma.securityAuditLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends SecurityAuditLogUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SecurityAuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SecurityAuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one SecurityAuditLog.
     * @param {SecurityAuditLogUpsertArgs} args - Arguments to update or create a SecurityAuditLog.
     * @example
     * // Update or create a SecurityAuditLog
     * const securityAuditLog = await prisma.securityAuditLog.upsert({
     *   create: {
     *     // ... data to create a SecurityAuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SecurityAuditLog we want to update
     *   }
     * })
     */
    upsert<T extends SecurityAuditLogUpsertArgs>(args: Prisma.SelectSubset<T, SecurityAuditLogUpsertArgs<ExtArgs>>): Prisma.Prisma__SecurityAuditLogClient<runtime.Types.Result.GetResult<Prisma.$SecurityAuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of SecurityAuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityAuditLogCountArgs} args - Arguments to filter SecurityAuditLogs to count.
     * @example
     * // Count the number of SecurityAuditLogs
     * const count = await prisma.securityAuditLog.count({
     *   where: {
     *     // ... the filter for the SecurityAuditLogs we want to count
     *   }
     * })
    **/
    count<T extends SecurityAuditLogCountArgs>(args?: Prisma.Subset<T, SecurityAuditLogCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SecurityAuditLogCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a SecurityAuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityAuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SecurityAuditLogAggregateArgs>(args: Prisma.Subset<T, SecurityAuditLogAggregateArgs>): Prisma.PrismaPromise<GetSecurityAuditLogAggregateType<T>>;
    /**
     * Group by SecurityAuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityAuditLogGroupByArgs} args - Group by arguments.
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
    groupBy<T extends SecurityAuditLogGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SecurityAuditLogGroupByArgs['orderBy'];
    } : {
        orderBy?: SecurityAuditLogGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SecurityAuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSecurityAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the SecurityAuditLog model
     */
    readonly fields: SecurityAuditLogFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for SecurityAuditLog.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__SecurityAuditLogClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    admin<T extends Prisma.SecurityAuditLog$adminArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SecurityAuditLog$adminArgs<ExtArgs>>): Prisma.Prisma__AdminClient<runtime.Types.Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    device<T extends Prisma.SecurityAuditLog$deviceArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SecurityAuditLog$deviceArgs<ExtArgs>>): Prisma.Prisma__UserDeviceClient<runtime.Types.Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the SecurityAuditLog model
 */
export interface SecurityAuditLogFieldRefs {
    readonly id: Prisma.FieldRef<"SecurityAuditLog", 'Int'>;
    readonly action: Prisma.FieldRef<"SecurityAuditLog", 'String'>;
    readonly nik: Prisma.FieldRef<"SecurityAuditLog", 'String'>;
    readonly adminId: Prisma.FieldRef<"SecurityAuditLog", 'Int'>;
    readonly deviceId: Prisma.FieldRef<"SecurityAuditLog", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"SecurityAuditLog", 'DateTime'>;
}
/**
 * SecurityAuditLog findUnique
 */
export type SecurityAuditLogFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which SecurityAuditLog to fetch.
     */
    where: Prisma.SecurityAuditLogWhereUniqueInput;
};
/**
 * SecurityAuditLog findUniqueOrThrow
 */
export type SecurityAuditLogFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which SecurityAuditLog to fetch.
     */
    where: Prisma.SecurityAuditLogWhereUniqueInput;
};
/**
 * SecurityAuditLog findFirst
 */
export type SecurityAuditLogFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which SecurityAuditLog to fetch.
     */
    where?: Prisma.SecurityAuditLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SecurityAuditLogs to fetch.
     */
    orderBy?: Prisma.SecurityAuditLogOrderByWithRelationInput | Prisma.SecurityAuditLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SecurityAuditLogs.
     */
    cursor?: Prisma.SecurityAuditLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SecurityAuditLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SecurityAuditLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SecurityAuditLogs.
     */
    distinct?: Prisma.SecurityAuditLogScalarFieldEnum | Prisma.SecurityAuditLogScalarFieldEnum[];
};
/**
 * SecurityAuditLog findFirstOrThrow
 */
export type SecurityAuditLogFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which SecurityAuditLog to fetch.
     */
    where?: Prisma.SecurityAuditLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SecurityAuditLogs to fetch.
     */
    orderBy?: Prisma.SecurityAuditLogOrderByWithRelationInput | Prisma.SecurityAuditLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SecurityAuditLogs.
     */
    cursor?: Prisma.SecurityAuditLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SecurityAuditLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SecurityAuditLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SecurityAuditLogs.
     */
    distinct?: Prisma.SecurityAuditLogScalarFieldEnum | Prisma.SecurityAuditLogScalarFieldEnum[];
};
/**
 * SecurityAuditLog findMany
 */
export type SecurityAuditLogFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which SecurityAuditLogs to fetch.
     */
    where?: Prisma.SecurityAuditLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SecurityAuditLogs to fetch.
     */
    orderBy?: Prisma.SecurityAuditLogOrderByWithRelationInput | Prisma.SecurityAuditLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing SecurityAuditLogs.
     */
    cursor?: Prisma.SecurityAuditLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SecurityAuditLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SecurityAuditLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SecurityAuditLogs.
     */
    distinct?: Prisma.SecurityAuditLogScalarFieldEnum | Prisma.SecurityAuditLogScalarFieldEnum[];
};
/**
 * SecurityAuditLog create
 */
export type SecurityAuditLogCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a SecurityAuditLog.
     */
    data: Prisma.XOR<Prisma.SecurityAuditLogCreateInput, Prisma.SecurityAuditLogUncheckedCreateInput>;
};
/**
 * SecurityAuditLog createMany
 */
export type SecurityAuditLogCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many SecurityAuditLogs.
     */
    data: Prisma.SecurityAuditLogCreateManyInput | Prisma.SecurityAuditLogCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * SecurityAuditLog createManyAndReturn
 */
export type SecurityAuditLogCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityAuditLog
     */
    select?: Prisma.SecurityAuditLogSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SecurityAuditLog
     */
    omit?: Prisma.SecurityAuditLogOmit<ExtArgs> | null;
    /**
     * The data used to create many SecurityAuditLogs.
     */
    data: Prisma.SecurityAuditLogCreateManyInput | Prisma.SecurityAuditLogCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SecurityAuditLogIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * SecurityAuditLog update
 */
export type SecurityAuditLogUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a SecurityAuditLog.
     */
    data: Prisma.XOR<Prisma.SecurityAuditLogUpdateInput, Prisma.SecurityAuditLogUncheckedUpdateInput>;
    /**
     * Choose, which SecurityAuditLog to update.
     */
    where: Prisma.SecurityAuditLogWhereUniqueInput;
};
/**
 * SecurityAuditLog updateMany
 */
export type SecurityAuditLogUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update SecurityAuditLogs.
     */
    data: Prisma.XOR<Prisma.SecurityAuditLogUpdateManyMutationInput, Prisma.SecurityAuditLogUncheckedUpdateManyInput>;
    /**
     * Filter which SecurityAuditLogs to update
     */
    where?: Prisma.SecurityAuditLogWhereInput;
    /**
     * Limit how many SecurityAuditLogs to update.
     */
    limit?: number;
};
/**
 * SecurityAuditLog updateManyAndReturn
 */
export type SecurityAuditLogUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityAuditLog
     */
    select?: Prisma.SecurityAuditLogSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SecurityAuditLog
     */
    omit?: Prisma.SecurityAuditLogOmit<ExtArgs> | null;
    /**
     * The data used to update SecurityAuditLogs.
     */
    data: Prisma.XOR<Prisma.SecurityAuditLogUpdateManyMutationInput, Prisma.SecurityAuditLogUncheckedUpdateManyInput>;
    /**
     * Filter which SecurityAuditLogs to update
     */
    where?: Prisma.SecurityAuditLogWhereInput;
    /**
     * Limit how many SecurityAuditLogs to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SecurityAuditLogIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * SecurityAuditLog upsert
 */
export type SecurityAuditLogUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the SecurityAuditLog to update in case it exists.
     */
    where: Prisma.SecurityAuditLogWhereUniqueInput;
    /**
     * In case the SecurityAuditLog found by the `where` argument doesn't exist, create a new SecurityAuditLog with this data.
     */
    create: Prisma.XOR<Prisma.SecurityAuditLogCreateInput, Prisma.SecurityAuditLogUncheckedCreateInput>;
    /**
     * In case the SecurityAuditLog was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.SecurityAuditLogUpdateInput, Prisma.SecurityAuditLogUncheckedUpdateInput>;
};
/**
 * SecurityAuditLog delete
 */
export type SecurityAuditLogDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which SecurityAuditLog to delete.
     */
    where: Prisma.SecurityAuditLogWhereUniqueInput;
};
/**
 * SecurityAuditLog deleteMany
 */
export type SecurityAuditLogDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SecurityAuditLogs to delete
     */
    where?: Prisma.SecurityAuditLogWhereInput;
    /**
     * Limit how many SecurityAuditLogs to delete.
     */
    limit?: number;
};
/**
 * SecurityAuditLog.admin
 */
export type SecurityAuditLog$adminArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * SecurityAuditLog.device
 */
export type SecurityAuditLog$deviceArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
/**
 * SecurityAuditLog without action
 */
export type SecurityAuditLogDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
