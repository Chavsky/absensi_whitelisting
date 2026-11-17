import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model AttendanceSessionDefinition
 *
 */
export type AttendanceSessionDefinitionModel = runtime.Types.Result.DefaultSelection<Prisma.$AttendanceSessionDefinitionPayload>;
export type AggregateAttendanceSessionDefinition = {
    _count: AttendanceSessionDefinitionCountAggregateOutputType | null;
    _avg: AttendanceSessionDefinitionAvgAggregateOutputType | null;
    _sum: AttendanceSessionDefinitionSumAggregateOutputType | null;
    _min: AttendanceSessionDefinitionMinAggregateOutputType | null;
    _max: AttendanceSessionDefinitionMaxAggregateOutputType | null;
};
export type AttendanceSessionDefinitionAvgAggregateOutputType = {
    id: number | null;
    disabledByAdminId: number | null;
};
export type AttendanceSessionDefinitionSumAggregateOutputType = {
    id: number | null;
    disabledByAdminId: number | null;
};
export type AttendanceSessionDefinitionMinAggregateOutputType = {
    id: number | null;
    key: string | null;
    disabledAt: Date | null;
    disabledByAdminId: number | null;
    disabledByAdminUsername: string | null;
    enabledFrom: Date | null;
    deletedAt: Date | null;
    createdAt: Date | null;
};
export type AttendanceSessionDefinitionMaxAggregateOutputType = {
    id: number | null;
    key: string | null;
    disabledAt: Date | null;
    disabledByAdminId: number | null;
    disabledByAdminUsername: string | null;
    enabledFrom: Date | null;
    deletedAt: Date | null;
    createdAt: Date | null;
};
export type AttendanceSessionDefinitionCountAggregateOutputType = {
    id: number;
    key: number;
    disabledAt: number;
    disabledByAdminId: number;
    disabledByAdminUsername: number;
    enabledFrom: number;
    deletedAt: number;
    createdAt: number;
    _all: number;
};
export type AttendanceSessionDefinitionAvgAggregateInputType = {
    id?: true;
    disabledByAdminId?: true;
};
export type AttendanceSessionDefinitionSumAggregateInputType = {
    id?: true;
    disabledByAdminId?: true;
};
export type AttendanceSessionDefinitionMinAggregateInputType = {
    id?: true;
    key?: true;
    disabledAt?: true;
    disabledByAdminId?: true;
    disabledByAdminUsername?: true;
    enabledFrom?: true;
    deletedAt?: true;
    createdAt?: true;
};
export type AttendanceSessionDefinitionMaxAggregateInputType = {
    id?: true;
    key?: true;
    disabledAt?: true;
    disabledByAdminId?: true;
    disabledByAdminUsername?: true;
    enabledFrom?: true;
    deletedAt?: true;
    createdAt?: true;
};
export type AttendanceSessionDefinitionCountAggregateInputType = {
    id?: true;
    key?: true;
    disabledAt?: true;
    disabledByAdminId?: true;
    disabledByAdminUsername?: true;
    enabledFrom?: true;
    deletedAt?: true;
    createdAt?: true;
    _all?: true;
};
export type AttendanceSessionDefinitionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AttendanceSessionDefinition to aggregate.
     */
    where?: Prisma.AttendanceSessionDefinitionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AttendanceSessionDefinitions to fetch.
     */
    orderBy?: Prisma.AttendanceSessionDefinitionOrderByWithRelationInput | Prisma.AttendanceSessionDefinitionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.AttendanceSessionDefinitionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AttendanceSessionDefinitions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AttendanceSessionDefinitions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned AttendanceSessionDefinitions
    **/
    _count?: true | AttendanceSessionDefinitionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: AttendanceSessionDefinitionAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: AttendanceSessionDefinitionSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceSessionDefinitionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceSessionDefinitionMaxAggregateInputType;
};
export type GetAttendanceSessionDefinitionAggregateType<T extends AttendanceSessionDefinitionAggregateArgs> = {
    [P in keyof T & keyof AggregateAttendanceSessionDefinition]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAttendanceSessionDefinition[P]> : Prisma.GetScalarType<T[P], AggregateAttendanceSessionDefinition[P]>;
};
export type AttendanceSessionDefinitionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceSessionDefinitionWhereInput;
    orderBy?: Prisma.AttendanceSessionDefinitionOrderByWithAggregationInput | Prisma.AttendanceSessionDefinitionOrderByWithAggregationInput[];
    by: Prisma.AttendanceSessionDefinitionScalarFieldEnum[] | Prisma.AttendanceSessionDefinitionScalarFieldEnum;
    having?: Prisma.AttendanceSessionDefinitionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AttendanceSessionDefinitionCountAggregateInputType | true;
    _avg?: AttendanceSessionDefinitionAvgAggregateInputType;
    _sum?: AttendanceSessionDefinitionSumAggregateInputType;
    _min?: AttendanceSessionDefinitionMinAggregateInputType;
    _max?: AttendanceSessionDefinitionMaxAggregateInputType;
};
export type AttendanceSessionDefinitionGroupByOutputType = {
    id: number;
    key: string;
    disabledAt: Date | null;
    disabledByAdminId: number | null;
    disabledByAdminUsername: string | null;
    enabledFrom: Date | null;
    deletedAt: Date | null;
    createdAt: Date;
    _count: AttendanceSessionDefinitionCountAggregateOutputType | null;
    _avg: AttendanceSessionDefinitionAvgAggregateOutputType | null;
    _sum: AttendanceSessionDefinitionSumAggregateOutputType | null;
    _min: AttendanceSessionDefinitionMinAggregateOutputType | null;
    _max: AttendanceSessionDefinitionMaxAggregateOutputType | null;
};
export type GetAttendanceSessionDefinitionGroupByPayload<T extends AttendanceSessionDefinitionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AttendanceSessionDefinitionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AttendanceSessionDefinitionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AttendanceSessionDefinitionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AttendanceSessionDefinitionGroupByOutputType[P]>;
}>>;
export type AttendanceSessionDefinitionWhereInput = {
    AND?: Prisma.AttendanceSessionDefinitionWhereInput | Prisma.AttendanceSessionDefinitionWhereInput[];
    OR?: Prisma.AttendanceSessionDefinitionWhereInput[];
    NOT?: Prisma.AttendanceSessionDefinitionWhereInput | Prisma.AttendanceSessionDefinitionWhereInput[];
    id?: Prisma.IntFilter<"AttendanceSessionDefinition"> | number;
    key?: Prisma.StringFilter<"AttendanceSessionDefinition"> | string;
    disabledAt?: Prisma.DateTimeNullableFilter<"AttendanceSessionDefinition"> | Date | string | null;
    disabledByAdminId?: Prisma.IntNullableFilter<"AttendanceSessionDefinition"> | number | null;
    disabledByAdminUsername?: Prisma.StringNullableFilter<"AttendanceSessionDefinition"> | string | null;
    enabledFrom?: Prisma.DateTimeNullableFilter<"AttendanceSessionDefinition"> | Date | string | null;
    deletedAt?: Prisma.DateTimeNullableFilter<"AttendanceSessionDefinition"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"AttendanceSessionDefinition"> | Date | string;
    versions?: Prisma.AttendanceSessionVersionListRelationFilter;
    attendances?: Prisma.AttendanceListRelationFilter;
    correctionLogs?: Prisma.AttendanceCorrectionLogListRelationFilter;
    disabledByAdmin?: Prisma.XOR<Prisma.AdminNullableScalarRelationFilter, Prisma.AdminWhereInput> | null;
};
export type AttendanceSessionDefinitionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    disabledAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    disabledByAdminId?: Prisma.SortOrderInput | Prisma.SortOrder;
    disabledByAdminUsername?: Prisma.SortOrderInput | Prisma.SortOrder;
    enabledFrom?: Prisma.SortOrderInput | Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    versions?: Prisma.AttendanceSessionVersionOrderByRelationAggregateInput;
    attendances?: Prisma.AttendanceOrderByRelationAggregateInput;
    correctionLogs?: Prisma.AttendanceCorrectionLogOrderByRelationAggregateInput;
    disabledByAdmin?: Prisma.AdminOrderByWithRelationInput;
};
export type AttendanceSessionDefinitionWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    key?: string;
    AND?: Prisma.AttendanceSessionDefinitionWhereInput | Prisma.AttendanceSessionDefinitionWhereInput[];
    OR?: Prisma.AttendanceSessionDefinitionWhereInput[];
    NOT?: Prisma.AttendanceSessionDefinitionWhereInput | Prisma.AttendanceSessionDefinitionWhereInput[];
    disabledAt?: Prisma.DateTimeNullableFilter<"AttendanceSessionDefinition"> | Date | string | null;
    disabledByAdminId?: Prisma.IntNullableFilter<"AttendanceSessionDefinition"> | number | null;
    disabledByAdminUsername?: Prisma.StringNullableFilter<"AttendanceSessionDefinition"> | string | null;
    enabledFrom?: Prisma.DateTimeNullableFilter<"AttendanceSessionDefinition"> | Date | string | null;
    deletedAt?: Prisma.DateTimeNullableFilter<"AttendanceSessionDefinition"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"AttendanceSessionDefinition"> | Date | string;
    versions?: Prisma.AttendanceSessionVersionListRelationFilter;
    attendances?: Prisma.AttendanceListRelationFilter;
    correctionLogs?: Prisma.AttendanceCorrectionLogListRelationFilter;
    disabledByAdmin?: Prisma.XOR<Prisma.AdminNullableScalarRelationFilter, Prisma.AdminWhereInput> | null;
}, "id" | "key">;
export type AttendanceSessionDefinitionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    disabledAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    disabledByAdminId?: Prisma.SortOrderInput | Prisma.SortOrder;
    disabledByAdminUsername?: Prisma.SortOrderInput | Prisma.SortOrder;
    enabledFrom?: Prisma.SortOrderInput | Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.AttendanceSessionDefinitionCountOrderByAggregateInput;
    _avg?: Prisma.AttendanceSessionDefinitionAvgOrderByAggregateInput;
    _max?: Prisma.AttendanceSessionDefinitionMaxOrderByAggregateInput;
    _min?: Prisma.AttendanceSessionDefinitionMinOrderByAggregateInput;
    _sum?: Prisma.AttendanceSessionDefinitionSumOrderByAggregateInput;
};
export type AttendanceSessionDefinitionScalarWhereWithAggregatesInput = {
    AND?: Prisma.AttendanceSessionDefinitionScalarWhereWithAggregatesInput | Prisma.AttendanceSessionDefinitionScalarWhereWithAggregatesInput[];
    OR?: Prisma.AttendanceSessionDefinitionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AttendanceSessionDefinitionScalarWhereWithAggregatesInput | Prisma.AttendanceSessionDefinitionScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"AttendanceSessionDefinition"> | number;
    key?: Prisma.StringWithAggregatesFilter<"AttendanceSessionDefinition"> | string;
    disabledAt?: Prisma.DateTimeNullableWithAggregatesFilter<"AttendanceSessionDefinition"> | Date | string | null;
    disabledByAdminId?: Prisma.IntNullableWithAggregatesFilter<"AttendanceSessionDefinition"> | number | null;
    disabledByAdminUsername?: Prisma.StringNullableWithAggregatesFilter<"AttendanceSessionDefinition"> | string | null;
    enabledFrom?: Prisma.DateTimeNullableWithAggregatesFilter<"AttendanceSessionDefinition"> | Date | string | null;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"AttendanceSessionDefinition"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AttendanceSessionDefinition"> | Date | string;
};
export type AttendanceSessionDefinitionCreateInput = {
    key: string;
    disabledAt?: Date | string | null;
    disabledByAdminUsername?: string | null;
    enabledFrom?: Date | string | null;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    versions?: Prisma.AttendanceSessionVersionCreateNestedManyWithoutSessionInput;
    attendances?: Prisma.AttendanceCreateNestedManyWithoutSessionInput;
    correctionLogs?: Prisma.AttendanceCorrectionLogCreateNestedManyWithoutSessionInput;
    disabledByAdmin?: Prisma.AdminCreateNestedOneWithoutDisabledAttendanceSessionsInput;
};
export type AttendanceSessionDefinitionUncheckedCreateInput = {
    id?: number;
    key: string;
    disabledAt?: Date | string | null;
    disabledByAdminId?: number | null;
    disabledByAdminUsername?: string | null;
    enabledFrom?: Date | string | null;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    versions?: Prisma.AttendanceSessionVersionUncheckedCreateNestedManyWithoutSessionInput;
    attendances?: Prisma.AttendanceUncheckedCreateNestedManyWithoutSessionInput;
    correctionLogs?: Prisma.AttendanceCorrectionLogUncheckedCreateNestedManyWithoutSessionInput;
};
export type AttendanceSessionDefinitionUpdateInput = {
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    disabledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    disabledByAdminUsername?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enabledFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    versions?: Prisma.AttendanceSessionVersionUpdateManyWithoutSessionNestedInput;
    attendances?: Prisma.AttendanceUpdateManyWithoutSessionNestedInput;
    correctionLogs?: Prisma.AttendanceCorrectionLogUpdateManyWithoutSessionNestedInput;
    disabledByAdmin?: Prisma.AdminUpdateOneWithoutDisabledAttendanceSessionsNestedInput;
};
export type AttendanceSessionDefinitionUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    disabledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    disabledByAdminId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    disabledByAdminUsername?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enabledFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    versions?: Prisma.AttendanceSessionVersionUncheckedUpdateManyWithoutSessionNestedInput;
    attendances?: Prisma.AttendanceUncheckedUpdateManyWithoutSessionNestedInput;
    correctionLogs?: Prisma.AttendanceCorrectionLogUncheckedUpdateManyWithoutSessionNestedInput;
};
export type AttendanceSessionDefinitionCreateManyInput = {
    id?: number;
    key: string;
    disabledAt?: Date | string | null;
    disabledByAdminId?: number | null;
    disabledByAdminUsername?: string | null;
    enabledFrom?: Date | string | null;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type AttendanceSessionDefinitionUpdateManyMutationInput = {
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    disabledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    disabledByAdminUsername?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enabledFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceSessionDefinitionUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    disabledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    disabledByAdminId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    disabledByAdminUsername?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enabledFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceSessionDefinitionListRelationFilter = {
    every?: Prisma.AttendanceSessionDefinitionWhereInput;
    some?: Prisma.AttendanceSessionDefinitionWhereInput;
    none?: Prisma.AttendanceSessionDefinitionWhereInput;
};
export type AttendanceSessionDefinitionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AttendanceSessionDefinitionScalarRelationFilter = {
    is?: Prisma.AttendanceSessionDefinitionWhereInput;
    isNot?: Prisma.AttendanceSessionDefinitionWhereInput;
};
export type AttendanceSessionDefinitionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    disabledAt?: Prisma.SortOrder;
    disabledByAdminId?: Prisma.SortOrder;
    disabledByAdminUsername?: Prisma.SortOrder;
    enabledFrom?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AttendanceSessionDefinitionAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    disabledByAdminId?: Prisma.SortOrder;
};
export type AttendanceSessionDefinitionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    disabledAt?: Prisma.SortOrder;
    disabledByAdminId?: Prisma.SortOrder;
    disabledByAdminUsername?: Prisma.SortOrder;
    enabledFrom?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AttendanceSessionDefinitionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    disabledAt?: Prisma.SortOrder;
    disabledByAdminId?: Prisma.SortOrder;
    disabledByAdminUsername?: Prisma.SortOrder;
    enabledFrom?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AttendanceSessionDefinitionSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    disabledByAdminId?: Prisma.SortOrder;
};
export type AttendanceSessionDefinitionCreateNestedManyWithoutDisabledByAdminInput = {
    create?: Prisma.XOR<Prisma.AttendanceSessionDefinitionCreateWithoutDisabledByAdminInput, Prisma.AttendanceSessionDefinitionUncheckedCreateWithoutDisabledByAdminInput> | Prisma.AttendanceSessionDefinitionCreateWithoutDisabledByAdminInput[] | Prisma.AttendanceSessionDefinitionUncheckedCreateWithoutDisabledByAdminInput[];
    connectOrCreate?: Prisma.AttendanceSessionDefinitionCreateOrConnectWithoutDisabledByAdminInput | Prisma.AttendanceSessionDefinitionCreateOrConnectWithoutDisabledByAdminInput[];
    createMany?: Prisma.AttendanceSessionDefinitionCreateManyDisabledByAdminInputEnvelope;
    connect?: Prisma.AttendanceSessionDefinitionWhereUniqueInput | Prisma.AttendanceSessionDefinitionWhereUniqueInput[];
};
export type AttendanceSessionDefinitionUncheckedCreateNestedManyWithoutDisabledByAdminInput = {
    create?: Prisma.XOR<Prisma.AttendanceSessionDefinitionCreateWithoutDisabledByAdminInput, Prisma.AttendanceSessionDefinitionUncheckedCreateWithoutDisabledByAdminInput> | Prisma.AttendanceSessionDefinitionCreateWithoutDisabledByAdminInput[] | Prisma.AttendanceSessionDefinitionUncheckedCreateWithoutDisabledByAdminInput[];
    connectOrCreate?: Prisma.AttendanceSessionDefinitionCreateOrConnectWithoutDisabledByAdminInput | Prisma.AttendanceSessionDefinitionCreateOrConnectWithoutDisabledByAdminInput[];
    createMany?: Prisma.AttendanceSessionDefinitionCreateManyDisabledByAdminInputEnvelope;
    connect?: Prisma.AttendanceSessionDefinitionWhereUniqueInput | Prisma.AttendanceSessionDefinitionWhereUniqueInput[];
};
export type AttendanceSessionDefinitionUpdateManyWithoutDisabledByAdminNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceSessionDefinitionCreateWithoutDisabledByAdminInput, Prisma.AttendanceSessionDefinitionUncheckedCreateWithoutDisabledByAdminInput> | Prisma.AttendanceSessionDefinitionCreateWithoutDisabledByAdminInput[] | Prisma.AttendanceSessionDefinitionUncheckedCreateWithoutDisabledByAdminInput[];
    connectOrCreate?: Prisma.AttendanceSessionDefinitionCreateOrConnectWithoutDisabledByAdminInput | Prisma.AttendanceSessionDefinitionCreateOrConnectWithoutDisabledByAdminInput[];
    upsert?: Prisma.AttendanceSessionDefinitionUpsertWithWhereUniqueWithoutDisabledByAdminInput | Prisma.AttendanceSessionDefinitionUpsertWithWhereUniqueWithoutDisabledByAdminInput[];
    createMany?: Prisma.AttendanceSessionDefinitionCreateManyDisabledByAdminInputEnvelope;
    set?: Prisma.AttendanceSessionDefinitionWhereUniqueInput | Prisma.AttendanceSessionDefinitionWhereUniqueInput[];
    disconnect?: Prisma.AttendanceSessionDefinitionWhereUniqueInput | Prisma.AttendanceSessionDefinitionWhereUniqueInput[];
    delete?: Prisma.AttendanceSessionDefinitionWhereUniqueInput | Prisma.AttendanceSessionDefinitionWhereUniqueInput[];
    connect?: Prisma.AttendanceSessionDefinitionWhereUniqueInput | Prisma.AttendanceSessionDefinitionWhereUniqueInput[];
    update?: Prisma.AttendanceSessionDefinitionUpdateWithWhereUniqueWithoutDisabledByAdminInput | Prisma.AttendanceSessionDefinitionUpdateWithWhereUniqueWithoutDisabledByAdminInput[];
    updateMany?: Prisma.AttendanceSessionDefinitionUpdateManyWithWhereWithoutDisabledByAdminInput | Prisma.AttendanceSessionDefinitionUpdateManyWithWhereWithoutDisabledByAdminInput[];
    deleteMany?: Prisma.AttendanceSessionDefinitionScalarWhereInput | Prisma.AttendanceSessionDefinitionScalarWhereInput[];
};
export type AttendanceSessionDefinitionUncheckedUpdateManyWithoutDisabledByAdminNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceSessionDefinitionCreateWithoutDisabledByAdminInput, Prisma.AttendanceSessionDefinitionUncheckedCreateWithoutDisabledByAdminInput> | Prisma.AttendanceSessionDefinitionCreateWithoutDisabledByAdminInput[] | Prisma.AttendanceSessionDefinitionUncheckedCreateWithoutDisabledByAdminInput[];
    connectOrCreate?: Prisma.AttendanceSessionDefinitionCreateOrConnectWithoutDisabledByAdminInput | Prisma.AttendanceSessionDefinitionCreateOrConnectWithoutDisabledByAdminInput[];
    upsert?: Prisma.AttendanceSessionDefinitionUpsertWithWhereUniqueWithoutDisabledByAdminInput | Prisma.AttendanceSessionDefinitionUpsertWithWhereUniqueWithoutDisabledByAdminInput[];
    createMany?: Prisma.AttendanceSessionDefinitionCreateManyDisabledByAdminInputEnvelope;
    set?: Prisma.AttendanceSessionDefinitionWhereUniqueInput | Prisma.AttendanceSessionDefinitionWhereUniqueInput[];
    disconnect?: Prisma.AttendanceSessionDefinitionWhereUniqueInput | Prisma.AttendanceSessionDefinitionWhereUniqueInput[];
    delete?: Prisma.AttendanceSessionDefinitionWhereUniqueInput | Prisma.AttendanceSessionDefinitionWhereUniqueInput[];
    connect?: Prisma.AttendanceSessionDefinitionWhereUniqueInput | Prisma.AttendanceSessionDefinitionWhereUniqueInput[];
    update?: Prisma.AttendanceSessionDefinitionUpdateWithWhereUniqueWithoutDisabledByAdminInput | Prisma.AttendanceSessionDefinitionUpdateWithWhereUniqueWithoutDisabledByAdminInput[];
    updateMany?: Prisma.AttendanceSessionDefinitionUpdateManyWithWhereWithoutDisabledByAdminInput | Prisma.AttendanceSessionDefinitionUpdateManyWithWhereWithoutDisabledByAdminInput[];
    deleteMany?: Prisma.AttendanceSessionDefinitionScalarWhereInput | Prisma.AttendanceSessionDefinitionScalarWhereInput[];
};
export type AttendanceSessionDefinitionCreateNestedOneWithoutAttendancesInput = {
    create?: Prisma.XOR<Prisma.AttendanceSessionDefinitionCreateWithoutAttendancesInput, Prisma.AttendanceSessionDefinitionUncheckedCreateWithoutAttendancesInput>;
    connectOrCreate?: Prisma.AttendanceSessionDefinitionCreateOrConnectWithoutAttendancesInput;
    connect?: Prisma.AttendanceSessionDefinitionWhereUniqueInput;
};
export type AttendanceSessionDefinitionUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceSessionDefinitionCreateWithoutAttendancesInput, Prisma.AttendanceSessionDefinitionUncheckedCreateWithoutAttendancesInput>;
    connectOrCreate?: Prisma.AttendanceSessionDefinitionCreateOrConnectWithoutAttendancesInput;
    upsert?: Prisma.AttendanceSessionDefinitionUpsertWithoutAttendancesInput;
    connect?: Prisma.AttendanceSessionDefinitionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AttendanceSessionDefinitionUpdateToOneWithWhereWithoutAttendancesInput, Prisma.AttendanceSessionDefinitionUpdateWithoutAttendancesInput>, Prisma.AttendanceSessionDefinitionUncheckedUpdateWithoutAttendancesInput>;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type AttendanceSessionDefinitionCreateNestedOneWithoutVersionsInput = {
    create?: Prisma.XOR<Prisma.AttendanceSessionDefinitionCreateWithoutVersionsInput, Prisma.AttendanceSessionDefinitionUncheckedCreateWithoutVersionsInput>;
    connectOrCreate?: Prisma.AttendanceSessionDefinitionCreateOrConnectWithoutVersionsInput;
    connect?: Prisma.AttendanceSessionDefinitionWhereUniqueInput;
};
export type AttendanceSessionDefinitionUpdateOneRequiredWithoutVersionsNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceSessionDefinitionCreateWithoutVersionsInput, Prisma.AttendanceSessionDefinitionUncheckedCreateWithoutVersionsInput>;
    connectOrCreate?: Prisma.AttendanceSessionDefinitionCreateOrConnectWithoutVersionsInput;
    upsert?: Prisma.AttendanceSessionDefinitionUpsertWithoutVersionsInput;
    connect?: Prisma.AttendanceSessionDefinitionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AttendanceSessionDefinitionUpdateToOneWithWhereWithoutVersionsInput, Prisma.AttendanceSessionDefinitionUpdateWithoutVersionsInput>, Prisma.AttendanceSessionDefinitionUncheckedUpdateWithoutVersionsInput>;
};
export type AttendanceSessionDefinitionCreateNestedOneWithoutCorrectionLogsInput = {
    create?: Prisma.XOR<Prisma.AttendanceSessionDefinitionCreateWithoutCorrectionLogsInput, Prisma.AttendanceSessionDefinitionUncheckedCreateWithoutCorrectionLogsInput>;
    connectOrCreate?: Prisma.AttendanceSessionDefinitionCreateOrConnectWithoutCorrectionLogsInput;
    connect?: Prisma.AttendanceSessionDefinitionWhereUniqueInput;
};
export type AttendanceSessionDefinitionUpdateOneRequiredWithoutCorrectionLogsNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceSessionDefinitionCreateWithoutCorrectionLogsInput, Prisma.AttendanceSessionDefinitionUncheckedCreateWithoutCorrectionLogsInput>;
    connectOrCreate?: Prisma.AttendanceSessionDefinitionCreateOrConnectWithoutCorrectionLogsInput;
    upsert?: Prisma.AttendanceSessionDefinitionUpsertWithoutCorrectionLogsInput;
    connect?: Prisma.AttendanceSessionDefinitionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AttendanceSessionDefinitionUpdateToOneWithWhereWithoutCorrectionLogsInput, Prisma.AttendanceSessionDefinitionUpdateWithoutCorrectionLogsInput>, Prisma.AttendanceSessionDefinitionUncheckedUpdateWithoutCorrectionLogsInput>;
};
export type AttendanceSessionDefinitionCreateWithoutDisabledByAdminInput = {
    key: string;
    disabledAt?: Date | string | null;
    disabledByAdminUsername?: string | null;
    enabledFrom?: Date | string | null;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    versions?: Prisma.AttendanceSessionVersionCreateNestedManyWithoutSessionInput;
    attendances?: Prisma.AttendanceCreateNestedManyWithoutSessionInput;
    correctionLogs?: Prisma.AttendanceCorrectionLogCreateNestedManyWithoutSessionInput;
};
export type AttendanceSessionDefinitionUncheckedCreateWithoutDisabledByAdminInput = {
    id?: number;
    key: string;
    disabledAt?: Date | string | null;
    disabledByAdminUsername?: string | null;
    enabledFrom?: Date | string | null;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    versions?: Prisma.AttendanceSessionVersionUncheckedCreateNestedManyWithoutSessionInput;
    attendances?: Prisma.AttendanceUncheckedCreateNestedManyWithoutSessionInput;
    correctionLogs?: Prisma.AttendanceCorrectionLogUncheckedCreateNestedManyWithoutSessionInput;
};
export type AttendanceSessionDefinitionCreateOrConnectWithoutDisabledByAdminInput = {
    where: Prisma.AttendanceSessionDefinitionWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendanceSessionDefinitionCreateWithoutDisabledByAdminInput, Prisma.AttendanceSessionDefinitionUncheckedCreateWithoutDisabledByAdminInput>;
};
export type AttendanceSessionDefinitionCreateManyDisabledByAdminInputEnvelope = {
    data: Prisma.AttendanceSessionDefinitionCreateManyDisabledByAdminInput | Prisma.AttendanceSessionDefinitionCreateManyDisabledByAdminInput[];
    skipDuplicates?: boolean;
};
export type AttendanceSessionDefinitionUpsertWithWhereUniqueWithoutDisabledByAdminInput = {
    where: Prisma.AttendanceSessionDefinitionWhereUniqueInput;
    update: Prisma.XOR<Prisma.AttendanceSessionDefinitionUpdateWithoutDisabledByAdminInput, Prisma.AttendanceSessionDefinitionUncheckedUpdateWithoutDisabledByAdminInput>;
    create: Prisma.XOR<Prisma.AttendanceSessionDefinitionCreateWithoutDisabledByAdminInput, Prisma.AttendanceSessionDefinitionUncheckedCreateWithoutDisabledByAdminInput>;
};
export type AttendanceSessionDefinitionUpdateWithWhereUniqueWithoutDisabledByAdminInput = {
    where: Prisma.AttendanceSessionDefinitionWhereUniqueInput;
    data: Prisma.XOR<Prisma.AttendanceSessionDefinitionUpdateWithoutDisabledByAdminInput, Prisma.AttendanceSessionDefinitionUncheckedUpdateWithoutDisabledByAdminInput>;
};
export type AttendanceSessionDefinitionUpdateManyWithWhereWithoutDisabledByAdminInput = {
    where: Prisma.AttendanceSessionDefinitionScalarWhereInput;
    data: Prisma.XOR<Prisma.AttendanceSessionDefinitionUpdateManyMutationInput, Prisma.AttendanceSessionDefinitionUncheckedUpdateManyWithoutDisabledByAdminInput>;
};
export type AttendanceSessionDefinitionScalarWhereInput = {
    AND?: Prisma.AttendanceSessionDefinitionScalarWhereInput | Prisma.AttendanceSessionDefinitionScalarWhereInput[];
    OR?: Prisma.AttendanceSessionDefinitionScalarWhereInput[];
    NOT?: Prisma.AttendanceSessionDefinitionScalarWhereInput | Prisma.AttendanceSessionDefinitionScalarWhereInput[];
    id?: Prisma.IntFilter<"AttendanceSessionDefinition"> | number;
    key?: Prisma.StringFilter<"AttendanceSessionDefinition"> | string;
    disabledAt?: Prisma.DateTimeNullableFilter<"AttendanceSessionDefinition"> | Date | string | null;
    disabledByAdminId?: Prisma.IntNullableFilter<"AttendanceSessionDefinition"> | number | null;
    disabledByAdminUsername?: Prisma.StringNullableFilter<"AttendanceSessionDefinition"> | string | null;
    enabledFrom?: Prisma.DateTimeNullableFilter<"AttendanceSessionDefinition"> | Date | string | null;
    deletedAt?: Prisma.DateTimeNullableFilter<"AttendanceSessionDefinition"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"AttendanceSessionDefinition"> | Date | string;
};
export type AttendanceSessionDefinitionCreateWithoutAttendancesInput = {
    key: string;
    disabledAt?: Date | string | null;
    disabledByAdminUsername?: string | null;
    enabledFrom?: Date | string | null;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    versions?: Prisma.AttendanceSessionVersionCreateNestedManyWithoutSessionInput;
    correctionLogs?: Prisma.AttendanceCorrectionLogCreateNestedManyWithoutSessionInput;
    disabledByAdmin?: Prisma.AdminCreateNestedOneWithoutDisabledAttendanceSessionsInput;
};
export type AttendanceSessionDefinitionUncheckedCreateWithoutAttendancesInput = {
    id?: number;
    key: string;
    disabledAt?: Date | string | null;
    disabledByAdminId?: number | null;
    disabledByAdminUsername?: string | null;
    enabledFrom?: Date | string | null;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    versions?: Prisma.AttendanceSessionVersionUncheckedCreateNestedManyWithoutSessionInput;
    correctionLogs?: Prisma.AttendanceCorrectionLogUncheckedCreateNestedManyWithoutSessionInput;
};
export type AttendanceSessionDefinitionCreateOrConnectWithoutAttendancesInput = {
    where: Prisma.AttendanceSessionDefinitionWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendanceSessionDefinitionCreateWithoutAttendancesInput, Prisma.AttendanceSessionDefinitionUncheckedCreateWithoutAttendancesInput>;
};
export type AttendanceSessionDefinitionUpsertWithoutAttendancesInput = {
    update: Prisma.XOR<Prisma.AttendanceSessionDefinitionUpdateWithoutAttendancesInput, Prisma.AttendanceSessionDefinitionUncheckedUpdateWithoutAttendancesInput>;
    create: Prisma.XOR<Prisma.AttendanceSessionDefinitionCreateWithoutAttendancesInput, Prisma.AttendanceSessionDefinitionUncheckedCreateWithoutAttendancesInput>;
    where?: Prisma.AttendanceSessionDefinitionWhereInput;
};
export type AttendanceSessionDefinitionUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: Prisma.AttendanceSessionDefinitionWhereInput;
    data: Prisma.XOR<Prisma.AttendanceSessionDefinitionUpdateWithoutAttendancesInput, Prisma.AttendanceSessionDefinitionUncheckedUpdateWithoutAttendancesInput>;
};
export type AttendanceSessionDefinitionUpdateWithoutAttendancesInput = {
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    disabledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    disabledByAdminUsername?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enabledFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    versions?: Prisma.AttendanceSessionVersionUpdateManyWithoutSessionNestedInput;
    correctionLogs?: Prisma.AttendanceCorrectionLogUpdateManyWithoutSessionNestedInput;
    disabledByAdmin?: Prisma.AdminUpdateOneWithoutDisabledAttendanceSessionsNestedInput;
};
export type AttendanceSessionDefinitionUncheckedUpdateWithoutAttendancesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    disabledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    disabledByAdminId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    disabledByAdminUsername?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enabledFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    versions?: Prisma.AttendanceSessionVersionUncheckedUpdateManyWithoutSessionNestedInput;
    correctionLogs?: Prisma.AttendanceCorrectionLogUncheckedUpdateManyWithoutSessionNestedInput;
};
export type AttendanceSessionDefinitionCreateWithoutVersionsInput = {
    key: string;
    disabledAt?: Date | string | null;
    disabledByAdminUsername?: string | null;
    enabledFrom?: Date | string | null;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    attendances?: Prisma.AttendanceCreateNestedManyWithoutSessionInput;
    correctionLogs?: Prisma.AttendanceCorrectionLogCreateNestedManyWithoutSessionInput;
    disabledByAdmin?: Prisma.AdminCreateNestedOneWithoutDisabledAttendanceSessionsInput;
};
export type AttendanceSessionDefinitionUncheckedCreateWithoutVersionsInput = {
    id?: number;
    key: string;
    disabledAt?: Date | string | null;
    disabledByAdminId?: number | null;
    disabledByAdminUsername?: string | null;
    enabledFrom?: Date | string | null;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    attendances?: Prisma.AttendanceUncheckedCreateNestedManyWithoutSessionInput;
    correctionLogs?: Prisma.AttendanceCorrectionLogUncheckedCreateNestedManyWithoutSessionInput;
};
export type AttendanceSessionDefinitionCreateOrConnectWithoutVersionsInput = {
    where: Prisma.AttendanceSessionDefinitionWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendanceSessionDefinitionCreateWithoutVersionsInput, Prisma.AttendanceSessionDefinitionUncheckedCreateWithoutVersionsInput>;
};
export type AttendanceSessionDefinitionUpsertWithoutVersionsInput = {
    update: Prisma.XOR<Prisma.AttendanceSessionDefinitionUpdateWithoutVersionsInput, Prisma.AttendanceSessionDefinitionUncheckedUpdateWithoutVersionsInput>;
    create: Prisma.XOR<Prisma.AttendanceSessionDefinitionCreateWithoutVersionsInput, Prisma.AttendanceSessionDefinitionUncheckedCreateWithoutVersionsInput>;
    where?: Prisma.AttendanceSessionDefinitionWhereInput;
};
export type AttendanceSessionDefinitionUpdateToOneWithWhereWithoutVersionsInput = {
    where?: Prisma.AttendanceSessionDefinitionWhereInput;
    data: Prisma.XOR<Prisma.AttendanceSessionDefinitionUpdateWithoutVersionsInput, Prisma.AttendanceSessionDefinitionUncheckedUpdateWithoutVersionsInput>;
};
export type AttendanceSessionDefinitionUpdateWithoutVersionsInput = {
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    disabledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    disabledByAdminUsername?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enabledFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attendances?: Prisma.AttendanceUpdateManyWithoutSessionNestedInput;
    correctionLogs?: Prisma.AttendanceCorrectionLogUpdateManyWithoutSessionNestedInput;
    disabledByAdmin?: Prisma.AdminUpdateOneWithoutDisabledAttendanceSessionsNestedInput;
};
export type AttendanceSessionDefinitionUncheckedUpdateWithoutVersionsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    disabledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    disabledByAdminId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    disabledByAdminUsername?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enabledFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attendances?: Prisma.AttendanceUncheckedUpdateManyWithoutSessionNestedInput;
    correctionLogs?: Prisma.AttendanceCorrectionLogUncheckedUpdateManyWithoutSessionNestedInput;
};
export type AttendanceSessionDefinitionCreateWithoutCorrectionLogsInput = {
    key: string;
    disabledAt?: Date | string | null;
    disabledByAdminUsername?: string | null;
    enabledFrom?: Date | string | null;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    versions?: Prisma.AttendanceSessionVersionCreateNestedManyWithoutSessionInput;
    attendances?: Prisma.AttendanceCreateNestedManyWithoutSessionInput;
    disabledByAdmin?: Prisma.AdminCreateNestedOneWithoutDisabledAttendanceSessionsInput;
};
export type AttendanceSessionDefinitionUncheckedCreateWithoutCorrectionLogsInput = {
    id?: number;
    key: string;
    disabledAt?: Date | string | null;
    disabledByAdminId?: number | null;
    disabledByAdminUsername?: string | null;
    enabledFrom?: Date | string | null;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    versions?: Prisma.AttendanceSessionVersionUncheckedCreateNestedManyWithoutSessionInput;
    attendances?: Prisma.AttendanceUncheckedCreateNestedManyWithoutSessionInput;
};
export type AttendanceSessionDefinitionCreateOrConnectWithoutCorrectionLogsInput = {
    where: Prisma.AttendanceSessionDefinitionWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendanceSessionDefinitionCreateWithoutCorrectionLogsInput, Prisma.AttendanceSessionDefinitionUncheckedCreateWithoutCorrectionLogsInput>;
};
export type AttendanceSessionDefinitionUpsertWithoutCorrectionLogsInput = {
    update: Prisma.XOR<Prisma.AttendanceSessionDefinitionUpdateWithoutCorrectionLogsInput, Prisma.AttendanceSessionDefinitionUncheckedUpdateWithoutCorrectionLogsInput>;
    create: Prisma.XOR<Prisma.AttendanceSessionDefinitionCreateWithoutCorrectionLogsInput, Prisma.AttendanceSessionDefinitionUncheckedCreateWithoutCorrectionLogsInput>;
    where?: Prisma.AttendanceSessionDefinitionWhereInput;
};
export type AttendanceSessionDefinitionUpdateToOneWithWhereWithoutCorrectionLogsInput = {
    where?: Prisma.AttendanceSessionDefinitionWhereInput;
    data: Prisma.XOR<Prisma.AttendanceSessionDefinitionUpdateWithoutCorrectionLogsInput, Prisma.AttendanceSessionDefinitionUncheckedUpdateWithoutCorrectionLogsInput>;
};
export type AttendanceSessionDefinitionUpdateWithoutCorrectionLogsInput = {
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    disabledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    disabledByAdminUsername?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enabledFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    versions?: Prisma.AttendanceSessionVersionUpdateManyWithoutSessionNestedInput;
    attendances?: Prisma.AttendanceUpdateManyWithoutSessionNestedInput;
    disabledByAdmin?: Prisma.AdminUpdateOneWithoutDisabledAttendanceSessionsNestedInput;
};
export type AttendanceSessionDefinitionUncheckedUpdateWithoutCorrectionLogsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    disabledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    disabledByAdminId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    disabledByAdminUsername?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enabledFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    versions?: Prisma.AttendanceSessionVersionUncheckedUpdateManyWithoutSessionNestedInput;
    attendances?: Prisma.AttendanceUncheckedUpdateManyWithoutSessionNestedInput;
};
export type AttendanceSessionDefinitionCreateManyDisabledByAdminInput = {
    id?: number;
    key: string;
    disabledAt?: Date | string | null;
    disabledByAdminUsername?: string | null;
    enabledFrom?: Date | string | null;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type AttendanceSessionDefinitionUpdateWithoutDisabledByAdminInput = {
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    disabledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    disabledByAdminUsername?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enabledFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    versions?: Prisma.AttendanceSessionVersionUpdateManyWithoutSessionNestedInput;
    attendances?: Prisma.AttendanceUpdateManyWithoutSessionNestedInput;
    correctionLogs?: Prisma.AttendanceCorrectionLogUpdateManyWithoutSessionNestedInput;
};
export type AttendanceSessionDefinitionUncheckedUpdateWithoutDisabledByAdminInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    disabledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    disabledByAdminUsername?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enabledFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    versions?: Prisma.AttendanceSessionVersionUncheckedUpdateManyWithoutSessionNestedInput;
    attendances?: Prisma.AttendanceUncheckedUpdateManyWithoutSessionNestedInput;
    correctionLogs?: Prisma.AttendanceCorrectionLogUncheckedUpdateManyWithoutSessionNestedInput;
};
export type AttendanceSessionDefinitionUncheckedUpdateManyWithoutDisabledByAdminInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    disabledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    disabledByAdminUsername?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enabledFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type AttendanceSessionDefinitionCountOutputType
 */
