import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model AttendanceCorrectionLog
 *
 */
export type AttendanceCorrectionLogModel = runtime.Types.Result.DefaultSelection<Prisma.$AttendanceCorrectionLogPayload>;
export type AggregateAttendanceCorrectionLog = {
    _count: AttendanceCorrectionLogCountAggregateOutputType | null;
    _avg: AttendanceCorrectionLogAvgAggregateOutputType | null;
    _sum: AttendanceCorrectionLogSumAggregateOutputType | null;
    _min: AttendanceCorrectionLogMinAggregateOutputType | null;
    _max: AttendanceCorrectionLogMaxAggregateOutputType | null;
};
export type AttendanceCorrectionLogAvgAggregateOutputType = {
    id: number | null;
    sessionId: number | null;
    sessionVersionId: number | null;
    attendanceId: number | null;
    revision: number | null;
    correctedByAdminId: number | null;
};
export type AttendanceCorrectionLogSumAggregateOutputType = {
    id: number | null;
    sessionId: number | null;
    sessionVersionId: number | null;
    attendanceId: number | null;
    revision: number | null;
    correctedByAdminId: number | null;
};
export type AttendanceCorrectionLogMinAggregateOutputType = {
    id: number | null;
    nik: string | null;
    attendanceDate: Date | null;
    sessionId: number | null;
    sessionVersionId: number | null;
    attendanceId: number | null;
    revision: number | null;
    previousStatus: string | null;
    newStatus: string | null;
    reason: string | null;
    correctedByAdminId: number | null;
    correctedByAdminUsername: string | null;
    correctedAt: Date | null;
};
export type AttendanceCorrectionLogMaxAggregateOutputType = {
    id: number | null;
    nik: string | null;
    attendanceDate: Date | null;
    sessionId: number | null;
    sessionVersionId: number | null;
    attendanceId: number | null;
    revision: number | null;
    previousStatus: string | null;
    newStatus: string | null;
    reason: string | null;
    correctedByAdminId: number | null;
    correctedByAdminUsername: string | null;
    correctedAt: Date | null;
};
export type AttendanceCorrectionLogCountAggregateOutputType = {
    id: number;
    nik: number;
    attendanceDate: number;
    sessionId: number;
    sessionVersionId: number;
    attendanceId: number;
    revision: number;
    previousStatus: number;
    newStatus: number;
    reason: number;
    correctedByAdminId: number;
    correctedByAdminUsername: number;
    correctedAt: number;
    _all: number;
};
export type AttendanceCorrectionLogAvgAggregateInputType = {
    id?: true;
    sessionId?: true;
    sessionVersionId?: true;
    attendanceId?: true;
    revision?: true;
    correctedByAdminId?: true;
};
export type AttendanceCorrectionLogSumAggregateInputType = {
    id?: true;
    sessionId?: true;
    sessionVersionId?: true;
    attendanceId?: true;
    revision?: true;
    correctedByAdminId?: true;
};
export type AttendanceCorrectionLogMinAggregateInputType = {
    id?: true;
    nik?: true;
    attendanceDate?: true;
    sessionId?: true;
    sessionVersionId?: true;
    attendanceId?: true;
    revision?: true;
    previousStatus?: true;
    newStatus?: true;
    reason?: true;
    correctedByAdminId?: true;
    correctedByAdminUsername?: true;
    correctedAt?: true;
};
export type AttendanceCorrectionLogMaxAggregateInputType = {
    id?: true;
    nik?: true;
    attendanceDate?: true;
    sessionId?: true;
    sessionVersionId?: true;
    attendanceId?: true;
    revision?: true;
    previousStatus?: true;
    newStatus?: true;
    reason?: true;
    correctedByAdminId?: true;
    correctedByAdminUsername?: true;
    correctedAt?: true;
};
export type AttendanceCorrectionLogCountAggregateInputType = {
    id?: true;
    nik?: true;
    attendanceDate?: true;
    sessionId?: true;
    sessionVersionId?: true;
    attendanceId?: true;
    revision?: true;
    previousStatus?: true;
    newStatus?: true;
    reason?: true;
    correctedByAdminId?: true;
    correctedByAdminUsername?: true;
    correctedAt?: true;
    _all?: true;
};
export type AttendanceCorrectionLogAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AttendanceCorrectionLog to aggregate.
     */
    where?: Prisma.AttendanceCorrectionLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AttendanceCorrectionLogs to fetch.
     */
    orderBy?: Prisma.AttendanceCorrectionLogOrderByWithRelationInput | Prisma.AttendanceCorrectionLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.AttendanceCorrectionLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AttendanceCorrectionLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AttendanceCorrectionLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned AttendanceCorrectionLogs
    **/
    _count?: true | AttendanceCorrectionLogCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: AttendanceCorrectionLogAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: AttendanceCorrectionLogSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceCorrectionLogMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceCorrectionLogMaxAggregateInputType;
};
export type GetAttendanceCorrectionLogAggregateType<T extends AttendanceCorrectionLogAggregateArgs> = {
    [P in keyof T & keyof AggregateAttendanceCorrectionLog]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAttendanceCorrectionLog[P]> : Prisma.GetScalarType<T[P], AggregateAttendanceCorrectionLog[P]>;
};
export type AttendanceCorrectionLogGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceCorrectionLogWhereInput;
    orderBy?: Prisma.AttendanceCorrectionLogOrderByWithAggregationInput | Prisma.AttendanceCorrectionLogOrderByWithAggregationInput[];
    by: Prisma.AttendanceCorrectionLogScalarFieldEnum[] | Prisma.AttendanceCorrectionLogScalarFieldEnum;
    having?: Prisma.AttendanceCorrectionLogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AttendanceCorrectionLogCountAggregateInputType | true;
    _avg?: AttendanceCorrectionLogAvgAggregateInputType;
    _sum?: AttendanceCorrectionLogSumAggregateInputType;
    _min?: AttendanceCorrectionLogMinAggregateInputType;
    _max?: AttendanceCorrectionLogMaxAggregateInputType;
};
export type AttendanceCorrectionLogGroupByOutputType = {
    id: number;
    nik: string;
    attendanceDate: Date;
    sessionId: number;
    sessionVersionId: number | null;
    attendanceId: number | null;
    revision: number;
    previousStatus: string;
    newStatus: string;
    reason: string;
    correctedByAdminId: number;
    correctedByAdminUsername: string;
    correctedAt: Date;
    _count: AttendanceCorrectionLogCountAggregateOutputType | null;
    _avg: AttendanceCorrectionLogAvgAggregateOutputType | null;
    _sum: AttendanceCorrectionLogSumAggregateOutputType | null;
    _min: AttendanceCorrectionLogMinAggregateOutputType | null;
    _max: AttendanceCorrectionLogMaxAggregateOutputType | null;
};
export type GetAttendanceCorrectionLogGroupByPayload<T extends AttendanceCorrectionLogGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AttendanceCorrectionLogGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AttendanceCorrectionLogGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AttendanceCorrectionLogGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AttendanceCorrectionLogGroupByOutputType[P]>;
}>>;
export type AttendanceCorrectionLogWhereInput = {
    AND?: Prisma.AttendanceCorrectionLogWhereInput | Prisma.AttendanceCorrectionLogWhereInput[];
    OR?: Prisma.AttendanceCorrectionLogWhereInput[];
    NOT?: Prisma.AttendanceCorrectionLogWhereInput | Prisma.AttendanceCorrectionLogWhereInput[];
    id?: Prisma.IntFilter<"AttendanceCorrectionLog"> | number;
    nik?: Prisma.StringFilter<"AttendanceCorrectionLog"> | string;
    attendanceDate?: Prisma.DateTimeFilter<"AttendanceCorrectionLog"> | Date | string;
    sessionId?: Prisma.IntFilter<"AttendanceCorrectionLog"> | number;
    sessionVersionId?: Prisma.IntNullableFilter<"AttendanceCorrectionLog"> | number | null;
    attendanceId?: Prisma.IntNullableFilter<"AttendanceCorrectionLog"> | number | null;
    revision?: Prisma.IntFilter<"AttendanceCorrectionLog"> | number;
    previousStatus?: Prisma.StringFilter<"AttendanceCorrectionLog"> | string;
    newStatus?: Prisma.StringFilter<"AttendanceCorrectionLog"> | string;
    reason?: Prisma.StringFilter<"AttendanceCorrectionLog"> | string;
    correctedByAdminId?: Prisma.IntFilter<"AttendanceCorrectionLog"> | number;
    correctedByAdminUsername?: Prisma.StringFilter<"AttendanceCorrectionLog"> | string;
    correctedAt?: Prisma.DateTimeFilter<"AttendanceCorrectionLog"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    session?: Prisma.XOR<Prisma.AttendanceSessionDefinitionScalarRelationFilter, Prisma.AttendanceSessionDefinitionWhereInput>;
    sessionVersion?: Prisma.XOR<Prisma.AttendanceSessionVersionNullableScalarRelationFilter, Prisma.AttendanceSessionVersionWhereInput> | null;
    attendance?: Prisma.XOR<Prisma.AttendanceNullableScalarRelationFilter, Prisma.AttendanceWhereInput> | null;
    correctedByAdmin?: Prisma.XOR<Prisma.AdminScalarRelationFilter, Prisma.AdminWhereInput>;
};
export type AttendanceCorrectionLogOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nik?: Prisma.SortOrder;
    attendanceDate?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    sessionVersionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    attendanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    revision?: Prisma.SortOrder;
    previousStatus?: Prisma.SortOrder;
    newStatus?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    correctedByAdminId?: Prisma.SortOrder;
    correctedByAdminUsername?: Prisma.SortOrder;
    correctedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    session?: Prisma.AttendanceSessionDefinitionOrderByWithRelationInput;
    sessionVersion?: Prisma.AttendanceSessionVersionOrderByWithRelationInput;
    attendance?: Prisma.AttendanceOrderByWithRelationInput;
    correctedByAdmin?: Prisma.AdminOrderByWithRelationInput;
};
export type AttendanceCorrectionLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    nik_attendanceDate_sessionId_revision?: Prisma.AttendanceCorrectionLogNikAttendanceDateSessionIdRevisionCompoundUniqueInput;
    AND?: Prisma.AttendanceCorrectionLogWhereInput | Prisma.AttendanceCorrectionLogWhereInput[];
    OR?: Prisma.AttendanceCorrectionLogWhereInput[];
    NOT?: Prisma.AttendanceCorrectionLogWhereInput | Prisma.AttendanceCorrectionLogWhereInput[];
    nik?: Prisma.StringFilter<"AttendanceCorrectionLog"> | string;
    attendanceDate?: Prisma.DateTimeFilter<"AttendanceCorrectionLog"> | Date | string;
    sessionId?: Prisma.IntFilter<"AttendanceCorrectionLog"> | number;
    sessionVersionId?: Prisma.IntNullableFilter<"AttendanceCorrectionLog"> | number | null;
    attendanceId?: Prisma.IntNullableFilter<"AttendanceCorrectionLog"> | number | null;
    revision?: Prisma.IntFilter<"AttendanceCorrectionLog"> | number;
    previousStatus?: Prisma.StringFilter<"AttendanceCorrectionLog"> | string;
    newStatus?: Prisma.StringFilter<"AttendanceCorrectionLog"> | string;
    reason?: Prisma.StringFilter<"AttendanceCorrectionLog"> | string;
    correctedByAdminId?: Prisma.IntFilter<"AttendanceCorrectionLog"> | number;
    correctedByAdminUsername?: Prisma.StringFilter<"AttendanceCorrectionLog"> | string;
    correctedAt?: Prisma.DateTimeFilter<"AttendanceCorrectionLog"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    session?: Prisma.XOR<Prisma.AttendanceSessionDefinitionScalarRelationFilter, Prisma.AttendanceSessionDefinitionWhereInput>;
    sessionVersion?: Prisma.XOR<Prisma.AttendanceSessionVersionNullableScalarRelationFilter, Prisma.AttendanceSessionVersionWhereInput> | null;
    attendance?: Prisma.XOR<Prisma.AttendanceNullableScalarRelationFilter, Prisma.AttendanceWhereInput> | null;
    correctedByAdmin?: Prisma.XOR<Prisma.AdminScalarRelationFilter, Prisma.AdminWhereInput>;
}, "id" | "nik_attendanceDate_sessionId_revision">;
export type AttendanceCorrectionLogOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nik?: Prisma.SortOrder;
    attendanceDate?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    sessionVersionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    attendanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    revision?: Prisma.SortOrder;
    previousStatus?: Prisma.SortOrder;
    newStatus?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    correctedByAdminId?: Prisma.SortOrder;
    correctedByAdminUsername?: Prisma.SortOrder;
    correctedAt?: Prisma.SortOrder;
    _count?: Prisma.AttendanceCorrectionLogCountOrderByAggregateInput;
    _avg?: Prisma.AttendanceCorrectionLogAvgOrderByAggregateInput;
    _max?: Prisma.AttendanceCorrectionLogMaxOrderByAggregateInput;
    _min?: Prisma.AttendanceCorrectionLogMinOrderByAggregateInput;
    _sum?: Prisma.AttendanceCorrectionLogSumOrderByAggregateInput;
};
export type AttendanceCorrectionLogScalarWhereWithAggregatesInput = {
    AND?: Prisma.AttendanceCorrectionLogScalarWhereWithAggregatesInput | Prisma.AttendanceCorrectionLogScalarWhereWithAggregatesInput[];
    OR?: Prisma.AttendanceCorrectionLogScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AttendanceCorrectionLogScalarWhereWithAggregatesInput | Prisma.AttendanceCorrectionLogScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"AttendanceCorrectionLog"> | number;
    nik?: Prisma.StringWithAggregatesFilter<"AttendanceCorrectionLog"> | string;
    attendanceDate?: Prisma.DateTimeWithAggregatesFilter<"AttendanceCorrectionLog"> | Date | string;
    sessionId?: Prisma.IntWithAggregatesFilter<"AttendanceCorrectionLog"> | number;
    sessionVersionId?: Prisma.IntNullableWithAggregatesFilter<"AttendanceCorrectionLog"> | number | null;
    attendanceId?: Prisma.IntNullableWithAggregatesFilter<"AttendanceCorrectionLog"> | number | null;
    revision?: Prisma.IntWithAggregatesFilter<"AttendanceCorrectionLog"> | number;
    previousStatus?: Prisma.StringWithAggregatesFilter<"AttendanceCorrectionLog"> | string;
    newStatus?: Prisma.StringWithAggregatesFilter<"AttendanceCorrectionLog"> | string;
    reason?: Prisma.StringWithAggregatesFilter<"AttendanceCorrectionLog"> | string;
    correctedByAdminId?: Prisma.IntWithAggregatesFilter<"AttendanceCorrectionLog"> | number;
    correctedByAdminUsername?: Prisma.StringWithAggregatesFilter<"AttendanceCorrectionLog"> | string;
    correctedAt?: Prisma.DateTimeWithAggregatesFilter<"AttendanceCorrectionLog"> | Date | string;
};
export type AttendanceCorrectionLogCreateInput = {
    revision: number;
    previousStatus: string;
    newStatus: string;
    reason: string;
    correctedByAdminUsername: string;
    correctedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutAttendanceCorrectionsInput;
    session: Prisma.AttendanceSessionDefinitionCreateNestedOneWithoutCorrectionLogsInput;
    sessionVersion?: Prisma.AttendanceSessionVersionCreateNestedOneWithoutCorrectionLogsInput;
    attendance?: Prisma.AttendanceCreateNestedOneWithoutCorrectionLogsInput;
    correctedByAdmin: Prisma.AdminCreateNestedOneWithoutAttendanceCorrectionsInput;
};
export type AttendanceCorrectionLogUncheckedCreateInput = {
    id?: number;
    nik: string;
    attendanceDate: Date | string;
    sessionId: number;
    sessionVersionId?: number | null;
    attendanceId?: number | null;
    revision: number;
    previousStatus: string;
    newStatus: string;
    reason: string;
    correctedByAdminId: number;
    correctedByAdminUsername: string;
    correctedAt?: Date | string;
};
export type AttendanceCorrectionLogUpdateInput = {
    revision?: Prisma.IntFieldUpdateOperationsInput | number;
    previousStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    newStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    correctedByAdminUsername?: Prisma.StringFieldUpdateOperationsInput | string;
    correctedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutAttendanceCorrectionsNestedInput;
    session?: Prisma.AttendanceSessionDefinitionUpdateOneRequiredWithoutCorrectionLogsNestedInput;
    sessionVersion?: Prisma.AttendanceSessionVersionUpdateOneWithoutCorrectionLogsNestedInput;
    attendance?: Prisma.AttendanceUpdateOneWithoutCorrectionLogsNestedInput;
    correctedByAdmin?: Prisma.AdminUpdateOneRequiredWithoutAttendanceCorrectionsNestedInput;
};
export type AttendanceCorrectionLogUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nik?: Prisma.StringFieldUpdateOperationsInput | string;
    attendanceDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessionId?: Prisma.IntFieldUpdateOperationsInput | number;
    sessionVersionId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    attendanceId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    revision?: Prisma.IntFieldUpdateOperationsInput | number;
    previousStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    newStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    correctedByAdminId?: Prisma.IntFieldUpdateOperationsInput | number;
    correctedByAdminUsername?: Prisma.StringFieldUpdateOperationsInput | string;
    correctedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceCorrectionLogCreateManyInput = {
    id?: number;
    nik: string;
    attendanceDate: Date | string;
    sessionId: number;
    sessionVersionId?: number | null;
    attendanceId?: number | null;
    revision: number;
    previousStatus: string;
    newStatus: string;
    reason: string;
    correctedByAdminId: number;
    correctedByAdminUsername: string;
    correctedAt?: Date | string;
};
export type AttendanceCorrectionLogUpdateManyMutationInput = {
    revision?: Prisma.IntFieldUpdateOperationsInput | number;
    previousStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    newStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    correctedByAdminUsername?: Prisma.StringFieldUpdateOperationsInput | string;
    correctedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceCorrectionLogUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nik?: Prisma.StringFieldUpdateOperationsInput | string;
    attendanceDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessionId?: Prisma.IntFieldUpdateOperationsInput | number;
    sessionVersionId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    attendanceId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    revision?: Prisma.IntFieldUpdateOperationsInput | number;
    previousStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    newStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    correctedByAdminId?: Prisma.IntFieldUpdateOperationsInput | number;
    correctedByAdminUsername?: Prisma.StringFieldUpdateOperationsInput | string;
    correctedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceCorrectionLogListRelationFilter = {
    every?: Prisma.AttendanceCorrectionLogWhereInput;
    some?: Prisma.AttendanceCorrectionLogWhereInput;
    none?: Prisma.AttendanceCorrectionLogWhereInput;
};
export type AttendanceCorrectionLogOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AttendanceCorrectionLogNikAttendanceDateSessionIdRevisionCompoundUniqueInput = {
    nik: string;
    attendanceDate: Date | string;
    sessionId: number;
    revision: number;
};
export type AttendanceCorrectionLogCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nik?: Prisma.SortOrder;
    attendanceDate?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    sessionVersionId?: Prisma.SortOrder;
    attendanceId?: Prisma.SortOrder;
    revision?: Prisma.SortOrder;
    previousStatus?: Prisma.SortOrder;
    newStatus?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    correctedByAdminId?: Prisma.SortOrder;
    correctedByAdminUsername?: Prisma.SortOrder;
    correctedAt?: Prisma.SortOrder;
};
export type AttendanceCorrectionLogAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    sessionVersionId?: Prisma.SortOrder;
    attendanceId?: Prisma.SortOrder;
    revision?: Prisma.SortOrder;
    correctedByAdminId?: Prisma.SortOrder;
};
export type AttendanceCorrectionLogMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nik?: Prisma.SortOrder;
    attendanceDate?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    sessionVersionId?: Prisma.SortOrder;
    attendanceId?: Prisma.SortOrder;
    revision?: Prisma.SortOrder;
    previousStatus?: Prisma.SortOrder;
    newStatus?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    correctedByAdminId?: Prisma.SortOrder;
    correctedByAdminUsername?: Prisma.SortOrder;
    correctedAt?: Prisma.SortOrder;
};
export type AttendanceCorrectionLogMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nik?: Prisma.SortOrder;
    attendanceDate?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    sessionVersionId?: Prisma.SortOrder;
    attendanceId?: Prisma.SortOrder;
    revision?: Prisma.SortOrder;
    previousStatus?: Prisma.SortOrder;
    newStatus?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    correctedByAdminId?: Prisma.SortOrder;
    correctedByAdminUsername?: Prisma.SortOrder;
    correctedAt?: Prisma.SortOrder;
};
export type AttendanceCorrectionLogSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    sessionVersionId?: Prisma.SortOrder;
    attendanceId?: Prisma.SortOrder;
    revision?: Prisma.SortOrder;
    correctedByAdminId?: Prisma.SortOrder;
};
export type AttendanceCorrectionLogCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.AttendanceCorrectionLogCreateWithoutUserInput, Prisma.AttendanceCorrectionLogUncheckedCreateWithoutUserInput> | Prisma.AttendanceCorrectionLogCreateWithoutUserInput[] | Prisma.AttendanceCorrectionLogUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.AttendanceCorrectionLogCreateOrConnectWithoutUserInput | Prisma.AttendanceCorrectionLogCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.AttendanceCorrectionLogCreateManyUserInputEnvelope;
    connect?: Prisma.AttendanceCorrectionLogWhereUniqueInput | Prisma.AttendanceCorrectionLogWhereUniqueInput[];
};
export type AttendanceCorrectionLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.AttendanceCorrectionLogCreateWithoutUserInput, Prisma.AttendanceCorrectionLogUncheckedCreateWithoutUserInput> | Prisma.AttendanceCorrectionLogCreateWithoutUserInput[] | Prisma.AttendanceCorrectionLogUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.AttendanceCorrectionLogCreateOrConnectWithoutUserInput | Prisma.AttendanceCorrectionLogCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.AttendanceCorrectionLogCreateManyUserInputEnvelope;
    connect?: Prisma.AttendanceCorrectionLogWhereUniqueInput | Prisma.AttendanceCorrectionLogWhereUniqueInput[];
};
export type AttendanceCorrectionLogUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceCorrectionLogCreateWithoutUserInput, Prisma.AttendanceCorrectionLogUncheckedCreateWithoutUserInput> | Prisma.AttendanceCorrectionLogCreateWithoutUserInput[] | Prisma.AttendanceCorrectionLogUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.AttendanceCorrectionLogCreateOrConnectWithoutUserInput | Prisma.AttendanceCorrectionLogCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.AttendanceCorrectionLogUpsertWithWhereUniqueWithoutUserInput | Prisma.AttendanceCorrectionLogUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.AttendanceCorrectionLogCreateManyUserInputEnvelope;
    set?: Prisma.AttendanceCorrectionLogWhereUniqueInput | Prisma.AttendanceCorrectionLogWhereUniqueInput[];
    disconnect?: Prisma.AttendanceCorrectionLogWhereUniqueInput | Prisma.AttendanceCorrectionLogWhereUniqueInput[];
    delete?: Prisma.AttendanceCorrectionLogWhereUniqueInput | Prisma.AttendanceCorrectionLogWhereUniqueInput[];
    connect?: Prisma.AttendanceCorrectionLogWhereUniqueInput | Prisma.AttendanceCorrectionLogWhereUniqueInput[];
    update?: Prisma.AttendanceCorrectionLogUpdateWithWhereUniqueWithoutUserInput | Prisma.AttendanceCorrectionLogUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.AttendanceCorrectionLogUpdateManyWithWhereWithoutUserInput | Prisma.AttendanceCorrectionLogUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.AttendanceCorrectionLogScalarWhereInput | Prisma.AttendanceCorrectionLogScalarWhereInput[];
};
export type AttendanceCorrectionLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceCorrectionLogCreateWithoutUserInput, Prisma.AttendanceCorrectionLogUncheckedCreateWithoutUserInput> | Prisma.AttendanceCorrectionLogCreateWithoutUserInput[] | Prisma.AttendanceCorrectionLogUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.AttendanceCorrectionLogCreateOrConnectWithoutUserInput | Prisma.AttendanceCorrectionLogCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.AttendanceCorrectionLogUpsertWithWhereUniqueWithoutUserInput | Prisma.AttendanceCorrectionLogUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.AttendanceCorrectionLogCreateManyUserInputEnvelope;
    set?: Prisma.AttendanceCorrectionLogWhereUniqueInput | Prisma.AttendanceCorrectionLogWhereUniqueInput[];
    disconnect?: Prisma.AttendanceCorrectionLogWhereUniqueInput | Prisma.AttendanceCorrectionLogWhereUniqueInput[];
    delete?: Prisma.AttendanceCorrectionLogWhereUniqueInput | Prisma.AttendanceCorrectionLogWhereUniqueInput[];
    connect?: Prisma.AttendanceCorrectionLogWhereUniqueInput | Prisma.AttendanceCorrectionLogWhereUniqueInput[];
    update?: Prisma.AttendanceCorrectionLogUpdateWithWhereUniqueWithoutUserInput | Prisma.AttendanceCorrectionLogUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.AttendanceCorrectionLogUpdateManyWithWhereWithoutUserInput | Prisma.AttendanceCorrectionLogUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.AttendanceCorrectionLogScalarWhereInput | Prisma.AttendanceCorrectionLogScalarWhereInput[];
};
export type AttendanceCorrectionLogCreateNestedManyWithoutCorrectedByAdminInput = {
    create?: Prisma.XOR<Prisma.AttendanceCorrectionLogCreateWithoutCorrectedByAdminInput, Prisma.AttendanceCorrectionLogUncheckedCreateWithoutCorrectedByAdminInput> | Prisma.AttendanceCorrectionLogCreateWithoutCorrectedByAdminInput[] | Prisma.AttendanceCorrectionLogUncheckedCreateWithoutCorrectedByAdminInput[];
    connectOrCreate?: Prisma.AttendanceCorrectionLogCreateOrConnectWithoutCorrectedByAdminInput | Prisma.AttendanceCorrectionLogCreateOrConnectWithoutCorrectedByAdminInput[];
    createMany?: Prisma.AttendanceCorrectionLogCreateManyCorrectedByAdminInputEnvelope;
    connect?: Prisma.AttendanceCorrectionLogWhereUniqueInput | Prisma.AttendanceCorrectionLogWhereUniqueInput[];
};
export type AttendanceCorrectionLogUncheckedCreateNestedManyWithoutCorrectedByAdminInput = {
    create?: Prisma.XOR<Prisma.AttendanceCorrectionLogCreateWithoutCorrectedByAdminInput, Prisma.AttendanceCorrectionLogUncheckedCreateWithoutCorrectedByAdminInput> | Prisma.AttendanceCorrectionLogCreateWithoutCorrectedByAdminInput[] | Prisma.AttendanceCorrectionLogUncheckedCreateWithoutCorrectedByAdminInput[];
    connectOrCreate?: Prisma.AttendanceCorrectionLogCreateOrConnectWithoutCorrectedByAdminInput | Prisma.AttendanceCorrectionLogCreateOrConnectWithoutCorrectedByAdminInput[];
    createMany?: Prisma.AttendanceCorrectionLogCreateManyCorrectedByAdminInputEnvelope;
    connect?: Prisma.AttendanceCorrectionLogWhereUniqueInput | Prisma.AttendanceCorrectionLogWhereUniqueInput[];
};
export type AttendanceCorrectionLogUpdateManyWithoutCorrectedByAdminNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceCorrectionLogCreateWithoutCorrectedByAdminInput, Prisma.AttendanceCorrectionLogUncheckedCreateWithoutCorrectedByAdminInput> | Prisma.AttendanceCorrectionLogCreateWithoutCorrectedByAdminInput[] | Prisma.AttendanceCorrectionLogUncheckedCreateWithoutCorrectedByAdminInput[];
    connectOrCreate?: Prisma.AttendanceCorrectionLogCreateOrConnectWithoutCorrectedByAdminInput | Prisma.AttendanceCorrectionLogCreateOrConnectWithoutCorrectedByAdminInput[];
    upsert?: Prisma.AttendanceCorrectionLogUpsertWithWhereUniqueWithoutCorrectedByAdminInput | Prisma.AttendanceCorrectionLogUpsertWithWhereUniqueWithoutCorrectedByAdminInput[];
    createMany?: Prisma.AttendanceCorrectionLogCreateManyCorrectedByAdminInputEnvelope;
    set?: Prisma.AttendanceCorrectionLogWhereUniqueInput | Prisma.AttendanceCorrectionLogWhereUniqueInput[];
    disconnect?: Prisma.AttendanceCorrectionLogWhereUniqueInput | Prisma.AttendanceCorrectionLogWhereUniqueInput[];
    delete?: Prisma.AttendanceCorrectionLogWhereUniqueInput | Prisma.AttendanceCorrectionLogWhereUniqueInput[];
    connect?: Prisma.AttendanceCorrectionLogWhereUniqueInput | Prisma.AttendanceCorrectionLogWhereUniqueInput[];
    update?: Prisma.AttendanceCorrectionLogUpdateWithWhereUniqueWithoutCorrectedByAdminInput | Prisma.AttendanceCorrectionLogUpdateWithWhereUniqueWithoutCorrectedByAdminInput[];
    updateMany?: Prisma.AttendanceCorrectionLogUpdateManyWithWhereWithoutCorrectedByAdminInput | Prisma.AttendanceCorrectionLogUpdateManyWithWhereWithoutCorrectedByAdminInput[];
    deleteMany?: Prisma.AttendanceCorrectionLogScalarWhereInput | Prisma.AttendanceCorrectionLogScalarWhereInput[];
};
export type AttendanceCorrectionLogUncheckedUpdateManyWithoutCorrectedByAdminNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceCorrectionLogCreateWithoutCorrectedByAdminInput, Prisma.AttendanceCorrectionLogUncheckedCreateWithoutCorrectedByAdminInput> | Prisma.AttendanceCorrectionLogCreateWithoutCorrectedByAdminInput[] | Prisma.AttendanceCorrectionLogUncheckedCreateWithoutCorrectedByAdminInput[];
    connectOrCreate?: Prisma.AttendanceCorrectionLogCreateOrConnectWithoutCorrectedByAdminInput | Prisma.AttendanceCorrectionLogCreateOrConnectWithoutCorrectedByAdminInput[];
    upsert?: Prisma.AttendanceCorrectionLogUpsertWithWhereUniqueWithoutCorrectedByAdminInput | Prisma.AttendanceCorrectionLogUpsertWithWhereUniqueWithoutCorrectedByAdminInput[];
    createMany?: Prisma.AttendanceCorrectionLogCreateManyCorrectedByAdminInputEnvelope;
    set?: Prisma.AttendanceCorrectionLogWhereUniqueInput | Prisma.AttendanceCorrectionLogWhereUniqueInput[];
    disconnect?: Prisma.AttendanceCorrectionLogWhereUniqueInput | Prisma.AttendanceCorrectionLogWhereUniqueInput[];
    delete?: Prisma.AttendanceCorrectionLogWhereUniqueInput | Prisma.AttendanceCorrectionLogWhereUniqueInput[];
    connect?: Prisma.AttendanceCorrectionLogWhereUniqueInput | Prisma.AttendanceCorrectionLogWhereUniqueInput[];
    update?: Prisma.AttendanceCorrectionLogUpdateWithWhereUniqueWithoutCorrectedByAdminInput | Prisma.AttendanceCorrectionLogUpdateWithWhereUniqueWithoutCorrectedByAdminInput[];
    updateMany?: Prisma.AttendanceCorrectionLogUpdateManyWithWhereWithoutCorrectedByAdminInput | Prisma.AttendanceCorrectionLogUpdateManyWithWhereWithoutCorrectedByAdminInput[];
    deleteMany?: Prisma.AttendanceCorrectionLogScalarWhereInput | Prisma.AttendanceCorrectionLogScalarWhereInput[];
};
export type AttendanceCorrectionLogCreateNestedManyWithoutAttendanceInput = {
    create?: Prisma.XOR<Prisma.AttendanceCorrectionLogCreateWithoutAttendanceInput, Prisma.AttendanceCorrectionLogUncheckedCreateWithoutAttendanceInput> | Prisma.AttendanceCorrectionLogCreateWithoutAttendanceInput[] | Prisma.AttendanceCorrectionLogUncheckedCreateWithoutAttendanceInput[];
    connectOrCreate?: Prisma.AttendanceCorrectionLogCreateOrConnectWithoutAttendanceInput | Prisma.AttendanceCorrectionLogCreateOrConnectWithoutAttendanceInput[];
    createMany?: Prisma.AttendanceCorrectionLogCreateManyAttendanceInputEnvelope;
    connect?: Prisma.AttendanceCorrectionLogWhereUniqueInput | Prisma.AttendanceCorrectionLogWhereUniqueInput[];
};
export type AttendanceCorrectionLogUncheckedCreateNestedManyWithoutAttendanceInput = {
    create?: Prisma.XOR<Prisma.AttendanceCorrectionLogCreateWithoutAttendanceInput, Prisma.AttendanceCorrectionLogUncheckedCreateWithoutAttendanceInput> | Prisma.AttendanceCorrectionLogCreateWithoutAttendanceInput[] | Prisma.AttendanceCorrectionLogUncheckedCreateWithoutAttendanceInput[];
    connectOrCreate?: Prisma.AttendanceCorrectionLogCreateOrConnectWithoutAttendanceInput | Prisma.AttendanceCorrectionLogCreateOrConnectWithoutAttendanceInput[];
    createMany?: Prisma.AttendanceCorrectionLogCreateManyAttendanceInputEnvelope;
    connect?: Prisma.AttendanceCorrectionLogWhereUniqueInput | Prisma.AttendanceCorrectionLogWhereUniqueInput[];
};
export type AttendanceCorrectionLogUpdateManyWithoutAttendanceNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceCorrectionLogCreateWithoutAttendanceInput, Prisma.AttendanceCorrectionLogUncheckedCreateWithoutAttendanceInput> | Prisma.AttendanceCorrectionLogCreateWithoutAttendanceInput[] | Prisma.AttendanceCorrectionLogUncheckedCreateWithoutAttendanceInput[];
    connectOrCreate?: Prisma.AttendanceCorrectionLogCreateOrConnectWithoutAttendanceInput | Prisma.AttendanceCorrectionLogCreateOrConnectWithoutAttendanceInput[];
    upsert?: Prisma.AttendanceCorrectionLogUpsertWithWhereUniqueWithoutAttendanceInput | Prisma.AttendanceCorrectionLogUpsertWithWhereUniqueWithoutAttendanceInput[];
    createMany?: Prisma.AttendanceCorrectionLogCreateManyAttendanceInputEnvelope;
    set?: Prisma.AttendanceCorrectionLogWhereUniqueInput | Prisma.AttendanceCorrectionLogWhereUniqueInput[];
    disconnect?: Prisma.AttendanceCorrectionLogWhereUniqueInput | Prisma.AttendanceCorrectionLogWhereUniqueInput[];
    delete?: Prisma.AttendanceCorrectionLogWhereUniqueInput | Prisma.AttendanceCorrectionLogWhereUniqueInput[];
    connect?: Prisma.AttendanceCorrectionLogWhereUniqueInput | Prisma.AttendanceCorrectionLogWhereUniqueInput[];
    update?: Prisma.AttendanceCorrectionLogUpdateWithWhereUniqueWithoutAttendanceInput | Prisma.AttendanceCorrectionLogUpdateWithWhereUniqueWithoutAttendanceInput[];
    updateMany?: Prisma.AttendanceCorrectionLogUpdateManyWithWhereWithoutAttendanceInput | Prisma.AttendanceCorrectionLogUpdateManyWithWhereWithoutAttendanceInput[];
    deleteMany?: Prisma.AttendanceCorrectionLogScalarWhereInput | Prisma.AttendanceCorrectionLogScalarWhereInput[];
};
export type AttendanceCorrectionLogUncheckedUpdateManyWithoutAttendanceNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceCorrectionLogCreateWithoutAttendanceInput, Prisma.AttendanceCorrectionLogUncheckedCreateWithoutAttendanceInput> | Prisma.AttendanceCorrectionLogCreateWithoutAttendanceInput[] | Prisma.AttendanceCorrectionLogUncheckedCreateWithoutAttendanceInput[];
    connectOrCreate?: Prisma.AttendanceCorrectionLogCreateOrConnectWithoutAttendanceInput | Prisma.AttendanceCorrectionLogCreateOrConnectWithoutAttendanceInput[];
    upsert?: Prisma.AttendanceCorrectionLogUpsertWithWhereUniqueWithoutAttendanceInput | Prisma.AttendanceCorrectionLogUpsertWithWhereUniqueWithoutAttendanceInput[];
    createMany?: Prisma.AttendanceCorrectionLogCreateManyAttendanceInputEnvelope;
    set?: Prisma.AttendanceCorrectionLogWhereUniqueInput | Prisma.AttendanceCorrectionLogWhereUniqueInput[];
    disconnect?: Prisma.AttendanceCorrectionLogWhereUniqueInput | Prisma.AttendanceCorrectionLogWhereUniqueInput[];
    delete?: Prisma.AttendanceCorrectionLogWhereUniqueInput | Prisma.AttendanceCorrectionLogWhereUniqueInput[];
    connect?: Prisma.AttendanceCorrectionLogWhereUniqueInput | Prisma.AttendanceCorrectionLogWhereUniqueInput[];
    update?: Prisma.AttendanceCorrectionLogUpdateWithWhereUniqueWithoutAttendanceInput | Prisma.AttendanceCorrectionLogUpdateWithWhereUniqueWithoutAttendanceInput[];
    updateMany?: Prisma.AttendanceCorrectionLogUpdateManyWithWhereWithoutAttendanceInput | Prisma.AttendanceCorrectionLogUpdateManyWithWhereWithoutAttendanceInput[];
    deleteMany?: Prisma.AttendanceCorrectionLogScalarWhereInput | Prisma.AttendanceCorrectionLogScalarWhereInput[];
};
export type AttendanceCorrectionLogCreateNestedManyWithoutSessionInput = {
    create?: Prisma.XOR<Prisma.AttendanceCorrectionLogCreateWithoutSessionInput, Prisma.AttendanceCorrectionLogUncheckedCreateWithoutSessionInput> | Prisma.AttendanceCorrectionLogCreateWithoutSessionInput[] | Prisma.AttendanceCorrectionLogUncheckedCreateWithoutSessionInput[];
    connectOrCreate?: Prisma.AttendanceCorrectionLogCreateOrConnectWithoutSessionInput | Prisma.AttendanceCorrectionLogCreateOrConnectWithoutSessionInput[];
    createMany?: Prisma.AttendanceCorrectionLogCreateManySessionInputEnvelope;
    connect?: Prisma.AttendanceCorrectionLogWhereUniqueInput | Prisma.AttendanceCorrectionLogWhereUniqueInput[];
};
export type AttendanceCorrectionLogUncheckedCreateNestedManyWithoutSessionInput = {
    create?: Prisma.XOR<Prisma.AttendanceCorrectionLogCreateWithoutSessionInput, Prisma.AttendanceCorrectionLogUncheckedCreateWithoutSessionInput> | Prisma.AttendanceCorrectionLogCreateWithoutSessionInput[] | Prisma.AttendanceCorrectionLogUncheckedCreateWithoutSessionInput[];
    connectOrCreate?: Prisma.AttendanceCorrectionLogCreateOrConnectWithoutSessionInput | Prisma.AttendanceCorrectionLogCreateOrConnectWithoutSessionInput[];
    createMany?: Prisma.AttendanceCorrectionLogCreateManySessionInputEnvelope;
    connect?: Prisma.AttendanceCorrectionLogWhereUniqueInput | Prisma.AttendanceCorrectionLogWhereUniqueInput[];
};
export type AttendanceCorrectionLogUpdateManyWithoutSessionNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceCorrectionLogCreateWithoutSessionInput, Prisma.AttendanceCorrectionLogUncheckedCreateWithoutSessionInput> | Prisma.AttendanceCorrectionLogCreateWithoutSessionInput[] | Prisma.AttendanceCorrectionLogUncheckedCreateWithoutSessionInput[];
    connectOrCreate?: Prisma.AttendanceCorrectionLogCreateOrConnectWithoutSessionInput | Prisma.AttendanceCorrectionLogCreateOrConnectWithoutSessionInput[];
    upsert?: Prisma.AttendanceCorrectionLogUpsertWithWhereUniqueWithoutSessionInput | Prisma.AttendanceCorrectionLogUpsertWithWhereUniqueWithoutSessionInput[];
    createMany?: Prisma.AttendanceCorrectionLogCreateManySessionInputEnvelope;
    set?: Prisma.AttendanceCorrectionLogWhereUniqueInput | Prisma.AttendanceCorrectionLogWhereUniqueInput[];
    disconnect?: Prisma.AttendanceCorrectionLogWhereUniqueInput | Prisma.AttendanceCorrectionLogWhereUniqueInput[];
    delete?: Prisma.AttendanceCorrectionLogWhereUniqueInput | Prisma.AttendanceCorrectionLogWhereUniqueInput[];
    connect?: Prisma.AttendanceCorrectionLogWhereUniqueInput | Prisma.AttendanceCorrectionLogWhereUniqueInput[];
    update?: Prisma.AttendanceCorrectionLogUpdateWithWhereUniqueWithoutSessionInput | Prisma.AttendanceCorrectionLogUpdateWithWhereUniqueWithoutSessionInput[];
    updateMany?: Prisma.AttendanceCorrectionLogUpdateManyWithWhereWithoutSessionInput | Prisma.AttendanceCorrectionLogUpdateManyWithWhereWithoutSessionInput[];
    deleteMany?: Prisma.AttendanceCorrectionLogScalarWhereInput | Prisma.AttendanceCorrectionLogScalarWhereInput[];
};
export type AttendanceCorrectionLogUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceCorrectionLogCreateWithoutSessionInput, Prisma.AttendanceCorrectionLogUncheckedCreateWithoutSessionInput> | Prisma.AttendanceCorrectionLogCreateWithoutSessionInput[] | Prisma.AttendanceCorrectionLogUncheckedCreateWithoutSessionInput[];
    connectOrCreate?: Prisma.AttendanceCorrectionLogCreateOrConnectWithoutSessionInput | Prisma.AttendanceCorrectionLogCreateOrConnectWithoutSessionInput[];
    upsert?: Prisma.AttendanceCorrectionLogUpsertWithWhereUniqueWithoutSessionInput | Prisma.AttendanceCorrectionLogUpsertWithWhereUniqueWithoutSessionInput[];
    createMany?: Prisma.AttendanceCorrectionLogCreateManySessionInputEnvelope;
    set?: Prisma.AttendanceCorrectionLogWhereUniqueInput | Prisma.AttendanceCorrectionLogWhereUniqueInput[];
    disconnect?: Prisma.AttendanceCorrectionLogWhereUniqueInput | Prisma.AttendanceCorrectionLogWhereUniqueInput[];
    delete?: Prisma.AttendanceCorrectionLogWhereUniqueInput | Prisma.AttendanceCorrectionLogWhereUniqueInput[];
    connect?: Prisma.AttendanceCorrectionLogWhereUniqueInput | Prisma.AttendanceCorrectionLogWhereUniqueInput[];
    update?: Prisma.AttendanceCorrectionLogUpdateWithWhereUniqueWithoutSessionInput | Prisma.AttendanceCorrectionLogUpdateWithWhereUniqueWithoutSessionInput[];
    updateMany?: Prisma.AttendanceCorrectionLogUpdateManyWithWhereWithoutSessionInput | Prisma.AttendanceCorrectionLogUpdateManyWithWhereWithoutSessionInput[];
    deleteMany?: Prisma.AttendanceCorrectionLogScalarWhereInput | Prisma.AttendanceCorrectionLogScalarWhereInput[];
};
export type AttendanceCorrectionLogCreateNestedManyWithoutSessionVersionInput = {
    create?: Prisma.XOR<Prisma.AttendanceCorrectionLogCreateWithoutSessionVersionInput, Prisma.AttendanceCorrectionLogUncheckedCreateWithoutSessionVersionInput> | Prisma.AttendanceCorrectionLogCreateWithoutSessionVersionInput[] | Prisma.AttendanceCorrectionLogUncheckedCreateWithoutSessionVersionInput[];
    connectOrCreate?: Prisma.AttendanceCorrectionLogCreateOrConnectWithoutSessionVersionInput | Prisma.AttendanceCorrectionLogCreateOrConnectWithoutSessionVersionInput[];
    createMany?: Prisma.AttendanceCorrectionLogCreateManySessionVersionInputEnvelope;
    connect?: Prisma.AttendanceCorrectionLogWhereUniqueInput | Prisma.AttendanceCorrectionLogWhereUniqueInput[];
};
export type AttendanceCorrectionLogUncheckedCreateNestedManyWithoutSessionVersionInput = {
    create?: Prisma.XOR<Prisma.AttendanceCorrectionLogCreateWithoutSessionVersionInput, Prisma.AttendanceCorrectionLogUncheckedCreateWithoutSessionVersionInput> | Prisma.AttendanceCorrectionLogCreateWithoutSessionVersionInput[] | Prisma.AttendanceCorrectionLogUncheckedCreateWithoutSessionVersionInput[];
    connectOrCreate?: Prisma.AttendanceCorrectionLogCreateOrConnectWithoutSessionVersionInput | Prisma.AttendanceCorrectionLogCreateOrConnectWithoutSessionVersionInput[];
    createMany?: Prisma.AttendanceCorrectionLogCreateManySessionVersionInputEnvelope;
    connect?: Prisma.AttendanceCorrectionLogWhereUniqueInput | Prisma.AttendanceCorrectionLogWhereUniqueInput[];
};
export type AttendanceCorrectionLogUpdateManyWithoutSessionVersionNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceCorrectionLogCreateWithoutSessionVersionInput, Prisma.AttendanceCorrectionLogUncheckedCreateWithoutSessionVersionInput> | Prisma.AttendanceCorrectionLogCreateWithoutSessionVersionInput[] | Prisma.AttendanceCorrectionLogUncheckedCreateWithoutSessionVersionInput[];
    connectOrCreate?: Prisma.AttendanceCorrectionLogCreateOrConnectWithoutSessionVersionInput | Prisma.AttendanceCorrectionLogCreateOrConnectWithoutSessionVersionInput[];
    upsert?: Prisma.AttendanceCorrectionLogUpsertWithWhereUniqueWithoutSessionVersionInput | Prisma.AttendanceCorrectionLogUpsertWithWhereUniqueWithoutSessionVersionInput[];
    createMany?: Prisma.AttendanceCorrectionLogCreateManySessionVersionInputEnvelope;
    set?: Prisma.AttendanceCorrectionLogWhereUniqueInput | Prisma.AttendanceCorrectionLogWhereUniqueInput[];
    disconnect?: Prisma.AttendanceCorrectionLogWhereUniqueInput | Prisma.AttendanceCorrectionLogWhereUniqueInput[];
    delete?: Prisma.AttendanceCorrectionLogWhereUniqueInput | Prisma.AttendanceCorrectionLogWhereUniqueInput[];
    connect?: Prisma.AttendanceCorrectionLogWhereUniqueInput | Prisma.AttendanceCorrectionLogWhereUniqueInput[];
    update?: Prisma.AttendanceCorrectionLogUpdateWithWhereUniqueWithoutSessionVersionInput | Prisma.AttendanceCorrectionLogUpdateWithWhereUniqueWithoutSessionVersionInput[];
    updateMany?: Prisma.AttendanceCorrectionLogUpdateManyWithWhereWithoutSessionVersionInput | Prisma.AttendanceCorrectionLogUpdateManyWithWhereWithoutSessionVersionInput[];
    deleteMany?: Prisma.AttendanceCorrectionLogScalarWhereInput | Prisma.AttendanceCorrectionLogScalarWhereInput[];
};
export type AttendanceCorrectionLogUncheckedUpdateManyWithoutSessionVersionNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceCorrectionLogCreateWithoutSessionVersionInput, Prisma.AttendanceCorrectionLogUncheckedCreateWithoutSessionVersionInput> | Prisma.AttendanceCorrectionLogCreateWithoutSessionVersionInput[] | Prisma.AttendanceCorrectionLogUncheckedCreateWithoutSessionVersionInput[];
    connectOrCreate?: Prisma.AttendanceCorrectionLogCreateOrConnectWithoutSessionVersionInput | Prisma.AttendanceCorrectionLogCreateOrConnectWithoutSessionVersionInput[];
    upsert?: Prisma.AttendanceCorrectionLogUpsertWithWhereUniqueWithoutSessionVersionInput | Prisma.AttendanceCorrectionLogUpsertWithWhereUniqueWithoutSessionVersionInput[];
    createMany?: Prisma.AttendanceCorrectionLogCreateManySessionVersionInputEnvelope;
    set?: Prisma.AttendanceCorrectionLogWhereUniqueInput | Prisma.AttendanceCorrectionLogWhereUniqueInput[];
    disconnect?: Prisma.AttendanceCorrectionLogWhereUniqueInput | Prisma.AttendanceCorrectionLogWhereUniqueInput[];
    delete?: Prisma.AttendanceCorrectionLogWhereUniqueInput | Prisma.AttendanceCorrectionLogWhereUniqueInput[];
    connect?: Prisma.AttendanceCorrectionLogWhereUniqueInput | Prisma.AttendanceCorrectionLogWhereUniqueInput[];
    update?: Prisma.AttendanceCorrectionLogUpdateWithWhereUniqueWithoutSessionVersionInput | Prisma.AttendanceCorrectionLogUpdateWithWhereUniqueWithoutSessionVersionInput[];
    updateMany?: Prisma.AttendanceCorrectionLogUpdateManyWithWhereWithoutSessionVersionInput | Prisma.AttendanceCorrectionLogUpdateManyWithWhereWithoutSessionVersionInput[];
    deleteMany?: Prisma.AttendanceCorrectionLogScalarWhereInput | Prisma.AttendanceCorrectionLogScalarWhereInput[];
};
export type AttendanceCorrectionLogCreateWithoutUserInput = {
    revision: number;
    previousStatus: string;
    newStatus: string;
    reason: string;
    correctedByAdminUsername: string;
    correctedAt?: Date | string;
    session: Prisma.AttendanceSessionDefinitionCreateNestedOneWithoutCorrectionLogsInput;
    sessionVersion?: Prisma.AttendanceSessionVersionCreateNestedOneWithoutCorrectionLogsInput;
    attendance?: Prisma.AttendanceCreateNestedOneWithoutCorrectionLogsInput;
    correctedByAdmin: Prisma.AdminCreateNestedOneWithoutAttendanceCorrectionsInput;
};
export type AttendanceCorrectionLogUncheckedCreateWithoutUserInput = {
    id?: number;
    attendanceDate: Date | string;
    sessionId: number;
    sessionVersionId?: number | null;
    attendanceId?: number | null;
    revision: number;
    previousStatus: string;
    newStatus: string;
    reason: string;
    correctedByAdminId: number;
    correctedByAdminUsername: string;
    correctedAt?: Date | string;
};
export type AttendanceCorrectionLogCreateOrConnectWithoutUserInput = {
    where: Prisma.AttendanceCorrectionLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendanceCorrectionLogCreateWithoutUserInput, Prisma.AttendanceCorrectionLogUncheckedCreateWithoutUserInput>;
};
export type AttendanceCorrectionLogCreateManyUserInputEnvelope = {
    data: Prisma.AttendanceCorrectionLogCreateManyUserInput | Prisma.AttendanceCorrectionLogCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type AttendanceCorrectionLogUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.AttendanceCorrectionLogWhereUniqueInput;
    update: Prisma.XOR<Prisma.AttendanceCorrectionLogUpdateWithoutUserInput, Prisma.AttendanceCorrectionLogUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.AttendanceCorrectionLogCreateWithoutUserInput, Prisma.AttendanceCorrectionLogUncheckedCreateWithoutUserInput>;
};
export type AttendanceCorrectionLogUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.AttendanceCorrectionLogWhereUniqueInput;
    data: Prisma.XOR<Prisma.AttendanceCorrectionLogUpdateWithoutUserInput, Prisma.AttendanceCorrectionLogUncheckedUpdateWithoutUserInput>;
};
export type AttendanceCorrectionLogUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.AttendanceCorrectionLogScalarWhereInput;
    data: Prisma.XOR<Prisma.AttendanceCorrectionLogUpdateManyMutationInput, Prisma.AttendanceCorrectionLogUncheckedUpdateManyWithoutUserInput>;
};
export type AttendanceCorrectionLogScalarWhereInput = {
    AND?: Prisma.AttendanceCorrectionLogScalarWhereInput | Prisma.AttendanceCorrectionLogScalarWhereInput[];
    OR?: Prisma.AttendanceCorrectionLogScalarWhereInput[];
    NOT?: Prisma.AttendanceCorrectionLogScalarWhereInput | Prisma.AttendanceCorrectionLogScalarWhereInput[];
    id?: Prisma.IntFilter<"AttendanceCorrectionLog"> | number;
    nik?: Prisma.StringFilter<"AttendanceCorrectionLog"> | string;
    attendanceDate?: Prisma.DateTimeFilter<"AttendanceCorrectionLog"> | Date | string;
    sessionId?: Prisma.IntFilter<"AttendanceCorrectionLog"> | number;
    sessionVersionId?: Prisma.IntNullableFilter<"AttendanceCorrectionLog"> | number | null;
    attendanceId?: Prisma.IntNullableFilter<"AttendanceCorrectionLog"> | number | null;
    revision?: Prisma.IntFilter<"AttendanceCorrectionLog"> | number;
    previousStatus?: Prisma.StringFilter<"AttendanceCorrectionLog"> | string;
    newStatus?: Prisma.StringFilter<"AttendanceCorrectionLog"> | string;
    reason?: Prisma.StringFilter<"AttendanceCorrectionLog"> | string;
    correctedByAdminId?: Prisma.IntFilter<"AttendanceCorrectionLog"> | number;
    correctedByAdminUsername?: Prisma.StringFilter<"AttendanceCorrectionLog"> | string;
    correctedAt?: Prisma.DateTimeFilter<"AttendanceCorrectionLog"> | Date | string;
};
export type AttendanceCorrectionLogCreateWithoutCorrectedByAdminInput = {
    revision: number;
    previousStatus: string;
    newStatus: string;
    reason: string;
    correctedByAdminUsername: string;
    correctedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutAttendanceCorrectionsInput;
    session: Prisma.AttendanceSessionDefinitionCreateNestedOneWithoutCorrectionLogsInput;
    sessionVersion?: Prisma.AttendanceSessionVersionCreateNestedOneWithoutCorrectionLogsInput;
    attendance?: Prisma.AttendanceCreateNestedOneWithoutCorrectionLogsInput;
};
export type AttendanceCorrectionLogUncheckedCreateWithoutCorrectedByAdminInput = {
    id?: number;
    nik: string;
    attendanceDate: Date | string;
    sessionId: number;
    sessionVersionId?: number | null;
    attendanceId?: number | null;
    revision: number;
    previousStatus: string;
    newStatus: string;
    reason: string;
    correctedByAdminUsername: string;
    correctedAt?: Date | string;
};
export type AttendanceCorrectionLogCreateOrConnectWithoutCorrectedByAdminInput = {
    where: Prisma.AttendanceCorrectionLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendanceCorrectionLogCreateWithoutCorrectedByAdminInput, Prisma.AttendanceCorrectionLogUncheckedCreateWithoutCorrectedByAdminInput>;
};
export type AttendanceCorrectionLogCreateManyCorrectedByAdminInputEnvelope = {
    data: Prisma.AttendanceCorrectionLogCreateManyCorrectedByAdminInput | Prisma.AttendanceCorrectionLogCreateManyCorrectedByAdminInput[];
    skipDuplicates?: boolean;
};
export type AttendanceCorrectionLogUpsertWithWhereUniqueWithoutCorrectedByAdminInput = {
    where: Prisma.AttendanceCorrectionLogWhereUniqueInput;
    update: Prisma.XOR<Prisma.AttendanceCorrectionLogUpdateWithoutCorrectedByAdminInput, Prisma.AttendanceCorrectionLogUncheckedUpdateWithoutCorrectedByAdminInput>;
    create: Prisma.XOR<Prisma.AttendanceCorrectionLogCreateWithoutCorrectedByAdminInput, Prisma.AttendanceCorrectionLogUncheckedCreateWithoutCorrectedByAdminInput>;
};
export type AttendanceCorrectionLogUpdateWithWhereUniqueWithoutCorrectedByAdminInput = {
    where: Prisma.AttendanceCorrectionLogWhereUniqueInput;
    data: Prisma.XOR<Prisma.AttendanceCorrectionLogUpdateWithoutCorrectedByAdminInput, Prisma.AttendanceCorrectionLogUncheckedUpdateWithoutCorrectedByAdminInput>;
};
export type AttendanceCorrectionLogUpdateManyWithWhereWithoutCorrectedByAdminInput = {
    where: Prisma.AttendanceCorrectionLogScalarWhereInput;
    data: Prisma.XOR<Prisma.AttendanceCorrectionLogUpdateManyMutationInput, Prisma.AttendanceCorrectionLogUncheckedUpdateManyWithoutCorrectedByAdminInput>;
};
export type AttendanceCorrectionLogCreateWithoutAttendanceInput = {
    revision: number;
    previousStatus: string;
    newStatus: string;
    reason: string;
    correctedByAdminUsername: string;
    correctedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutAttendanceCorrectionsInput;
    session: Prisma.AttendanceSessionDefinitionCreateNestedOneWithoutCorrectionLogsInput;
    sessionVersion?: Prisma.AttendanceSessionVersionCreateNestedOneWithoutCorrectionLogsInput;
    correctedByAdmin: Prisma.AdminCreateNestedOneWithoutAttendanceCorrectionsInput;
};
export type AttendanceCorrectionLogUncheckedCreateWithoutAttendanceInput = {
    id?: number;
    sessionVersionId?: number | null;
    revision: number;
    previousStatus: string;
    newStatus: string;
    reason: string;
    correctedByAdminId: number;
    correctedByAdminUsername: string;
    correctedAt?: Date | string;
};
export type AttendanceCorrectionLogCreateOrConnectWithoutAttendanceInput = {
    where: Prisma.AttendanceCorrectionLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendanceCorrectionLogCreateWithoutAttendanceInput, Prisma.AttendanceCorrectionLogUncheckedCreateWithoutAttendanceInput>;
};
export type AttendanceCorrectionLogCreateManyAttendanceInputEnvelope = {
    data: Prisma.AttendanceCorrectionLogCreateManyAttendanceInput | Prisma.AttendanceCorrectionLogCreateManyAttendanceInput[];
    skipDuplicates?: boolean;
};
export type AttendanceCorrectionLogUpsertWithWhereUniqueWithoutAttendanceInput = {
    where: Prisma.AttendanceCorrectionLogWhereUniqueInput;
    update: Prisma.XOR<Prisma.AttendanceCorrectionLogUpdateWithoutAttendanceInput, Prisma.AttendanceCorrectionLogUncheckedUpdateWithoutAttendanceInput>;
    create: Prisma.XOR<Prisma.AttendanceCorrectionLogCreateWithoutAttendanceInput, Prisma.AttendanceCorrectionLogUncheckedCreateWithoutAttendanceInput>;
};
export type AttendanceCorrectionLogUpdateWithWhereUniqueWithoutAttendanceInput = {
    where: Prisma.AttendanceCorrectionLogWhereUniqueInput;
    data: Prisma.XOR<Prisma.AttendanceCorrectionLogUpdateWithoutAttendanceInput, Prisma.AttendanceCorrectionLogUncheckedUpdateWithoutAttendanceInput>;
};
export type AttendanceCorrectionLogUpdateManyWithWhereWithoutAttendanceInput = {
    where: Prisma.AttendanceCorrectionLogScalarWhereInput;
    data: Prisma.XOR<Prisma.AttendanceCorrectionLogUpdateManyMutationInput, Prisma.AttendanceCorrectionLogUncheckedUpdateManyWithoutAttendanceInput>;
};
export type AttendanceCorrectionLogCreateWithoutSessionInput = {
    revision: number;
    previousStatus: string;
    newStatus: string;
    reason: string;
    correctedByAdminUsername: string;
    correctedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutAttendanceCorrectionsInput;
    sessionVersion?: Prisma.AttendanceSessionVersionCreateNestedOneWithoutCorrectionLogsInput;
    attendance?: Prisma.AttendanceCreateNestedOneWithoutCorrectionLogsInput;
    correctedByAdmin: Prisma.AdminCreateNestedOneWithoutAttendanceCorrectionsInput;
};
export type AttendanceCorrectionLogUncheckedCreateWithoutSessionInput = {
    id?: number;
    nik: string;
    attendanceDate: Date | string;
    sessionVersionId?: number | null;
    attendanceId?: number | null;
    revision: number;
    previousStatus: string;
    newStatus: string;
    reason: string;
    correctedByAdminId: number;
    correctedByAdminUsername: string;
    correctedAt?: Date | string;
};
export type AttendanceCorrectionLogCreateOrConnectWithoutSessionInput = {
    where: Prisma.AttendanceCorrectionLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendanceCorrectionLogCreateWithoutSessionInput, Prisma.AttendanceCorrectionLogUncheckedCreateWithoutSessionInput>;
};
export type AttendanceCorrectionLogCreateManySessionInputEnvelope = {
    data: Prisma.AttendanceCorrectionLogCreateManySessionInput | Prisma.AttendanceCorrectionLogCreateManySessionInput[];
    skipDuplicates?: boolean;
};
export type AttendanceCorrectionLogUpsertWithWhereUniqueWithoutSessionInput = {
    where: Prisma.AttendanceCorrectionLogWhereUniqueInput;
    update: Prisma.XOR<Prisma.AttendanceCorrectionLogUpdateWithoutSessionInput, Prisma.AttendanceCorrectionLogUncheckedUpdateWithoutSessionInput>;
    create: Prisma.XOR<Prisma.AttendanceCorrectionLogCreateWithoutSessionInput, Prisma.AttendanceCorrectionLogUncheckedCreateWithoutSessionInput>;
};
export type AttendanceCorrectionLogUpdateWithWhereUniqueWithoutSessionInput = {
    where: Prisma.AttendanceCorrectionLogWhereUniqueInput;
    data: Prisma.XOR<Prisma.AttendanceCorrectionLogUpdateWithoutSessionInput, Prisma.AttendanceCorrectionLogUncheckedUpdateWithoutSessionInput>;
};
export type AttendanceCorrectionLogUpdateManyWithWhereWithoutSessionInput = {
    where: Prisma.AttendanceCorrectionLogScalarWhereInput;
    data: Prisma.XOR<Prisma.AttendanceCorrectionLogUpdateManyMutationInput, Prisma.AttendanceCorrectionLogUncheckedUpdateManyWithoutSessionInput>;
};
export type AttendanceCorrectionLogCreateWithoutSessionVersionInput = {
    revision: number;
    previousStatus: string;
    newStatus: string;
    reason: string;
    correctedByAdminUsername: string;
    correctedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutAttendanceCorrectionsInput;
    session: Prisma.AttendanceSessionDefinitionCreateNestedOneWithoutCorrectionLogsInput;
    attendance?: Prisma.AttendanceCreateNestedOneWithoutCorrectionLogsInput;
    correctedByAdmin: Prisma.AdminCreateNestedOneWithoutAttendanceCorrectionsInput;
};
export type AttendanceCorrectionLogUncheckedCreateWithoutSessionVersionInput = {
    id?: number;
    nik: string;
    attendanceDate: Date | string;
    attendanceId?: number | null;
    revision: number;
    previousStatus: string;
    newStatus: string;
    reason: string;
    correctedByAdminId: number;
    correctedByAdminUsername: string;
    correctedAt?: Date | string;
};
export type AttendanceCorrectionLogCreateOrConnectWithoutSessionVersionInput = {
    where: Prisma.AttendanceCorrectionLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendanceCorrectionLogCreateWithoutSessionVersionInput, Prisma.AttendanceCorrectionLogUncheckedCreateWithoutSessionVersionInput>;
};
export type AttendanceCorrectionLogCreateManySessionVersionInputEnvelope = {
    data: Prisma.AttendanceCorrectionLogCreateManySessionVersionInput | Prisma.AttendanceCorrectionLogCreateManySessionVersionInput[];
    skipDuplicates?: boolean;
};
export type AttendanceCorrectionLogUpsertWithWhereUniqueWithoutSessionVersionInput = {
    where: Prisma.AttendanceCorrectionLogWhereUniqueInput;
    update: Prisma.XOR<Prisma.AttendanceCorrectionLogUpdateWithoutSessionVersionInput, Prisma.AttendanceCorrectionLogUncheckedUpdateWithoutSessionVersionInput>;
    create: Prisma.XOR<Prisma.AttendanceCorrectionLogCreateWithoutSessionVersionInput, Prisma.AttendanceCorrectionLogUncheckedCreateWithoutSessionVersionInput>;
};
export type AttendanceCorrectionLogUpdateWithWhereUniqueWithoutSessionVersionInput = {
    where: Prisma.AttendanceCorrectionLogWhereUniqueInput;
    data: Prisma.XOR<Prisma.AttendanceCorrectionLogUpdateWithoutSessionVersionInput, Prisma.AttendanceCorrectionLogUncheckedUpdateWithoutSessionVersionInput>;
};
export type AttendanceCorrectionLogUpdateManyWithWhereWithoutSessionVersionInput = {
    where: Prisma.AttendanceCorrectionLogScalarWhereInput;
    data: Prisma.XOR<Prisma.AttendanceCorrectionLogUpdateManyMutationInput, Prisma.AttendanceCorrectionLogUncheckedUpdateManyWithoutSessionVersionInput>;
};
export type AttendanceCorrectionLogCreateManyUserInput = {
    id?: number;
    attendanceDate: Date | string;
    sessionId: number;
    sessionVersionId?: number | null;
    attendanceId?: number | null;
    revision: number;
    previousStatus: string;
    newStatus: string;
    reason: string;
    correctedByAdminId: number;
    correctedByAdminUsername: string;
    correctedAt?: Date | string;
};
export type AttendanceCorrectionLogUpdateWithoutUserInput = {
    revision?: Prisma.IntFieldUpdateOperationsInput | number;
    previousStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    newStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    correctedByAdminUsername?: Prisma.StringFieldUpdateOperationsInput | string;
    correctedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    session?: Prisma.AttendanceSessionDefinitionUpdateOneRequiredWithoutCorrectionLogsNestedInput;
    sessionVersion?: Prisma.AttendanceSessionVersionUpdateOneWithoutCorrectionLogsNestedInput;
    attendance?: Prisma.AttendanceUpdateOneWithoutCorrectionLogsNestedInput;
    correctedByAdmin?: Prisma.AdminUpdateOneRequiredWithoutAttendanceCorrectionsNestedInput;
};
export type AttendanceCorrectionLogUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    attendanceDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessionId?: Prisma.IntFieldUpdateOperationsInput | number;
    sessionVersionId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    attendanceId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    revision?: Prisma.IntFieldUpdateOperationsInput | number;
    previousStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    newStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    correctedByAdminId?: Prisma.IntFieldUpdateOperationsInput | number;
    correctedByAdminUsername?: Prisma.StringFieldUpdateOperationsInput | string;
    correctedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceCorrectionLogUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    attendanceDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessionId?: Prisma.IntFieldUpdateOperationsInput | number;
    sessionVersionId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    attendanceId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    revision?: Prisma.IntFieldUpdateOperationsInput | number;
    previousStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    newStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    correctedByAdminId?: Prisma.IntFieldUpdateOperationsInput | number;
    correctedByAdminUsername?: Prisma.StringFieldUpdateOperationsInput | string;
    correctedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceCorrectionLogCreateManyCorrectedByAdminInput = {
    id?: number;
    nik: string;
    attendanceDate: Date | string;
    sessionId: number;
    sessionVersionId?: number | null;
    attendanceId?: number | null;
    revision: number;
    previousStatus: string;
    newStatus: string;
    reason: string;
    correctedByAdminUsername: string;
    correctedAt?: Date | string;
};
export type AttendanceCorrectionLogUpdateWithoutCorrectedByAdminInput = {
    revision?: Prisma.IntFieldUpdateOperationsInput | number;
    previousStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    newStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    correctedByAdminUsername?: Prisma.StringFieldUpdateOperationsInput | string;
    correctedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutAttendanceCorrectionsNestedInput;
    session?: Prisma.AttendanceSessionDefinitionUpdateOneRequiredWithoutCorrectionLogsNestedInput;
    sessionVersion?: Prisma.AttendanceSessionVersionUpdateOneWithoutCorrectionLogsNestedInput;
    attendance?: Prisma.AttendanceUpdateOneWithoutCorrectionLogsNestedInput;
};
export type AttendanceCorrectionLogUncheckedUpdateWithoutCorrectedByAdminInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nik?: Prisma.StringFieldUpdateOperationsInput | string;
    attendanceDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessionId?: Prisma.IntFieldUpdateOperationsInput | number;
    sessionVersionId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    attendanceId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    revision?: Prisma.IntFieldUpdateOperationsInput | number;
    previousStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    newStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    correctedByAdminUsername?: Prisma.StringFieldUpdateOperationsInput | string;
    correctedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceCorrectionLogUncheckedUpdateManyWithoutCorrectedByAdminInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nik?: Prisma.StringFieldUpdateOperationsInput | string;
    attendanceDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessionId?: Prisma.IntFieldUpdateOperationsInput | number;
    sessionVersionId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    attendanceId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    revision?: Prisma.IntFieldUpdateOperationsInput | number;
    previousStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    newStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    correctedByAdminUsername?: Prisma.StringFieldUpdateOperationsInput | string;
    correctedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceCorrectionLogCreateManyAttendanceInput = {
    id?: number;
    sessionVersionId?: number | null;
    revision: number;
    previousStatus: string;
    newStatus: string;
    reason: string;
    correctedByAdminId: number;
    correctedByAdminUsername: string;
    correctedAt?: Date | string;
};
export type AttendanceCorrectionLogUpdateWithoutAttendanceInput = {
    revision?: Prisma.IntFieldUpdateOperationsInput | number;
    previousStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    newStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    correctedByAdminUsername?: Prisma.StringFieldUpdateOperationsInput | string;
    correctedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutAttendanceCorrectionsNestedInput;
    session?: Prisma.AttendanceSessionDefinitionUpdateOneRequiredWithoutCorrectionLogsNestedInput;
    sessionVersion?: Prisma.AttendanceSessionVersionUpdateOneWithoutCorrectionLogsNestedInput;
    correctedByAdmin?: Prisma.AdminUpdateOneRequiredWithoutAttendanceCorrectionsNestedInput;
};
export type AttendanceCorrectionLogUncheckedUpdateWithoutAttendanceInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    sessionVersionId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    revision?: Prisma.IntFieldUpdateOperationsInput | number;
    previousStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    newStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    correctedByAdminId?: Prisma.IntFieldUpdateOperationsInput | number;
    correctedByAdminUsername?: Prisma.StringFieldUpdateOperationsInput | string;
    correctedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceCorrectionLogUncheckedUpdateManyWithoutAttendanceInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    sessionVersionId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    revision?: Prisma.IntFieldUpdateOperationsInput | number;
    previousStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    newStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    correctedByAdminId?: Prisma.IntFieldUpdateOperationsInput | number;
    correctedByAdminUsername?: Prisma.StringFieldUpdateOperationsInput | string;
    correctedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceCorrectionLogCreateManySessionInput = {
    id?: number;
    nik: string;
    attendanceDate: Date | string;
    sessionVersionId?: number | null;
    attendanceId?: number | null;
    revision: number;
    previousStatus: string;
    newStatus: string;
    reason: string;
    correctedByAdminId: number;
    correctedByAdminUsername: string;
    correctedAt?: Date | string;
};
export type AttendanceCorrectionLogUpdateWithoutSessionInput = {
    revision?: Prisma.IntFieldUpdateOperationsInput | number;
    previousStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    newStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    correctedByAdminUsername?: Prisma.StringFieldUpdateOperationsInput | string;
    correctedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutAttendanceCorrectionsNestedInput;
    sessionVersion?: Prisma.AttendanceSessionVersionUpdateOneWithoutCorrectionLogsNestedInput;
    attendance?: Prisma.AttendanceUpdateOneWithoutCorrectionLogsNestedInput;
    correctedByAdmin?: Prisma.AdminUpdateOneRequiredWithoutAttendanceCorrectionsNestedInput;
};
export type AttendanceCorrectionLogUncheckedUpdateWithoutSessionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nik?: Prisma.StringFieldUpdateOperationsInput | string;
    attendanceDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessionVersionId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    attendanceId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    revision?: Prisma.IntFieldUpdateOperationsInput | number;
    previousStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    newStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    correctedByAdminId?: Prisma.IntFieldUpdateOperationsInput | number;
    correctedByAdminUsername?: Prisma.StringFieldUpdateOperationsInput | string;
    correctedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceCorrectionLogUncheckedUpdateManyWithoutSessionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nik?: Prisma.StringFieldUpdateOperationsInput | string;
    attendanceDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessionVersionId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    attendanceId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    revision?: Prisma.IntFieldUpdateOperationsInput | number;
    previousStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    newStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    correctedByAdminId?: Prisma.IntFieldUpdateOperationsInput | number;
    correctedByAdminUsername?: Prisma.StringFieldUpdateOperationsInput | string;
    correctedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceCorrectionLogCreateManySessionVersionInput = {
    id?: number;
    nik: string;
    attendanceDate: Date | string;
    attendanceId?: number | null;
    revision: number;
    previousStatus: string;
    newStatus: string;
    reason: string;
    correctedByAdminId: number;
    correctedByAdminUsername: string;
    correctedAt?: Date | string;
};
export type AttendanceCorrectionLogUpdateWithoutSessionVersionInput = {
    revision?: Prisma.IntFieldUpdateOperationsInput | number;
    previousStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    newStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    correctedByAdminUsername?: Prisma.StringFieldUpdateOperationsInput | string;
    correctedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutAttendanceCorrectionsNestedInput;
    session?: Prisma.AttendanceSessionDefinitionUpdateOneRequiredWithoutCorrectionLogsNestedInput;
    attendance?: Prisma.AttendanceUpdateOneWithoutCorrectionLogsNestedInput;
    correctedByAdmin?: Prisma.AdminUpdateOneRequiredWithoutAttendanceCorrectionsNestedInput;
};
export type AttendanceCorrectionLogUncheckedUpdateWithoutSessionVersionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nik?: Prisma.StringFieldUpdateOperationsInput | string;
    attendanceDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attendanceId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    revision?: Prisma.IntFieldUpdateOperationsInput | number;
    previousStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    newStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    correctedByAdminId?: Prisma.IntFieldUpdateOperationsInput | number;
    correctedByAdminUsername?: Prisma.StringFieldUpdateOperationsInput | string;
    correctedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceCorrectionLogUncheckedUpdateManyWithoutSessionVersionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nik?: Prisma.StringFieldUpdateOperationsInput | string;
    attendanceDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attendanceId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    revision?: Prisma.IntFieldUpdateOperationsInput | number;
    previousStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    newStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    correctedByAdminId?: Prisma.IntFieldUpdateOperationsInput | number;
    correctedByAdminUsername?: Prisma.StringFieldUpdateOperationsInput | string;
    correctedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceCorrectionLogSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nik?: boolean;
    attendanceDate?: boolean;
    sessionId?: boolean;
    sessionVersionId?: boolean;
    attendanceId?: boolean;
    revision?: boolean;
    previousStatus?: boolean;
    newStatus?: boolean;
    reason?: boolean;
    correctedByAdminId?: boolean;
    correctedByAdminUsername?: boolean;
    correctedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    session?: boolean | Prisma.AttendanceSessionDefinitionDefaultArgs<ExtArgs>;
    sessionVersion?: boolean | Prisma.AttendanceCorrectionLog$sessionVersionArgs<ExtArgs>;
    attendance?: boolean | Prisma.AttendanceCorrectionLog$attendanceArgs<ExtArgs>;
    correctedByAdmin?: boolean | Prisma.AdminDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["attendanceCorrectionLog"]>;
export type AttendanceCorrectionLogSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nik?: boolean;
    attendanceDate?: boolean;
    sessionId?: boolean;
    sessionVersionId?: boolean;
    attendanceId?: boolean;
    revision?: boolean;
    previousStatus?: boolean;
    newStatus?: boolean;
    reason?: boolean;
    correctedByAdminId?: boolean;
    correctedByAdminUsername?: boolean;
    correctedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    session?: boolean | Prisma.AttendanceSessionDefinitionDefaultArgs<ExtArgs>;
    sessionVersion?: boolean | Prisma.AttendanceCorrectionLog$sessionVersionArgs<ExtArgs>;
    attendance?: boolean | Prisma.AttendanceCorrectionLog$attendanceArgs<ExtArgs>;
    correctedByAdmin?: boolean | Prisma.AdminDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["attendanceCorrectionLog"]>;
export type AttendanceCorrectionLogSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nik?: boolean;
    attendanceDate?: boolean;
    sessionId?: boolean;
    sessionVersionId?: boolean;
    attendanceId?: boolean;
    revision?: boolean;
    previousStatus?: boolean;
    newStatus?: boolean;
    reason?: boolean;
    correctedByAdminId?: boolean;
    correctedByAdminUsername?: boolean;
    correctedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    session?: boolean | Prisma.AttendanceSessionDefinitionDefaultArgs<ExtArgs>;
    sessionVersion?: boolean | Prisma.AttendanceCorrectionLog$sessionVersionArgs<ExtArgs>;
    attendance?: boolean | Prisma.AttendanceCorrectionLog$attendanceArgs<ExtArgs>;
    correctedByAdmin?: boolean | Prisma.AdminDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["attendanceCorrectionLog"]>;
