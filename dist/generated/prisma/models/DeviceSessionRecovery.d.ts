import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model DeviceSessionRecovery
 *
 */
export type DeviceSessionRecoveryModel = runtime.Types.Result.DefaultSelection<Prisma.$DeviceSessionRecoveryPayload>;
export type AggregateDeviceSessionRecovery = {
    _count: DeviceSessionRecoveryCountAggregateOutputType | null;
    _avg: DeviceSessionRecoveryAvgAggregateOutputType | null;
    _sum: DeviceSessionRecoverySumAggregateOutputType | null;
    _min: DeviceSessionRecoveryMinAggregateOutputType | null;
    _max: DeviceSessionRecoveryMaxAggregateOutputType | null;
};
export type DeviceSessionRecoveryAvgAggregateOutputType = {
    id: number | null;
    deviceId: number | null;
    createdByAdminId: number | null;
};
export type DeviceSessionRecoverySumAggregateOutputType = {
    id: number | null;
    deviceId: number | null;
    createdByAdminId: number | null;
};
export type DeviceSessionRecoveryMinAggregateOutputType = {
    id: number | null;
    deviceId: number | null;
    codeHash: string | null;
    expiresAt: Date | null;
    usedAt: Date | null;
    invalidatedAt: Date | null;
    createdByAdminId: number | null;
    createdAt: Date | null;
};
export type DeviceSessionRecoveryMaxAggregateOutputType = {
    id: number | null;
    deviceId: number | null;
    codeHash: string | null;
    expiresAt: Date | null;
    usedAt: Date | null;
    invalidatedAt: Date | null;
    createdByAdminId: number | null;
    createdAt: Date | null;
};
export type DeviceSessionRecoveryCountAggregateOutputType = {
    id: number;
    deviceId: number;
    codeHash: number;
    expiresAt: number;
    usedAt: number;
    invalidatedAt: number;
    createdByAdminId: number;
    createdAt: number;
    _all: number;
};
export type DeviceSessionRecoveryAvgAggregateInputType = {
    id?: true;
    deviceId?: true;
    createdByAdminId?: true;
};
export type DeviceSessionRecoverySumAggregateInputType = {
    id?: true;
    deviceId?: true;
    createdByAdminId?: true;
};
export type DeviceSessionRecoveryMinAggregateInputType = {
    id?: true;
    deviceId?: true;
    codeHash?: true;
    expiresAt?: true;
    usedAt?: true;
    invalidatedAt?: true;
    createdByAdminId?: true;
    createdAt?: true;
};
export type DeviceSessionRecoveryMaxAggregateInputType = {
    id?: true;
    deviceId?: true;
    codeHash?: true;
    expiresAt?: true;
    usedAt?: true;
    invalidatedAt?: true;
    createdByAdminId?: true;
    createdAt?: true;
};
export type DeviceSessionRecoveryCountAggregateInputType = {
    id?: true;
    deviceId?: true;
    codeHash?: true;
    expiresAt?: true;
    usedAt?: true;
    invalidatedAt?: true;
    createdByAdminId?: true;
    createdAt?: true;
    _all?: true;
};
export type DeviceSessionRecoveryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceSessionRecovery to aggregate.
     */
    where?: Prisma.DeviceSessionRecoveryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DeviceSessionRecoveries to fetch.
     */
    orderBy?: Prisma.DeviceSessionRecoveryOrderByWithRelationInput | Prisma.DeviceSessionRecoveryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.DeviceSessionRecoveryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DeviceSessionRecoveries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DeviceSessionRecoveries.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned DeviceSessionRecoveries
    **/
    _count?: true | DeviceSessionRecoveryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: DeviceSessionRecoveryAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: DeviceSessionRecoverySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: DeviceSessionRecoveryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: DeviceSessionRecoveryMaxAggregateInputType;
};
export type GetDeviceSessionRecoveryAggregateType<T extends DeviceSessionRecoveryAggregateArgs> = {
    [P in keyof T & keyof AggregateDeviceSessionRecovery]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDeviceSessionRecovery[P]> : Prisma.GetScalarType<T[P], AggregateDeviceSessionRecovery[P]>;
};
export type DeviceSessionRecoveryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DeviceSessionRecoveryWhereInput;
    orderBy?: Prisma.DeviceSessionRecoveryOrderByWithAggregationInput | Prisma.DeviceSessionRecoveryOrderByWithAggregationInput[];
    by: Prisma.DeviceSessionRecoveryScalarFieldEnum[] | Prisma.DeviceSessionRecoveryScalarFieldEnum;
    having?: Prisma.DeviceSessionRecoveryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DeviceSessionRecoveryCountAggregateInputType | true;
    _avg?: DeviceSessionRecoveryAvgAggregateInputType;
    _sum?: DeviceSessionRecoverySumAggregateInputType;
    _min?: DeviceSessionRecoveryMinAggregateInputType;
    _max?: DeviceSessionRecoveryMaxAggregateInputType;
};
export type DeviceSessionRecoveryGroupByOutputType = {
    id: number;
    deviceId: number;
    codeHash: string;
    expiresAt: Date;
    usedAt: Date | null;
    invalidatedAt: Date | null;
    createdByAdminId: number | null;
    createdAt: Date;
    _count: DeviceSessionRecoveryCountAggregateOutputType | null;
    _avg: DeviceSessionRecoveryAvgAggregateOutputType | null;
    _sum: DeviceSessionRecoverySumAggregateOutputType | null;
    _min: DeviceSessionRecoveryMinAggregateOutputType | null;
    _max: DeviceSessionRecoveryMaxAggregateOutputType | null;
};
export type GetDeviceSessionRecoveryGroupByPayload<T extends DeviceSessionRecoveryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DeviceSessionRecoveryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DeviceSessionRecoveryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DeviceSessionRecoveryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DeviceSessionRecoveryGroupByOutputType[P]>;
}>>;
export type DeviceSessionRecoveryWhereInput = {
    AND?: Prisma.DeviceSessionRecoveryWhereInput | Prisma.DeviceSessionRecoveryWhereInput[];
    OR?: Prisma.DeviceSessionRecoveryWhereInput[];
    NOT?: Prisma.DeviceSessionRecoveryWhereInput | Prisma.DeviceSessionRecoveryWhereInput[];
    id?: Prisma.IntFilter<"DeviceSessionRecovery"> | number;
    deviceId?: Prisma.IntFilter<"DeviceSessionRecovery"> | number;
    codeHash?: Prisma.StringFilter<"DeviceSessionRecovery"> | string;
    expiresAt?: Prisma.DateTimeFilter<"DeviceSessionRecovery"> | Date | string;
    usedAt?: Prisma.DateTimeNullableFilter<"DeviceSessionRecovery"> | Date | string | null;
    invalidatedAt?: Prisma.DateTimeNullableFilter<"DeviceSessionRecovery"> | Date | string | null;
    createdByAdminId?: Prisma.IntNullableFilter<"DeviceSessionRecovery"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"DeviceSessionRecovery"> | Date | string;
    device?: Prisma.XOR<Prisma.UserDeviceScalarRelationFilter, Prisma.UserDeviceWhereInput>;
    createdByAdmin?: Prisma.XOR<Prisma.AdminNullableScalarRelationFilter, Prisma.AdminWhereInput> | null;
};
export type DeviceSessionRecoveryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    codeHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    usedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    invalidatedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdByAdminId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    device?: Prisma.UserDeviceOrderByWithRelationInput;
    createdByAdmin?: Prisma.AdminOrderByWithRelationInput;
};
export type DeviceSessionRecoveryWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    codeHash?: string;
    AND?: Prisma.DeviceSessionRecoveryWhereInput | Prisma.DeviceSessionRecoveryWhereInput[];
    OR?: Prisma.DeviceSessionRecoveryWhereInput[];
    NOT?: Prisma.DeviceSessionRecoveryWhereInput | Prisma.DeviceSessionRecoveryWhereInput[];
    deviceId?: Prisma.IntFilter<"DeviceSessionRecovery"> | number;
    expiresAt?: Prisma.DateTimeFilter<"DeviceSessionRecovery"> | Date | string;
    usedAt?: Prisma.DateTimeNullableFilter<"DeviceSessionRecovery"> | Date | string | null;
    invalidatedAt?: Prisma.DateTimeNullableFilter<"DeviceSessionRecovery"> | Date | string | null;
    createdByAdminId?: Prisma.IntNullableFilter<"DeviceSessionRecovery"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"DeviceSessionRecovery"> | Date | string;
    device?: Prisma.XOR<Prisma.UserDeviceScalarRelationFilter, Prisma.UserDeviceWhereInput>;
    createdByAdmin?: Prisma.XOR<Prisma.AdminNullableScalarRelationFilter, Prisma.AdminWhereInput> | null;
}, "id" | "codeHash">;
export type DeviceSessionRecoveryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    codeHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    usedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    invalidatedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdByAdminId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.DeviceSessionRecoveryCountOrderByAggregateInput;
    _avg?: Prisma.DeviceSessionRecoveryAvgOrderByAggregateInput;
    _max?: Prisma.DeviceSessionRecoveryMaxOrderByAggregateInput;
    _min?: Prisma.DeviceSessionRecoveryMinOrderByAggregateInput;
    _sum?: Prisma.DeviceSessionRecoverySumOrderByAggregateInput;
};
export type DeviceSessionRecoveryScalarWhereWithAggregatesInput = {
    AND?: Prisma.DeviceSessionRecoveryScalarWhereWithAggregatesInput | Prisma.DeviceSessionRecoveryScalarWhereWithAggregatesInput[];
    OR?: Prisma.DeviceSessionRecoveryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DeviceSessionRecoveryScalarWhereWithAggregatesInput | Prisma.DeviceSessionRecoveryScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"DeviceSessionRecovery"> | number;
    deviceId?: Prisma.IntWithAggregatesFilter<"DeviceSessionRecovery"> | number;
    codeHash?: Prisma.StringWithAggregatesFilter<"DeviceSessionRecovery"> | string;
    expiresAt?: Prisma.DateTimeWithAggregatesFilter<"DeviceSessionRecovery"> | Date | string;
    usedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"DeviceSessionRecovery"> | Date | string | null;
    invalidatedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"DeviceSessionRecovery"> | Date | string | null;
    createdByAdminId?: Prisma.IntNullableWithAggregatesFilter<"DeviceSessionRecovery"> | number | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"DeviceSessionRecovery"> | Date | string;
};
export type DeviceSessionRecoveryCreateInput = {
    codeHash: string;
    expiresAt: Date | string;
    usedAt?: Date | string | null;
    invalidatedAt?: Date | string | null;
    createdAt?: Date | string;
    device: Prisma.UserDeviceCreateNestedOneWithoutSessionRecoveriesInput;
    createdByAdmin?: Prisma.AdminCreateNestedOneWithoutSessionRecoveriesInput;
};
export type DeviceSessionRecoveryUncheckedCreateInput = {
    id?: number;
    deviceId: number;
    codeHash: string;
    expiresAt: Date | string;
    usedAt?: Date | string | null;
    invalidatedAt?: Date | string | null;
    createdByAdminId?: number | null;
    createdAt?: Date | string;
};
export type DeviceSessionRecoveryUpdateInput = {
    codeHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    invalidatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    device?: Prisma.UserDeviceUpdateOneRequiredWithoutSessionRecoveriesNestedInput;
    createdByAdmin?: Prisma.AdminUpdateOneWithoutSessionRecoveriesNestedInput;
};
export type DeviceSessionRecoveryUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    deviceId?: Prisma.IntFieldUpdateOperationsInput | number;
    codeHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    invalidatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByAdminId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeviceSessionRecoveryCreateManyInput = {
    id?: number;
    deviceId: number;
    codeHash: string;
    expiresAt: Date | string;
    usedAt?: Date | string | null;
    invalidatedAt?: Date | string | null;
    createdByAdminId?: number | null;
    createdAt?: Date | string;
};
export type DeviceSessionRecoveryUpdateManyMutationInput = {
    codeHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    invalidatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeviceSessionRecoveryUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    deviceId?: Prisma.IntFieldUpdateOperationsInput | number;
    codeHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    invalidatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByAdminId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeviceSessionRecoveryListRelationFilter = {
    every?: Prisma.DeviceSessionRecoveryWhereInput;
    some?: Prisma.DeviceSessionRecoveryWhereInput;
    none?: Prisma.DeviceSessionRecoveryWhereInput;
};
export type DeviceSessionRecoveryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DeviceSessionRecoveryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    codeHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    usedAt?: Prisma.SortOrder;
    invalidatedAt?: Prisma.SortOrder;
    createdByAdminId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DeviceSessionRecoveryAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    createdByAdminId?: Prisma.SortOrder;
};
export type DeviceSessionRecoveryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    codeHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    usedAt?: Prisma.SortOrder;
    invalidatedAt?: Prisma.SortOrder;
    createdByAdminId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DeviceSessionRecoveryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    codeHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    usedAt?: Prisma.SortOrder;
    invalidatedAt?: Prisma.SortOrder;
    createdByAdminId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DeviceSessionRecoverySumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    createdByAdminId?: Prisma.SortOrder;
};
export type DeviceSessionRecoveryCreateNestedManyWithoutCreatedByAdminInput = {
    create?: Prisma.XOR<Prisma.DeviceSessionRecoveryCreateWithoutCreatedByAdminInput, Prisma.DeviceSessionRecoveryUncheckedCreateWithoutCreatedByAdminInput> | Prisma.DeviceSessionRecoveryCreateWithoutCreatedByAdminInput[] | Prisma.DeviceSessionRecoveryUncheckedCreateWithoutCreatedByAdminInput[];
    connectOrCreate?: Prisma.DeviceSessionRecoveryCreateOrConnectWithoutCreatedByAdminInput | Prisma.DeviceSessionRecoveryCreateOrConnectWithoutCreatedByAdminInput[];
    createMany?: Prisma.DeviceSessionRecoveryCreateManyCreatedByAdminInputEnvelope;
    connect?: Prisma.DeviceSessionRecoveryWhereUniqueInput | Prisma.DeviceSessionRecoveryWhereUniqueInput[];
};
export type DeviceSessionRecoveryUncheckedCreateNestedManyWithoutCreatedByAdminInput = {
    create?: Prisma.XOR<Prisma.DeviceSessionRecoveryCreateWithoutCreatedByAdminInput, Prisma.DeviceSessionRecoveryUncheckedCreateWithoutCreatedByAdminInput> | Prisma.DeviceSessionRecoveryCreateWithoutCreatedByAdminInput[] | Prisma.DeviceSessionRecoveryUncheckedCreateWithoutCreatedByAdminInput[];
    connectOrCreate?: Prisma.DeviceSessionRecoveryCreateOrConnectWithoutCreatedByAdminInput | Prisma.DeviceSessionRecoveryCreateOrConnectWithoutCreatedByAdminInput[];
    createMany?: Prisma.DeviceSessionRecoveryCreateManyCreatedByAdminInputEnvelope;
    connect?: Prisma.DeviceSessionRecoveryWhereUniqueInput | Prisma.DeviceSessionRecoveryWhereUniqueInput[];
};
export type DeviceSessionRecoveryUpdateManyWithoutCreatedByAdminNestedInput = {
    create?: Prisma.XOR<Prisma.DeviceSessionRecoveryCreateWithoutCreatedByAdminInput, Prisma.DeviceSessionRecoveryUncheckedCreateWithoutCreatedByAdminInput> | Prisma.DeviceSessionRecoveryCreateWithoutCreatedByAdminInput[] | Prisma.DeviceSessionRecoveryUncheckedCreateWithoutCreatedByAdminInput[];
    connectOrCreate?: Prisma.DeviceSessionRecoveryCreateOrConnectWithoutCreatedByAdminInput | Prisma.DeviceSessionRecoveryCreateOrConnectWithoutCreatedByAdminInput[];
    upsert?: Prisma.DeviceSessionRecoveryUpsertWithWhereUniqueWithoutCreatedByAdminInput | Prisma.DeviceSessionRecoveryUpsertWithWhereUniqueWithoutCreatedByAdminInput[];
    createMany?: Prisma.DeviceSessionRecoveryCreateManyCreatedByAdminInputEnvelope;
    set?: Prisma.DeviceSessionRecoveryWhereUniqueInput | Prisma.DeviceSessionRecoveryWhereUniqueInput[];
    disconnect?: Prisma.DeviceSessionRecoveryWhereUniqueInput | Prisma.DeviceSessionRecoveryWhereUniqueInput[];
    delete?: Prisma.DeviceSessionRecoveryWhereUniqueInput | Prisma.DeviceSessionRecoveryWhereUniqueInput[];
    connect?: Prisma.DeviceSessionRecoveryWhereUniqueInput | Prisma.DeviceSessionRecoveryWhereUniqueInput[];
    update?: Prisma.DeviceSessionRecoveryUpdateWithWhereUniqueWithoutCreatedByAdminInput | Prisma.DeviceSessionRecoveryUpdateWithWhereUniqueWithoutCreatedByAdminInput[];
    updateMany?: Prisma.DeviceSessionRecoveryUpdateManyWithWhereWithoutCreatedByAdminInput | Prisma.DeviceSessionRecoveryUpdateManyWithWhereWithoutCreatedByAdminInput[];
    deleteMany?: Prisma.DeviceSessionRecoveryScalarWhereInput | Prisma.DeviceSessionRecoveryScalarWhereInput[];
};
export type DeviceSessionRecoveryUncheckedUpdateManyWithoutCreatedByAdminNestedInput = {
    create?: Prisma.XOR<Prisma.DeviceSessionRecoveryCreateWithoutCreatedByAdminInput, Prisma.DeviceSessionRecoveryUncheckedCreateWithoutCreatedByAdminInput> | Prisma.DeviceSessionRecoveryCreateWithoutCreatedByAdminInput[] | Prisma.DeviceSessionRecoveryUncheckedCreateWithoutCreatedByAdminInput[];
    connectOrCreate?: Prisma.DeviceSessionRecoveryCreateOrConnectWithoutCreatedByAdminInput | Prisma.DeviceSessionRecoveryCreateOrConnectWithoutCreatedByAdminInput[];
    upsert?: Prisma.DeviceSessionRecoveryUpsertWithWhereUniqueWithoutCreatedByAdminInput | Prisma.DeviceSessionRecoveryUpsertWithWhereUniqueWithoutCreatedByAdminInput[];
    createMany?: Prisma.DeviceSessionRecoveryCreateManyCreatedByAdminInputEnvelope;
    set?: Prisma.DeviceSessionRecoveryWhereUniqueInput | Prisma.DeviceSessionRecoveryWhereUniqueInput[];
    disconnect?: Prisma.DeviceSessionRecoveryWhereUniqueInput | Prisma.DeviceSessionRecoveryWhereUniqueInput[];
    delete?: Prisma.DeviceSessionRecoveryWhereUniqueInput | Prisma.DeviceSessionRecoveryWhereUniqueInput[];
    connect?: Prisma.DeviceSessionRecoveryWhereUniqueInput | Prisma.DeviceSessionRecoveryWhereUniqueInput[];
    update?: Prisma.DeviceSessionRecoveryUpdateWithWhereUniqueWithoutCreatedByAdminInput | Prisma.DeviceSessionRecoveryUpdateWithWhereUniqueWithoutCreatedByAdminInput[];
    updateMany?: Prisma.DeviceSessionRecoveryUpdateManyWithWhereWithoutCreatedByAdminInput | Prisma.DeviceSessionRecoveryUpdateManyWithWhereWithoutCreatedByAdminInput[];
    deleteMany?: Prisma.DeviceSessionRecoveryScalarWhereInput | Prisma.DeviceSessionRecoveryScalarWhereInput[];
};
export type DeviceSessionRecoveryCreateNestedManyWithoutDeviceInput = {
    create?: Prisma.XOR<Prisma.DeviceSessionRecoveryCreateWithoutDeviceInput, Prisma.DeviceSessionRecoveryUncheckedCreateWithoutDeviceInput> | Prisma.DeviceSessionRecoveryCreateWithoutDeviceInput[] | Prisma.DeviceSessionRecoveryUncheckedCreateWithoutDeviceInput[];
    connectOrCreate?: Prisma.DeviceSessionRecoveryCreateOrConnectWithoutDeviceInput | Prisma.DeviceSessionRecoveryCreateOrConnectWithoutDeviceInput[];
    createMany?: Prisma.DeviceSessionRecoveryCreateManyDeviceInputEnvelope;
    connect?: Prisma.DeviceSessionRecoveryWhereUniqueInput | Prisma.DeviceSessionRecoveryWhereUniqueInput[];
};
export type DeviceSessionRecoveryUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: Prisma.XOR<Prisma.DeviceSessionRecoveryCreateWithoutDeviceInput, Prisma.DeviceSessionRecoveryUncheckedCreateWithoutDeviceInput> | Prisma.DeviceSessionRecoveryCreateWithoutDeviceInput[] | Prisma.DeviceSessionRecoveryUncheckedCreateWithoutDeviceInput[];
    connectOrCreate?: Prisma.DeviceSessionRecoveryCreateOrConnectWithoutDeviceInput | Prisma.DeviceSessionRecoveryCreateOrConnectWithoutDeviceInput[];
    createMany?: Prisma.DeviceSessionRecoveryCreateManyDeviceInputEnvelope;
    connect?: Prisma.DeviceSessionRecoveryWhereUniqueInput | Prisma.DeviceSessionRecoveryWhereUniqueInput[];
};
export type DeviceSessionRecoveryUpdateManyWithoutDeviceNestedInput = {
    create?: Prisma.XOR<Prisma.DeviceSessionRecoveryCreateWithoutDeviceInput, Prisma.DeviceSessionRecoveryUncheckedCreateWithoutDeviceInput> | Prisma.DeviceSessionRecoveryCreateWithoutDeviceInput[] | Prisma.DeviceSessionRecoveryUncheckedCreateWithoutDeviceInput[];
    connectOrCreate?: Prisma.DeviceSessionRecoveryCreateOrConnectWithoutDeviceInput | Prisma.DeviceSessionRecoveryCreateOrConnectWithoutDeviceInput[];
    upsert?: Prisma.DeviceSessionRecoveryUpsertWithWhereUniqueWithoutDeviceInput | Prisma.DeviceSessionRecoveryUpsertWithWhereUniqueWithoutDeviceInput[];
    createMany?: Prisma.DeviceSessionRecoveryCreateManyDeviceInputEnvelope;
    set?: Prisma.DeviceSessionRecoveryWhereUniqueInput | Prisma.DeviceSessionRecoveryWhereUniqueInput[];
    disconnect?: Prisma.DeviceSessionRecoveryWhereUniqueInput | Prisma.DeviceSessionRecoveryWhereUniqueInput[];
    delete?: Prisma.DeviceSessionRecoveryWhereUniqueInput | Prisma.DeviceSessionRecoveryWhereUniqueInput[];
    connect?: Prisma.DeviceSessionRecoveryWhereUniqueInput | Prisma.DeviceSessionRecoveryWhereUniqueInput[];
    update?: Prisma.DeviceSessionRecoveryUpdateWithWhereUniqueWithoutDeviceInput | Prisma.DeviceSessionRecoveryUpdateWithWhereUniqueWithoutDeviceInput[];
    updateMany?: Prisma.DeviceSessionRecoveryUpdateManyWithWhereWithoutDeviceInput | Prisma.DeviceSessionRecoveryUpdateManyWithWhereWithoutDeviceInput[];
    deleteMany?: Prisma.DeviceSessionRecoveryScalarWhereInput | Prisma.DeviceSessionRecoveryScalarWhereInput[];
};
export type DeviceSessionRecoveryUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: Prisma.XOR<Prisma.DeviceSessionRecoveryCreateWithoutDeviceInput, Prisma.DeviceSessionRecoveryUncheckedCreateWithoutDeviceInput> | Prisma.DeviceSessionRecoveryCreateWithoutDeviceInput[] | Prisma.DeviceSessionRecoveryUncheckedCreateWithoutDeviceInput[];
    connectOrCreate?: Prisma.DeviceSessionRecoveryCreateOrConnectWithoutDeviceInput | Prisma.DeviceSessionRecoveryCreateOrConnectWithoutDeviceInput[];
    upsert?: Prisma.DeviceSessionRecoveryUpsertWithWhereUniqueWithoutDeviceInput | Prisma.DeviceSessionRecoveryUpsertWithWhereUniqueWithoutDeviceInput[];
    createMany?: Prisma.DeviceSessionRecoveryCreateManyDeviceInputEnvelope;
    set?: Prisma.DeviceSessionRecoveryWhereUniqueInput | Prisma.DeviceSessionRecoveryWhereUniqueInput[];
    disconnect?: Prisma.DeviceSessionRecoveryWhereUniqueInput | Prisma.DeviceSessionRecoveryWhereUniqueInput[];
    delete?: Prisma.DeviceSessionRecoveryWhereUniqueInput | Prisma.DeviceSessionRecoveryWhereUniqueInput[];
    connect?: Prisma.DeviceSessionRecoveryWhereUniqueInput | Prisma.DeviceSessionRecoveryWhereUniqueInput[];
    update?: Prisma.DeviceSessionRecoveryUpdateWithWhereUniqueWithoutDeviceInput | Prisma.DeviceSessionRecoveryUpdateWithWhereUniqueWithoutDeviceInput[];
    updateMany?: Prisma.DeviceSessionRecoveryUpdateManyWithWhereWithoutDeviceInput | Prisma.DeviceSessionRecoveryUpdateManyWithWhereWithoutDeviceInput[];
    deleteMany?: Prisma.DeviceSessionRecoveryScalarWhereInput | Prisma.DeviceSessionRecoveryScalarWhereInput[];
};
export type DeviceSessionRecoveryCreateWithoutCreatedByAdminInput = {
    codeHash: string;
    expiresAt: Date | string;
    usedAt?: Date | string | null;
    invalidatedAt?: Date | string | null;
    createdAt?: Date | string;
    device: Prisma.UserDeviceCreateNestedOneWithoutSessionRecoveriesInput;
};
export type DeviceSessionRecoveryUncheckedCreateWithoutCreatedByAdminInput = {
    id?: number;
    deviceId: number;
    codeHash: string;
    expiresAt: Date | string;
    usedAt?: Date | string | null;
    invalidatedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type DeviceSessionRecoveryCreateOrConnectWithoutCreatedByAdminInput = {
    where: Prisma.DeviceSessionRecoveryWhereUniqueInput;
    create: Prisma.XOR<Prisma.DeviceSessionRecoveryCreateWithoutCreatedByAdminInput, Prisma.DeviceSessionRecoveryUncheckedCreateWithoutCreatedByAdminInput>;
};
export type DeviceSessionRecoveryCreateManyCreatedByAdminInputEnvelope = {
    data: Prisma.DeviceSessionRecoveryCreateManyCreatedByAdminInput | Prisma.DeviceSessionRecoveryCreateManyCreatedByAdminInput[];
    skipDuplicates?: boolean;
};
export type DeviceSessionRecoveryUpsertWithWhereUniqueWithoutCreatedByAdminInput = {
    where: Prisma.DeviceSessionRecoveryWhereUniqueInput;
    update: Prisma.XOR<Prisma.DeviceSessionRecoveryUpdateWithoutCreatedByAdminInput, Prisma.DeviceSessionRecoveryUncheckedUpdateWithoutCreatedByAdminInput>;
    create: Prisma.XOR<Prisma.DeviceSessionRecoveryCreateWithoutCreatedByAdminInput, Prisma.DeviceSessionRecoveryUncheckedCreateWithoutCreatedByAdminInput>;
};
export type DeviceSessionRecoveryUpdateWithWhereUniqueWithoutCreatedByAdminInput = {
    where: Prisma.DeviceSessionRecoveryWhereUniqueInput;
    data: Prisma.XOR<Prisma.DeviceSessionRecoveryUpdateWithoutCreatedByAdminInput, Prisma.DeviceSessionRecoveryUncheckedUpdateWithoutCreatedByAdminInput>;
};
export type DeviceSessionRecoveryUpdateManyWithWhereWithoutCreatedByAdminInput = {
    where: Prisma.DeviceSessionRecoveryScalarWhereInput;
    data: Prisma.XOR<Prisma.DeviceSessionRecoveryUpdateManyMutationInput, Prisma.DeviceSessionRecoveryUncheckedUpdateManyWithoutCreatedByAdminInput>;
};
export type DeviceSessionRecoveryScalarWhereInput = {
    AND?: Prisma.DeviceSessionRecoveryScalarWhereInput | Prisma.DeviceSessionRecoveryScalarWhereInput[];
    OR?: Prisma.DeviceSessionRecoveryScalarWhereInput[];
    NOT?: Prisma.DeviceSessionRecoveryScalarWhereInput | Prisma.DeviceSessionRecoveryScalarWhereInput[];
    id?: Prisma.IntFilter<"DeviceSessionRecovery"> | number;
    deviceId?: Prisma.IntFilter<"DeviceSessionRecovery"> | number;
    codeHash?: Prisma.StringFilter<"DeviceSessionRecovery"> | string;
    expiresAt?: Prisma.DateTimeFilter<"DeviceSessionRecovery"> | Date | string;
    usedAt?: Prisma.DateTimeNullableFilter<"DeviceSessionRecovery"> | Date | string | null;
    invalidatedAt?: Prisma.DateTimeNullableFilter<"DeviceSessionRecovery"> | Date | string | null;
    createdByAdminId?: Prisma.IntNullableFilter<"DeviceSessionRecovery"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"DeviceSessionRecovery"> | Date | string;
};
export type DeviceSessionRecoveryCreateWithoutDeviceInput = {
    codeHash: string;
    expiresAt: Date | string;
    usedAt?: Date | string | null;
    invalidatedAt?: Date | string | null;
    createdAt?: Date | string;
    createdByAdmin?: Prisma.AdminCreateNestedOneWithoutSessionRecoveriesInput;
};
export type DeviceSessionRecoveryUncheckedCreateWithoutDeviceInput = {
    id?: number;
    codeHash: string;
    expiresAt: Date | string;
    usedAt?: Date | string | null;
    invalidatedAt?: Date | string | null;
    createdByAdminId?: number | null;
    createdAt?: Date | string;
};
export type DeviceSessionRecoveryCreateOrConnectWithoutDeviceInput = {
    where: Prisma.DeviceSessionRecoveryWhereUniqueInput;
    create: Prisma.XOR<Prisma.DeviceSessionRecoveryCreateWithoutDeviceInput, Prisma.DeviceSessionRecoveryUncheckedCreateWithoutDeviceInput>;
};
export type DeviceSessionRecoveryCreateManyDeviceInputEnvelope = {
    data: Prisma.DeviceSessionRecoveryCreateManyDeviceInput | Prisma.DeviceSessionRecoveryCreateManyDeviceInput[];
    skipDuplicates?: boolean;
};
export type DeviceSessionRecoveryUpsertWithWhereUniqueWithoutDeviceInput = {
    where: Prisma.DeviceSessionRecoveryWhereUniqueInput;
    update: Prisma.XOR<Prisma.DeviceSessionRecoveryUpdateWithoutDeviceInput, Prisma.DeviceSessionRecoveryUncheckedUpdateWithoutDeviceInput>;
    create: Prisma.XOR<Prisma.DeviceSessionRecoveryCreateWithoutDeviceInput, Prisma.DeviceSessionRecoveryUncheckedCreateWithoutDeviceInput>;
};
export type DeviceSessionRecoveryUpdateWithWhereUniqueWithoutDeviceInput = {
    where: Prisma.DeviceSessionRecoveryWhereUniqueInput;
    data: Prisma.XOR<Prisma.DeviceSessionRecoveryUpdateWithoutDeviceInput, Prisma.DeviceSessionRecoveryUncheckedUpdateWithoutDeviceInput>;
};
export type DeviceSessionRecoveryUpdateManyWithWhereWithoutDeviceInput = {
    where: Prisma.DeviceSessionRecoveryScalarWhereInput;
    data: Prisma.XOR<Prisma.DeviceSessionRecoveryUpdateManyMutationInput, Prisma.DeviceSessionRecoveryUncheckedUpdateManyWithoutDeviceInput>;
};
export type DeviceSessionRecoveryCreateManyCreatedByAdminInput = {
    id?: number;
    deviceId: number;
    codeHash: string;
    expiresAt: Date | string;
    usedAt?: Date | string | null;
    invalidatedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type DeviceSessionRecoveryUpdateWithoutCreatedByAdminInput = {
    codeHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    invalidatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    device?: Prisma.UserDeviceUpdateOneRequiredWithoutSessionRecoveriesNestedInput;
};
export type DeviceSessionRecoveryUncheckedUpdateWithoutCreatedByAdminInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    deviceId?: Prisma.IntFieldUpdateOperationsInput | number;
    codeHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    invalidatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeviceSessionRecoveryUncheckedUpdateManyWithoutCreatedByAdminInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    deviceId?: Prisma.IntFieldUpdateOperationsInput | number;
    codeHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    invalidatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeviceSessionRecoveryCreateManyDeviceInput = {
    id?: number;
    codeHash: string;
    expiresAt: Date | string;
    usedAt?: Date | string | null;
    invalidatedAt?: Date | string | null;
    createdByAdminId?: number | null;
    createdAt?: Date | string;
};
export type DeviceSessionRecoveryUpdateWithoutDeviceInput = {
    codeHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    invalidatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdByAdmin?: Prisma.AdminUpdateOneWithoutSessionRecoveriesNestedInput;
};
export type DeviceSessionRecoveryUncheckedUpdateWithoutDeviceInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    codeHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    invalidatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByAdminId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeviceSessionRecoveryUncheckedUpdateManyWithoutDeviceInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    codeHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    invalidatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByAdminId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeviceSessionRecoverySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    deviceId?: boolean;
    codeHash?: boolean;
    expiresAt?: boolean;
    usedAt?: boolean;
    invalidatedAt?: boolean;
    createdByAdminId?: boolean;
    createdAt?: boolean;
    device?: boolean | Prisma.UserDeviceDefaultArgs<ExtArgs>;
    createdByAdmin?: boolean | Prisma.DeviceSessionRecovery$createdByAdminArgs<ExtArgs>;
}, ExtArgs["result"]["deviceSessionRecovery"]>;
export type DeviceSessionRecoverySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    deviceId?: boolean;
    codeHash?: boolean;
    expiresAt?: boolean;
    usedAt?: boolean;
    invalidatedAt?: boolean;
    createdByAdminId?: boolean;
    createdAt?: boolean;
    device?: boolean | Prisma.UserDeviceDefaultArgs<ExtArgs>;
    createdByAdmin?: boolean | Prisma.DeviceSessionRecovery$createdByAdminArgs<ExtArgs>;
}, ExtArgs["result"]["deviceSessionRecovery"]>;
export type DeviceSessionRecoverySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    deviceId?: boolean;
    codeHash?: boolean;
    expiresAt?: boolean;
    usedAt?: boolean;
    invalidatedAt?: boolean;
    createdByAdminId?: boolean;
    createdAt?: boolean;
    device?: boolean | Prisma.UserDeviceDefaultArgs<ExtArgs>;
    createdByAdmin?: boolean | Prisma.DeviceSessionRecovery$createdByAdminArgs<ExtArgs>;
}, ExtArgs["result"]["deviceSessionRecovery"]>;
export type DeviceSessionRecoverySelectScalar = {
    id?: boolean;
    deviceId?: boolean;
    codeHash?: boolean;
    expiresAt?: boolean;
    usedAt?: boolean;
    invalidatedAt?: boolean;
    createdByAdminId?: boolean;
    createdAt?: boolean;
};
export type DeviceSessionRecoveryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "deviceId" | "codeHash" | "expiresAt" | "usedAt" | "invalidatedAt" | "createdByAdminId" | "createdAt", ExtArgs["result"]["deviceSessionRecovery"]>;
export type DeviceSessionRecoveryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    device?: boolean | Prisma.UserDeviceDefaultArgs<ExtArgs>;
    createdByAdmin?: boolean | Prisma.DeviceSessionRecovery$createdByAdminArgs<ExtArgs>;
};
export type DeviceSessionRecoveryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    device?: boolean | Prisma.UserDeviceDefaultArgs<ExtArgs>;
    createdByAdmin?: boolean | Prisma.DeviceSessionRecovery$createdByAdminArgs<ExtArgs>;
};
export type DeviceSessionRecoveryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    device?: boolean | Prisma.UserDeviceDefaultArgs<ExtArgs>;
    createdByAdmin?: boolean | Prisma.DeviceSessionRecovery$createdByAdminArgs<ExtArgs>;
};
export type $DeviceSessionRecoveryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DeviceSessionRecovery";
    objects: {
        device: Prisma.$UserDevicePayload<ExtArgs>;
        createdByAdmin: Prisma.$AdminPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        deviceId: number;
        codeHash: string;
        expiresAt: Date;
        usedAt: Date | null;
        invalidatedAt: Date | null;
        createdByAdminId: number | null;
        createdAt: Date;
    }, ExtArgs["result"]["deviceSessionRecovery"]>;
    composites: {};
};
export type DeviceSessionRecoveryGetPayload<S extends boolean | null | undefined | DeviceSessionRecoveryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DeviceSessionRecoveryPayload, S>;
export type DeviceSessionRecoveryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DeviceSessionRecoveryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DeviceSessionRecoveryCountAggregateInputType | true;
};
export interface DeviceSessionRecoveryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DeviceSessionRecovery'];
        meta: {
            name: 'DeviceSessionRecovery';
        };
    };
    /**
     * Find zero or one DeviceSessionRecovery that matches the filter.
     * @param {DeviceSessionRecoveryFindUniqueArgs} args - Arguments to find a DeviceSessionRecovery
     * @example
     * // Get one DeviceSessionRecovery
     * const deviceSessionRecovery = await prisma.deviceSessionRecovery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceSessionRecoveryFindUniqueArgs>(args: Prisma.SelectSubset<T, DeviceSessionRecoveryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DeviceSessionRecoveryClient<runtime.Types.Result.GetResult<Prisma.$DeviceSessionRecoveryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one DeviceSessionRecovery that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceSessionRecoveryFindUniqueOrThrowArgs} args - Arguments to find a DeviceSessionRecovery
     * @example
     * // Get one DeviceSessionRecovery
     * const deviceSessionRecovery = await prisma.deviceSessionRecovery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceSessionRecoveryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DeviceSessionRecoveryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DeviceSessionRecoveryClient<runtime.Types.Result.GetResult<Prisma.$DeviceSessionRecoveryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first DeviceSessionRecovery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceSessionRecoveryFindFirstArgs} args - Arguments to find a DeviceSessionRecovery
     * @example
     * // Get one DeviceSessionRecovery
     * const deviceSessionRecovery = await prisma.deviceSessionRecovery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceSessionRecoveryFindFirstArgs>(args?: Prisma.SelectSubset<T, DeviceSessionRecoveryFindFirstArgs<ExtArgs>>): Prisma.Prisma__DeviceSessionRecoveryClient<runtime.Types.Result.GetResult<Prisma.$DeviceSessionRecoveryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first DeviceSessionRecovery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceSessionRecoveryFindFirstOrThrowArgs} args - Arguments to find a DeviceSessionRecovery
     * @example
     * // Get one DeviceSessionRecovery
     * const deviceSessionRecovery = await prisma.deviceSessionRecovery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceSessionRecoveryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DeviceSessionRecoveryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DeviceSessionRecoveryClient<runtime.Types.Result.GetResult<Prisma.$DeviceSessionRecoveryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more DeviceSessionRecoveries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceSessionRecoveryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeviceSessionRecoveries
     * const deviceSessionRecoveries = await prisma.deviceSessionRecovery.findMany()
     *
     * // Get first 10 DeviceSessionRecoveries
     * const deviceSessionRecoveries = await prisma.deviceSessionRecovery.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const deviceSessionRecoveryWithIdOnly = await prisma.deviceSessionRecovery.findMany({ select: { id: true } })
     *
     */
    findMany<T extends DeviceSessionRecoveryFindManyArgs>(args?: Prisma.SelectSubset<T, DeviceSessionRecoveryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeviceSessionRecoveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a DeviceSessionRecovery.
     * @param {DeviceSessionRecoveryCreateArgs} args - Arguments to create a DeviceSessionRecovery.
     * @example
     * // Create one DeviceSessionRecovery
     * const DeviceSessionRecovery = await prisma.deviceSessionRecovery.create({
     *   data: {
     *     // ... data to create a DeviceSessionRecovery
     *   }
     * })
     *
     */
    create<T extends DeviceSessionRecoveryCreateArgs>(args: Prisma.SelectSubset<T, DeviceSessionRecoveryCreateArgs<ExtArgs>>): Prisma.Prisma__DeviceSessionRecoveryClient<runtime.Types.Result.GetResult<Prisma.$DeviceSessionRecoveryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many DeviceSessionRecoveries.
     * @param {DeviceSessionRecoveryCreateManyArgs} args - Arguments to create many DeviceSessionRecoveries.
     * @example
     * // Create many DeviceSessionRecoveries
     * const deviceSessionRecovery = await prisma.deviceSessionRecovery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends DeviceSessionRecoveryCreateManyArgs>(args?: Prisma.SelectSubset<T, DeviceSessionRecoveryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many DeviceSessionRecoveries and returns the data saved in the database.
     * @param {DeviceSessionRecoveryCreateManyAndReturnArgs} args - Arguments to create many DeviceSessionRecoveries.
     * @example
     * // Create many DeviceSessionRecoveries
     * const deviceSessionRecovery = await prisma.deviceSessionRecovery.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many DeviceSessionRecoveries and only return the `id`
     * const deviceSessionRecoveryWithIdOnly = await prisma.deviceSessionRecovery.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends DeviceSessionRecoveryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DeviceSessionRecoveryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeviceSessionRecoveryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a DeviceSessionRecovery.
     * @param {DeviceSessionRecoveryDeleteArgs} args - Arguments to delete one DeviceSessionRecovery.
     * @example
     * // Delete one DeviceSessionRecovery
     * const DeviceSessionRecovery = await prisma.deviceSessionRecovery.delete({
     *   where: {
     *     // ... filter to delete one DeviceSessionRecovery
     *   }
     * })
     *
     */
    delete<T extends DeviceSessionRecoveryDeleteArgs>(args: Prisma.SelectSubset<T, DeviceSessionRecoveryDeleteArgs<ExtArgs>>): Prisma.Prisma__DeviceSessionRecoveryClient<runtime.Types.Result.GetResult<Prisma.$DeviceSessionRecoveryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one DeviceSessionRecovery.
     * @param {DeviceSessionRecoveryUpdateArgs} args - Arguments to update one DeviceSessionRecovery.
     * @example
     * // Update one DeviceSessionRecovery
     * const deviceSessionRecovery = await prisma.deviceSessionRecovery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends DeviceSessionRecoveryUpdateArgs>(args: Prisma.SelectSubset<T, DeviceSessionRecoveryUpdateArgs<ExtArgs>>): Prisma.Prisma__DeviceSessionRecoveryClient<runtime.Types.Result.GetResult<Prisma.$DeviceSessionRecoveryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more DeviceSessionRecoveries.
     * @param {DeviceSessionRecoveryDeleteManyArgs} args - Arguments to filter DeviceSessionRecoveries to delete.
     * @example
     * // Delete a few DeviceSessionRecoveries
     * const { count } = await prisma.deviceSessionRecovery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends DeviceSessionRecoveryDeleteManyArgs>(args?: Prisma.SelectSubset<T, DeviceSessionRecoveryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more DeviceSessionRecoveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceSessionRecoveryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeviceSessionRecoveries
     * const deviceSessionRecovery = await prisma.deviceSessionRecovery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends DeviceSessionRecoveryUpdateManyArgs>(args: Prisma.SelectSubset<T, DeviceSessionRecoveryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more DeviceSessionRecoveries and returns the data updated in the database.
     * @param {DeviceSessionRecoveryUpdateManyAndReturnArgs} args - Arguments to update many DeviceSessionRecoveries.
     * @example
     * // Update many DeviceSessionRecoveries
     * const deviceSessionRecovery = await prisma.deviceSessionRecovery.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more DeviceSessionRecoveries and only return the `id`
     * const deviceSessionRecoveryWithIdOnly = await prisma.deviceSessionRecovery.updateManyAndReturn({
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
    updateManyAndReturn<T extends DeviceSessionRecoveryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DeviceSessionRecoveryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeviceSessionRecoveryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one DeviceSessionRecovery.
     * @param {DeviceSessionRecoveryUpsertArgs} args - Arguments to update or create a DeviceSessionRecovery.
     * @example
     * // Update or create a DeviceSessionRecovery
     * const deviceSessionRecovery = await prisma.deviceSessionRecovery.upsert({
     *   create: {
     *     // ... data to create a DeviceSessionRecovery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeviceSessionRecovery we want to update
     *   }
     * })
     */
    upsert<T extends DeviceSessionRecoveryUpsertArgs>(args: Prisma.SelectSubset<T, DeviceSessionRecoveryUpsertArgs<ExtArgs>>): Prisma.Prisma__DeviceSessionRecoveryClient<runtime.Types.Result.GetResult<Prisma.$DeviceSessionRecoveryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of DeviceSessionRecoveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceSessionRecoveryCountArgs} args - Arguments to filter DeviceSessionRecoveries to count.
     * @example
     * // Count the number of DeviceSessionRecoveries
     * const count = await prisma.deviceSessionRecovery.count({
     *   where: {
     *     // ... the filter for the DeviceSessionRecoveries we want to count
     *   }
     * })
    **/
    count<T extends DeviceSessionRecoveryCountArgs>(args?: Prisma.Subset<T, DeviceSessionRecoveryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DeviceSessionRecoveryCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a DeviceSessionRecovery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceSessionRecoveryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeviceSessionRecoveryAggregateArgs>(args: Prisma.Subset<T, DeviceSessionRecoveryAggregateArgs>): Prisma.PrismaPromise<GetDeviceSessionRecoveryAggregateType<T>>;
    /**
     * Group by DeviceSessionRecovery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceSessionRecoveryGroupByArgs} args - Group by arguments.
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
    groupBy<T extends DeviceSessionRecoveryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DeviceSessionRecoveryGroupByArgs['orderBy'];
    } : {
        orderBy?: DeviceSessionRecoveryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DeviceSessionRecoveryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceSessionRecoveryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the DeviceSessionRecovery model
     */
    readonly fields: DeviceSessionRecoveryFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for DeviceSessionRecovery.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__DeviceSessionRecoveryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    device<T extends Prisma.UserDeviceDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDeviceDefaultArgs<ExtArgs>>): Prisma.Prisma__UserDeviceClient<runtime.Types.Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    createdByAdmin<T extends Prisma.DeviceSessionRecovery$createdByAdminArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DeviceSessionRecovery$createdByAdminArgs<ExtArgs>>): Prisma.Prisma__AdminClient<runtime.Types.Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the DeviceSessionRecovery model
 */
export interface DeviceSessionRecoveryFieldRefs {
    readonly id: Prisma.FieldRef<"DeviceSessionRecovery", 'Int'>;
    readonly deviceId: Prisma.FieldRef<"DeviceSessionRecovery", 'Int'>;
    readonly codeHash: Prisma.FieldRef<"DeviceSessionRecovery", 'String'>;
    readonly expiresAt: Prisma.FieldRef<"DeviceSessionRecovery", 'DateTime'>;
    readonly usedAt: Prisma.FieldRef<"DeviceSessionRecovery", 'DateTime'>;
    readonly invalidatedAt: Prisma.FieldRef<"DeviceSessionRecovery", 'DateTime'>;
    readonly createdByAdminId: Prisma.FieldRef<"DeviceSessionRecovery", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"DeviceSessionRecovery", 'DateTime'>;
}
/**
 * DeviceSessionRecovery findUnique
 */
export type DeviceSessionRecoveryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which DeviceSessionRecovery to fetch.
     */
    where: Prisma.DeviceSessionRecoveryWhereUniqueInput;
};
/**
 * DeviceSessionRecovery findUniqueOrThrow
 */
export type DeviceSessionRecoveryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which DeviceSessionRecovery to fetch.
     */
    where: Prisma.DeviceSessionRecoveryWhereUniqueInput;
};
/**
 * DeviceSessionRecovery findFirst
 */
export type DeviceSessionRecoveryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which DeviceSessionRecovery to fetch.
     */
    where?: Prisma.DeviceSessionRecoveryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DeviceSessionRecoveries to fetch.
     */
    orderBy?: Prisma.DeviceSessionRecoveryOrderByWithRelationInput | Prisma.DeviceSessionRecoveryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for DeviceSessionRecoveries.
     */
    cursor?: Prisma.DeviceSessionRecoveryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DeviceSessionRecoveries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DeviceSessionRecoveries.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DeviceSessionRecoveries.
     */
    distinct?: Prisma.DeviceSessionRecoveryScalarFieldEnum | Prisma.DeviceSessionRecoveryScalarFieldEnum[];
};
/**
 * DeviceSessionRecovery findFirstOrThrow
 */
export type DeviceSessionRecoveryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which DeviceSessionRecovery to fetch.
     */
    where?: Prisma.DeviceSessionRecoveryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DeviceSessionRecoveries to fetch.
     */
    orderBy?: Prisma.DeviceSessionRecoveryOrderByWithRelationInput | Prisma.DeviceSessionRecoveryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for DeviceSessionRecoveries.
     */
    cursor?: Prisma.DeviceSessionRecoveryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DeviceSessionRecoveries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DeviceSessionRecoveries.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DeviceSessionRecoveries.
     */
    distinct?: Prisma.DeviceSessionRecoveryScalarFieldEnum | Prisma.DeviceSessionRecoveryScalarFieldEnum[];
};
/**
 * DeviceSessionRecovery findMany
 */
