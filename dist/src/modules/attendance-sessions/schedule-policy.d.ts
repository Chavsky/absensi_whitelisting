export declare const JAKARTA_TIME_ZONE = "Asia/Jakarta";
export interface DayScheduleValue {
    isoWeekday: number;
    isEnabled: boolean;
    startTime: Date | string;
    endTime: Date | string;
}
export interface SessionTimeRange {
    startTime: Date | string;
    endTime: Date | string;
}
export interface SessionTimeConfiguration {
    startTime?: Date | string | null;
    endTime?: Date | string | null;
    daySchedules?: DayScheduleValue[];
}
export declare function parseClockMinutes(value: string): number | null;
export declare function clockValueMinutes(value: Date | string): number;
export declare function formatClockTime(value: Date | string): string;
export declare function clockToDate(value: string): Date;
export declare function jakartaDateKey(instant: Date): string;
export declare function jakartaBusinessDate(instant: Date): Date;
export declare function nextSessionEffectiveDate(today: Date, previous?: Date | null): Date;
export declare function isSessionEnabledByConfiguration(disabledAt: Date | null | undefined, enabledFrom: Date | null | undefined, businessDate: Date): boolean;
export declare function isoWeekdayForDate(date: Date): number;
export declare function isJakartaWorkday(date: Date): boolean;
export declare function resolveSessionTimeRange(version: SessionTimeConfiguration, businessDate: Date): SessionTimeRange | null;
export declare function jakartaClockMinutes(instant: Date): number;
export declare function isWithinTimeRange(instant: Date, range: SessionTimeRange): boolean;
export declare function isTimeRangeFinished(instant: Date, date: Date, range: SessionTimeRange): boolean;
export declare function timeRangesOverlap(first: SessionTimeRange, second: SessionTimeRange): boolean;
export declare function validateSessionTime(startTime: string, endTime: string): string | null;