export type AttendanceCorrectionLogSelectScalar = {
    id?: boolean;
    nik?: boolean;
    attendanceDate?: boolean;
    sessionId?: boolean;
    sessionVersionId?: boolean;
    attendanceId?: boolean;
    revision?: boolean;
    previousStatus?: boolean;
    newStatus?: boolean;
    reason?: boolean;
    correctedByAdminId?: boolean;
    correctedByAdminUsername?: boolean;
    correctedAt?: boolean;
};
export type AttendanceCorrectionLogOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nik" | "attendanceDate" | "sessionId" | "sessionVersionId" | "attendanceId" | "revision" | "previousStatus" | "newStatus" | "reason" | "correctedByAdminId" | "correctedByAdminUsername" | "correctedAt", ExtArgs["result"]["attendanceCorrectionLog"]>;
export type AttendanceCorrectionLogInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    session?: boolean | Prisma.AttendanceSessionDefinitionDefaultArgs<ExtArgs>;
    sessionVersion?: boolean | Prisma.AttendanceCorrectionLog$sessionVersionArgs<ExtArgs>;
    attendance?: boolean | Prisma.AttendanceCorrectionLog$attendanceArgs<ExtArgs>;
    correctedByAdmin?: boolean | Prisma.AdminDefaultArgs<ExtArgs>;
};
export type AttendanceCorrectionLogIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    session?: boolean | Prisma.AttendanceSessionDefinitionDefaultArgs<ExtArgs>;
    sessionVersion?: boolean | Prisma.AttendanceCorrectionLog$sessionVersionArgs<ExtArgs>;
    attendance?: boolean | Prisma.AttendanceCorrectionLog$attendanceArgs<ExtArgs>;
    correctedByAdmin?: boolean | Prisma.AdminDefaultArgs<ExtArgs>;
};
export type AttendanceCorrectionLogIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    session?: boolean | Prisma.AttendanceSessionDefinitionDefaultArgs<ExtArgs>;
    sessionVersion?: boolean | Prisma.AttendanceCorrectionLog$sessionVersionArgs<ExtArgs>;
    attendance?: boolean | Prisma.AttendanceCorrectionLog$attendanceArgs<ExtArgs>;
    correctedByAdmin?: boolean | Prisma.AdminDefaultArgs<ExtArgs>;
};
export type $AttendanceCorrectionLogPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AttendanceCorrectionLog";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        session: Prisma.$AttendanceSessionDefinitionPayload<ExtArgs>;
        sessionVersion: Prisma.$AttendanceSessionVersionPayload<ExtArgs> | null;
        attendance: Prisma.$AttendancePayload<ExtArgs> | null;
        correctedByAdmin: Prisma.$AdminPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nik: string;
        attendanceDate: Date;
        sessionId: number;
        sessionVersionId: number | null;
        attendanceId: number | null;
        revision: number;
        previousStatus: string;
        newStatus: string;
        reason: string;
        correctedByAdminId: number;
        correctedByAdminUsername: string;
        correctedAt: Date;
    }, ExtArgs["result"]["attendanceCorrectionLog"]>;
    composites: {};
};
export type AttendanceCorrectionLogGetPayload<S extends boolean | null | undefined | AttendanceCorrectionLogDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AttendanceCorrectionLogPayload, S>;
export type AttendanceCorrectionLogCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AttendanceCorrectionLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AttendanceCorrectionLogCountAggregateInputType | true;
};
export interface AttendanceCorrectionLogDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AttendanceCorrectionLog'];
        meta: {
            name: 'AttendanceCorrectionLog';
        };
    };
    /**
     * Find zero or one AttendanceCorrectionLog that matches the filter.
     * @param {AttendanceCorrectionLogFindUniqueArgs} args - Arguments to find a AttendanceCorrectionLog
     * @example
     * // Get one AttendanceCorrectionLog
     * const attendanceCorrectionLog = await prisma.attendanceCorrectionLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceCorrectionLogFindUniqueArgs>(args: Prisma.SelectSubset<T, AttendanceCorrectionLogFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AttendanceCorrectionLogClient<runtime.Types.Result.GetResult<Prisma.$AttendanceCorrectionLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one AttendanceCorrectionLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceCorrectionLogFindUniqueOrThrowArgs} args - Arguments to find a AttendanceCorrectionLog
     * @example
     * // Get one AttendanceCorrectionLog
     * const attendanceCorrectionLog = await prisma.attendanceCorrectionLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceCorrectionLogFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AttendanceCorrectionLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AttendanceCorrectionLogClient<runtime.Types.Result.GetResult<Prisma.$AttendanceCorrectionLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AttendanceCorrectionLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceCorrectionLogFindFirstArgs} args - Arguments to find a AttendanceCorrectionLog
     * @example
     * // Get one AttendanceCorrectionLog
     * const attendanceCorrectionLog = await prisma.attendanceCorrectionLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceCorrectionLogFindFirstArgs>(args?: Prisma.SelectSubset<T, AttendanceCorrectionLogFindFirstArgs<ExtArgs>>): Prisma.Prisma__AttendanceCorrectionLogClient<runtime.Types.Result.GetResult<Prisma.$AttendanceCorrectionLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AttendanceCorrectionLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceCorrectionLogFindFirstOrThrowArgs} args - Arguments to find a AttendanceCorrectionLog
     * @example
     * // Get one AttendanceCorrectionLog
     * const attendanceCorrectionLog = await prisma.attendanceCorrectionLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceCorrectionLogFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AttendanceCorrectionLogFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AttendanceCorrectionLogClient<runtime.Types.Result.GetResult<Prisma.$AttendanceCorrectionLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more AttendanceCorrectionLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceCorrectionLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AttendanceCorrectionLogs
     * const attendanceCorrectionLogs = await prisma.attendanceCorrectionLog.findMany()
     *
     * // Get first 10 AttendanceCorrectionLogs
     * const attendanceCorrectionLogs = await prisma.attendanceCorrectionLog.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const attendanceCorrectionLogWithIdOnly = await prisma.attendanceCorrectionLog.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AttendanceCorrectionLogFindManyArgs>(args?: Prisma.SelectSubset<T, AttendanceCorrectionLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceCorrectionLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a AttendanceCorrectionLog.
     * @param {AttendanceCorrectionLogCreateArgs} args - Arguments to create a AttendanceCorrectionLog.
     * @example
     * // Create one AttendanceCorrectionLog
     * const AttendanceCorrectionLog = await prisma.attendanceCorrectionLog.create({
     *   data: {
     *     // ... data to create a AttendanceCorrectionLog
     *   }
     * })
     *
     */
    create<T extends AttendanceCorrectionLogCreateArgs>(args: Prisma.SelectSubset<T, AttendanceCorrectionLogCreateArgs<ExtArgs>>): Prisma.Prisma__AttendanceCorrectionLogClient<runtime.Types.Result.GetResult<Prisma.$AttendanceCorrectionLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many AttendanceCorrectionLogs.
     * @param {AttendanceCorrectionLogCreateManyArgs} args - Arguments to create many AttendanceCorrectionLogs.
     * @example
     * // Create many AttendanceCorrectionLogs
     * const attendanceCorrectionLog = await prisma.attendanceCorrectionLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AttendanceCorrectionLogCreateManyArgs>(args?: Prisma.SelectSubset<T, AttendanceCorrectionLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many AttendanceCorrectionLogs and returns the data saved in the database.
     * @param {AttendanceCorrectionLogCreateManyAndReturnArgs} args - Arguments to create many AttendanceCorrectionLogs.
     * @example
     * // Create many AttendanceCorrectionLogs
     * const attendanceCorrectionLog = await prisma.attendanceCorrectionLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many AttendanceCorrectionLogs and only return the `id`
     * const attendanceCorrectionLogWithIdOnly = await prisma.attendanceCorrectionLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AttendanceCorrectionLogCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AttendanceCorrectionLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceCorrectionLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a AttendanceCorrectionLog.
     * @param {AttendanceCorrectionLogDeleteArgs} args - Arguments to delete one AttendanceCorrectionLog.
     * @example
     * // Delete one AttendanceCorrectionLog
     * const AttendanceCorrectionLog = await prisma.attendanceCorrectionLog.delete({
     *   where: {
     *     // ... filter to delete one AttendanceCorrectionLog
     *   }
     * })
     *
     */
    delete<T extends AttendanceCorrectionLogDeleteArgs>(args: Prisma.SelectSubset<T, AttendanceCorrectionLogDeleteArgs<ExtArgs>>): Prisma.Prisma__AttendanceCorrectionLogClient<runtime.Types.Result.GetResult<Prisma.$AttendanceCorrectionLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one AttendanceCorrectionLog.
     * @param {AttendanceCorrectionLogUpdateArgs} args - Arguments to update one AttendanceCorrectionLog.
     * @example
     * // Update one AttendanceCorrectionLog
     * const attendanceCorrectionLog = await prisma.attendanceCorrectionLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AttendanceCorrectionLogUpdateArgs>(args: Prisma.SelectSubset<T, AttendanceCorrectionLogUpdateArgs<ExtArgs>>): Prisma.Prisma__AttendanceCorrectionLogClient<runtime.Types.Result.GetResult<Prisma.$AttendanceCorrectionLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more AttendanceCorrectionLogs.
     * @param {AttendanceCorrectionLogDeleteManyArgs} args - Arguments to filter AttendanceCorrectionLogs to delete.
     * @example
     * // Delete a few AttendanceCorrectionLogs
     * const { count } = await prisma.attendanceCorrectionLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AttendanceCorrectionLogDeleteManyArgs>(args?: Prisma.SelectSubset<T, AttendanceCorrectionLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more AttendanceCorrectionLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceCorrectionLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AttendanceCorrectionLogs
     * const attendanceCorrectionLog = await prisma.attendanceCorrectionLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AttendanceCorrectionLogUpdateManyArgs>(args: Prisma.SelectSubset<T, AttendanceCorrectionLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more AttendanceCorrectionLogs and returns the data updated in the database.
     * @param {AttendanceCorrectionLogUpdateManyAndReturnArgs} args - Arguments to update many AttendanceCorrectionLogs.
     * @example
     * // Update many AttendanceCorrectionLogs
     * const attendanceCorrectionLog = await prisma.attendanceCorrectionLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more AttendanceCorrectionLogs and only return the `id`
     * const attendanceCorrectionLogWithIdOnly = await prisma.attendanceCorrectionLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends AttendanceCorrectionLogUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AttendanceCorrectionLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceCorrectionLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one AttendanceCorrectionLog.
     * @param {AttendanceCorrectionLogUpsertArgs} args - Arguments to update or create a AttendanceCorrectionLog.
     * @example
     * // Update or create a AttendanceCorrectionLog
     * const attendanceCorrectionLog = await prisma.attendanceCorrectionLog.upsert({
     *   create: {
     *     // ... data to create a AttendanceCorrectionLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AttendanceCorrectionLog we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceCorrectionLogUpsertArgs>(args: Prisma.SelectSubset<T, AttendanceCorrectionLogUpsertArgs<ExtArgs>>): Prisma.Prisma__AttendanceCorrectionLogClient<runtime.Types.Result.GetResult<Prisma.$AttendanceCorrectionLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of AttendanceCorrectionLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceCorrectionLogCountArgs} args - Arguments to filter AttendanceCorrectionLogs to count.
     * @example
     * // Count the number of AttendanceCorrectionLogs
     * const count = await prisma.attendanceCorrectionLog.count({
     *   where: {
     *     // ... the filter for the AttendanceCorrectionLogs we want to count
     *   }
     * })
    **/
    count<T extends AttendanceCorrectionLogCountArgs>(args?: Prisma.Subset<T, AttendanceCorrectionLogCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AttendanceCorrectionLogCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a AttendanceCorrectionLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceCorrectionLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttendanceCorrectionLogAggregateArgs>(args: Prisma.Subset<T, AttendanceCorrectionLogAggregateArgs>): Prisma.PrismaPromise<GetAttendanceCorrectionLogAggregateType<T>>;
    /**
     * Group by AttendanceCorrectionLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceCorrectionLogGroupByArgs} args - Group by arguments.
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
    groupBy<T extends AttendanceCorrectionLogGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AttendanceCorrectionLogGroupByArgs['orderBy'];
    } : {
        orderBy?: AttendanceCorrectionLogGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AttendanceCorrectionLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceCorrectionLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the AttendanceCorrectionLog model
     */
    readonly fields: AttendanceCorrectionLogFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for AttendanceCorrectionLog.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__AttendanceCorrectionLogClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    session<T extends Prisma.AttendanceSessionDefinitionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AttendanceSessionDefinitionDefaultArgs<ExtArgs>>): Prisma.Prisma__AttendanceSessionDefinitionClient<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionDefinitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    sessionVersion<T extends Prisma.AttendanceCorrectionLog$sessionVersionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AttendanceCorrectionLog$sessionVersionArgs<ExtArgs>>): Prisma.Prisma__AttendanceSessionVersionClient<runtime.Types.Result.GetResult<Prisma.$AttendanceSessionVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    attendance<T extends Prisma.AttendanceCorrectionLog$attendanceArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AttendanceCorrectionLog$attendanceArgs<ExtArgs>>): Prisma.Prisma__AttendanceClient<runtime.Types.Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    correctedByAdmin<T extends Prisma.AdminDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AdminDefaultArgs<ExtArgs>>): Prisma.Prisma__AdminClient<runtime.Types.Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the AttendanceCorrectionLog model
 */
export interface AttendanceCorrectionLogFieldRefs {
    readonly id: Prisma.FieldRef<"AttendanceCorrectionLog", 'Int'>;
    readonly nik: Prisma.FieldRef<"AttendanceCorrectionLog", 'String'>;
    readonly attendanceDate: Prisma.FieldRef<"AttendanceCorrectionLog", 'DateTime'>;
    readonly sessionId: Prisma.FieldRef<"AttendanceCorrectionLog", 'Int'>;
    readonly sessionVersionId: Prisma.FieldRef<"AttendanceCorrectionLog", 'Int'>;
    readonly attendanceId: Prisma.FieldRef<"AttendanceCorrectionLog", 'Int'>;
    readonly revision: Prisma.FieldRef<"AttendanceCorrectionLog", 'Int'>;
    readonly previousStatus: Prisma.FieldRef<"AttendanceCorrectionLog", 'String'>;
    readonly newStatus: Prisma.FieldRef<"AttendanceCorrectionLog", 'String'>;
    readonly reason: Prisma.FieldRef<"AttendanceCorrectionLog", 'String'>;
    readonly correctedByAdminId: Prisma.FieldRef<"AttendanceCorrectionLog", 'Int'>;
    readonly correctedByAdminUsername: Prisma.FieldRef<"AttendanceCorrectionLog", 'String'>;
    readonly correctedAt: Prisma.FieldRef<"AttendanceCorrectionLog", 'DateTime'>;
}
/**
 * AttendanceCorrectionLog findUnique
 */
export type AttendanceCorrectionLogFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which AttendanceCorrectionLog to fetch.
     */
    where: Prisma.AttendanceCorrectionLogWhereUniqueInput;
};
/**
 * AttendanceCorrectionLog findUniqueOrThrow
 */
export type AttendanceCorrectionLogFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which AttendanceCorrectionLog to fetch.
     */
    where: Prisma.AttendanceCorrectionLogWhereUniqueInput;
};
/**
 * AttendanceCorrectionLog findFirst
 */
export type AttendanceCorrectionLogFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which AttendanceCorrectionLog to fetch.
     */
    where?: Prisma.AttendanceCorrectionLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AttendanceCorrectionLogs to fetch.
     */
    orderBy?: Prisma.AttendanceCorrectionLogOrderByWithRelationInput | Prisma.AttendanceCorrectionLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AttendanceCorrectionLogs.
     */
    cursor?: Prisma.AttendanceCorrectionLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AttendanceCorrectionLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AttendanceCorrectionLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AttendanceCorrectionLogs.
     */
    distinct?: Prisma.AttendanceCorrectionLogScalarFieldEnum | Prisma.AttendanceCorrectionLogScalarFieldEnum[];
};
/**
 * AttendanceCorrectionLog findFirstOrThrow
 */
export type AttendanceCorrectionLogFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which AttendanceCorrectionLog to fetch.
     */
    where?: Prisma.AttendanceCorrectionLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AttendanceCorrectionLogs to fetch.
     */
    orderBy?: Prisma.AttendanceCorrectionLogOrderByWithRelationInput | Prisma.AttendanceCorrectionLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AttendanceCorrectionLogs.
     */
    cursor?: Prisma.AttendanceCorrectionLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AttendanceCorrectionLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AttendanceCorrectionLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AttendanceCorrectionLogs.
     */
    distinct?: Prisma.AttendanceCorrectionLogScalarFieldEnum | Prisma.AttendanceCorrectionLogScalarFieldEnum[];
};
/**
 * AttendanceCorrectionLog findMany
 */
export type AttendanceCorrectionLogFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which AttendanceCorrectionLogs to fetch.
     */
    where?: Prisma.AttendanceCorrectionLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AttendanceCorrectionLogs to fetch.
     */
    orderBy?: Prisma.AttendanceCorrectionLogOrderByWithRelationInput | Prisma.AttendanceCorrectionLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing AttendanceCorrectionLogs.
     */
    cursor?: Prisma.AttendanceCorrectionLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AttendanceCorrectionLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AttendanceCorrectionLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AttendanceCorrectionLogs.
     */
    distinct?: Prisma.AttendanceCorrectionLogScalarFieldEnum | Prisma.AttendanceCorrectionLogScalarFieldEnum[];
};
/**
 * AttendanceCorrectionLog create
 */
export type AttendanceCorrectionLogCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a AttendanceCorrectionLog.
     */
    data: Prisma.XOR<Prisma.AttendanceCorrectionLogCreateInput, Prisma.AttendanceCorrectionLogUncheckedCreateInput>;
};
/**
 * AttendanceCorrectionLog createMany
 */
export type AttendanceCorrectionLogCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many AttendanceCorrectionLogs.
     */
    data: Prisma.AttendanceCorrectionLogCreateManyInput | Prisma.AttendanceCorrectionLogCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * AttendanceCorrectionLog createManyAndReturn
 */
export type AttendanceCorrectionLogCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceCorrectionLog
     */
    select?: Prisma.AttendanceCorrectionLogSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AttendanceCorrectionLog
     */
    omit?: Prisma.AttendanceCorrectionLogOmit<ExtArgs> | null;
    /**
     * The data used to create many AttendanceCorrectionLogs.
     */
    data: Prisma.AttendanceCorrectionLogCreateManyInput | Prisma.AttendanceCorrectionLogCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AttendanceCorrectionLogIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * AttendanceCorrectionLog update
 */
export type AttendanceCorrectionLogUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a AttendanceCorrectionLog.
     */
    data: Prisma.XOR<Prisma.AttendanceCorrectionLogUpdateInput, Prisma.AttendanceCorrectionLogUncheckedUpdateInput>;
    /**
     * Choose, which AttendanceCorrectionLog to update.
     */
    where: Prisma.AttendanceCorrectionLogWhereUniqueInput;
};
/**
 * AttendanceCorrectionLog updateMany
 */
export type AttendanceCorrectionLogUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update AttendanceCorrectionLogs.
     */
    data: Prisma.XOR<Prisma.AttendanceCorrectionLogUpdateManyMutationInput, Prisma.AttendanceCorrectionLogUncheckedUpdateManyInput>;
    /**
     * Filter which AttendanceCorrectionLogs to update
     */
    where?: Prisma.AttendanceCorrectionLogWhereInput;
    /**
     * Limit how many AttendanceCorrectionLogs to update.
     */
    limit?: number;
};
/**
 * AttendanceCorrectionLog updateManyAndReturn
 */
export type AttendanceCorrectionLogUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceCorrectionLog
     */
    select?: Prisma.AttendanceCorrectionLogSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AttendanceCorrectionLog
     */
    omit?: Prisma.AttendanceCorrectionLogOmit<ExtArgs> | null;
    /**
     * The data used to update AttendanceCorrectionLogs.
     */
    data: Prisma.XOR<Prisma.AttendanceCorrectionLogUpdateManyMutationInput, Prisma.AttendanceCorrectionLogUncheckedUpdateManyInput>;
    /**
     * Filter which AttendanceCorrectionLogs to update
     */
    where?: Prisma.AttendanceCorrectionLogWhereInput;
    /**
     * Limit how many AttendanceCorrectionLogs to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AttendanceCorrectionLogIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * AttendanceCorrectionLog upsert
 */
export type AttendanceCorrectionLogUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the AttendanceCorrectionLog to update in case it exists.
     */
    where: Prisma.AttendanceCorrectionLogWhereUniqueInput;
    /**
     * In case the AttendanceCorrectionLog found by the `where` argument doesn't exist, create a new AttendanceCorrectionLog with this data.
     */
    create: Prisma.XOR<Prisma.AttendanceCorrectionLogCreateInput, Prisma.AttendanceCorrectionLogUncheckedCreateInput>;
    /**
     * In case the AttendanceCorrectionLog was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.AttendanceCorrectionLogUpdateInput, Prisma.AttendanceCorrectionLogUncheckedUpdateInput>;
};
/**
 * AttendanceCorrectionLog delete
 */
export type AttendanceCorrectionLogDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which AttendanceCorrectionLog to delete.
     */
    where: Prisma.AttendanceCorrectionLogWhereUniqueInput;
};
/**
 * AttendanceCorrectionLog deleteMany
 */
export type AttendanceCorrectionLogDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AttendanceCorrectionLogs to delete
     */
    where?: Prisma.AttendanceCorrectionLogWhereInput;
    /**
     * Limit how many AttendanceCorrectionLogs to delete.
     */
    limit?: number;
};
/**
 * AttendanceCorrectionLog.sessionVersion
 */
export type AttendanceCorrectionLog$sessionVersionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
/**
 * AttendanceCorrectionLog.attendance
 */
export type AttendanceCorrectionLog$attendanceArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
/**
 * AttendanceCorrectionLog without action
 */
export type AttendanceCorrectionLogDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