export type DeviceSessionRecoveryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which DeviceSessionRecoveries to fetch.
     */
    where?: Prisma.DeviceSessionRecoveryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DeviceSessionRecoveries to fetch.
     */
    orderBy?: Prisma.DeviceSessionRecoveryOrderByWithRelationInput | Prisma.DeviceSessionRecoveryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing DeviceSessionRecoveries.
     */
    cursor?: Prisma.DeviceSessionRecoveryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DeviceSessionRecoveries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DeviceSessionRecoveries.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DeviceSessionRecoveries.
     */
    distinct?: Prisma.DeviceSessionRecoveryScalarFieldEnum | Prisma.DeviceSessionRecoveryScalarFieldEnum[];
};
/**
 * DeviceSessionRecovery create
 */
export type DeviceSessionRecoveryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a DeviceSessionRecovery.
     */
    data: Prisma.XOR<Prisma.DeviceSessionRecoveryCreateInput, Prisma.DeviceSessionRecoveryUncheckedCreateInput>;
};
/**
 * DeviceSessionRecovery createMany
 */
export type DeviceSessionRecoveryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeviceSessionRecoveries.
     */
    data: Prisma.DeviceSessionRecoveryCreateManyInput | Prisma.DeviceSessionRecoveryCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * DeviceSessionRecovery createManyAndReturn
 */
