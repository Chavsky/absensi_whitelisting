import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model AttendanceSessionVersion
 *
 */
export type AttendanceSessionVersionModel = runtime.Types.Result.DefaultSelection<Prisma.$AttendanceSessionVersionPayload>;
export type AggregateAttendanceSessionVersion = {
    _count: AttendanceSessionVersionCountAggregateOutputType | null;
    _avg: AttendanceSessionVersionAvgAggregateOutputType | null;
    _sum: AttendanceSessionVersionSumAggregateOutputType | null;
    _min: AttendanceSessionVersionMinAggregateOutputType | null;
    _max: AttendanceSessionVersionMaxAggregateOutputType | null;
};
export type AttendanceSessionVersionAvgAggregateOutputType = {
    id: number | null;
    sessionId: number | null;
    sortOrder: number | null;
    createdByAdminId: number | null;
};
export type AttendanceSessionVersionSumAggregateOutputType = {
    id: number | null;
    sessionId: number | null;
    sortOrder: number | null;
    createdByAdminId: number | null;
};
export type AttendanceSessionVersionMinAggregateOutputType = {
    id: number | null;
    sessionId: number | null;
    name: string | null;
    sortOrder: number | null;
    isActive: boolean | null;
    effectiveFrom: Date | null;
    startTime: Date | null;
    endTime: Date | null;
    createdByAdminId: number | null;
    createdByAdminUsername: string | null;
    createdAt: Date | null;
};
export type AttendanceSessionVersionMaxAggregateOutputType = {
    id: number | null;
    sessionId: number | null;
    name: string | null;
    sortOrder: number | null;
    isActive: boolean | null;
    effectiveFrom: Date | null;
    startTime: Date | null;
    endTime: Date | null;
    createdByAdminId: number | null;
    createdByAdminUsername: string | null;
    createdAt: Date | null;
};
export type AttendanceSessionVersionCountAggregateOutputType = {
    id: number;
    sessionId: number;
    name: number;
    sortOrder: number;
    isActive: number;
    effectiveFrom: number;
    startTime: number;
    endTime: number;
    createdByAdminId: number;
    createdByAdminUsername: number;
    createdAt: number;
    _all: number;
};
export type AttendanceSessionVersionAvgAggregateInputType = {
    id?: true;
    sessionId?: true;
    sortOrder?: true;
    createdByAdminId?: true;
};
export type AttendanceSessionVersionSumAggregateInputType = {
    id?: true;
    sessionId?: true;
    sortOrder?: true;
    createdByAdminId?: true;
};
export type AttendanceSessionVersionMinAggregateInputType = {
    id?: true;
    sessionId?: true;
    name?: true;
    sortOrder?: true;
    isActive?: true;
    effectiveFrom?: true;
    startTime?: true;
    endTime?: true;
    createdByAdminId?: true;
    createdByAdminUsername?: true;
    createdAt?: true;
};
export type AttendanceSessionVersionMaxAggregateInputType = {
    id?: true;
    sessionId?: true;
    name?: true;
    sortOrder?: true;
    isActive?: true;
    effectiveFrom?: true;
    startTime?: true;
    endTime?: true;
    createdByAdminId?: true;
    createdByAdminUsername?: true;
    createdAt?: true;
};
export type AttendanceSessionVersionCountAggregateInputType = {
    id?: true;
    sessionId?: true;
    name?: true;
    sortOrder?: true;
    isActive?: true;
    effectiveFrom?: true;
    startTime?: true;
    endTime?: true;
    createdByAdminId?: true;
    createdByAdminUsername?: true;
    createdAt?: true;
    _all?: true;
};
export type AttendanceSessionVersionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AttendanceSessionVersion to aggregate.
     */
    where?: Prisma.AttendanceSessionVersionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AttendanceSessionVersions to fetch.
     */
    orderBy?: Prisma.AttendanceSessionVersionOrderByWithRelationInput | Prisma.AttendanceSessionVersionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.AttendanceSessionVersionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AttendanceSessionVersions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AttendanceSessionVersions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned AttendanceSessionVersions
    **/
    _count?: true | AttendanceSessionVersionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: AttendanceSessionVersionAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: AttendanceSessionVersionSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceSessionVersionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceSessionVersionMaxAggregateInputType;
};
export type GetAttendanceSessionVersionAggregateType<T extends AttendanceSessionVersionAggregateArgs> = {
    [P in keyof T & keyof AggregateAttendanceSessionVersion]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAttendanceSessionVersion[P]> : Prisma.GetScalarType<T[P], AggregateAttendanceSessionVersion[P]>;
};
export type AttendanceSessionVersionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceSessionVersionWhereInput;
    orderBy?: Prisma.AttendanceSessionVersionOrderByWithAggregationInput | Prisma.AttendanceSessionVersionOrderByWithAggregationInput[];
    by: Prisma.AttendanceSessionVersionScalarFieldEnum[] | Prisma.AttendanceSessionVersionScalarFieldEnum;
    having?: Prisma.AttendanceSessionVersionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AttendanceSessionVersionCountAggregateInputType | true;
    _avg?: AttendanceSessionVersionAvgAggregateInputType;
    _sum?: AttendanceSessionVersionSumAggregateInputType;
    _min?: AttendanceSessionVersionMinAggregateInputType;
    _max?: AttendanceSessionVersionMaxAggregateInputType;
};
export type AttendanceSessionVersionGroupByOutputType = {
    id: number;
    sessionId: number;
    name: string;
    sortOrder: number;
    isActive: boolean;
    effectiveFrom: Date;
    startTime: Date | null;
    endTime: Date | null;
    createdByAdminId: number | null;
    createdByAdminUsername: string | null;
    createdAt: Date;
    _count: AttendanceSessionVersionCountAggregateOutputType | null;
    _avg: AttendanceSessionVersionAvgAggregateOutputType | null;
    _sum: AttendanceSessionVersionSumAggregateOutputType | null;
    _min: AttendanceSessionVersionMinAggregateOutputType | null;
    _max: AttendanceSessionVersionMaxAggregateOutputType | null;
};
export type GetAttendanceSessionVersionGroupByPayload<T extends AttendanceSessionVersionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AttendanceSessionVersionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AttendanceSessionVersionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AttendanceSessionVersionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AttendanceSessionVersionGroupByOutputType[P]>;
}>>;
export type AttendanceSessionVersionWhereInput = {
    AND?: Prisma.AttendanceSessionVersionWhereInput | Prisma.AttendanceSessionVersionWhereInput[];
    OR?: Prisma.AttendanceSessionVersionWhereInput[];
    NOT?: Prisma.AttendanceSessionVersionWhereInput | Prisma.AttendanceSessionVersionWhereInput[];
    id?: Prisma.IntFilter<"AttendanceSessionVersion"> | number;
    sessionId?: Prisma.IntFilter<"AttendanceSessionVersion"> | number;
    name?: Prisma.StringFilter<"AttendanceSessionVersion"> | string;
    sortOrder?: Prisma.IntFilter<"AttendanceSessionVersion"> | number;
    isActive?: Prisma.BoolFilter<"AttendanceSessionVersion"> | boolean;
    effectiveFrom?: Prisma.DateTimeFilter<"AttendanceSessionVersion"> | Date | string;
    startTime?: Prisma.DateTimeNullableFilter<"AttendanceSessionVersion"> | Date | string | null;
    endTime?: Prisma.DateTimeNullableFilter<"AttendanceSessionVersion"> | Date | string | null;
    createdByAdminId?: Prisma.IntNullableFilter<"AttendanceSessionVersion"> | number | null;
    createdByAdminUsername?: Prisma.StringNullableFilter<"AttendanceSessionVersion"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AttendanceSessionVersion"> | Date | string;
    session?: Prisma.XOR<Prisma.AttendanceSessionDefinitionScalarRelationFilter, Prisma.AttendanceSessionDefinitionWhereInput>;
    createdByAdmin?: Prisma.XOR<Prisma.AdminNullableScalarRelationFilter, Prisma.AdminWhereInput> | null;
    daySchedules?: Prisma.AttendanceSessionDayScheduleListRelationFilter;
    attendances?: Prisma.AttendanceListRelationFilter;
    correctionLogs?: Prisma.AttendanceCorrectionLogListRelationFilter;
};
export type AttendanceSessionVersionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    startTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    endTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdByAdminId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdByAdminUsername?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    session?: Prisma.AttendanceSessionDefinitionOrderByWithRelationInput;
    createdByAdmin?: Prisma.AdminOrderByWithRelationInput;
    daySchedules?: Prisma.AttendanceSessionDayScheduleOrderByRelationAggregateInput;
    attendances?: Prisma.AttendanceOrderByRelationAggregateInput;
    correctionLogs?: Prisma.AttendanceCorrectionLogOrderByRelationAggregateInput;
};
export type AttendanceSessionVersionWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    sessionId_effectiveFrom?: Prisma.AttendanceSessionVersionSessionIdEffectiveFromCompoundUniqueInput;
    id_sessionId?: Prisma.AttendanceSessionVersionIdSessionIdCompoundUniqueInput;
    AND?: Prisma.AttendanceSessionVersionWhereInput | Prisma.AttendanceSessionVersionWhereInput[];
    OR?: Prisma.AttendanceSessionVersionWhereInput[];
    NOT?: Prisma.AttendanceSessionVersionWhereInput | Prisma.AttendanceSessionVersionWhereInput[];
    sessionId?: Prisma.IntFilter<"AttendanceSessionVersion"> | number;
    name?: Prisma.StringFilter<"AttendanceSessionVersion"> | string;
    sortOrder?: Prisma.IntFilter<"AttendanceSessionVersion"> | number;
    isActive?: Prisma.BoolFilter<"AttendanceSessionVersion"> | boolean;
    effectiveFrom?: Prisma.DateTimeFilter<"AttendanceSessionVersion"> | Date | string;
    startTime?: Prisma.DateTimeNullableFilter<"AttendanceSessionVersion"> | Date | string | null;
    endTime?: Prisma.DateTimeNullableFilter<"AttendanceSessionVersion"> | Date | string | null;
    createdByAdminId?: Prisma.IntNullableFilter<"AttendanceSessionVersion"> | number | null;
    createdByAdminUsername?: Prisma.StringNullableFilter<"AttendanceSessionVersion"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AttendanceSessionVersion"> | Date | string;
    session?: Prisma.XOR<Prisma.AttendanceSessionDefinitionScalarRelationFilter, Prisma.AttendanceSessionDefinitionWhereInput>;
    createdByAdmin?: Prisma.XOR<Prisma.AdminNullableScalarRelationFilter, Prisma.AdminWhereInput> | null;
    daySchedules?: Prisma.AttendanceSessionDayScheduleListRelationFilter;
    attendances?: Prisma.AttendanceListRelationFilter;
    correctionLogs?: Prisma.AttendanceCorrectionLogListRelationFilter;
}, "id" | "sessionId_effectiveFrom" | "id_sessionId">;
export type AttendanceSessionVersionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    startTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    endTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdByAdminId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdByAdminUsername?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.AttendanceSessionVersionCountOrderByAggregateInput;
    _avg?: Prisma.AttendanceSessionVersionAvgOrderByAggregateInput;
    _max?: Prisma.AttendanceSessionVersionMaxOrderByAggregateInput;
    _min?: Prisma.AttendanceSessionVersionMinOrderByAggregateInput;
    _sum?: Prisma.AttendanceSessionVersionSumOrderByAggregateInput;
};
export type AttendanceSessionVersionScalarWhereWithAggregatesInput = {
    AND?: Prisma.AttendanceSessionVersionScalarWhereWithAggregatesInput | Prisma.AttendanceSessionVersionScalarWhereWithAggregatesInput[];
    OR?: Prisma.AttendanceSessionVersionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AttendanceSessionVersionScalarWhereWithAggregatesInput | Prisma.AttendanceSessionVersionScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"AttendanceSessionVersion"> | number;
    sessionId?: Prisma.IntWithAggregatesFilter<"AttendanceSessionVersion"> | number;
    name?: Prisma.StringWithAggregatesFilter<"AttendanceSessionVersion"> | string;
    sortOrder?: Prisma.IntWithAggregatesFilter<"AttendanceSessionVersion"> | number;
    isActive?: Prisma.BoolWithAggregatesFilter<"AttendanceSessionVersion"> | boolean;
    effectiveFrom?: Prisma.DateTimeWithAggregatesFilter<"AttendanceSessionVersion"> | Date | string;
    startTime?: Prisma.DateTimeNullableWithAggregatesFilter<"AttendanceSessionVersion"> | Date | string | null;
    endTime?: Prisma.DateTimeNullableWithAggregatesFilter<"AttendanceSessionVersion"> | Date | string | null;
    createdByAdminId?: Prisma.IntNullableWithAggregatesFilter<"AttendanceSessionVersion"> | number | null;
    createdByAdminUsername?: Prisma.StringNullableWithAggregatesFilter<"AttendanceSessionVersion"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AttendanceSessionVersion"> | Date | string;
};
export type AttendanceSessionVersionCreateInput = {
    name: string;
    sortOrder: number;
    isActive?: boolean;
    effectiveFrom: Date | string;
    startTime?: Date | string | null;
    endTime?: Date | string | null;
    createdByAdminUsername?: string | null;
    createdAt?: Date | string;
    session: Prisma.AttendanceSessionDefinitionCreateNestedOneWithoutVersionsInput;
    createdByAdmin?: Prisma.AdminCreateNestedOneWithoutAttendanceSessionVersionsInput;
    daySchedules?: Prisma.AttendanceSessionDayScheduleCreateNestedManyWithoutSessionVersionInput;
    attendances?: Prisma.AttendanceCreateNestedManyWithoutSessionVersionInput;
    correctionLogs?: Prisma.AttendanceCorrectionLogCreateNestedManyWithoutSessionVersionInput;
};
export type AttendanceSessionVersionUncheckedCreateInput = {
    id?: number;
    sessionId: number;
    name: string;
    sortOrder: number;
    isActive?: boolean;
    effectiveFrom: Date | string;
    startTime?: Date | string | null;
    endTime?: Date | string | null;
    createdByAdminId?: number | null;
    createdByAdminUsername?: string | null;
    createdAt?: Date | string;
    daySchedules?: Prisma.AttendanceSessionDayScheduleUncheckedCreateNestedManyWithoutSessionVersionInput;
    attendances?: Prisma.AttendanceUncheckedCreateNestedManyWithoutSessionVersionInput;
    correctionLogs?: Prisma.AttendanceCorrectionLogUncheckedCreateNestedManyWithoutSessionVersionInput;
};
export type AttendanceSessionVersionUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByAdminUsername?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    session?: Prisma.AttendanceSessionDefinitionUpdateOneRequiredWithoutVersionsNestedInput;
    createdByAdmin?: Prisma.AdminUpdateOneWithoutAttendanceSessionVersionsNestedInput;
    daySchedules?: Prisma.AttendanceSessionDayScheduleUpdateManyWithoutSessionVersionNestedInput;
    attendances?: Prisma.AttendanceUpdateManyWithoutSessionVersionNestedInput;
    correctionLogs?: Prisma.AttendanceCorrectionLogUpdateManyWithoutSessionVersionNestedInput;
};
export type AttendanceSessionVersionUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    sessionId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByAdminId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdByAdminUsername?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    daySchedules?: Prisma.AttendanceSessionDayScheduleUncheckedUpdateManyWithoutSessionVersionNestedInput;
    attendances?: Prisma.AttendanceUncheckedUpdateManyWithoutSessionVersionNestedInput;
    correctionLogs?: Prisma.AttendanceCorrectionLogUncheckedUpdateManyWithoutSessionVersionNestedInput;
};
export type AttendanceSessionVersionCreateManyInput = {
    id?: number;
    sessionId: number;
    name: string;
    sortOrder: number;
    isActive?: boolean;
    effectiveFrom: Date | string;
    startTime?: Date | string | null;
    endTime?: Date | string | null;
    createdByAdminId?: number | null;
    createdByAdminUsername?: string | null;
    createdAt?: Date | string;
};
export type AttendanceSessionVersionUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByAdminUsername?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceSessionVersionUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    sessionId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByAdminId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdByAdminUsername?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceSessionVersionListRelationFilter = {
    every?: Prisma.AttendanceSessionVersionWhereInput;
    some?: Prisma.AttendanceSessionVersionWhereInput;
    none?: Prisma.AttendanceSessionVersionWhereInput;
};
export type AttendanceSessionVersionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AttendanceSessionVersionNullableScalarRelationFilter = {
    is?: Prisma.AttendanceSessionVersionWhereInput | null;
    isNot?: Prisma.AttendanceSessionVersionWhereInput | null;
};
export type AttendanceSessionVersionSessionIdEffectiveFromCompoundUniqueInput = {
    sessionId: number;
    effectiveFrom: Date | string;
};
export type AttendanceSessionVersionIdSessionIdCompoundUniqueInput = {
    id: number;
    sessionId: number;
};
export type AttendanceSessionVersionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    createdByAdminId?: Prisma.SortOrder;
    createdByAdminUsername?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AttendanceSessionVersionAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdByAdminId?: Prisma.SortOrder;
};
export type AttendanceSessionVersionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    createdByAdminId?: Prisma.SortOrder;
    createdByAdminUsername?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AttendanceSessionVersionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    createdByAdminId?: Prisma.SortOrder;
    createdByAdminUsername?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AttendanceSessionVersionSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdByAdminId?: Prisma.SortOrder;
};
export type AttendanceSessionVersionScalarRelationFilter = {
    is?: Prisma.AttendanceSessionVersionWhereInput;
    isNot?: Prisma.AttendanceSessionVersionWhereInput;
};
export type AttendanceSessionVersionCreateNestedManyWithoutCreatedByAdminInput = {
    create?: Prisma.XOR<Prisma.AttendanceSessionVersionCreateWithoutCreatedByAdminInput, Prisma.AttendanceSessionVersionUncheckedCreateWithoutCreatedByAdminInput> | Prisma.AttendanceSessionVersionCreateWithoutCreatedByAdminInput[] | Prisma.AttendanceSessionVersionUncheckedCreateWithoutCreatedByAdminInput[];
    connectOrCreate?: Prisma.AttendanceSessionVersionCreateOrConnectWithoutCreatedByAdminInput | Prisma.AttendanceSessionVersionCreateOrConnectWithoutCreatedByAdminInput[];
    createMany?: Prisma.AttendanceSessionVersionCreateManyCreatedByAdminInputEnvelope;
    connect?: Prisma.AttendanceSessionVersionWhereUniqueInput | Prisma.AttendanceSessionVersionWhereUniqueInput[];
};
export type AttendanceSessionVersionUncheckedCreateNestedManyWithoutCreatedByAdminInput = {
    create?: Prisma.XOR<Prisma.AttendanceSessionVersionCreateWithoutCreatedByAdminInput, Prisma.AttendanceSessionVersionUncheckedCreateWithoutCreatedByAdminInput> | Prisma.AttendanceSessionVersionCreateWithoutCreatedByAdminInput[] | Prisma.AttendanceSessionVersionUncheckedCreateWithoutCreatedByAdminInput[];
    connectOrCreate?: Prisma.AttendanceSessionVersionCreateOrConnectWithoutCreatedByAdminInput | Prisma.AttendanceSessionVersionCreateOrConnectWithoutCreatedByAdminInput[];
    createMany?: Prisma.AttendanceSessionVersionCreateManyCreatedByAdminInputEnvelope;
    connect?: Prisma.AttendanceSessionVersionWhereUniqueInput | Prisma.AttendanceSessionVersionWhereUniqueInput[];
};
export type AttendanceSessionVersionUpdateManyWithoutCreatedByAdminNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceSessionVersionCreateWithoutCreatedByAdminInput, Prisma.AttendanceSessionVersionUncheckedCreateWithoutCreatedByAdminInput> | Prisma.AttendanceSessionVersionCreateWithoutCreatedByAdminInput[] | Prisma.AttendanceSessionVersionUncheckedCreateWithoutCreatedByAdminInput[];
    connectOrCreate?: Prisma.AttendanceSessionVersionCreateOrConnectWithoutCreatedByAdminInput | Prisma.AttendanceSessionVersionCreateOrConnectWithoutCreatedByAdminInput[];
    upsert?: Prisma.AttendanceSessionVersionUpsertWithWhereUniqueWithoutCreatedByAdminInput | Prisma.AttendanceSessionVersionUpsertWithWhereUniqueWithoutCreatedByAdminInput[];
    createMany?: Prisma.AttendanceSessionVersionCreateManyCreatedByAdminInputEnvelope;
    set?: Prisma.AttendanceSessionVersionWhereUniqueInput | Prisma.AttendanceSessionVersionWhereUniqueInput[];
    disconnect?: Prisma.AttendanceSessionVersionWhereUniqueInput | Prisma.AttendanceSessionVersionWhereUniqueInput[];
    delete?: Prisma.AttendanceSessionVersionWhereUniqueInput | Prisma.AttendanceSessionVersionWhereUniqueInput[];
    connect?: Prisma.AttendanceSessionVersionWhereUniqueInput | Prisma.AttendanceSessionVersionWhereUniqueInput[];
    update?: Prisma.AttendanceSessionVersionUpdateWithWhereUniqueWithoutCreatedByAdminInput | Prisma.AttendanceSessionVersionUpdateWithWhereUniqueWithoutCreatedByAdminInput[];
    updateMany?: Prisma.AttendanceSessionVersionUpdateManyWithWhereWithoutCreatedByAdminInput | Prisma.AttendanceSessionVersionUpdateManyWithWhereWithoutCreatedByAdminInput[];
    deleteMany?: Prisma.AttendanceSessionVersionScalarWhereInput | Prisma.AttendanceSessionVersionScalarWhereInput[];
};
export type AttendanceSessionVersionUncheckedUpdateManyWithoutCreatedByAdminNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceSessionVersionCreateWithoutCreatedByAdminInput, Prisma.AttendanceSessionVersionUncheckedCreateWithoutCreatedByAdminInput> | Prisma.AttendanceSessionVersionCreateWithoutCreatedByAdminInput[] | Prisma.AttendanceSessionVersionUncheckedCreateWithoutCreatedByAdminInput[];
    connectOrCreate?: Prisma.AttendanceSessionVersionCreateOrConnectWithoutCreatedByAdminInput | Prisma.AttendanceSessionVersionCreateOrConnectWithoutCreatedByAdminInput[];
    upsert?: Prisma.AttendanceSessionVersionUpsertWithWhereUniqueWithoutCreatedByAdminInput | Prisma.AttendanceSessionVersionUpsertWithWhereUniqueWithoutCreatedByAdminInput[];
    createMany?: Prisma.AttendanceSessionVersionCreateManyCreatedByAdminInputEnvelope;
    set?: Prisma.AttendanceSessionVersionWhereUniqueInput | Prisma.AttendanceSessionVersionWhereUniqueInput[];
    disconnect?: Prisma.AttendanceSessionVersionWhereUniqueInput | Prisma.AttendanceSessionVersionWhereUniqueInput[];
    delete?: Prisma.AttendanceSessionVersionWhereUniqueInput | Prisma.AttendanceSessionVersionWhereUniqueInput[];
    connect?: Prisma.AttendanceSessionVersionWhereUniqueInput | Prisma.AttendanceSessionVersionWhereUniqueInput[];
    update?: Prisma.AttendanceSessionVersionUpdateWithWhereUniqueWithoutCreatedByAdminInput | Prisma.AttendanceSessionVersionUpdateWithWhereUniqueWithoutCreatedByAdminInput[];
    updateMany?: Prisma.AttendanceSessionVersionUpdateManyWithWhereWithoutCreatedByAdminInput | Prisma.AttendanceSessionVersionUpdateManyWithWhereWithoutCreatedByAdminInput[];
    deleteMany?: Prisma.AttendanceSessionVersionScalarWhereInput | Prisma.AttendanceSessionVersionScalarWhereInput[];
};
export type AttendanceSessionVersionCreateNestedOneWithoutAttendancesInput = {
    create?: Prisma.XOR<Prisma.AttendanceSessionVersionCreateWithoutAttendancesInput, Prisma.AttendanceSessionVersionUncheckedCreateWithoutAttendancesInput>;
    connectOrCreate?: Prisma.AttendanceSessionVersionCreateOrConnectWithoutAttendancesInput;
    connect?: Prisma.AttendanceSessionVersionWhereUniqueInput;
};
export type AttendanceSessionVersionUpdateOneWithoutAttendancesNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceSessionVersionCreateWithoutAttendancesInput, Prisma.AttendanceSessionVersionUncheckedCreateWithoutAttendancesInput>;
    connectOrCreate?: Prisma.AttendanceSessionVersionCreateOrConnectWithoutAttendancesInput;
    upsert?: Prisma.AttendanceSessionVersionUpsertWithoutAttendancesInput;
    disconnect?: Prisma.AttendanceSessionVersionWhereInput | boolean;
    delete?: Prisma.AttendanceSessionVersionWhereInput | boolean;
    connect?: Prisma.AttendanceSessionVersionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AttendanceSessionVersionUpdateToOneWithWhereWithoutAttendancesInput, Prisma.AttendanceSessionVersionUpdateWithoutAttendancesInput>, Prisma.AttendanceSessionVersionUncheckedUpdateWithoutAttendancesInput>;
};
export type AttendanceSessionVersionCreateNestedManyWithoutSessionInput = {
    create?: Prisma.XOR<Prisma.AttendanceSessionVersionCreateWithoutSessionInput, Prisma.AttendanceSessionVersionUncheckedCreateWithoutSessionInput> | Prisma.AttendanceSessionVersionCreateWithoutSessionInput[] | Prisma.AttendanceSessionVersionUncheckedCreateWithoutSessionInput[];
    connectOrCreate?: Prisma.AttendanceSessionVersionCreateOrConnectWithoutSessionInput | Prisma.AttendanceSessionVersionCreateOrConnectWithoutSessionInput[];
    createMany?: Prisma.AttendanceSessionVersionCreateManySessionInputEnvelope;
    connect?: Prisma.AttendanceSessionVersionWhereUniqueInput | Prisma.AttendanceSessionVersionWhereUniqueInput[];
};
export type AttendanceSessionVersionUncheckedCreateNestedManyWithoutSessionInput = {
    create?: Prisma.XOR<Prisma.AttendanceSessionVersionCreateWithoutSessionInput, Prisma.AttendanceSessionVersionUncheckedCreateWithoutSessionInput> | Prisma.AttendanceSessionVersionCreateWithoutSessionInput[] | Prisma.AttendanceSessionVersionUncheckedCreateWithoutSessionInput[];
    connectOrCreate?: Prisma.AttendanceSessionVersionCreateOrConnectWithoutSessionInput | Prisma.AttendanceSessionVersionCreateOrConnectWithoutSessionInput[];
    createMany?: Prisma.AttendanceSessionVersionCreateManySessionInputEnvelope;
    connect?: Prisma.AttendanceSessionVersionWhereUniqueInput | Prisma.AttendanceSessionVersionWhereUniqueInput[];
};
export type AttendanceSessionVersionUpdateManyWithoutSessionNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceSessionVersionCreateWithoutSessionInput, Prisma.AttendanceSessionVersionUncheckedCreateWithoutSessionInput> | Prisma.AttendanceSessionVersionCreateWithoutSessionInput[] | Prisma.AttendanceSessionVersionUncheckedCreateWithoutSessionInput[];
    connectOrCreate?: Prisma.AttendanceSessionVersionCreateOrConnectWithoutSessionInput | Prisma.AttendanceSessionVersionCreateOrConnectWithoutSessionInput[];
    upsert?: Prisma.AttendanceSessionVersionUpsertWithWhereUniqueWithoutSessionInput | Prisma.AttendanceSessionVersionUpsertWithWhereUniqueWithoutSessionInput[];
    createMany?: Prisma.AttendanceSessionVersionCreateManySessionInputEnvelope;
    set?: Prisma.AttendanceSessionVersionWhereUniqueInput | Prisma.AttendanceSessionVersionWhereUniqueInput[];
    disconnect?: Prisma.AttendanceSessionVersionWhereUniqueInput | Prisma.AttendanceSessionVersionWhereUniqueInput[];
    delete?: Prisma.AttendanceSessionVersionWhereUniqueInput | Prisma.AttendanceSessionVersionWhereUniqueInput[];
    connect?: Prisma.AttendanceSessionVersionWhereUniqueInput | Prisma.AttendanceSessionVersionWhereUniqueInput[];
    update?: Prisma.AttendanceSessionVersionUpdateWithWhereUniqueWithoutSessionInput | Prisma.AttendanceSessionVersionUpdateWithWhereUniqueWithoutSessionInput[];
    updateMany?: Prisma.AttendanceSessionVersionUpdateManyWithWhereWithoutSessionInput | Prisma.AttendanceSessionVersionUpdateManyWithWhereWithoutSessionInput[];
    deleteMany?: Prisma.AttendanceSessionVersionScalarWhereInput | Prisma.AttendanceSessionVersionScalarWhereInput[];
};
export type AttendanceSessionVersionUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceSessionVersionCreateWithoutSessionInput, Prisma.AttendanceSessionVersionUncheckedCreateWithoutSessionInput> | Prisma.AttendanceSessionVersionCreateWithoutSessionInput[] | Prisma.AttendanceSessionVersionUncheckedCreateWithoutSessionInput[];
    connectOrCreate?: Prisma.AttendanceSessionVersionCreateOrConnectWithoutSessionInput | Prisma.AttendanceSessionVersionCreateOrConnectWithoutSessionInput[];
    upsert?: Prisma.AttendanceSessionVersionUpsertWithWhereUniqueWithoutSessionInput | Prisma.AttendanceSessionVersionUpsertWithWhereUniqueWithoutSessionInput[];
    createMany?: Prisma.AttendanceSessionVersionCreateManySessionInputEnvelope;
    set?: Prisma.AttendanceSessionVersionWhereUniqueInput | Prisma.AttendanceSessionVersionWhereUniqueInput[];
    disconnect?: Prisma.AttendanceSessionVersionWhereUniqueInput | Prisma.AttendanceSessionVersionWhereUniqueInput[];
    delete?: Prisma.AttendanceSessionVersionWhereUniqueInput | Prisma.AttendanceSessionVersionWhereUniqueInput[];
    connect?: Prisma.AttendanceSessionVersionWhereUniqueInput | Prisma.AttendanceSessionVersionWhereUniqueInput[];
    update?: Prisma.AttendanceSessionVersionUpdateWithWhereUniqueWithoutSessionInput | Prisma.AttendanceSessionVersionUpdateWithWhereUniqueWithoutSessionInput[];
    updateMany?: Prisma.AttendanceSessionVersionUpdateManyWithWhereWithoutSessionInput | Prisma.AttendanceSessionVersionUpdateManyWithWhereWithoutSessionInput[];
    deleteMany?: Prisma.AttendanceSessionVersionScalarWhereInput | Prisma.AttendanceSessionVersionScalarWhereInput[];
};
export type AttendanceSessionVersionCreateNestedOneWithoutDaySchedulesInput = {
    create?: Prisma.XOR<Prisma.AttendanceSessionVersionCreateWithoutDaySchedulesInput, Prisma.AttendanceSessionVersionUncheckedCreateWithoutDaySchedulesInput>;
    connectOrCreate?: Prisma.AttendanceSessionVersionCreateOrConnectWithoutDaySchedulesInput;
    connect?: Prisma.AttendanceSessionVersionWhereUniqueInput;
};
export type AttendanceSessionVersionUpdateOneRequiredWithoutDaySchedulesNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceSessionVersionCreateWithoutDaySchedulesInput, Prisma.AttendanceSessionVersionUncheckedCreateWithoutDaySchedulesInput>;
    connectOrCreate?: Prisma.AttendanceSessionVersionCreateOrConnectWithoutDaySchedulesInput;
    upsert?: Prisma.AttendanceSessionVersionUpsertWithoutDaySchedulesInput;
    connect?: Prisma.AttendanceSessionVersionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AttendanceSessionVersionUpdateToOneWithWhereWithoutDaySchedulesInput, Prisma.AttendanceSessionVersionUpdateWithoutDaySchedulesInput>, Prisma.AttendanceSessionVersionUncheckedUpdateWithoutDaySchedulesInput>;
};
export type AttendanceSessionVersionCreateNestedOneWithoutCorrectionLogsInput = {
    create?: Prisma.XOR<Prisma.AttendanceSessionVersionCreateWithoutCorrectionLogsInput, Prisma.AttendanceSessionVersionUncheckedCreateWithoutCorrectionLogsInput>;
    connectOrCreate?: Prisma.AttendanceSessionVersionCreateOrConnectWithoutCorrectionLogsInput;
    connect?: Prisma.AttendanceSessionVersionWhereUniqueInput;
};
export type AttendanceSessionVersionUpdateOneWithoutCorrectionLogsNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceSessionVersionCreateWithoutCorrectionLogsInput, Prisma.AttendanceSessionVersionUncheckedCreateWithoutCorrectionLogsInput>;
    connectOrCreate?: Prisma.AttendanceSessionVersionCreateOrConnectWithoutCorrectionLogsInput;
    upsert?: Prisma.AttendanceSessionVersionUpsertWithoutCorrectionLogsInput;
    disconnect?: Prisma.AttendanceSessionVersionWhereInput | boolean;
    delete?: Prisma.AttendanceSessionVersionWhereInput | boolean;
    connect?: Prisma.AttendanceSessionVersionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AttendanceSessionVersionUpdateToOneWithWhereWithoutCorrectionLogsInput, Prisma.AttendanceSessionVersionUpdateWithoutCorrectionLogsInput>, Prisma.AttendanceSessionVersionUncheckedUpdateWithoutCorrectionLogsInput>;
};
export type AttendanceSessionVersionCreateWithoutCreatedByAdminInput = {
    name: string;
    sortOrder: number;
    isActive?: boolean;
    effectiveFrom: Date | string;
    startTime?: Date | string | null;
    endTime?: Date | string | null;
    createdByAdminUsername?: string | null;
    createdAt?: Date | string;
    session: Prisma.AttendanceSessionDefinitionCreateNestedOneWithoutVersionsInput;
    daySchedules?: Prisma.AttendanceSessionDayScheduleCreateNestedManyWithoutSessionVersionInput;
    attendances?: Prisma.AttendanceCreateNestedManyWithoutSessionVersionInput;
    correctionLogs?: Prisma.AttendanceCorrectionLogCreateNestedManyWithoutSessionVersionInput;
};
export type AttendanceSessionVersionUncheckedCreateWithoutCreatedByAdminInput = {
    id?: number;
    sessionId: number;
    name: string;
    sortOrder: number;
    isActive?: boolean;
    effectiveFrom: Date | string;
    startTime?: Date | string | null;
    endTime?: Date | string | null;
    createdByAdminUsername?: string | null;
    createdAt?: Date | string;
    daySchedules?: Prisma.AttendanceSessionDayScheduleUncheckedCreateNestedManyWithoutSessionVersionInput;
    attendances?: Prisma.AttendanceUncheckedCreateNestedManyWithoutSessionVersionInput;
    correctionLogs?: Prisma.AttendanceCorrectionLogUncheckedCreateNestedManyWithoutSessionVersionInput;
};
export type AttendanceSessionVersionCreateOrConnectWithoutCreatedByAdminInput = {
    where: Prisma.AttendanceSessionVersionWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendanceSessionVersionCreateWithoutCreatedByAdminInput, Prisma.AttendanceSessionVersionUncheckedCreateWithoutCreatedByAdminInput>;
};
export type AttendanceSessionVersionCreateManyCreatedByAdminInputEnvelope = {
    data: Prisma.AttendanceSessionVersionCreateManyCreatedByAdminInput | Prisma.AttendanceSessionVersionCreateManyCreatedByAdminInput[];
    skipDuplicates?: boolean;
};
export type AttendanceSessionVersionUpsertWithWhereUniqueWithoutCreatedByAdminInput = {
    where: Prisma.AttendanceSessionVersionWhereUniqueInput;
    update: Prisma.XOR<Prisma.AttendanceSessionVersionUpdateWithoutCreatedByAdminInput, Prisma.AttendanceSessionVersionUncheckedUpdateWithoutCreatedByAdminInput>;
    create: Prisma.XOR<Prisma.AttendanceSessionVersionCreateWithoutCreatedByAdminInput, Prisma.AttendanceSessionVersionUncheckedCreateWithoutCreatedByAdminInput>;
};
export type AttendanceSessionVersionUpdateWithWhereUniqueWithoutCreatedByAdminInput = {
    where: Prisma.AttendanceSessionVersionWhereUniqueInput;
    data: Prisma.XOR<Prisma.AttendanceSessionVersionUpdateWithoutCreatedByAdminInput, Prisma.AttendanceSessionVersionUncheckedUpdateWithoutCreatedByAdminInput>;
};
export type AttendanceSessionVersionUpdateManyWithWhereWithoutCreatedByAdminInput = {
    where: Prisma.AttendanceSessionVersionScalarWhereInput;
    data: Prisma.XOR<Prisma.AttendanceSessionVersionUpdateManyMutationInput, Prisma.AttendanceSessionVersionUncheckedUpdateManyWithoutCreatedByAdminInput>;
};
export type AttendanceSessionVersionScalarWhereInput = {
    AND?: Prisma.AttendanceSessionVersionScalarWhereInput | Prisma.AttendanceSessionVersionScalarWhereInput[];
    OR?: Prisma.AttendanceSessionVersionScalarWhereInput[];
    NOT?: Prisma.AttendanceSessionVersionScalarWhereInput | Prisma.AttendanceSessionVersionScalarWhereInput[];
    id?: Prisma.IntFilter<"AttendanceSessionVersion"> | number;
    sessionId?: Prisma.IntFilter<"AttendanceSessionVersion"> | number;
    name?: Prisma.StringFilter<"AttendanceSessionVersion"> | string;
    sortOrder?: Prisma.IntFilter<"AttendanceSessionVersion"> | number;
    isActive?: Prisma.BoolFilter<"AttendanceSessionVersion"> | boolean;
    effectiveFrom?: Prisma.DateTimeFilter<"AttendanceSessionVersion"> | Date | string;
    startTime?: Prisma.DateTimeNullableFilter<"AttendanceSessionVersion"> | Date | string | null;
    endTime?: Prisma.DateTimeNullableFilter<"AttendanceSessionVersion"> | Date | string | null;
    createdByAdminId?: Prisma.IntNullableFilter<"AttendanceSessionVersion"> | number | null;
    createdByAdminUsername?: Prisma.StringNullableFilter<"AttendanceSessionVersion"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AttendanceSessionVersion"> | Date | string;
};
export type AttendanceSessionVersionCreateWithoutAttendancesInput = {
    name: string;
    sortOrder: number;
    isActive?: boolean;
    effectiveFrom: Date | string;
    startTime?: Date | string | null;
    endTime?: Date | string | null;
    createdByAdminUsername?: string | null;
    createdAt?: Date | string;
    session: Prisma.AttendanceSessionDefinitionCreateNestedOneWithoutVersionsInput;
    createdByAdmin?: Prisma.AdminCreateNestedOneWithoutAttendanceSessionVersionsInput;
    daySchedules?: Prisma.AttendanceSessionDayScheduleCreateNestedManyWithoutSessionVersionInput;
    correctionLogs?: Prisma.AttendanceCorrectionLogCreateNestedManyWithoutSessionVersionInput;
};
export type AttendanceSessionVersionUncheckedCreateWithoutAttendancesInput = {
    id?: number;
    sessionId: number;
    name: string;
    sortOrder: number;
    isActive?: boolean;
    effectiveFrom: Date | string;
    startTime?: Date | string | null;
    endTime?: Date | string | null;
    createdByAdminId?: number | null;
    createdByAdminUsername?: string | null;
    createdAt?: Date | string;
    daySchedules?: Prisma.AttendanceSessionDayScheduleUncheckedCreateNestedManyWithoutSessionVersionInput;
    correctionLogs?: Prisma.AttendanceCorrectionLogUncheckedCreateNestedManyWithoutSessionVersionInput;
};
export type AttendanceSessionVersionCreateOrConnectWithoutAttendancesInput = {
    where: Prisma.AttendanceSessionVersionWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendanceSessionVersionCreateWithoutAttendancesInput, Prisma.AttendanceSessionVersionUncheckedCreateWithoutAttendancesInput>;
};
export type AttendanceSessionVersionUpsertWithoutAttendancesInput = {
    update: Prisma.XOR<Prisma.AttendanceSessionVersionUpdateWithoutAttendancesInput, Prisma.AttendanceSessionVersionUncheckedUpdateWithoutAttendancesInput>;
    create: Prisma.XOR<Prisma.AttendanceSessionVersionCreateWithoutAttendancesInput, Prisma.AttendanceSessionVersionUncheckedCreateWithoutAttendancesInput>;
    where?: Prisma.AttendanceSessionVersionWhereInput;
};
export type AttendanceSessionVersionUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: Prisma.AttendanceSessionVersionWhereInput;
    data: Prisma.XOR<Prisma.AttendanceSessionVersionUpdateWithoutAttendancesInput, Prisma.AttendanceSessionVersionUncheckedUpdateWithoutAttendancesInput>;
};
export type AttendanceSessionVersionUpdateWithoutAttendancesInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByAdminUsername?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    session?: Prisma.AttendanceSessionDefinitionUpdateOneRequiredWithoutVersionsNestedInput;
    createdByAdmin?: Prisma.AdminUpdateOneWithoutAttendanceSessionVersionsNestedInput;
    daySchedules?: Prisma.AttendanceSessionDayScheduleUpdateManyWithoutSessionVersionNestedInput;
    correctionLogs?: Prisma.AttendanceCorrectionLogUpdateManyWithoutSessionVersionNestedInput;
};
export type AttendanceSessionVersionUncheckedUpdateWithoutAttendancesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    sessionId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByAdminId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdByAdminUsername?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    daySchedules?: Prisma.AttendanceSessionDayScheduleUncheckedUpdateManyWithoutSessionVersionNestedInput;
    correctionLogs?: Prisma.AttendanceCorrectionLogUncheckedUpdateManyWithoutSessionVersionNestedInput;
};
export type AttendanceSessionVersionCreateWithoutSessionInput = {
    name: string;
    sortOrder: number;
    isActive?: boolean;
    effectiveFrom: Date | string;
    startTime?: Date | string | null;
    endTime?: Date | string | null;
    createdByAdminUsername?: string | null;
    createdAt?: Date | string;
    createdByAdmin?: Prisma.AdminCreateNestedOneWithoutAttendanceSessionVersionsInput;
    daySchedules?: Prisma.AttendanceSessionDayScheduleCreateNestedManyWithoutSessionVersionInput;
    attendances?: Prisma.AttendanceCreateNestedManyWithoutSessionVersionInput;
    correctionLogs?: Prisma.AttendanceCorrectionLogCreateNestedManyWithoutSessionVersionInput;
};
export type AttendanceSessionVersionUncheckedCreateWithoutSessionInput = {
    id?: number;
    name: string;
    sortOrder: number;
    isActive?: boolean;
    effectiveFrom: Date | string;
    startTime?: Date | string | null;
    endTime?: Date | string | null;
    createdByAdminId?: number | null;
    createdByAdminUsername?: string | null;
    createdAt?: Date | string;
    daySchedules?: Prisma.AttendanceSessionDayScheduleUncheckedCreateNestedManyWithoutSessionVersionInput;
    attendances?: Prisma.AttendanceUncheckedCreateNestedManyWithoutSessionVersionInput;
    correctionLogs?: Prisma.AttendanceCorrectionLogUncheckedCreateNestedManyWithoutSessionVersionInput;
};
export type AttendanceSessionVersionCreateOrConnectWithoutSessionInput = {
    where: Prisma.AttendanceSessionVersionWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendanceSessionVersionCreateWithoutSessionInput, Prisma.AttendanceSessionVersionUncheckedCreateWithoutSessionInput>;
};
export type AttendanceSessionVersionCreateManySessionInputEnvelope = {
    data: Prisma.AttendanceSessionVersionCreateManySessionInput | Prisma.AttendanceSessionVersionCreateManySessionInput[];
    skipDuplicates?: boolean;
};
export type AttendanceSessionVersionUpsertWithWhereUniqueWithoutSessionInput = {
    where: Prisma.AttendanceSessionVersionWhereUniqueInput;
    update: Prisma.XOR<Prisma.AttendanceSessionVersionUpdateWithoutSessionInput, Prisma.AttendanceSessionVersionUncheckedUpdateWithoutSessionInput>;
    create: Prisma.XOR<Prisma.AttendanceSessionVersionCreateWithoutSessionInput, Prisma.AttendanceSessionVersionUncheckedCreateWithoutSessionInput>;
};
export type AttendanceSessionVersionUpdateWithWhereUniqueWithoutSessionInput = {
    where: Prisma.AttendanceSessionVersionWhereUniqueInput;
    data: Prisma.XOR<Prisma.AttendanceSessionVersionUpdateWithoutSessionInput, Prisma.AttendanceSessionVersionUncheckedUpdateWithoutSessionInput>;
};
export type AttendanceSessionVersionUpdateManyWithWhereWithoutSessionInput = {
    where: Prisma.AttendanceSessionVersionScalarWhereInput;
    data: Prisma.XOR<Prisma.AttendanceSessionVersionUpdateManyMutationInput, Prisma.AttendanceSessionVersionUncheckedUpdateManyWithoutSessionInput>;
};
export type AttendanceSessionVersionCreateWithoutDaySchedulesInput = {
    name: string;
    sortOrder: number;
    isActive?: boolean;
    effectiveFrom: Date | string;
    startTime?: Date | string | null;
    endTime?: Date | string | null;
    createdByAdminUsername?: string | null;
    createdAt?: Date | string;
    session: Prisma.AttendanceSessionDefinitionCreateNestedOneWithoutVersionsInput;
    createdByAdmin?: Prisma.AdminCreateNestedOneWithoutAttendanceSessionVersionsInput;
    attendances?: Prisma.AttendanceCreateNestedManyWithoutSessionVersionInput;
    correctionLogs?: Prisma.AttendanceCorrectionLogCreateNestedManyWithoutSessionVersionInput;
};
export type AttendanceSessionVersionUncheckedCreateWithoutDaySchedulesInput = {
    id?: number;
    sessionId: number;
    name: string;
    sortOrder: number;
    isActive?: boolean;
    effectiveFrom: Date | string;
    startTime?: Date | string | null;
    endTime?: Date | string | null;
    createdByAdminId?: number | null;
    createdByAdminUsername?: string | null;
    createdAt?: Date | string;
    attendances?: Prisma.AttendanceUncheckedCreateNestedManyWithoutSessionVersionInput;
    correctionLogs?: Prisma.AttendanceCorrectionLogUncheckedCreateNestedManyWithoutSessionVersionInput;
};
export type AttendanceSessionVersionCreateOrConnectWithoutDaySchedulesInput = {
    where: Prisma.AttendanceSessionVersionWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendanceSessionVersionCreateWithoutDaySchedulesInput, Prisma.AttendanceSessionVersionUncheckedCreateWithoutDaySchedulesInput>;
};
export type AttendanceSessionVersionUpsertWithoutDaySchedulesInput = {
    update: Prisma.XOR<Prisma.AttendanceSessionVersionUpdateWithoutDaySchedulesInput, Prisma.AttendanceSessionVersionUncheckedUpdateWithoutDaySchedulesInput>;
    create: Prisma.XOR<Prisma.AttendanceSessionVersionCreateWithoutDaySchedulesInput, Prisma.AttendanceSessionVersionUncheckedCreateWithoutDaySchedulesInput>;
    where?: Prisma.AttendanceSessionVersionWhereInput;
};
export type AttendanceSessionVersionUpdateToOneWithWhereWithoutDaySchedulesInput = {
    where?: Prisma.AttendanceSessionVersionWhereInput;
    data: Prisma.XOR<Prisma.AttendanceSessionVersionUpdateWithoutDaySchedulesInput, Prisma.AttendanceSessionVersionUncheckedUpdateWithoutDaySchedulesInput>;
};
export type AttendanceSessionVersionUpdateWithoutDaySchedulesInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByAdminUsername?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    session?: Prisma.AttendanceSessionDefinitionUpdateOneRequiredWithoutVersionsNestedInput;
    createdByAdmin?: Prisma.AdminUpdateOneWithoutAttendanceSessionVersionsNestedInput;
    attendances?: Prisma.AttendanceUpdateManyWithoutSessionVersionNestedInput;
    correctionLogs?: Prisma.AttendanceCorrectionLogUpdateManyWithoutSessionVersionNestedInput;
};
export type AttendanceSessionVersionUncheckedUpdateWithoutDaySchedulesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    sessionId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByAdminId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdByAdminUsername?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attendances?: Prisma.AttendanceUncheckedUpdateManyWithoutSessionVersionNestedInput;
    correctionLogs?: Prisma.AttendanceCorrectionLogUncheckedUpdateManyWithoutSessionVersionNestedInput;
};
export type AttendanceSessionVersionCreateWithoutCorrectionLogsInput = {
    name: string;
    sortOrder: number;
    isActive?: boolean;
    effectiveFrom: Date | string;
    startTime?: Date | string | null;
    endTime?: Date | string | null;
    createdByAdminUsername?: string | null;
    createdAt?: Date | string;
    session: Prisma.AttendanceSessionDefinitionCreateNestedOneWithoutVersionsInput;
    createdByAdmin?: Prisma.AdminCreateNestedOneWithoutAttendanceSessionVersionsInput;
    daySchedules?: Prisma.AttendanceSessionDayScheduleCreateNestedManyWithoutSessionVersionInput;
    attendances?: Prisma.AttendanceCreateNestedManyWithoutSessionVersionInput;
};
export type AttendanceSessionVersionUncheckedCreateWithoutCorrectionLogsInput = {
    id?: number;
    sessionId: number;
    name: string;
    sortOrder: number;
    isActive?: boolean;
    effectiveFrom: Date | string;
    startTime?: Date | string | null;
    endTime?: Date | string | null;
    createdByAdminId?: number | null;
    createdByAdminUsername?: string | null;
    createdAt?: Date | string;
    daySchedules?: Prisma.AttendanceSessionDayScheduleUncheckedCreateNestedManyWithoutSessionVersionInput;
    attendances?: Prisma.AttendanceUncheckedCreateNestedManyWithoutSessionVersionInput;
};
export type AttendanceSessionVersionCreateOrConnectWithoutCorrectionLogsInput = {
    where: Prisma.AttendanceSessionVersionWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendanceSessionVersionCreateWithoutCorrectionLogsInput, Prisma.AttendanceSessionVersionUncheckedCreateWithoutCorrectionLogsInput>;
};
export type AttendanceSessionVersionUpsertWithoutCorrectionLogsInput = {
    update: Prisma.XOR<Prisma.AttendanceSessionVersionUpdateWithoutCorrectionLogsInput, Prisma.AttendanceSessionVersionUncheckedUpdateWithoutCorrectionLogsInput>;
    create: Prisma.XOR<Prisma.AttendanceSessionVersionCreateWithoutCorrectionLogsInput, Prisma.AttendanceSessionVersionUncheckedCreateWithoutCorrectionLogsInput>;
    where?: Prisma.AttendanceSessionVersionWhereInput;
};
export type AttendanceSessionVersionUpdateToOneWithWhereWithoutCorrectionLogsInput = {
    where?: Prisma.AttendanceSessionVersionWhereInput;
    data: Prisma.XOR<Prisma.AttendanceSessionVersionUpdateWithoutCorrectionLogsInput, Prisma.AttendanceSessionVersionUncheckedUpdateWithoutCorrectionLogsInput>;
};
export type AttendanceSessionVersionUpdateWithoutCorrectionLogsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByAdminUsername?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    session?: Prisma.AttendanceSessionDefinitionUpdateOneRequiredWithoutVersionsNestedInput;
    createdByAdmin?: Prisma.AdminUpdateOneWithoutAttendanceSessionVersionsNestedInput;
    daySchedules?: Prisma.AttendanceSessionDayScheduleUpdateManyWithoutSessionVersionNestedInput;
    attendances?: Prisma.AttendanceUpdateManyWithoutSessionVersionNestedInput;
};
export type AttendanceSessionVersionUncheckedUpdateWithoutCorrectionLogsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    sessionId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByAdminId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdByAdminUsername?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    daySchedules?: Prisma.AttendanceSessionDayScheduleUncheckedUpdateManyWithoutSessionVersionNestedInput;
    attendances?: Prisma.AttendanceUncheckedUpdateManyWithoutSessionVersionNestedInput;
};
export type AttendanceSessionVersionCreateManyCreatedByAdminInput = {
    id?: number;
    sessionId: number;
    name: string;
    sortOrder: number;
    isActive?: boolean;
    effectiveFrom: Date | string;
    startTime?: Date | string | null;
    endTime?: Date | string | null;
    createdByAdminUsername?: string | null;
    createdAt?: Date | string;
};
export type AttendanceSessionVersionUpdateWithoutCreatedByAdminInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByAdminUsername?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    session?: Prisma.AttendanceSessionDefinitionUpdateOneRequiredWithoutVersionsNestedInput;
    daySchedules?: Prisma.AttendanceSessionDayScheduleUpdateManyWithoutSessionVersionNestedInput;
    attendances?: Prisma.AttendanceUpdateManyWithoutSessionVersionNestedInput;
    correctionLogs?: Prisma.AttendanceCorrectionLogUpdateManyWithoutSessionVersionNestedInput;
};
export type AttendanceSessionVersionUncheckedUpdateWithoutCreatedByAdminInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    sessionId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByAdminUsername?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    daySchedules?: Prisma.AttendanceSessionDayScheduleUncheckedUpdateManyWithoutSessionVersionNestedInput;
    attendances?: Prisma.AttendanceUncheckedUpdateManyWithoutSessionVersionNestedInput;
    correctionLogs?: Prisma.AttendanceCorrectionLogUncheckedUpdateManyWithoutSessionVersionNestedInput;
};
export type AttendanceSessionVersionUncheckedUpdateManyWithoutCreatedByAdminInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    sessionId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByAdminUsername?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceSessionVersionCreateManySessionInput = {
    id?: number;
    name: string;
    sortOrder: number;
    isActive?: boolean;
    effectiveFrom: Date | string;
    startTime?: Date | string | null;
    endTime?: Date | string | null;
    createdByAdminId?: number | null;
    createdByAdminUsername?: string | null;
    createdAt?: Date | string;
};
export type AttendanceSessionVersionUpdateWithoutSessionInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByAdminUsername?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdByAdmin?: Prisma.AdminUpdateOneWithoutAttendanceSessionVersionsNestedInput;
    daySchedules?: Prisma.AttendanceSessionDayScheduleUpdateManyWithoutSessionVersionNestedInput;
    attendances?: Prisma.AttendanceUpdateManyWithoutSessionVersionNestedInput;
    correctionLogs?: Prisma.AttendanceCorrectionLogUpdateManyWithoutSessionVersionNestedInput;
};
export type AttendanceSessionVersionUncheckedUpdateWithoutSessionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByAdminId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdByAdminUsername?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    daySchedules?: Prisma.AttendanceSessionDayScheduleUncheckedUpdateManyWithoutSessionVersionNestedInput;
    attendances?: Prisma.AttendanceUncheckedUpdateManyWithoutSessionVersionNestedInput;
    correctionLogs?: Prisma.AttendanceCorrectionLogUncheckedUpdateManyWithoutSessionVersionNestedInput;
};
export type AttendanceSessionVersionUncheckedUpdateManyWithoutSessionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByAdminId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdByAdminUsername?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type AttendanceSessionVersionCountOutputType
 */
