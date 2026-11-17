import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model AttendanceSessionDaySchedule
 *
 */
export type AttendanceSessionDayScheduleModel = runtime.Types.Result.DefaultSelection<Prisma.$AttendanceSessionDaySchedulePayload>;
export type AggregateAttendanceSessionDaySchedule = {
    _count: AttendanceSessionDayScheduleCountAggregateOutputType | null;
    _avg: AttendanceSessionDayScheduleAvgAggregateOutputType | null;
    _sum: AttendanceSessionDayScheduleSumAggregateOutputType | null;
    _min: AttendanceSessionDayScheduleMinAggregateOutputType | null;
    _max: AttendanceSessionDayScheduleMaxAggregateOutputType | null;
};
export type AttendanceSessionDayScheduleAvgAggregateOutputType = {
    id: number | null;
    sessionVersionId: number | null;
    isoWeekday: number | null;
};
export type AttendanceSessionDayScheduleSumAggregateOutputType = {
    id: number | null;
    sessionVersionId: number | null;
    isoWeekday: number | null;
};
export type AttendanceSessionDayScheduleMinAggregateOutputType = {
    id: number | null;
    sessionVersionId: number | null;
    isoWeekday: number | null;
    isEnabled: boolean | null;
    startTime: Date | null;
    endTime: Date | null;
};
export type AttendanceSessionDayScheduleMaxAggregateOutputType = {
    id: number | null;
    sessionVersionId: number | null;
    isoWeekday: number | null;
    isEnabled: boolean | null;
    startTime: Date | null;
    endTime: Date | null;
};
export type AttendanceSessionDayScheduleCountAggregateOutputType = {
    id: number;
    sessionVersionId: number;
    isoWeekday: number;
    isEnabled: number;
    startTime: number;
    endTime: number;
    _all: number;
};
export type AttendanceSessionDayScheduleAvgAggregateInputType = {
    id?: true;
    sessionVersionId?: true;
    isoWeekday?: true;
};
export type AttendanceSessionDayScheduleSumAggregateInputType = {
    id?: true;
    sessionVersionId?: true;
    isoWeekday?: true;
};
export type AttendanceSessionDayScheduleMinAggregateInputType = {
    id?: true;
    sessionVersionId?: true;
    isoWeekday?: true;
    isEnabled?: true;
    startTime?: true;
    endTime?: true;
};
export type AttendanceSessionDayScheduleMaxAggregateInputType = {
    id?: true;
    sessionVersionId?: true;
    isoWeekday?: true;
    isEnabled?: true;
    startTime?: true;
    endTime?: true;
};
export type AttendanceSessionDayScheduleCountAggregateInputType = {
    id?: true;
    sessionVersionId?: true;
    isoWeekday?: true;
    isEnabled?: true;
    startTime?: true;
    endTime?: true;
    _all?: true;
};
export type AttendanceSessionDayScheduleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AttendanceSessionDaySchedule to aggregate.
     */
    where?: Prisma.AttendanceSessionDayScheduleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AttendanceSessionDaySchedules to fetch.
     */
    orderBy?: Prisma.AttendanceSessionDayScheduleOrderByWithRelationInput | Prisma.AttendanceSessionDayScheduleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.AttendanceSessionDayScheduleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AttendanceSessionDaySchedules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AttendanceSessionDaySchedules.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned AttendanceSessionDaySchedules
    **/
    _count?: true | AttendanceSessionDayScheduleCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: AttendanceSessionDayScheduleAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: AttendanceSessionDayScheduleSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceSessionDayScheduleMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceSessionDayScheduleMaxAggregateInputType;
};
export type GetAttendanceSessionDayScheduleAggregateType<T extends AttendanceSessionDayScheduleAggregateArgs> = {
    [P in keyof T & keyof AggregateAttendanceSessionDaySchedule]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAttendanceSessionDaySchedule[P]> : Prisma.GetScalarType<T[P], AggregateAttendanceSessionDaySchedule[P]>;
};
export type AttendanceSessionDayScheduleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceSessionDayScheduleWhereInput;
    orderBy?: Prisma.AttendanceSessionDayScheduleOrderByWithAggregationInput | Prisma.AttendanceSessionDayScheduleOrderByWithAggregationInput[];
    by: Prisma.AttendanceSessionDayScheduleScalarFieldEnum[] | Prisma.AttendanceSessionDayScheduleScalarFieldEnum;
    having?: Prisma.AttendanceSessionDayScheduleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AttendanceSessionDayScheduleCountAggregateInputType | true;
    _avg?: AttendanceSessionDayScheduleAvgAggregateInputType;
    _sum?: AttendanceSessionDayScheduleSumAggregateInputType;
    _min?: AttendanceSessionDayScheduleMinAggregateInputType;
    _max?: AttendanceSessionDayScheduleMaxAggregateInputType;
};
export type AttendanceSessionDayScheduleGroupByOutputType = {
    id: number;
    sessionVersionId: number;
    isoWeekday: number;
    isEnabled: boolean;
    startTime: Date;
    endTime: Date;
    _count: AttendanceSessionDayScheduleCountAggregateOutputType | null;
    _avg: AttendanceSessionDayScheduleAvgAggregateOutputType | null;
    _sum: AttendanceSessionDayScheduleSumAggregateOutputType | null;
    _min: AttendanceSessionDayScheduleMinAggregateOutputType | null;
    _max: AttendanceSessionDayScheduleMaxAggregateOutputType | null;
};
export type GetAttendanceSessionDayScheduleGroupByPayload<T extends AttendanceSessionDayScheduleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AttendanceSessionDayScheduleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AttendanceSessionDayScheduleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AttendanceSessionDayScheduleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AttendanceSessionDayScheduleGroupByOutputType[P]>;
}>>;
export type AttendanceSessionDayScheduleWhereInput = {
    AND?: Prisma.AttendanceSessionDayScheduleWhereInput | Prisma.AttendanceSessionDayScheduleWhereInput[];
    OR?: Prisma.AttendanceSessionDayScheduleWhereInput[];
    NOT?: Prisma.AttendanceSessionDayScheduleWhereInput | Prisma.AttendanceSessionDayScheduleWhereInput[];
    id?: Prisma.IntFilter<"AttendanceSessionDaySchedule"> | number;
    sessionVersionId?: Prisma.IntFilter<"AttendanceSessionDaySchedule"> | number;
    isoWeekday?: Prisma.IntFilter<"AttendanceSessionDaySchedule"> | number;
    isEnabled?: Prisma.BoolFilter<"AttendanceSessionDaySchedule"> | boolean;
    startTime?: Prisma.DateTimeFilter<"AttendanceSessionDaySchedule"> | Date | string;
    endTime?: Prisma.DateTimeFilter<"AttendanceSessionDaySchedule"> | Date | string;
    sessionVersion?: Prisma.XOR<Prisma.AttendanceSessionVersionScalarRelationFilter, Prisma.AttendanceSessionVersionWhereInput>;
};
export type AttendanceSessionDayScheduleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    sessionVersionId?: Prisma.SortOrder;
    isoWeekday?: Prisma.SortOrder;
    isEnabled?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    sessionVersion?: Prisma.AttendanceSessionVersionOrderByWithRelationInput;
};
export type AttendanceSessionDayScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    sessionVersionId_isoWeekday?: Prisma.AttendanceSessionDayScheduleSessionVersionIdIsoWeekdayCompoundUniqueInput;
    AND?: Prisma.AttendanceSessionDayScheduleWhereInput | Prisma.AttendanceSessionDayScheduleWhereInput[];
    OR?: Prisma.AttendanceSessionDayScheduleWhereInput[];
    NOT?: Prisma.AttendanceSessionDayScheduleWhereInput | Prisma.AttendanceSessionDayScheduleWhereInput[];
    sessionVersionId?: Prisma.IntFilter<"AttendanceSessionDaySchedule"> | number;
    isoWeekday?: Prisma.IntFilter<"AttendanceSessionDaySchedule"> | number;
    isEnabled?: Prisma.BoolFilter<"AttendanceSessionDaySchedule"> | boolean;
    startTime?: Prisma.DateTimeFilter<"AttendanceSessionDaySchedule"> | Date | string;
    endTime?: Prisma.DateTimeFilter<"AttendanceSessionDaySchedule"> | Date | string;
    sessionVersion?: Prisma.XOR<Prisma.AttendanceSessionVersionScalarRelationFilter, Prisma.AttendanceSessionVersionWhereInput>;
}, "id" | "sessionVersionId_isoWeekday">;
export type AttendanceSessionDayScheduleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    sessionVersionId?: Prisma.SortOrder;
    isoWeekday?: Prisma.SortOrder;
    isEnabled?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    _count?: Prisma.AttendanceSessionDayScheduleCountOrderByAggregateInput;
    _avg?: Prisma.AttendanceSessionDayScheduleAvgOrderByAggregateInput;
    _max?: Prisma.AttendanceSessionDayScheduleMaxOrderByAggregateInput;
    _min?: Prisma.AttendanceSessionDayScheduleMinOrderByAggregateInput;
    _sum?: Prisma.AttendanceSessionDayScheduleSumOrderByAggregateInput;
};
export type AttendanceSessionDayScheduleScalarWhereWithAggregatesInput = {
    AND?: Prisma.AttendanceSessionDayScheduleScalarWhereWithAggregatesInput | Prisma.AttendanceSessionDayScheduleScalarWhereWithAggregatesInput[];
    OR?: Prisma.AttendanceSessionDayScheduleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AttendanceSessionDayScheduleScalarWhereWithAggregatesInput | Prisma.AttendanceSessionDayScheduleScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"AttendanceSessionDaySchedule"> | number;
    sessionVersionId?: Prisma.IntWithAggregatesFilter<"AttendanceSessionDaySchedule"> | number;
    isoWeekday?: Prisma.IntWithAggregatesFilter<"AttendanceSessionDaySchedule"> | number;
    isEnabled?: Prisma.BoolWithAggregatesFilter<"AttendanceSessionDaySchedule"> | boolean;
    startTime?: Prisma.DateTimeWithAggregatesFilter<"AttendanceSessionDaySchedule"> | Date | string;
    endTime?: Prisma.DateTimeWithAggregatesFilter<"AttendanceSessionDaySchedule"> | Date | string;
};
export type AttendanceSessionDayScheduleCreateInput = {
    isoWeekday: number;
    isEnabled?: boolean;
    startTime: Date | string;
    endTime: Date | string;
    sessionVersion: Prisma.AttendanceSessionVersionCreateNestedOneWithoutDaySchedulesInput;
};
export type AttendanceSessionDayScheduleUncheckedCreateInput = {
    id?: number;
    sessionVersionId: number;
    isoWeekday: number;
    isEnabled?: boolean;
    startTime: Date | string;
    endTime: Date | string;
};
export type AttendanceSessionDayScheduleUpdateInput = {
    isoWeekday?: Prisma.IntFieldUpdateOperationsInput | number;
    isEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessionVersion?: Prisma.AttendanceSessionVersionUpdateOneRequiredWithoutDaySchedulesNestedInput;
};
export type AttendanceSessionDayScheduleUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    sessionVersionId?: Prisma.IntFieldUpdateOperationsInput | number;
    isoWeekday?: Prisma.IntFieldUpdateOperationsInput | number;
    isEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceSessionDayScheduleCreateManyInput = {
    id?: number;
    sessionVersionId: number;
    isoWeekday: number;
    isEnabled?: boolean;
    startTime: Date | string;
    endTime: Date | string;
};
export type AttendanceSessionDayScheduleUpdateManyMutationInput = {
    isoWeekday?: Prisma.IntFieldUpdateOperationsInput | number;
    isEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceSessionDayScheduleUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    sessionVersionId?: Prisma.IntFieldUpdateOperationsInput | number;
    isoWeekday?: Prisma.IntFieldUpdateOperationsInput | number;
    isEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceSessionDayScheduleListRelationFilter = {
    every?: Prisma.AttendanceSessionDayScheduleWhereInput;
    some?: Prisma.AttendanceSessionDayScheduleWhereInput;
    none?: Prisma.AttendanceSessionDayScheduleWhereInput;
};
export type AttendanceSessionDayScheduleOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AttendanceSessionDayScheduleSessionVersionIdIsoWeekdayCompoundUniqueInput = {
    sessionVersionId: number;
    isoWeekday: number;
};
export type AttendanceSessionDayScheduleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sessionVersionId?: Prisma.SortOrder;
    isoWeekday?: Prisma.SortOrder;
    isEnabled?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
};
export type AttendanceSessionDayScheduleAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sessionVersionId?: Prisma.SortOrder;
    isoWeekday?: Prisma.SortOrder;
};
export type AttendanceSessionDayScheduleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sessionVersionId?: Prisma.SortOrder;
    isoWeekday?: Prisma.SortOrder;
    isEnabled?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
};
export type AttendanceSessionDayScheduleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sessionVersionId?: Prisma.SortOrder;
    isoWeekday?: Prisma.SortOrder;
    isEnabled?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
};
export type AttendanceSessionDayScheduleSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sessionVersionId?: Prisma.SortOrder;
    isoWeekday?: Prisma.SortOrder;
};
export type AttendanceSessionDayScheduleCreateNestedManyWithoutSessionVersionInput = {
    create?: Prisma.XOR<Prisma.AttendanceSessionDayScheduleCreateWithoutSessionVersionInput, Prisma.AttendanceSessionDayScheduleUncheckedCreateWithoutSessionVersionInput> | Prisma.AttendanceSessionDayScheduleCreateWithoutSessionVersionInput[] | Prisma.AttendanceSessionDayScheduleUncheckedCreateWithoutSessionVersionInput[];
    connectOrCreate?: Prisma.AttendanceSessionDayScheduleCreateOrConnectWithoutSessionVersionInput | Prisma.AttendanceSessionDayScheduleCreateOrConnectWithoutSessionVersionInput[];
    createMany?: Prisma.AttendanceSessionDayScheduleCreateManySessionVersionInputEnvelope;
    connect?: Prisma.AttendanceSessionDayScheduleWhereUniqueInput | Prisma.AttendanceSessionDayScheduleWhereUniqueInput[];
};
export type AttendanceSessionDayScheduleUncheckedCreateNestedManyWithoutSessionVersionInput = {
    create?: Prisma.XOR<Prisma.AttendanceSessionDayScheduleCreateWithoutSessionVersionInput, Prisma.AttendanceSessionDayScheduleUncheckedCreateWithoutSessionVersionInput> | Prisma.AttendanceSessionDayScheduleCreateWithoutSessionVersionInput[] | Prisma.AttendanceSessionDayScheduleUncheckedCreateWithoutSessionVersionInput[];
    connectOrCreate?: Prisma.AttendanceSessionDayScheduleCreateOrConnectWithoutSessionVersionInput | Prisma.AttendanceSessionDayScheduleCreateOrConnectWithoutSessionVersionInput[];
    createMany?: Prisma.AttendanceSessionDayScheduleCreateManySessionVersionInputEnvelope;
    connect?: Prisma.AttendanceSessionDayScheduleWhereUniqueInput | Prisma.AttendanceSessionDayScheduleWhereUniqueInput[];
};
export type AttendanceSessionDayScheduleUpdateManyWithoutSessionVersionNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceSessionDayScheduleCreateWithoutSessionVersionInput, Prisma.AttendanceSessionDayScheduleUncheckedCreateWithoutSessionVersionInput> | Prisma.AttendanceSessionDayScheduleCreateWithoutSessionVersionInput[] | Prisma.AttendanceSessionDayScheduleUncheckedCreateWithoutSessionVersionInput[];
    connectOrCreate?: Prisma.AttendanceSessionDayScheduleCreateOrConnectWithoutSessionVersionInput | Prisma.AttendanceSessionDayScheduleCreateOrConnectWithoutSessionVersionInput[];
    upsert?: Prisma.AttendanceSessionDayScheduleUpsertWithWhereUniqueWithoutSessionVersionInput | Prisma.AttendanceSessionDayScheduleUpsertWithWhereUniqueWithoutSessionVersionInput[];
    createMany?: Prisma.AttendanceSessionDayScheduleCreateManySessionVersionInputEnvelope;
    set?: Prisma.AttendanceSessionDayScheduleWhereUniqueInput | Prisma.AttendanceSessionDayScheduleWhereUniqueInput[];
    disconnect?: Prisma.AttendanceSessionDayScheduleWhereUniqueInput | Prisma.AttendanceSessionDayScheduleWhereUniqueInput[];
    delete?: Prisma.AttendanceSessionDayScheduleWhereUniqueInput | Prisma.AttendanceSessionDayScheduleWhereUniqueInput[];
    connect?: Prisma.AttendanceSessionDayScheduleWhereUniqueInput | Prisma.AttendanceSessionDayScheduleWhereUniqueInput[];
    update?: Prisma.AttendanceSessionDayScheduleUpdateWithWhereUniqueWithoutSessionVersionInput | Prisma.AttendanceSessionDayScheduleUpdateWithWhereUniqueWithoutSessionVersionInput[];
    updateMany?: Prisma.AttendanceSessionDayScheduleUpdateManyWithWhereWithoutSessionVersionInput | Prisma.AttendanceSessionDayScheduleUpdateManyWithWhereWithoutSessionVersionInput[];
    deleteMany?: Prisma.AttendanceSessionDayScheduleScalarWhereInput | Prisma.AttendanceSessionDayScheduleScalarWhereInput[];
};
export type AttendanceSessionDayScheduleUncheckedUpdateManyWithoutSessionVersionNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceSessionDayScheduleCreateWithoutSessionVersionInput, Prisma.AttendanceSessionDayScheduleUncheckedCreateWithoutSessionVersionInput> | Prisma.AttendanceSessionDayScheduleCreateWithoutSessionVersionInput[] | Prisma.AttendanceSessionDayScheduleUncheckedCreateWithoutSessionVersionInput[];
    connectOrCreate?: Prisma.AttendanceSessionDayScheduleCreateOrConnectWithoutSessionVersionInput | Prisma.AttendanceSessionDayScheduleCreateOrConnectWithoutSessionVersionInput[];
    upsert?: Prisma.AttendanceSessionDayScheduleUpsertWithWhereUniqueWithoutSessionVersionInput | Prisma.AttendanceSessionDayScheduleUpsertWithWhereUniqueWithoutSessionVersionInput[];
    createMany?: Prisma.AttendanceSessionDayScheduleCreateManySessionVersionInputEnvelope;
    set?: Prisma.AttendanceSessionDayScheduleWhereUniqueInput | Prisma.AttendanceSessionDayScheduleWhereUniqueInput[];
    disconnect?: Prisma.AttendanceSessionDayScheduleWhereUniqueInput | Prisma.AttendanceSessionDayScheduleWhereUniqueInput[];
    delete?: Prisma.AttendanceSessionDayScheduleWhereUniqueInput | Prisma.AttendanceSessionDayScheduleWhereUniqueInput[];
    connect?: Prisma.AttendanceSessionDayScheduleWhereUniqueInput | Prisma.AttendanceSessionDayScheduleWhereUniqueInput[];
    update?: Prisma.AttendanceSessionDayScheduleUpdateWithWhereUniqueWithoutSessionVersionInput | Prisma.AttendanceSessionDayScheduleUpdateWithWhereUniqueWithoutSessionVersionInput[];
    updateMany?: Prisma.AttendanceSessionDayScheduleUpdateManyWithWhereWithoutSessionVersionInput | Prisma.AttendanceSessionDayScheduleUpdateManyWithWhereWithoutSessionVersionInput[];
    deleteMany?: Prisma.AttendanceSessionDayScheduleScalarWhereInput | Prisma.AttendanceSessionDayScheduleScalarWhereInput[];
};
export type AttendanceSessionDayScheduleCreateWithoutSessionVersionInput = {
    isoWeekday: number;
    isEnabled?: boolean;
    startTime: Date | string;
    endTime: Date | string;
};
export type AttendanceSessionDayScheduleUncheckedCreateWithoutSessionVersionInput = {
    id?: number;
    isoWeekday: number;
    isEnabled?: boolean;
    startTime: Date | string;
    endTime: Date | string;
};
export type AttendanceSessionDayScheduleCreateOrConnectWithoutSessionVersionInput = {
    where: Prisma.AttendanceSessionDayScheduleWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendanceSessionDayScheduleCreateWithoutSessionVersionInput, Prisma.AttendanceSessionDayScheduleUncheckedCreateWithoutSessionVersionInput>;
};
export type AttendanceSessionDayScheduleCreateManySessionVersionInputEnvelope = {
    data: Prisma.AttendanceSessionDayScheduleCreateManySessionVersionInput | Prisma.AttendanceSessionDayScheduleCreateManySessionVersionInput[];
    skipDuplicates?: boolean;
};
export type AttendanceSessionDayScheduleUpsertWithWhereUniqueWithoutSessionVersionInput = {
    where: Prisma.AttendanceSessionDayScheduleWhereUniqueInput;
    update: Prisma.XOR<Prisma.AttendanceSessionDayScheduleUpdateWithoutSessionVersionInput, Prisma.AttendanceSessionDayScheduleUncheckedUpdateWithoutSessionVersionInput>;
    create: Prisma.XOR<Prisma.AttendanceSessionDayScheduleCreateWithoutSessionVersionInput, Prisma.AttendanceSessionDayScheduleUncheckedCreateWithoutSessionVersionInput>;
};
export type AttendanceSessionDayScheduleUpdateWithWhereUniqueWithoutSessionVersionInput = {
    where: Prisma.AttendanceSessionDayScheduleWhereUniqueInput;
    data: Prisma.XOR<Prisma.AttendanceSessionDayScheduleUpdateWithoutSessionVersionInput, Prisma.AttendanceSessionDayScheduleUncheckedUpdateWithoutSessionVersionInput>;
};
export type AttendanceSessionDayScheduleUpdateManyWithWhereWithoutSessionVersionInput = {
    where: Prisma.AttendanceSessionDayScheduleScalarWhereInput;
    data: Prisma.XOR<Prisma.AttendanceSessionDayScheduleUpdateManyMutationInput, Prisma.AttendanceSessionDayScheduleUncheckedUpdateManyWithoutSessionVersionInput>;
};
export type AttendanceSessionDayScheduleScalarWhereInput = {
    AND?: Prisma.AttendanceSessionDayScheduleScalarWhereInput | Prisma.AttendanceSessionDayScheduleScalarWhereInput[];
    OR?: Prisma.AttendanceSessionDayScheduleScalarWhereInput[];
    NOT?: Prisma.AttendanceSessionDayScheduleScalarWhereInput | Prisma.AttendanceSessionDayScheduleScalarWhereInput[];
    id?: Prisma.IntFilter<"AttendanceSessionDaySchedule"> | number;
    sessionVersionId?: Prisma.IntFilter<"AttendanceSessionDaySchedule"> | number;
    isoWeekday?: Prisma.IntFilter<"AttendanceSessionDaySchedule"> | number;
    isEnabled?: Prisma.BoolFilter<"AttendanceSessionDaySchedule"> | boolean;
    startTime?: Prisma.DateTimeFilter<"AttendanceSessionDaySchedule"> | Date | string;
    endTime?: Prisma.DateTimeFilter<"AttendanceSessionDaySchedule"> | Date | string;
};
export type AttendanceSessionDayScheduleCreateManySessionVersionInput = {
    id?: number;
    isoWeekday: number;
    isEnabled?: boolean;
    startTime: Date | string;
    endTime: Date | string;
};
export type AttendanceSessionDayScheduleUpdateWithoutSessionVersionInput = {
    isoWeekday?: Prisma.IntFieldUpdateOperationsInput | number;
    isEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceSessionDayScheduleUncheckedUpdateWithoutSessionVersionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    isoWeekday?: Prisma.IntFieldUpdateOperationsInput | number;
    isEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceSessionDayScheduleUncheckedUpdateManyWithoutSessionVersionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    isoWeekday?: Prisma.IntFieldUpdateOperationsInput | number;
    isEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceSessionDayScheduleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sessionVersionId?: boolean;
    isoWeekday?: boolean;
    isEnabled?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    sessionVersion?: boolean | Prisma.AttendanceSessionVersionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["attendanceSessionDaySchedule"]>;
export type AttendanceSessionDayScheduleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sessionVersionId?: boolean;
    isoWeekday?: boolean;
    isEnabled?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    sessionVersion?: boolean | Prisma.AttendanceSessionVersionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["attendanceSessionDaySchedule"]>;
export type AttendanceSessionDayScheduleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sessionVersionId?: boolean;
    isoWeekday?: boolean;
    isEnabled?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    sessionVersion?: boolean | Prisma.AttendanceSessionVersionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["attendanceSessionDaySchedule"]>;
export type AttendanceSessionDayScheduleSelectScalar = {
    id?: boolean;
    sessionVersionId?: boolean;
    isoWeekday?: boolean;
    isEnabled?: boolean;
    startTime?: boolean;
    endTime?: boolean;
};
export type AttendanceSessionDayScheduleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "sessionVersionId" | "isoWeekday" | "isEnabled" | "startTime" | "endTime", ExtArgs["result"]["attendanceSessionDaySchedule"]>;
export type AttendanceSessionDayScheduleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sessionVersion?: boolean | Prisma.AttendanceSessionVersionDefaultArgs<ExtArgs>;
};
export type AttendanceSessionDayScheduleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sessionVersion?: boolean | Prisma.AttendanceSessionVersionDefaultArgs<ExtArgs>;
};
export type AttendanceSessionDayScheduleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sessionVersion?: boolean | Prisma.AttendanceSessionVersionDefaultArgs<ExtArgs>;
};
export type $AttendanceSessionDaySchedulePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AttendanceSessionDaySchedule";
    objects: {
        sessionVersion: Prisma.$AttendanceSessionVersionPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        sessionVersionId: number;
        isoWeekday: number;
        isEnabled: boolean;
        startTime: Date;
        endTime: Date;
    }, ExtArgs["result"]["attendanceSessionDaySchedule"]>;
    composites: {};
};
export type AttendanceSessionDayScheduleGetPayload<S extends boolean | null | undefined | AttendanceSessionDayScheduleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AttendanceSessionDaySchedulePayload, S>;
export type AttendanceSessionDayScheduleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AttendanceSessionDayScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AttendanceSessionDayScheduleCountAggregateInputType | true;
};
export interface AttendanceSessionDayScheduleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AttendanceSessionDaySchedule'];
        meta: {
            name: 'AttendanceSessionDaySchedule';
        };
    };
    /**
     * Find zero or one AttendanceSessionDaySchedule that matches the filter.
     * @param {AttendanceSessionDayScheduleFindUniqueArgs} args - Arguments to find a AttendanceSessionDaySchedule
     * @example
     * // Get one AttendanceSessionDaySchedule
     * const attendanceSessionDaySchedule = await prisma.attendanceSessionDaySchedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceSessionDayScheduleFindUniqueArgs>(args: Prisma.SelectSubset<T, AttendanceSessionDayScheduleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AttendanceSessionDayScheduleClient<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionDaySchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one AttendanceSessionDaySchedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceSessionDayScheduleFindUniqueOrThrowArgs} args - Arguments to find a AttendanceSessionDaySchedule
     * @example
     * // Get one AttendanceSessionDaySchedule
     * const attendanceSessionDaySchedule = await prisma.attendanceSessionDaySchedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceSessionDayScheduleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AttendanceSessionDayScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AttendanceSessionDayScheduleClient<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionDaySchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AttendanceSessionDaySchedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceSessionDayScheduleFindFirstArgs} args - Arguments to find a AttendanceSessionDaySchedule
     * @example
     * // Get one AttendanceSessionDaySchedule
     * const attendanceSessionDaySchedule = await prisma.attendanceSessionDaySchedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceSessionDayScheduleFindFirstArgs>(args?: Prisma.SelectSubset<T, AttendanceSessionDayScheduleFindFirstArgs<ExtArgs>>): Prisma.Prisma__AttendanceSessionDayScheduleClient<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionDaySchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AttendanceSessionDaySchedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceSessionDayScheduleFindFirstOrThrowArgs} args - Arguments to find a AttendanceSessionDaySchedule
     * @example
     * // Get one AttendanceSessionDaySchedule
     * const attendanceSessionDaySchedule = await prisma.attendanceSessionDaySchedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceSessionDayScheduleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AttendanceSessionDayScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AttendanceSessionDayScheduleClient<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionDaySchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more AttendanceSessionDaySchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceSessionDayScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AttendanceSessionDaySchedules
     * const attendanceSessionDaySchedules = await prisma.attendanceSessionDaySchedule.findMany()
     *
     * // Get first 10 AttendanceSessionDaySchedules
     * const attendanceSessionDaySchedules = await prisma.attendanceSessionDaySchedule.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const attendanceSessionDayScheduleWithIdOnly = await prisma.attendanceSessionDaySchedule.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AttendanceSessionDayScheduleFindManyArgs>(args?: Prisma.SelectSubset<T, AttendanceSessionDayScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionDaySchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a AttendanceSessionDaySchedule.
     * @param {AttendanceSessionDayScheduleCreateArgs} args - Arguments to create a AttendanceSessionDaySchedule.
     * @example
     * // Create one AttendanceSessionDaySchedule
     * const AttendanceSessionDaySchedule = await prisma.attendanceSessionDaySchedule.create({
     *   data: {
     *     // ... data to create a AttendanceSessionDaySchedule
     *   }
     * })
     *
     */
    create<T extends AttendanceSessionDayScheduleCreateArgs>(args: Prisma.SelectSubset<T, AttendanceSessionDayScheduleCreateArgs<ExtArgs>>): Prisma.Prisma__AttendanceSessionDayScheduleClient<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionDaySchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many AttendanceSessionDaySchedules.
     * @param {AttendanceSessionDayScheduleCreateManyArgs} args - Arguments to create many AttendanceSessionDaySchedules.
     * @example
     * // Create many AttendanceSessionDaySchedules
     * const attendanceSessionDaySchedule = await prisma.attendanceSessionDaySchedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AttendanceSessionDayScheduleCreateManyArgs>(args?: Prisma.SelectSubset<T, AttendanceSessionDayScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many AttendanceSessionDaySchedules and returns the data saved in the database.
     * @param {AttendanceSessionDayScheduleCreateManyAndReturnArgs} args - Arguments to create many AttendanceSessionDaySchedules.
     * @example
     * // Create many AttendanceSessionDaySchedules
     * const attendanceSessionDaySchedule = await prisma.attendanceSessionDaySchedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many AttendanceSessionDaySchedules and only return the `id`
     * const attendanceSessionDayScheduleWithIdOnly = await prisma.attendanceSessionDaySchedule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AttendanceSessionDayScheduleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AttendanceSessionDayScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionDaySchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a AttendanceSessionDaySchedule.
     * @param {AttendanceSessionDayScheduleDeleteArgs} args - Arguments to delete one AttendanceSessionDaySchedule.
     * @example
     * // Delete one AttendanceSessionDaySchedule
     * const AttendanceSessionDaySchedule = await prisma.attendanceSessionDaySchedule.delete({
     *   where: {
     *     // ... filter to delete one AttendanceSessionDaySchedule
     *   }
     * })
     *
     */
    delete<T extends AttendanceSessionDayScheduleDeleteArgs>(args: Prisma.SelectSubset<T, AttendanceSessionDayScheduleDeleteArgs<ExtArgs>>): Prisma.Prisma__AttendanceSessionDayScheduleClient<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionDaySchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one AttendanceSessionDaySchedule.
     * @param {AttendanceSessionDayScheduleUpdateArgs} args - Arguments to update one AttendanceSessionDaySchedule.
     * @example
     * // Update one AttendanceSessionDaySchedule
     * const attendanceSessionDaySchedule = await prisma.attendanceSessionDaySchedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AttendanceSessionDayScheduleUpdateArgs>(args: Prisma.SelectSubset<T, AttendanceSessionDayScheduleUpdateArgs<ExtArgs>>): Prisma.Prisma__AttendanceSessionDayScheduleClient<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionDaySchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more AttendanceSessionDaySchedules.
     * @param {AttendanceSessionDayScheduleDeleteManyArgs} args - Arguments to filter AttendanceSessionDaySchedules to delete.
     * @example
     * // Delete a few AttendanceSessionDaySchedules
     * const { count } = await prisma.attendanceSessionDaySchedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AttendanceSessionDayScheduleDeleteManyArgs>(args?: Prisma.SelectSubset<T, AttendanceSessionDayScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more AttendanceSessionDaySchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceSessionDayScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AttendanceSessionDaySchedules
     * const attendanceSessionDaySchedule = await prisma.attendanceSessionDaySchedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AttendanceSessionDayScheduleUpdateManyArgs>(args: Prisma.SelectSubset<T, AttendanceSessionDayScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more AttendanceSessionDaySchedules and returns the data updated in the database.
     * @param {AttendanceSessionDayScheduleUpdateManyAndReturnArgs} args - Arguments to update many AttendanceSessionDaySchedules.
     * @example
     * // Update many AttendanceSessionDaySchedules
     * const attendanceSessionDaySchedule = await prisma.attendanceSessionDaySchedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more AttendanceSessionDaySchedules and only return the `id`
     * const attendanceSessionDayScheduleWithIdOnly = await prisma.attendanceSessionDaySchedule.updateManyAndReturn({
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
    updateManyAndReturn<T extends AttendanceSessionDayScheduleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AttendanceSessionDayScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionDaySchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one AttendanceSessionDaySchedule.
     * @param {AttendanceSessionDayScheduleUpsertArgs} args - Arguments to update or create a AttendanceSessionDaySchedule.
     * @example
     * // Update or create a AttendanceSessionDaySchedule
     * const attendanceSessionDaySchedule = await prisma.attendanceSessionDaySchedule.upsert({
     *   create: {
     *     // ... data to create a AttendanceSessionDaySchedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AttendanceSessionDaySchedule we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceSessionDayScheduleUpsertArgs>(args: Prisma.SelectSubset<T, AttendanceSessionDayScheduleUpsertArgs<ExtArgs>>): Prisma.Prisma__AttendanceSessionDayScheduleClient<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionDaySchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of AttendanceSessionDaySchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceSessionDayScheduleCountArgs} args - Arguments to filter AttendanceSessionDaySchedules to count.
     * @example
     * // Count the number of AttendanceSessionDaySchedules
     * const count = await prisma.attendanceSessionDaySchedule.count({
     *   where: {
     *     // ... the filter for the AttendanceSessionDaySchedules we want to count
     *   }
     * })
    **/
    count<T extends AttendanceSessionDayScheduleCountArgs>(args?: Prisma.Subset<T, AttendanceSessionDayScheduleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AttendanceSessionDayScheduleCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a AttendanceSessionDaySchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceSessionDayScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttendanceSessionDayScheduleAggregateArgs>(args: Prisma.Subset<T, AttendanceSessionDayScheduleAggregateArgs>): Prisma.PrismaPromise<GetAttendanceSessionDayScheduleAggregateType<T>>;
    /**
     * Group by AttendanceSessionDaySchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceSessionDayScheduleGroupByArgs} args - Group by arguments.
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
    groupBy<T extends AttendanceSessionDayScheduleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AttendanceSessionDayScheduleGroupByArgs['orderBy'];
    } : {
        orderBy?: AttendanceSessionDayScheduleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AttendanceSessionDayScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceSessionDayScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the AttendanceSessionDaySchedule model
     */
    readonly fields: AttendanceSessionDayScheduleFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for AttendanceSessionDaySchedule.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__AttendanceSessionDayScheduleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    sessionVersion<T extends Prisma.AttendanceSessionVersionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AttendanceSessionVersionDefaultArgs<ExtArgs>>): Prisma.Prisma__AttendanceSessionVersionClient<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the AttendanceSessionDaySchedule model
 */
export interface AttendanceSessionDayScheduleFieldRefs {
    readonly id: Prisma.FieldRef<"AttendanceSessionDaySchedule", 'Int'>;
    readonly sessionVersionId: Prisma.FieldRef<"AttendanceSessionDaySchedule", 'Int'>;
    readonly isoWeekday: Prisma.FieldRef<"AttendanceSessionDaySchedule", 'Int'>;
    readonly isEnabled: Prisma.FieldRef<"AttendanceSessionDaySchedule", 'Boolean'>;
    readonly startTime: Prisma.FieldRef<"AttendanceSessionDaySchedule", 'DateTime'>;
    readonly endTime: Prisma.FieldRef<"AttendanceSessionDaySchedule", 'DateTime'>;
}
/**
 * AttendanceSessionDaySchedule findUnique
 */
export type AttendanceSessionDayScheduleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which AttendanceSessionDaySchedule to fetch.
     */
    where: Prisma.AttendanceSessionDayScheduleWhereUniqueInput;
};
/**
 * AttendanceSessionDaySchedule findUniqueOrThrow
 */
export type AttendanceSessionDayScheduleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which AttendanceSessionDaySchedule to fetch.
     */
    where: Prisma.AttendanceSessionDayScheduleWhereUniqueInput;
};
/**
 * AttendanceSessionDaySchedule findFirst
 */
export type AttendanceSessionDayScheduleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which AttendanceSessionDaySchedule to fetch.
     */
    where?: Prisma.AttendanceSessionDayScheduleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AttendanceSessionDaySchedules to fetch.
     */
    orderBy?: Prisma.AttendanceSessionDayScheduleOrderByWithRelationInput | Prisma.AttendanceSessionDayScheduleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AttendanceSessionDaySchedules.
     */
    cursor?: Prisma.AttendanceSessionDayScheduleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AttendanceSessionDaySchedules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AttendanceSessionDaySchedules.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AttendanceSessionDaySchedules.
     */
    distinct?: Prisma.AttendanceSessionDayScheduleScalarFieldEnum | Prisma.AttendanceSessionDayScheduleScalarFieldEnum[];
};
/**
 * AttendanceSessionDaySchedule findFirstOrThrow
 */
export type AttendanceSessionDayScheduleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which AttendanceSessionDaySchedule to fetch.
     */
    where?: Prisma.AttendanceSessionDayScheduleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AttendanceSessionDaySchedules to fetch.
     */
    orderBy?: Prisma.AttendanceSessionDayScheduleOrderByWithRelationInput | Prisma.AttendanceSessionDayScheduleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AttendanceSessionDaySchedules.
     */
    cursor?: Prisma.AttendanceSessionDayScheduleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AttendanceSessionDaySchedules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AttendanceSessionDaySchedules.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AttendanceSessionDaySchedules.
     */
    distinct?: Prisma.AttendanceSessionDayScheduleScalarFieldEnum | Prisma.AttendanceSessionDayScheduleScalarFieldEnum[];
};
/**
 * AttendanceSessionDaySchedule findMany
 */
export type AttendanceSessionDayScheduleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which AttendanceSessionDaySchedules to fetch.
     */
    where?: Prisma.AttendanceSessionDayScheduleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AttendanceSessionDaySchedules to fetch.
     */
    orderBy?: Prisma.AttendanceSessionDayScheduleOrderByWithRelationInput | Prisma.AttendanceSessionDayScheduleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing AttendanceSessionDaySchedules.
     */
    cursor?: Prisma.AttendanceSessionDayScheduleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AttendanceSessionDaySchedules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AttendanceSessionDaySchedules.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AttendanceSessionDaySchedules.
     */
    distinct?: Prisma.AttendanceSessionDayScheduleScalarFieldEnum | Prisma.AttendanceSessionDayScheduleScalarFieldEnum[];
};
/**
 * AttendanceSessionDaySchedule create
 */
export type AttendanceSessionDayScheduleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a AttendanceSessionDaySchedule.
     */
    data: Prisma.XOR<Prisma.AttendanceSessionDayScheduleCreateInput, Prisma.AttendanceSessionDayScheduleUncheckedCreateInput>;
};
/**
 * AttendanceSessionDaySchedule createMany
 */
export type AttendanceSessionDayScheduleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many AttendanceSessionDaySchedules.
     */
    data: Prisma.AttendanceSessionDayScheduleCreateManyInput | Prisma.AttendanceSessionDayScheduleCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * AttendanceSessionDaySchedule createManyAndReturn
 */
export type AttendanceSessionDayScheduleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceSessionDaySchedule
     */
    select?: Prisma.AttendanceSessionDayScheduleSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AttendanceSessionDaySchedule
     */
    omit?: Prisma.AttendanceSessionDayScheduleOmit<ExtArgs> | null;
    /**
     * The data used to create many AttendanceSessionDaySchedules.
     */
    data: Prisma.AttendanceSessionDayScheduleCreateManyInput | Prisma.AttendanceSessionDayScheduleCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AttendanceSessionDayScheduleIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * AttendanceSessionDaySchedule update
 */
export type AttendanceSessionDayScheduleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a AttendanceSessionDaySchedule.
     */
    data: Prisma.XOR<Prisma.AttendanceSessionDayScheduleUpdateInput, Prisma.AttendanceSessionDayScheduleUncheckedUpdateInput>;
    /**
     * Choose, which AttendanceSessionDaySchedule to update.
     */
    where: Prisma.AttendanceSessionDayScheduleWhereUniqueInput;
};
/**
 * AttendanceSessionDaySchedule updateMany
 */
export type AttendanceSessionDayScheduleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update AttendanceSessionDaySchedules.
     */
    data: Prisma.XOR<Prisma.AttendanceSessionDayScheduleUpdateManyMutationInput, Prisma.AttendanceSessionDayScheduleUncheckedUpdateManyInput>;
    /**
     * Filter which AttendanceSessionDaySchedules to update
     */
    where?: Prisma.AttendanceSessionDayScheduleWhereInput;
    /**
     * Limit how many AttendanceSessionDaySchedules to update.
     */
    limit?: number;
};
/**
 * AttendanceSessionDaySchedule updateManyAndReturn
 */
export type AttendanceSessionDayScheduleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceSessionDaySchedule
     */
    select?: Prisma.AttendanceSessionDayScheduleSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AttendanceSessionDaySchedule
     */
    omit?: Prisma.AttendanceSessionDayScheduleOmit<ExtArgs> | null;
    /**
     * The data used to update AttendanceSessionDaySchedules.
     */
    data: Prisma.XOR<Prisma.AttendanceSessionDayScheduleUpdateManyMutationInput, Prisma.AttendanceSessionDayScheduleUncheckedUpdateManyInput>;
    /**
     * Filter which AttendanceSessionDaySchedules to update
     */
    where?: Prisma.AttendanceSessionDayScheduleWhereInput;
    /**
     * Limit how many AttendanceSessionDaySchedules to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AttendanceSessionDayScheduleIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * AttendanceSessionDaySchedule upsert
 */
export type AttendanceSessionDayScheduleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the AttendanceSessionDaySchedule to update in case it exists.
     */
    where: Prisma.AttendanceSessionDayScheduleWhereUniqueInput;
    /**
     * In case the AttendanceSessionDaySchedule found by the `where` argument doesn't exist, create a new AttendanceSessionDaySchedule with this data.
     */
    create: Prisma.XOR<Prisma.AttendanceSessionDayScheduleCreateInput, Prisma.AttendanceSessionDayScheduleUncheckedCreateInput>;
    /**
     * In case the AttendanceSessionDaySchedule was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.AttendanceSessionDayScheduleUpdateInput, Prisma.AttendanceSessionDayScheduleUncheckedUpdateInput>;
};
/**
 * AttendanceSessionDaySchedule delete
 */
export type AttendanceSessionDayScheduleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which AttendanceSessionDaySchedule to delete.
     */
    where: Prisma.AttendanceSessionDayScheduleWhereUniqueInput;
};
/**
 * AttendanceSessionDaySchedule deleteMany
 */
export type AttendanceSessionDayScheduleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AttendanceSessionDaySchedules to delete
     */
    where?: Prisma.AttendanceSessionDayScheduleWhereInput;
    /**
     * Limit how many AttendanceSessionDaySchedules to delete.
     */
    limit?: number;
};
/**
 * AttendanceSessionDaySchedule without action
 */
export type AttendanceSessionDayScheduleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