export type DeviceSessionRecoveryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSessionRecovery
     */
    select?: Prisma.DeviceSessionRecoverySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceSessionRecovery
     */
    omit?: Prisma.DeviceSessionRecoveryOmit<ExtArgs> | null;
    /**
     * The data used to create many DeviceSessionRecoveries.
     */
    data: Prisma.DeviceSessionRecoveryCreateManyInput | Prisma.DeviceSessionRecoveryCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DeviceSessionRecoveryIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * DeviceSessionRecovery update
 */
export type DeviceSessionRecoveryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a DeviceSessionRecovery.
     */
    data: Prisma.XOR<Prisma.DeviceSessionRecoveryUpdateInput, Prisma.DeviceSessionRecoveryUncheckedUpdateInput>;
    /**
     * Choose, which DeviceSessionRecovery to update.
     */
    where: Prisma.DeviceSessionRecoveryWhereUniqueInput;
};
/**
 * DeviceSessionRecovery updateMany
 */
export type DeviceSessionRecoveryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update DeviceSessionRecoveries.
     */
    data: Prisma.XOR<Prisma.DeviceSessionRecoveryUpdateManyMutationInput, Prisma.DeviceSessionRecoveryUncheckedUpdateManyInput>;
    /**
     * Filter which DeviceSessionRecoveries to update
     */
    where?: Prisma.DeviceSessionRecoveryWhereInput;
    /**
     * Limit how many DeviceSessionRecoveries to update.
     */
    limit?: number;
};
/**
 * DeviceSessionRecovery updateManyAndReturn
 */