export type AttendanceSessionDefinitionCountOutputType = {
    versions: number;
    attendances: number;
    correctionLogs: number;
};
export type AttendanceSessionDefinitionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    versions?: boolean | AttendanceSessionDefinitionCountOutputTypeCountVersionsArgs;
    attendances?: boolean | AttendanceSessionDefinitionCountOutputTypeCountAttendancesArgs;
    correctionLogs?: boolean | AttendanceSessionDefinitionCountOutputTypeCountCorrectionLogsArgs;
};
/**
 * AttendanceSessionDefinitionCountOutputType without action
 */
export type AttendanceSessionDefinitionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceSessionDefinitionCountOutputType
     */
    select?: Prisma.AttendanceSessionDefinitionCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * AttendanceSessionDefinitionCountOutputType without action
 */
export type AttendanceSessionDefinitionCountOutputTypeCountVersionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceSessionVersionWhereInput;
};
/**
 * AttendanceSessionDefinitionCountOutputType without action
 */
export type AttendanceSessionDefinitionCountOutputTypeCountAttendancesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceWhereInput;
};
/**
 * AttendanceSessionDefinitionCountOutputType without action
 */
export type AttendanceSessionDefinitionCountOutputTypeCountCorrectionLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceCorrectionLogWhereInput;
};
export type AttendanceSessionDefinitionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    key?: boolean;
    disabledAt?: boolean;
    disabledByAdminId?: boolean;
    disabledByAdminUsername?: boolean;
    enabledFrom?: boolean;
    deletedAt?: boolean;
    createdAt?: boolean;
    versions?: boolean | Prisma.AttendanceSessionDefinition$versionsArgs<ExtArgs>;
    attendances?: boolean | Prisma.AttendanceSessionDefinition$attendancesArgs<ExtArgs>;
    correctionLogs?: boolean | Prisma.AttendanceSessionDefinition$correctionLogsArgs<ExtArgs>;
    disabledByAdmin?: boolean | Prisma.AttendanceSessionDefinition$disabledByAdminArgs<ExtArgs>;
    _count?: boolean | Prisma.AttendanceSessionDefinitionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["attendanceSessionDefinition"]>;
export type AttendanceSessionDefinitionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    key?: boolean;
    disabledAt?: boolean;
    disabledByAdminId?: boolean;
    disabledByAdminUsername?: boolean;
    enabledFrom?: boolean;
    deletedAt?: boolean;
    createdAt?: boolean;
    disabledByAdmin?: boolean | Prisma.AttendanceSessionDefinition$disabledByAdminArgs<ExtArgs>;
}, ExtArgs["result"]["attendanceSessionDefinition"]>;
export type AttendanceSessionDefinitionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    key?: boolean;
    disabledAt?: boolean;
    disabledByAdminId?: boolean;
    disabledByAdminUsername?: boolean;
    enabledFrom?: boolean;
    deletedAt?: boolean;
    createdAt?: boolean;
    disabledByAdmin?: boolean | Prisma.AttendanceSessionDefinition$disabledByAdminArgs<ExtArgs>;
}, ExtArgs["result"]["attendanceSessionDefinition"]>;
export type AttendanceSessionDefinitionSelectScalar = {
    id?: boolean;
    key?: boolean;
    disabledAt?: boolean;
    disabledByAdminId?: boolean;
    disabledByAdminUsername?: boolean;
    enabledFrom?: boolean;
    deletedAt?: boolean;
    createdAt?: boolean;
};
export type AttendanceSessionDefinitionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "key" | "disabledAt" | "disabledByAdminId" | "disabledByAdminUsername" | "enabledFrom" | "deletedAt" | "createdAt", ExtArgs["result"]["attendanceSessionDefinition"]>;
export type AttendanceSessionDefinitionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    versions?: boolean | Prisma.AttendanceSessionDefinition$versionsArgs<ExtArgs>;
    attendances?: boolean | Prisma.AttendanceSessionDefinition$attendancesArgs<ExtArgs>;
    correctionLogs?: boolean | Prisma.AttendanceSessionDefinition$correctionLogsArgs<ExtArgs>;
    disabledByAdmin?: boolean | Prisma.AttendanceSessionDefinition$disabledByAdminArgs<ExtArgs>;
    _count?: boolean | Prisma.AttendanceSessionDefinitionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AttendanceSessionDefinitionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    disabledByAdmin?: boolean | Prisma.AttendanceSessionDefinition$disabledByAdminArgs<ExtArgs>;
};
export type AttendanceSessionDefinitionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    disabledByAdmin?: boolean | Prisma.AttendanceSessionDefinition$disabledByAdminArgs<ExtArgs>;
};
export type $AttendanceSessionDefinitionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AttendanceSessionDefinition";
    objects: {
        versions: Prisma.$AttendanceSessionVersionPayload<ExtArgs>[];
        attendances: Prisma.$AttendancePayload<ExtArgs>[];
        correctionLogs: Prisma.$AttendanceCorrectionLogPayload<ExtArgs>[];
        disabledByAdmin: Prisma.$AdminPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        key: string;
        disabledAt: Date | null;
        disabledByAdminId: number | null;
        disabledByAdminUsername: string | null;
        enabledFrom: Date | null;
        deletedAt: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["attendanceSessionDefinition"]>;
    composites: {};
};
export type AttendanceSessionDefinitionGetPayload<S extends boolean | null | undefined | AttendanceSessionDefinitionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AttendanceSessionDefinitionPayload, S>;
export type AttendanceSessionDefinitionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AttendanceSessionDefinitionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AttendanceSessionDefinitionCountAggregateInputType | true;
};
export interface AttendanceSessionDefinitionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AttendanceSessionDefinition'];
        meta: {
            name: 'AttendanceSessionDefinition';
        };
    };
    /**
     * Find zero or one AttendanceSessionDefinition that matches the filter.
     * @param {AttendanceSessionDefinitionFindUniqueArgs} args - Arguments to find a AttendanceSessionDefinition
     * @example
     * // Get one AttendanceSessionDefinition
     * const attendanceSessionDefinition = await prisma.attendanceSessionDefinition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceSessionDefinitionFindUniqueArgs>(args: Prisma.SelectSubset<T, AttendanceSessionDefinitionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AttendanceSessionDefinitionClient<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionDefinitionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one AttendanceSessionDefinition that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceSessionDefinitionFindUniqueOrThrowArgs} args - Arguments to find a AttendanceSessionDefinition
     * @example
     * // Get one AttendanceSessionDefinition
     * const attendanceSessionDefinition = await prisma.attendanceSessionDefinition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceSessionDefinitionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AttendanceSessionDefinitionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AttendanceSessionDefinitionClient<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionDefinitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AttendanceSessionDefinition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceSessionDefinitionFindFirstArgs} args - Arguments to find a AttendanceSessionDefinition
     * @example
     * // Get one AttendanceSessionDefinition
     * const attendanceSessionDefinition = await prisma.attendanceSessionDefinition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceSessionDefinitionFindFirstArgs>(args?: Prisma.SelectSubset<T, AttendanceSessionDefinitionFindFirstArgs<ExtArgs>>): Prisma.Prisma__AttendanceSessionDefinitionClient<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionDefinitionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AttendanceSessionDefinition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceSessionDefinitionFindFirstOrThrowArgs} args - Arguments to find a AttendanceSessionDefinition
     * @example
     * // Get one AttendanceSessionDefinition
     * const attendanceSessionDefinition = await prisma.attendanceSessionDefinition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceSessionDefinitionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AttendanceSessionDefinitionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AttendanceSessionDefinitionClient<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionDefinitionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more AttendanceSessionDefinitions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceSessionDefinitionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AttendanceSessionDefinitions
     * const attendanceSessionDefinitions = await prisma.attendanceSessionDefinition.findMany()
     *
     * // Get first 10 AttendanceSessionDefinitions
     * const attendanceSessionDefinitions = await prisma.attendanceSessionDefinition.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const attendanceSessionDefinitionWithIdOnly = await prisma.attendanceSessionDefinition.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AttendanceSessionDefinitionFindManyArgs>(args?: Prisma.SelectSubset<T, AttendanceSessionDefinitionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionDefinitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a AttendanceSessionDefinition.
     * @param {AttendanceSessionDefinitionCreateArgs} args - Arguments to create a AttendanceSessionDefinition.
     * @example
     * // Create one AttendanceSessionDefinition
     * const AttendanceSessionDefinition = await prisma.attendanceSessionDefinition.create({
     *   data: {
     *     // ... data to create a AttendanceSessionDefinition
     *   }
     * })
     *
     */
    create<T extends AttendanceSessionDefinitionCreateArgs>(args: Prisma.SelectSubset<T, AttendanceSessionDefinitionCreateArgs<ExtArgs>>): Prisma.Prisma__AttendanceSessionDefinitionClient<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionDefinitionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many AttendanceSessionDefinitions.
     * @param {AttendanceSessionDefinitionCreateManyArgs} args - Arguments to create many AttendanceSessionDefinitions.
     * @example
     * // Create many AttendanceSessionDefinitions
     * const attendanceSessionDefinition = await prisma.attendanceSessionDefinition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AttendanceSessionDefinitionCreateManyArgs>(args?: Prisma.SelectSubset<T, AttendanceSessionDefinitionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many AttendanceSessionDefinitions and returns the data saved in the database.
     * @param {AttendanceSessionDefinitionCreateManyAndReturnArgs} args - Arguments to create many AttendanceSessionDefinitions.
     * @example
     * // Create many AttendanceSessionDefinitions
     * const attendanceSessionDefinition = await prisma.attendanceSessionDefinition.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many AttendanceSessionDefinitions and only return the `id`
     * const attendanceSessionDefinitionWithIdOnly = await prisma.attendanceSessionDefinition.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AttendanceSessionDefinitionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AttendanceSessionDefinitionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionDefinitionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a AttendanceSessionDefinition.
     * @param {AttendanceSessionDefinitionDeleteArgs} args - Arguments to delete one AttendanceSessionDefinition.
     * @example
     * // Delete one AttendanceSessionDefinition
     * const AttendanceSessionDefinition = await prisma.attendanceSessionDefinition.delete({
     *   where: {
     *     // ... filter to delete one AttendanceSessionDefinition
     *   }
     * })
     *
     */
    delete<T extends AttendanceSessionDefinitionDeleteArgs>(args: Prisma.SelectSubset<T, AttendanceSessionDefinitionDeleteArgs<ExtArgs>>): Prisma.Prisma__AttendanceSessionDefinitionClient<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionDefinitionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one AttendanceSessionDefinition.
     * @param {AttendanceSessionDefinitionUpdateArgs} args - Arguments to update one AttendanceSessionDefinition.
     * @example
     * // Update one AttendanceSessionDefinition
     * const attendanceSessionDefinition = await prisma.attendanceSessionDefinition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AttendanceSessionDefinitionUpdateArgs>(args: Prisma.SelectSubset<T, AttendanceSessionDefinitionUpdateArgs<ExtArgs>>): Prisma.Prisma__AttendanceSessionDefinitionClient<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionDefinitionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more AttendanceSessionDefinitions.
     * @param {AttendanceSessionDefinitionDeleteManyArgs} args - Arguments to filter AttendanceSessionDefinitions to delete.
     * @example
     * // Delete a few AttendanceSessionDefinitions
     * const { count } = await prisma.attendanceSessionDefinition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AttendanceSessionDefinitionDeleteManyArgs>(args?: Prisma.SelectSubset<T, AttendanceSessionDefinitionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more AttendanceSessionDefinitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceSessionDefinitionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AttendanceSessionDefinitions
     * const attendanceSessionDefinition = await prisma.attendanceSessionDefinition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AttendanceSessionDefinitionUpdateManyArgs>(args: Prisma.SelectSubset<T, AttendanceSessionDefinitionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more AttendanceSessionDefinitions and returns the data updated in the database.
     * @param {AttendanceSessionDefinitionUpdateManyAndReturnArgs} args - Arguments to update many AttendanceSessionDefinitions.
     * @example
     * // Update many AttendanceSessionDefinitions
     * const attendanceSessionDefinition = await prisma.attendanceSessionDefinition.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more AttendanceSessionDefinitions and only return the `id`
     * const attendanceSessionDefinitionWithIdOnly = await prisma.attendanceSessionDefinition.updateManyAndReturn({
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
    updateManyAndReturn<T extends AttendanceSessionDefinitionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AttendanceSessionDefinitionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionDefinitionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one AttendanceSessionDefinition.
     * @param {AttendanceSessionDefinitionUpsertArgs} args - Arguments to update or create a AttendanceSessionDefinition.
     * @example
     * // Update or create a AttendanceSessionDefinition
     * const attendanceSessionDefinition = await prisma.attendanceSessionDefinition.upsert({
     *   create: {
     *     // ... data to create a AttendanceSessionDefinition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AttendanceSessionDefinition we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceSessionDefinitionUpsertArgs>(args: Prisma.SelectSubset<T, AttendanceSessionDefinitionUpsertArgs<ExtArgs>>): Prisma.Prisma__AttendanceSessionDefinitionClient<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionDefinitionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of AttendanceSessionDefinitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceSessionDefinitionCountArgs} args - Arguments to filter AttendanceSessionDefinitions to count.
     * @example
     * // Count the number of AttendanceSessionDefinitions
     * const count = await prisma.attendanceSessionDefinition.count({
     *   where: {
     *     // ... the filter for the AttendanceSessionDefinitions we want to count
     *   }
     * })
    **/
    count<T extends AttendanceSessionDefinitionCountArgs>(args?: Prisma.Subset<T, AttendanceSessionDefinitionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AttendanceSessionDefinitionCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a AttendanceSessionDefinition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceSessionDefinitionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttendanceSessionDefinitionAggregateArgs>(args: Prisma.Subset<T, AttendanceSessionDefinitionAggregateArgs>): Prisma.PrismaPromise<GetAttendanceSessionDefinitionAggregateType<T>>;
    /**
     * Group by AttendanceSessionDefinition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceSessionDefinitionGroupByArgs} args - Group by arguments.
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
    groupBy<T extends AttendanceSessionDefinitionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AttendanceSessionDefinitionGroupByArgs['orderBy'];
    } : {
        orderBy?: AttendanceSessionDefinitionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AttendanceSessionDefinitionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceSessionDefinitionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the AttendanceSessionDefinition model
     */
    readonly fields: AttendanceSessionDefinitionFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for AttendanceSessionDefinition.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__AttendanceSessionDefinitionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    versions<T extends Prisma.AttendanceSessionDefinition$versionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AttendanceSessionDefinition$versionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    attendances<T extends Prisma.AttendanceSessionDefinition$attendancesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AttendanceSessionDefinition$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    correctionLogs<T extends Prisma.AttendanceSessionDefinition$correctionLogsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AttendanceSessionDefinition$correctionLogsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceCorrectionLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    disabledByAdmin<T extends Prisma.AttendanceSessionDefinition$disabledByAdminArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AttendanceSessionDefinition$disabledByAdminArgs<ExtArgs>>): Prisma.Prisma__AdminClient<runtime.Types.Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the AttendanceSessionDefinition model
 */
export interface AttendanceSessionDefinitionFieldRefs {
    readonly id: Prisma.FieldRef<"AttendanceSessionDefinition", 'Int'>;
    readonly key: Prisma.FieldRef<"AttendanceSessionDefinition", 'String'>;
    readonly disabledAt: Prisma.FieldRef<"AttendanceSessionDefinition", 'DateTime'>;
    readonly disabledByAdminId: Prisma.FieldRef<"AttendanceSessionDefinition", 'Int'>;
    readonly disabledByAdminUsername: Prisma.FieldRef<"AttendanceSessionDefinition", 'String'>;
    readonly enabledFrom: Prisma.FieldRef<"AttendanceSessionDefinition", 'DateTime'>;
    readonly deletedAt: Prisma.FieldRef<"AttendanceSessionDefinition", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"AttendanceSessionDefinition", 'DateTime'>;
}
/**
 * AttendanceSessionDefinition findUnique
 */
export type AttendanceSessionDefinitionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which AttendanceSessionDefinition to fetch.
     */
    where: Prisma.AttendanceSessionDefinitionWhereUniqueInput;
};
/**
 * AttendanceSessionDefinition findUniqueOrThrow
 */
export type AttendanceSessionDefinitionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which AttendanceSessionDefinition to fetch.
     */
    where: Prisma.AttendanceSessionDefinitionWhereUniqueInput;
};
/**
 * AttendanceSessionDefinition findFirst
 */
export type AttendanceSessionDefinitionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which AttendanceSessionDefinition to fetch.
     */
    where?: Prisma.AttendanceSessionDefinitionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AttendanceSessionDefinitions to fetch.
     */
    orderBy?: Prisma.AttendanceSessionDefinitionOrderByWithRelationInput | Prisma.AttendanceSessionDefinitionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AttendanceSessionDefinitions.
     */
    cursor?: Prisma.AttendanceSessionDefinitionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AttendanceSessionDefinitions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AttendanceSessionDefinitions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AttendanceSessionDefinitions.
     */
    distinct?: Prisma.AttendanceSessionDefinitionScalarFieldEnum | Prisma.AttendanceSessionDefinitionScalarFieldEnum[];
};
/**
 * AttendanceSessionDefinition findFirstOrThrow
 */
export type AttendanceSessionDefinitionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which AttendanceSessionDefinition to fetch.
     */
    where?: Prisma.AttendanceSessionDefinitionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AttendanceSessionDefinitions to fetch.
     */
    orderBy?: Prisma.AttendanceSessionDefinitionOrderByWithRelationInput | Prisma.AttendanceSessionDefinitionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AttendanceSessionDefinitions.
     */
    cursor?: Prisma.AttendanceSessionDefinitionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AttendanceSessionDefinitions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AttendanceSessionDefinitions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AttendanceSessionDefinitions.
     */
    distinct?: Prisma.AttendanceSessionDefinitionScalarFieldEnum | Prisma.AttendanceSessionDefinitionScalarFieldEnum[];
};
/**
 * AttendanceSessionDefinition findMany
 */
export type AttendanceSessionDefinitionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which AttendanceSessionDefinitions to fetch.
     */
    where?: Prisma.AttendanceSessionDefinitionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AttendanceSessionDefinitions to fetch.
     */
    orderBy?: Prisma.AttendanceSessionDefinitionOrderByWithRelationInput | Prisma.AttendanceSessionDefinitionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing AttendanceSessionDefinitions.
     */
    cursor?: Prisma.AttendanceSessionDefinitionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AttendanceSessionDefinitions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AttendanceSessionDefinitions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AttendanceSessionDefinitions.
     */
    distinct?: Prisma.AttendanceSessionDefinitionScalarFieldEnum | Prisma.AttendanceSessionDefinitionScalarFieldEnum[];
};
/**
 * AttendanceSessionDefinition create
 */
export type AttendanceSessionDefinitionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a AttendanceSessionDefinition.
     */
    data: Prisma.XOR<Prisma.AttendanceSessionDefinitionCreateInput, Prisma.AttendanceSessionDefinitionUncheckedCreateInput>;
};
/**
 * AttendanceSessionDefinition createMany
 */
export type AttendanceSessionDefinitionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many AttendanceSessionDefinitions.
     */
    data: Prisma.AttendanceSessionDefinitionCreateManyInput | Prisma.AttendanceSessionDefinitionCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * AttendanceSessionDefinition createManyAndReturn
 */
export type AttendanceSessionDefinitionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceSessionDefinition
     */
    select?: Prisma.AttendanceSessionDefinitionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AttendanceSessionDefinition
     */
    omit?: Prisma.AttendanceSessionDefinitionOmit<ExtArgs> | null;
    /**
     * The data used to create many AttendanceSessionDefinitions.
     */
    data: Prisma.AttendanceSessionDefinitionCreateManyInput | Prisma.AttendanceSessionDefinitionCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AttendanceSessionDefinitionIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * AttendanceSessionDefinition update
 */
export type AttendanceSessionDefinitionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a AttendanceSessionDefinition.
     */
    data: Prisma.XOR<Prisma.AttendanceSessionDefinitionUpdateInput, Prisma.AttendanceSessionDefinitionUncheckedUpdateInput>;
    /**
     * Choose, which AttendanceSessionDefinition to update.
     */
    where: Prisma.AttendanceSessionDefinitionWhereUniqueInput;
};
/**
 * AttendanceSessionDefinition updateMany
 */
export type AttendanceSessionDefinitionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update AttendanceSessionDefinitions.
     */
    data: Prisma.XOR<Prisma.AttendanceSessionDefinitionUpdateManyMutationInput, Prisma.AttendanceSessionDefinitionUncheckedUpdateManyInput>;
    /**
     * Filter which AttendanceSessionDefinitions to update
     */
    where?: Prisma.AttendanceSessionDefinitionWhereInput;
    /**
     * Limit how many AttendanceSessionDefinitions to update.
     */
    limit?: number;
};
/**
 * AttendanceSessionDefinition updateManyAndReturn
 */
export type AttendanceSessionDefinitionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceSessionDefinition
     */
    select?: Prisma.AttendanceSessionDefinitionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AttendanceSessionDefinition
     */
    omit?: Prisma.AttendanceSessionDefinitionOmit<ExtArgs> | null;
    /**
     * The data used to update AttendanceSessionDefinitions.
     */
    data: Prisma.XOR<Prisma.AttendanceSessionDefinitionUpdateManyMutationInput, Prisma.AttendanceSessionDefinitionUncheckedUpdateManyInput>;
    /**
     * Filter which AttendanceSessionDefinitions to update
     */
    where?: Prisma.AttendanceSessionDefinitionWhereInput;
    /**
     * Limit how many AttendanceSessionDefinitions to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AttendanceSessionDefinitionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * AttendanceSessionDefinition upsert
 */
export type AttendanceSessionDefinitionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the AttendanceSessionDefinition to update in case it exists.
     */
    where: Prisma.AttendanceSessionDefinitionWhereUniqueInput;
    /**
     * In case the AttendanceSessionDefinition found by the `where` argument doesn't exist, create a new AttendanceSessionDefinition with this data.
     */
    create: Prisma.XOR<Prisma.AttendanceSessionDefinitionCreateInput, Prisma.AttendanceSessionDefinitionUncheckedCreateInput>;
    /**
     * In case the AttendanceSessionDefinition was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.AttendanceSessionDefinitionUpdateInput, Prisma.AttendanceSessionDefinitionUncheckedUpdateInput>;
};
/**
 * AttendanceSessionDefinition delete
 */
export type AttendanceSessionDefinitionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which AttendanceSessionDefinition to delete.
     */
    where: Prisma.AttendanceSessionDefinitionWhereUniqueInput;
};
/**
 * AttendanceSessionDefinition deleteMany
 */
export type AttendanceSessionDefinitionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AttendanceSessionDefinitions to delete
     */
    where?: Prisma.AttendanceSessionDefinitionWhereInput;
    /**
     * Limit how many AttendanceSessionDefinitions to delete.
     */
    limit?: number;
};
/**
 * AttendanceSessionDefinition.versions
 */
export type AttendanceSessionDefinition$versionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * AttendanceSessionDefinition.attendances
 */
export type AttendanceSessionDefinition$attendancesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: Prisma.AttendanceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Attendance
     */
    omit?: Prisma.AttendanceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AttendanceInclude<ExtArgs> | null;
    where?: Prisma.AttendanceWhereInput;
    orderBy?: Prisma.AttendanceOrderByWithRelationInput | Prisma.AttendanceOrderByWithRelationInput[];
    cursor?: Prisma.AttendanceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AttendanceScalarFieldEnum | Prisma.AttendanceScalarFieldEnum[];
};
/**
 * AttendanceSessionDefinition.correctionLogs
 */
export type AttendanceSessionDefinition$correctionLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * AttendanceSessionDefinition.disabledByAdmin
 */
export type AttendanceSessionDefinition$disabledByAdminArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * AttendanceSessionDefinition without action
 */
export type AttendanceSessionDefinitionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