export type AttendanceSessionVersionCountOutputType = {
    daySchedules: number;
    attendances: number;
    correctionLogs: number;
};
export type AttendanceSessionVersionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    daySchedules?: boolean | AttendanceSessionVersionCountOutputTypeCountDaySchedulesArgs;
    attendances?: boolean | AttendanceSessionVersionCountOutputTypeCountAttendancesArgs;
    correctionLogs?: boolean | AttendanceSessionVersionCountOutputTypeCountCorrectionLogsArgs;
};
/**
 * AttendanceSessionVersionCountOutputType without action
 */
export type AttendanceSessionVersionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceSessionVersionCountOutputType
     */
    select?: Prisma.AttendanceSessionVersionCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * AttendanceSessionVersionCountOutputType without action
 */
export type AttendanceSessionVersionCountOutputTypeCountDaySchedulesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceSessionDayScheduleWhereInput;
};
/**
 * AttendanceSessionVersionCountOutputType without action
 */
export type AttendanceSessionVersionCountOutputTypeCountAttendancesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceWhereInput;
};
/**
 * AttendanceSessionVersionCountOutputType without action
 */
export type AttendanceSessionVersionCountOutputTypeCountCorrectionLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceCorrectionLogWhereInput;
};
export type AttendanceSessionVersionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sessionId?: boolean;
    name?: boolean;
    sortOrder?: boolean;
    isActive?: boolean;
    effectiveFrom?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    createdByAdminId?: boolean;
    createdByAdminUsername?: boolean;
    createdAt?: boolean;
    session?: boolean | Prisma.AttendanceSessionDefinitionDefaultArgs<ExtArgs>;
    createdByAdmin?: boolean | Prisma.AttendanceSessionVersion$createdByAdminArgs<ExtArgs>;
    daySchedules?: boolean | Prisma.AttendanceSessionVersion$daySchedulesArgs<ExtArgs>;
    attendances?: boolean | Prisma.AttendanceSessionVersion$attendancesArgs<ExtArgs>;
    correctionLogs?: boolean | Prisma.AttendanceSessionVersion$correctionLogsArgs<ExtArgs>;
    _count?: boolean | Prisma.AttendanceSessionVersionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["attendanceSessionVersion"]>;