export type DeviceSessionRecoveryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSessionRecovery
     */
    select?: Prisma.DeviceSessionRecoverySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceSessionRecovery
     */
    omit?: Prisma.DeviceSessionRecoveryOmit<ExtArgs> | null;
    /**
     * The data used to update DeviceSessionRecoveries.
     */
    data: Prisma.XOR<Prisma.DeviceSessionRecoveryUpdateManyMutationInput, Prisma.DeviceSessionRecoveryUncheckedUpdateManyInput>;
    /**
     * Filter which DeviceSessionRecoveries to update
     */
    where?: Prisma.DeviceSessionRecoveryWhereInput;
    /**
     * Limit how many DeviceSessionRecoveries to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DeviceSessionRecoveryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * DeviceSessionRecovery upsert
 */
export type DeviceSessionRecoveryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the DeviceSessionRecovery to update in case it exists.
     */
    where: Prisma.DeviceSessionRecoveryWhereUniqueInput;
    /**
     * In case the DeviceSessionRecovery found by the `where` argument doesn't exist, create a new DeviceSessionRecovery with this data.
     */
    create: Prisma.XOR<Prisma.DeviceSessionRecoveryCreateInput, Prisma.DeviceSessionRecoveryUncheckedCreateInput>;
    /**
     * In case the DeviceSessionRecovery was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.DeviceSessionRecoveryUpdateInput, Prisma.DeviceSessionRecoveryUncheckedUpdateInput>;
};
/**
 * DeviceSessionRecovery delete
 */
export type DeviceSessionRecoveryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which DeviceSessionRecovery to delete.
     */
    where: Prisma.DeviceSessionRecoveryWhereUniqueInput;
};
/**
 * DeviceSessionRecovery deleteMany
 */
export type DeviceSessionRecoveryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceSessionRecoveries to delete
     */
    where?: Prisma.DeviceSessionRecoveryWhereInput;
    /**
     * Limit how many DeviceSessionRecoveries to delete.
     */
    limit?: number;
};
/**
 * DeviceSessionRecovery.createdByAdmin
 */
export type DeviceSessionRecovery$createdByAdminArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * DeviceSessionRecovery without action
 */
export type DeviceSessionRecoveryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
