export const JAKARTA_TIME_ZONE = "Asia/Jakarta";
export function parseClockMinutes(value) {
    const match = /^([01]\d|2[0-3]):([0-5]\d)$/.exec(value);
    if (!match)
        return null;
    return Number(match[1]) * 60 + Number(match[2]);
}
export function clockValueMinutes(value) {
    if (typeof value === "string") {
        const match = /^(\d{2}):(\d{2})(?::(\d{2}))?/.exec(value);
        if (!match)
            throw new Error("INVALID_DATABASE_TIME");
        return Number(match[1]) * 60 + Number(match[2]);
    }
    return value.getUTCHours() * 60 + value.getUTCMinutes();
}
export function formatClockTime(value) {
    const minutes = clockValueMinutes(value);
    return `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`;
}
export function clockToDate(value) {
    const minutes = parseClockMinutes(value);
    if (minutes === null)
        throw new Error("INVALID_CLOCK");
    return new Date(Date.UTC(1970, 0, 1, Math.floor(minutes / 60), minutes % 60));
}
export function jakartaDateKey(instant) {
    const parts = new Intl.DateTimeFormat("en-CA", {
        timeZone: JAKARTA_TIME_ZONE,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }).formatToParts(instant);
    const part = (type) => parts.find((item) => item.type === type)?.value;
    const year = part("year");
    const month = part("month");
    const day = part("day");
    if (!year || !month || !day)
        throw new Error("JAKARTA_DATE_UNAVAILABLE");
    return `${year}-${month}-${day}`;
}
export function jakartaBusinessDate(instant) {
    return new Date(`${jakartaDateKey(instant)}T00:00:00.000Z`);
}
export function nextSessionEffectiveDate(today, previous) {
    if (!previous || previous < today)
        return new Date(today);
    return new Date(previous.getTime() + 86400000);
}
export function isSessionEnabledByConfiguration(disabledAt, enabledFrom, businessDate) {
    return disabledAt == null || (enabledFrom != null && businessDate >= enabledFrom);
}
export function isoWeekdayForDate(date) {
    const weekday = date.getUTCDay();
    return weekday === 0 ? 7 : weekday;
}
export function isJakartaWorkday(date) {
    return isoWeekdayForDate(date) <= 5;
}
export function resolveSessionTimeRange(version, businessDate) {
    if (!isJakartaWorkday(businessDate))
        return null;
    if (version.startTime != null && version.endTime != null) {
        return { startTime: version.startTime, endTime: version.endTime };
    }
    const legacySchedule = version.daySchedules?.find((schedule) => schedule.isoWeekday === isoWeekdayForDate(businessDate));
    if (!legacySchedule?.isEnabled)
        return null;
    return { startTime: legacySchedule.startTime, endTime: legacySchedule.endTime };
}
export function jakartaClockMinutes(instant) {
    const parts = new Intl.DateTimeFormat("en-GB", {
        timeZone: JAKARTA_TIME_ZONE,
        hour: "2-digit",
        minute: "2-digit",
        hourCycle: "h23",
    }).formatToParts(instant);
    const hour = parts.find((part) => part.type === "hour")?.value;
    const minute = parts.find((part) => part.type === "minute")?.value;
    if (!hour || !minute)
        throw new Error("JAKARTA_TIME_UNAVAILABLE");
    return Number(hour) * 60 + Number(minute);
}
export function isWithinTimeRange(instant, range) {
    const currentMinutes = jakartaClockMinutes(instant);
    return currentMinutes >= clockValueMinutes(range.startTime) &&
        currentMinutes < clockValueMinutes(range.endTime);
}
export function isTimeRangeFinished(instant, date, range) {
    const currentDate = jakartaDateKey(instant);
    const scheduleDate = date.toISOString().slice(0, 10);
    if (scheduleDate < currentDate)
        return true;
    if (scheduleDate > currentDate)
        return false;
    return jakartaClockMinutes(instant) >= clockValueMinutes(range.endTime);
}
export function timeRangesOverlap(first, second) {
    const firstStart = clockValueMinutes(first.startTime);
    const firstEnd = clockValueMinutes(first.endTime);
    const secondStart = clockValueMinutes(second.startTime);
    const secondEnd = clockValueMinutes(second.endTime);
    return firstStart < secondEnd && secondStart < firstEnd;
}
export function validateSessionTime(startTime, endTime) {
    const start = parseClockMinutes(startTime);
    const end = parseClockMinutes(endTime);
    if (start === null || end === null)
        return "SESSION_TIME_INVALID";
    if (start >= end)
        return "SESSION_TIME_RANGE_INVALID";
    return null;
}
//# sourceMappingURL=schedule-policy.js.map