export type AttendanceSessionVersionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sessionId?: boolean;
    name?: boolean;
    sortOrder?: boolean;
    isActive?: boolean;
    effectiveFrom?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    createdByAdminId?: boolean;
    createdByAdminUsername?: boolean;
    createdAt?: boolean;
    session?: boolean | Prisma.AttendanceSessionDefinitionDefaultArgs<ExtArgs>;
    createdByAdmin?: boolean | Prisma.AttendanceSessionVersion$createdByAdminArgs<ExtArgs>;
}, ExtArgs["result"]["attendanceSessionVersion"]>;
export type AttendanceSessionVersionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sessionId?: boolean;
    name?: boolean;
    sortOrder?: boolean;
    isActive?: boolean;
    effectiveFrom?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    createdByAdminId?: boolean;
    createdByAdminUsername?: boolean;
    createdAt?: boolean;
    session?: boolean | Prisma.AttendanceSessionDefinitionDefaultArgs<ExtArgs>;
    createdByAdmin?: boolean | Prisma.AttendanceSessionVersion$createdByAdminArgs<ExtArgs>;
}, ExtArgs["result"]["attendanceSessionVersion"]>;
export type AttendanceSessionVersionSelectScalar = {
    id?: boolean;
    sessionId?: boolean;
    name?: boolean;
    sortOrder?: boolean;
    isActive?: boolean;
    effectiveFrom?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    createdByAdminId?: boolean;
    createdByAdminUsername?: boolean;
    createdAt?: boolean;
};
export type AttendanceSessionVersionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "sessionId" | "name" | "sortOrder" | "isActive" | "effectiveFrom" | "startTime" | "endTime" | "createdByAdminId" | "createdByAdminUsername" | "createdAt", ExtArgs["result"]["attendanceSessionVersion"]>;
export type AttendanceSessionVersionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    session?: boolean | Prisma.AttendanceSessionDefinitionDefaultArgs<ExtArgs>;
    createdByAdmin?: boolean | Prisma.AttendanceSessionVersion$createdByAdminArgs<ExtArgs>;
    daySchedules?: boolean | Prisma.AttendanceSessionVersion$daySchedulesArgs<ExtArgs>;
    attendances?: boolean | Prisma.AttendanceSessionVersion$attendancesArgs<ExtArgs>;
    correctionLogs?: boolean | Prisma.AttendanceSessionVersion$correctionLogsArgs<ExtArgs>;
    _count?: boolean | Prisma.AttendanceSessionVersionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AttendanceSessionVersionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    session?: boolean | Prisma.AttendanceSessionDefinitionDefaultArgs<ExtArgs>;
    createdByAdmin?: boolean | Prisma.AttendanceSessionVersion$createdByAdminArgs<ExtArgs>;
};
export type AttendanceSessionVersionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    session?: boolean | Prisma.AttendanceSessionDefinitionDefaultArgs<ExtArgs>;
    createdByAdmin?: boolean | Prisma.AttendanceSessionVersion$createdByAdminArgs<ExtArgs>;
};
export type $AttendanceSessionVersionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AttendanceSessionVersion";
    objects: {
        session: Prisma.$AttendanceSessionDefinitionPayload<ExtArgs>;
        createdByAdmin: Prisma.$AdminPayload<ExtArgs> | null;
        daySchedules: Prisma.$AttendanceSessionDaySchedulePayload<ExtArgs>[];
        attendances: Prisma.$AttendancePayload<ExtArgs>[];
        correctionLogs: Prisma.$AttendanceCorrectionLogPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        sessionId: number;
        name: string;
        sortOrder: number;
        isActive: boolean;
        effectiveFrom: Date;
        startTime: Date | null;
        endTime: Date | null;
        createdByAdminId: number | null;
        createdByAdminUsername: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["attendanceSessionVersion"]>;
    composites: {};
};
export type AttendanceSessionVersionGetPayload<S extends boolean | null | undefined | AttendanceSessionVersionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AttendanceSessionVersionPayload, S>;
export type AttendanceSessionVersionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AttendanceSessionVersionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AttendanceSessionVersionCountAggregateInputType | true;
};
export interface AttendanceSessionVersionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AttendanceSessionVersion'];
        meta: {
            name: 'AttendanceSessionVersion';
        };
    };
    /**
     * Find zero or one AttendanceSessionVersion that matches the filter.
     * @param {AttendanceSessionVersionFindUniqueArgs} args - Arguments to find a AttendanceSessionVersion
     * @example
     * // Get one AttendanceSessionVersion
     * const attendanceSessionVersion = await prisma.attendanceSessionVersion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceSessionVersionFindUniqueArgs>(args: Prisma.SelectSubset<T, AttendanceSessionVersionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AttendanceSessionVersionClient<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionVersionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one AttendanceSessionVersion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceSessionVersionFindUniqueOrThrowArgs} args - Arguments to find a AttendanceSessionVersion
     * @example
     * // Get one AttendanceSessionVersion
     * const attendanceSessionVersion = await prisma.attendanceSessionVersion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceSessionVersionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AttendanceSessionVersionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AttendanceSessionVersionClient<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AttendanceSessionVersion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceSessionVersionFindFirstArgs} args - Arguments to find a AttendanceSessionVersion
     * @example
     * // Get one AttendanceSessionVersion
     * const attendanceSessionVersion = await prisma.attendanceSessionVersion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceSessionVersionFindFirstArgs>(args?: Prisma.SelectSubset<T, AttendanceSessionVersionFindFirstArgs<ExtArgs>>): Prisma.Prisma__AttendanceSessionVersionClient<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionVersionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AttendanceSessionVersion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceSessionVersionFindFirstOrThrowArgs} args - Arguments to find a AttendanceSessionVersion
     * @example
     * // Get one AttendanceSessionVersion
     * const attendanceSessionVersion = await prisma.attendanceSessionVersion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceSessionVersionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AttendanceSessionVersionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AttendanceSessionVersionClient<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionVersionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more AttendanceSessionVersions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceSessionVersionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AttendanceSessionVersions
     * const attendanceSessionVersions = await prisma.attendanceSessionVersion.findMany()
     *
     * // Get first 10 AttendanceSessionVersions
     * const attendanceSessionVersions = await prisma.attendanceSessionVersion.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const attendanceSessionVersionWithIdOnly = await prisma.attendanceSessionVersion.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AttendanceSessionVersionFindManyArgs>(args?: Prisma.SelectSubset<T, AttendanceSessionVersionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a AttendanceSessionVersion.
     * @param {AttendanceSessionVersionCreateArgs} args - Arguments to create a AttendanceSessionVersion.
     * @example
     * // Create one AttendanceSessionVersion
     * const AttendanceSessionVersion = await prisma.attendanceSessionVersion.create({
     *   data: {
     *     // ... data to create a AttendanceSessionVersion
     *   }
     * })
     *
     */
    create<T extends AttendanceSessionVersionCreateArgs>(args: Prisma.SelectSubset<T, AttendanceSessionVersionCreateArgs<ExtArgs>>): Prisma.Prisma__AttendanceSessionVersionClient<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionVersionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many AttendanceSessionVersions.
     * @param {AttendanceSessionVersionCreateManyArgs} args - Arguments to create many AttendanceSessionVersions.
     * @example
     * // Create many AttendanceSessionVersions
     * const attendanceSessionVersion = await prisma.attendanceSessionVersion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AttendanceSessionVersionCreateManyArgs>(args?: Prisma.SelectSubset<T, AttendanceSessionVersionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many AttendanceSessionVersions and returns the data saved in the database.
     * @param {AttendanceSessionVersionCreateManyAndReturnArgs} args - Arguments to create many AttendanceSessionVersions.
     * @example
     * // Create many AttendanceSessionVersions
     * const attendanceSessionVersion = await prisma.attendanceSessionVersion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many AttendanceSessionVersions and only return the `id`
     * const attendanceSessionVersionWithIdOnly = await prisma.attendanceSessionVersion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AttendanceSessionVersionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AttendanceSessionVersionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionVersionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a AttendanceSessionVersion.
     * @param {AttendanceSessionVersionDeleteArgs} args - Arguments to delete one AttendanceSessionVersion.
     * @example
     * // Delete one AttendanceSessionVersion
     * const AttendanceSessionVersion = await prisma.attendanceSessionVersion.delete({
     *   where: {
     *     // ... filter to delete one AttendanceSessionVersion
     *   }
     * })
     *
     */
    delete<T extends AttendanceSessionVersionDeleteArgs>(args: Prisma.SelectSubset<T, AttendanceSessionVersionDeleteArgs<ExtArgs>>): Prisma.Prisma__AttendanceSessionVersionClient<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionVersionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one AttendanceSessionVersion.
     * @param {AttendanceSessionVersionUpdateArgs} args - Arguments to update one AttendanceSessionVersion.
     * @example
     * // Update one AttendanceSessionVersion
     * const attendanceSessionVersion = await prisma.attendanceSessionVersion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AttendanceSessionVersionUpdateArgs>(args: Prisma.SelectSubset<T, AttendanceSessionVersionUpdateArgs<ExtArgs>>): Prisma.Prisma__AttendanceSessionVersionClient<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionVersionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more AttendanceSessionVersions.
     * @param {AttendanceSessionVersionDeleteManyArgs} args - Arguments to filter AttendanceSessionVersions to delete.
     * @example
     * // Delete a few AttendanceSessionVersions
     * const { count } = await prisma.attendanceSessionVersion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AttendanceSessionVersionDeleteManyArgs>(args?: Prisma.SelectSubset<T, AttendanceSessionVersionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more AttendanceSessionVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceSessionVersionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AttendanceSessionVersions
     * const attendanceSessionVersion = await prisma.attendanceSessionVersion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AttendanceSessionVersionUpdateManyArgs>(args: Prisma.SelectSubset<T, AttendanceSessionVersionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more AttendanceSessionVersions and returns the data updated in the database.
     * @param {AttendanceSessionVersionUpdateManyAndReturnArgs} args - Arguments to update many AttendanceSessionVersions.
     * @example
     * // Update many AttendanceSessionVersions
     * const attendanceSessionVersion = await prisma.attendanceSessionVersion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more AttendanceSessionVersions and only return the `id`
     * const attendanceSessionVersionWithIdOnly = await prisma.attendanceSessionVersion.updateManyAndReturn({
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
    updateManyAndReturn<T extends AttendanceSessionVersionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AttendanceSessionVersionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionVersionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one AttendanceSessionVersion.
     * @param {AttendanceSessionVersionUpsertArgs} args - Arguments to update or create a AttendanceSessionVersion.
     * @example
     * // Update or create a AttendanceSessionVersion
     * const attendanceSessionVersion = await prisma.attendanceSessionVersion.upsert({
     *   create: {
     *     // ... data to create a AttendanceSessionVersion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AttendanceSessionVersion we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceSessionVersionUpsertArgs>(args: Prisma.SelectSubset<T, AttendanceSessionVersionUpsertArgs<ExtArgs>>): Prisma.Prisma__AttendanceSessionVersionClient<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionVersionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of AttendanceSessionVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceSessionVersionCountArgs} args - Arguments to filter AttendanceSessionVersions to count.
     * @example
     * // Count the number of AttendanceSessionVersions
     * const count = await prisma.attendanceSessionVersion.count({
     *   where: {
     *     // ... the filter for the AttendanceSessionVersions we want to count
     *   }
     * })
    **/
    count<T extends AttendanceSessionVersionCountArgs>(args?: Prisma.Subset<T, AttendanceSessionVersionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AttendanceSessionVersionCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a AttendanceSessionVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceSessionVersionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttendanceSessionVersionAggregateArgs>(args: Prisma.Subset<T, AttendanceSessionVersionAggregateArgs>): Prisma.PrismaPromise<GetAttendanceSessionVersionAggregateType<T>>;
    /**
     * Group by AttendanceSessionVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceSessionVersionGroupByArgs} args - Group by arguments.
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
    groupBy<T extends AttendanceSessionVersionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AttendanceSessionVersionGroupByArgs['orderBy'];
    } : {
        orderBy?: AttendanceSessionVersionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AttendanceSessionVersionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceSessionVersionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the AttendanceSessionVersion model
     */
    readonly fields: AttendanceSessionVersionFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for AttendanceSessionVersion.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__AttendanceSessionVersionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    session<T extends Prisma.AttendanceSessionDefinitionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AttendanceSessionDefinitionDefaultArgs<ExtArgs>>): Prisma.Prisma__AttendanceSessionDefinitionClient<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionDefinitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    createdByAdmin<T extends Prisma.AttendanceSessionVersion$createdByAdminArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AttendanceSessionVersion$createdByAdminArgs<ExtArgs>>): Prisma.Prisma__AdminClient<runtime.Types.Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    daySchedules<T extends Prisma.AttendanceSessionVersion$daySchedulesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AttendanceSessionVersion$daySchedulesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionDaySchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    attendances<T extends Prisma.AttendanceSessionVersion$attendancesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AttendanceSessionVersion$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    correctionLogs<T extends Prisma.AttendanceSessionVersion$correctionLogsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AttendanceSessionVersion$correctionLogsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceCorrectionLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the AttendanceSessionVersion model
 */
export interface AttendanceSessionVersionFieldRefs {
    readonly id: Prisma.FieldRef<"AttendanceSessionVersion", 'Int'>;
    readonly sessionId: Prisma.FieldRef<"AttendanceSessionVersion", 'Int'>;
    readonly name: Prisma.FieldRef<"AttendanceSessionVersion", 'String'>;
    readonly sortOrder: Prisma.FieldRef<"AttendanceSessionVersion", 'Int'>;
    readonly isActive: Prisma.FieldRef<"AttendanceSessionVersion", 'Boolean'>;
    readonly effectiveFrom: Prisma.FieldRef<"AttendanceSessionVersion", 'DateTime'>;
    readonly startTime: Prisma.FieldRef<"AttendanceSessionVersion", 'DateTime'>;
    readonly endTime: Prisma.FieldRef<"AttendanceSessionVersion", 'DateTime'>;
    readonly createdByAdminId: Prisma.FieldRef<"AttendanceSessionVersion", 'Int'>;
    readonly createdByAdminUsername: Prisma.FieldRef<"AttendanceSessionVersion", 'String'>;
    readonly createdAt: Prisma.FieldRef<"AttendanceSessionVersion", 'DateTime'>;
}
/**
 * AttendanceSessionVersion findUnique
 */
export type AttendanceSessionVersionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which AttendanceSessionVersion to fetch.
     */
    where: Prisma.AttendanceSessionVersionWhereUniqueInput;
};
/**
 * AttendanceSessionVersion findUniqueOrThrow
 */
export type AttendanceSessionVersionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which AttendanceSessionVersion to fetch.
     */
    where: Prisma.AttendanceSessionVersionWhereUniqueInput;
};
/**
 * AttendanceSessionVersion findFirst
 */
export type AttendanceSessionVersionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which AttendanceSessionVersion to fetch.
     */
    where?: Prisma.AttendanceSessionVersionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AttendanceSessionVersions to fetch.
     */
    orderBy?: Prisma.AttendanceSessionVersionOrderByWithRelationInput | Prisma.AttendanceSessionVersionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AttendanceSessionVersions.
     */
    cursor?: Prisma.AttendanceSessionVersionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AttendanceSessionVersions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AttendanceSessionVersions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AttendanceSessionVersions.
     */
    distinct?: Prisma.AttendanceSessionVersionScalarFieldEnum | Prisma.AttendanceSessionVersionScalarFieldEnum[];
};
/**
 * AttendanceSessionVersion findFirstOrThrow
 */
export type AttendanceSessionVersionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which AttendanceSessionVersion to fetch.
     */
    where?: Prisma.AttendanceSessionVersionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AttendanceSessionVersions to fetch.
     */
    orderBy?: Prisma.AttendanceSessionVersionOrderByWithRelationInput | Prisma.AttendanceSessionVersionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AttendanceSessionVersions.
     */
    cursor?: Prisma.AttendanceSessionVersionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AttendanceSessionVersions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AttendanceSessionVersions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AttendanceSessionVersions.
     */
    distinct?: Prisma.AttendanceSessionVersionScalarFieldEnum | Prisma.AttendanceSessionVersionScalarFieldEnum[];
};
/**
 * AttendanceSessionVersion findMany
 */
export type AttendanceSessionVersionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which AttendanceSessionVersions to fetch.
     */
    where?: Prisma.AttendanceSessionVersionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AttendanceSessionVersions to fetch.
     */
    orderBy?: Prisma.AttendanceSessionVersionOrderByWithRelationInput | Prisma.AttendanceSessionVersionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing AttendanceSessionVersions.
     */
    cursor?: Prisma.AttendanceSessionVersionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AttendanceSessionVersions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AttendanceSessionVersions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AttendanceSessionVersions.
     */
    distinct?: Prisma.AttendanceSessionVersionScalarFieldEnum | Prisma.AttendanceSessionVersionScalarFieldEnum[];
};
/**
 * AttendanceSessionVersion create
 */
export type AttendanceSessionVersionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a AttendanceSessionVersion.
     */
    data: Prisma.XOR<Prisma.AttendanceSessionVersionCreateInput, Prisma.AttendanceSessionVersionUncheckedCreateInput>;
};
/**
 * AttendanceSessionVersion createMany
 */
export type AttendanceSessionVersionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many AttendanceSessionVersions.
     */
    data: Prisma.AttendanceSessionVersionCreateManyInput | Prisma.AttendanceSessionVersionCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * AttendanceSessionVersion createManyAndReturn
 */
export type AttendanceSessionVersionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceSessionVersion
     */
    select?: Prisma.AttendanceSessionVersionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AttendanceSessionVersion
     */
    omit?: Prisma.AttendanceSessionVersionOmit<ExtArgs> | null;
    /**
     * The data used to create many AttendanceSessionVersions.
     */
    data: Prisma.AttendanceSessionVersionCreateManyInput | Prisma.AttendanceSessionVersionCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AttendanceSessionVersionIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * AttendanceSessionVersion update
 */
export type AttendanceSessionVersionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a AttendanceSessionVersion.
     */
    data: Prisma.XOR<Prisma.AttendanceSessionVersionUpdateInput, Prisma.AttendanceSessionVersionUncheckedUpdateInput>;
    /**
     * Choose, which AttendanceSessionVersion to update.
     */
    where: Prisma.AttendanceSessionVersionWhereUniqueInput;
};
/**
 * AttendanceSessionVersion updateMany
 */
