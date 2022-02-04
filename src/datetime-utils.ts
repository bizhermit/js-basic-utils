export const week_ja = ["日", "月", "火", "水", "木", "金", "土"];
export const week_en = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const month_en = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const convert = (date: string | number | Date | null | undefined) => {
    if (date == null) return undefined;
    if (typeof date === "string") {
        let ctx = date.match(/^(\d{4})(\d{2}|$)(\d{2}|$)(\d{2}|$)(\d{2}|$)(\d{2}|$)(\d{3}|$)/);
        if (!ctx) ctx = date.match(/^(\d+)?(?:-|\/|年|$)(\d+)?(?:-|\/|月|$)(\d+)?(?:\s*|日\s*|T|$)(\d+)?(?::|時|$)(\d+)?(?::|分|$)(\d+)?(?:.|秒|$)(\d+)?(?:.*|$)/);
        if (ctx) return new Date(Number(ctx[1]), Number(ctx[2] || 1) - 1, Number(ctx[3] || 1), Number(ctx[4] || 0), Number(ctx[5] || 0), Number([ctx[6] || 0]), Number(ctx[7] || 0));
        ctx = date.match(/^(?:\w+)?\s(\w+)?\s(\d+)?\s(\d+)?\s(\d+)?:(\d+)?:(\d+)?/);
        if (ctx) {
            const re = new RegExp(`^${ctx[1]}`, "i");
            return new Date(Number(ctx[3]), Math.max(month_en.findIndex(v => re.exec(v)), 0), Number(ctx[2]), Number(ctx[4]), Number(ctx[5]), Number(ctx[6]));
        }
        return undefined;
    }
    if (typeof date === "number") return new Date(date);
    return new Date(date);
};

export const format = (date?: string | number | Date | null | undefined, pattern = "yyyy-MM-dd", week: Array<string> | "ja" | "en" = week_ja) => {
    const d = convert(date);
    if (d == null) return undefined;
    return pattern
        .replace("yyyy", String(d.getFullYear()))
        .replace("yy", `00${d.getFullYear()}`.slice(-2))
        .replace("MM", `0${d.getMonth() + 1}`.slice(-2))
        .replace("M", String(d.getMonth()))
        .replace("dd", `0${d.getDate()}`.slice(-2))
        .replace("d", String(d.getDate()))
        .replace("hh", `0${d.getHours()}`.slice(-2))
        .replace("h", String(d.getHours()))
        .replace("mm", `0${d.getMinutes()}`.slice(-2))
        .replace("m", String(d.getMinutes()))
        .replace("ss", `0${d.getSeconds()}`.slice(-2))
        .replace("s", String(d.getSeconds()))
        .replace("SSS", `00${d.getMilliseconds()}`.slice(-3))
        .replace("SS", `0${d.getMilliseconds()}`.slice(-2))
        .replace("S", String(d.getMilliseconds()))
        .replace("w", (week === "ja" ? week_ja : (week === "en" ? week_en : week))[d.getDay()]);
};