export type AttendanceSessionVersionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update AttendanceSessionVersions.
     */
    data: Prisma.XOR<Prisma.AttendanceSessionVersionUpdateManyMutationInput, Prisma.AttendanceSessionVersionUncheckedUpdateManyInput>;
    /**
     * Filter which AttendanceSessionVersions to update
     */
    where?: Prisma.AttendanceSessionVersionWhereInput;
    /**
     * Limit how many AttendanceSessionVersions to update.
     */
    limit?: number;
};
/**
 * AttendanceSessionVersion updateManyAndReturn
 */
export type AttendanceSessionVersionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceSessionVersion
     */
    select?: Prisma.AttendanceSessionVersionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AttendanceSessionVersion
     */
    omit?: Prisma.AttendanceSessionVersionOmit<ExtArgs> | null;
    /**
     * The data used to update AttendanceSessionVersions.
     */
    data: Prisma.XOR<Prisma.AttendanceSessionVersionUpdateManyMutationInput, Prisma.AttendanceSessionVersionUncheckedUpdateManyInput>;
    /**
     * Filter which AttendanceSessionVersions to update
     */
    where?: Prisma.AttendanceSessionVersionWhereInput;
    /**
     * Limit how many AttendanceSessionVersions to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AttendanceSessionVersionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * AttendanceSessionVersion upsert
 */