const DatetimeUtils = {
    convert,
    format,
    copy: (date: Date) => {
        return date == null ? date : new Date(date);
    },
    removeTime: (date: Date) => {
        if (date == null) return date;
        date.setHours(0, 0, 0, 0);
        return date;
    },
    getDate: () => {
        return DatetimeUtils.removeTime(new Date());
    },
    getDatetime: () => new Date(),
    getDaysDiff: (before: Date | null | undefined, after: Date | null | undefined) => {
        if (before == null || after == null) return 0;
        return Math.floor(after.getTime() / 86400000) - Math.floor(before.getTime() / 86400000);
    },
    getDays: (date1: Date | null | undefined, date2: Date | null | undefined) => {
        if (date1 == null && date2 == null) return 0;
        return Math.abs(DatetimeUtils.getDaysDiff(date1, date2)) + 1;
    },
    addDay: (date: Date, add: number) => {
        date.setDate(date.getDate() + add);
        return date;
    },
    addMonth: (date: Date, add: number) => {
        date.setMonth(date.getMonth() + add);
        return date;
    },
    addYear: (date: Date, add: number) => {
        date.setFullYear(date.getFullYear() + add);
        return date;
    },
    getFirstDateAtMonth: (date = new Date()) => {
        return new Date(date.getFullYear(), date.getMonth(), 1);
    },
    getLastDateAtMonth: (date = new Date()) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0);
    },
    getFirstDateAtYear: (date = new Date()) => {
        return new Date(date.getFullYear(), 0, 1);
    },
    getLastDateAtYear: (date = new Date()) => {
        return new Date(date.getFullYear(), 11, 31);
    },
    getPrevDate: (date = new Date()) => {
        return DatetimeUtils.addDay(date, -1);
    },
    getNextDate: (date = new Date()) => {
        return DatetimeUtils.addDay(date, 1);
    },
    getPrevWeekDate: (date = new Date()) => {
        return DatetimeUtils.addDay(date, -7);
    },
    getNextWeekDate: (date = new Date()) => {
        return DatetimeUtils.addDay(date, 7);
    },
    getPrevMonthDate: (date = new Date(), sameYearMonth = false) => {
        const ret = new Date(date.getFullYear(), date.getMonth() - 1, date.getDate())
        if (sameYearMonth === true && ret.getDate() !== date.getDate()) ret.setDate(0);
        return ret;
    },
    getNextMonthDate: (date = new Date(), sameYearMonth = false) => {
        const ret = new Date(date.getFullYear(), date.getMonth() + 1, date.getDate());;
        if (sameYearMonth === true && ret.getDate() !== date.getDate()) ret.setDate(0);
        return ret;
    },
    getPrevYearDate: (date = new Date(), sameYearMonth = false) => {
        const ret = new Date(date.getFullYear() - 1, date.getMonth(), date.getDate());;
        if (sameYearMonth === true && ret.getDate() !== date.getDate()) ret.setDate(0);
        return ret;
    },
    getNextYearDate: (date = new Date(), sameYearMonth = false) => {
        const ret = new Date(date.getFullYear() + 1, date.getMonth(), date.getDate());
        if (sameYearMonth === true && ret.getDate() !== date.getDate()) ret.setDate(0);
        return ret;
    },
    equal: (date1: Date | null | undefined, date2: Date | null | undefined) => {
        return date1?.getTime() == date2?.getTime();
    },
    equalDate: (date1: Date | null | undefined, date2: Date | null | undefined) => {
        if (date1 == null || date2 == null) return false;
        return date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear();
    },
    equalDay: (date1: Date | null | undefined, date2: Date | null | undefined) => {
        if (date1 == null || date2 == null) return false;
        return date1.getDate() === date2.getDate();
    },
    equalYearMonth: (date1: Date | null | undefined, date2: Date | null | undefined) => {
        if (date1 == null || date2 == null) return false;
        return date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear();
    },
    equalMonth: (date1: Date | null | undefined, date2: Date | null | undefined) => {
        if (date1 == null || date2 == null) return false;
        return date1.getMonth() === date2.getMonth();
    },
    equalYear: (date1: Date | null | undefined, date2: Date | null | undefined) => {
        if (date1 == null || date2 == null) return false;
        return date1.getFullYear() === date2.getFullYear();
    },
    equalWeek: (date1: Date | null | undefined, date2: Date | null | undefined) => {
        if (date1 == null || date2 == null) return false;
        return date1.getDay() === date2.getDay();
    },
    equalMonthDay: (date1: Date | null | undefined, date2: Date | null | undefined) => {
        if (date1 == null || date2 == null) return false;
        return date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth();
    },
    isBefore: (base: Date, date: Date) => {
        return base.getTime() > date.getTime();
    },
    isAfter: (base: Date, date: Date) => {
        return base.getTime() < date.getTime();
    },
    isBeforeDate: (base: Date, date: Date) => {
        return Math.floor(base.getTime() / 86400000) > Math.floor(date.getTime() / 86400000);
    },
    isAfterDate: (base: Date, date: Date) => {
        return Math.floor(base.getTime() / 86400000) < Math.floor(date.getTime() / 86400000)
    },
    validContext: (before: Date | null | undefined, after: Date | null | undefined) => {
        if (before == null || after == null) return true;
        return DatetimeUtils.getDaysDiff(before, after) >= 0;
    },
};

export default DatetimeUtils;