export type AttendanceSessionVersionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the AttendanceSessionVersion to update in case it exists.
     */
    where: Prisma.AttendanceSessionVersionWhereUniqueInput;
    /**
     * In case the AttendanceSessionVersion found by the `where` argument doesn't exist, create a new AttendanceSessionVersion with this data.
     */
    create: Prisma.XOR<Prisma.AttendanceSessionVersionCreateInput, Prisma.AttendanceSessionVersionUncheckedCreateInput>;
    /**
     * In case the AttendanceSessionVersion was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.AttendanceSessionVersionUpdateInput, Prisma.AttendanceSessionVersionUncheckedUpdateInput>;
};
/**
 * AttendanceSessionVersion delete
 */
export type AttendanceSessionVersionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which AttendanceSessionVersion to delete.
     */
    where: Prisma.AttendanceSessionVersionWhereUniqueInput;
};
/**
 * AttendanceSessionVersion deleteMany
 */
export type AttendanceSessionVersionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AttendanceSessionVersions to delete
     */
    where?: Prisma.AttendanceSessionVersionWhereInput;
    /**
     * Limit how many AttendanceSessionVersions to delete.
     */
    limit?: number;
};
/**
 * AttendanceSessionVersion.createdByAdmin
 */
export type AttendanceSessionVersion$createdByAdminArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * AttendanceSessionVersion.daySchedules
 */
export type AttendanceSessionVersion$daySchedulesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceSessionDaySchedule
     */
    select?: Prisma.AttendanceSessionDayScheduleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AttendanceSessionDaySchedule
     */
    omit?: Prisma.AttendanceSessionDayScheduleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AttendanceSessionDayScheduleInclude<ExtArgs> | null;
    where?: Prisma.AttendanceSessionDayScheduleWhereInput;
    orderBy?: Prisma.AttendanceSessionDayScheduleOrderByWithRelationInput | Prisma.AttendanceSessionDayScheduleOrderByWithRelationInput[];
    cursor?: Prisma.AttendanceSessionDayScheduleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AttendanceSessionDayScheduleScalarFieldEnum | Prisma.AttendanceSessionDayScheduleScalarFieldEnum[];
};
/**
 * AttendanceSessionVersion.attendances
 */
export type AttendanceSessionVersion$attendancesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * AttendanceSessionVersion.correctionLogs
 */
export type AttendanceSessionVersion$correctionLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * AttendanceSessionVersion without action
 */
export type AttendanceSessionVersionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
