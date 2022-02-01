import StringUtils from "./string-utils";

const padding = (val: number, paddingStr: string = "00") => {
    return (paddingStr + String(val)).slice(-paddingStr.length);
}

const DatetimeUtils = {
    isValidNumber: (yearNum: unknown, monthNum: unknown, dayNum: unknown) => {
        if (yearNum == null || monthNum == null || dayNum == null) return false;
        const d = new Date(Number(yearNum), Number(monthNum) - 1, Number(dayNum));
        return d.getFullYear() === Number(yearNum) && d.getMonth() + 1 === Number(monthNum) && d.getDate() === Number(dayNum);
    },
    getDateByYMD: (yearNum: unknown, monthNum: unknown, dayNum: unknown) => {
        return new Date(Number(yearNum), Number(monthNum) - 1, Number(dayNum));
    },
    convertStringToDate: (str: string | null | undefined, whenFailedValue?: Date | null) => {
        if (StringUtils.isNullOrEmpty(str)) return whenFailedValue;
        const ev = new Date();
        if (str.indexOf("-") > 0) {
            const vals = str.split("-");
            if (vals.length !== 3) return ev;
            if (!DatetimeUtils.isValidNumber(vals[0], vals[1], vals[2])) return ev;
            return DatetimeUtils.getDateByYMD(vals[0], vals[1], vals[2]);
        }
        if (str.indexOf("/") > 0) {
            const vals = str.split("/");
            if (vals.length !== 3) return ev;
            if (!DatetimeUtils.isValidNumber(vals[0], vals[1], vals[2])) return ev;
            return DatetimeUtils.getDateByYMD(vals[0], vals[1], vals[2]);
        }
        if (str.length === 8) {
            const yStr = str.substring(0, 4);
            const mStr = str.substring(4, 6);
            const dStr = str.substring(6, 8);
            if (!DatetimeUtils.isValidNumber(yStr, mStr, dStr)) return ev;
            return DatetimeUtils.getDateByYMD(yStr, mStr, dStr);

        }
        const yPos = str.indexOf("年");
        const mPos = str.indexOf("月");
        const dPos = str.indexOf("日");
        if (yPos >= 0 && mPos >= 0 && dPos >= 0) {
            const yStr = str.substring(0, yPos);
            const mStr = str.substring(yPos + 1, mPos);
            const dStr = str.substr(mPos + 1, dPos);
            if (!DatetimeUtils.isValidNumber(yStr, mStr, dStr)) return ev;
            return DatetimeUtils.getDateByYMD(yStr, mStr, dStr);
        }
        if (yPos >= 0 && mPos >= 0) {
            const yStr = str.substring(0, yPos);
            const mStr = str.substring(yPos + 1, mPos);
            if (!DatetimeUtils.isValidNumber(yStr, mStr, 1)) return ev;
            return DatetimeUtils.getDateByYMD(yStr, mStr, 1);
        }
        return whenFailedValue;
    },
    convertToDate: (date: string | number | Date | null | undefined, whenFailedValue?: Date | null) => {
        if (date == null) return whenFailedValue;
        if (typeof date === "string" || typeof date === "number") return DatetimeUtils.convertStringToDate(String(date), whenFailedValue);
        return new Date(date);
    },
    convertDateToString: (date: Date | null | undefined, format: string = "yyyy-MM-dd") => {
        if (date == null || StringUtils.isNullOrEmpty(format)) return "";
        const yNum = date.getFullYear();
        const mNum = date.getMonth() + 1;
        const dNum = date.getDate();
        const hNum = date.getHours();
        const miNum = date.getMinutes();
        const sNum = date.getSeconds();
        return format.replace("yyyy", String(yNum))
            .replace("yy", "00" + String(yNum).slice(-2))
            .replace("MM", ("0" + String(mNum)).slice(-2))
            .replace("M", String(mNum))
            .replace("dd", ("0" + String(dNum)).slice(-2))
            .replace("d", String(dNum))
            .replace("hh", ("0" + String(hNum)).slice(-2))
            .replace("h", String(hNum))
            .replace("mm", ("0" + String(miNum)).slice(-2))
            .replace("m", String(miNum))
            .replace("ss", ("0" + String(sNum)).slice(-2))
            .replace("s", String(sNum));
    },
    datetimeStr: () => {
        const d = new Date();
        return padding(d.getFullYear(), "0000")
            + padding(d.getMonth()+1)
            + padding(d.getDate())
            + padding(d.getHours())
            + padding(d.getMinutes());
    },
    copy: (date: Date) => {
        if (date == null) return date;
        return new Date(date);
    },
    resetTime: (date: Date) => {
        if (date == null) return date;
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        return date;
    },
    getResetedTimeDate: () => {
        return DatetimeUtils.resetTime(new Date());
    },
    getDaysDiff: (before: Date | null | undefined, after: Date | null | undefined) => {
        if (before == null || after == null) return 0;
        const b = Math.floor(before.getTime() / 86400000);
        const a = Math.floor(after.getTime() / 86400000);
        return a - b;
    },
    getDays: (date1: Date | null | undefined, date2: Date | null | undefined) => {
        if (date1 == null && date2 == null) return 0;
        return Math.abs(DatetimeUtils.getDaysDiff(date1, date2)) + 1;
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
    validContext: (before: Date | null | undefined, after: Date | null | undefined) => {
        if (before == null || after == null) return true;
        return DatetimeUtils.getDaysDiff(before, after) >= 0;
    },
    addDay: (date = new Date(), add: number) => {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate() + add);
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
        return date1.getMonth() === date2.getMonth()
    },
    equalYear: (date1: Date | null | undefined, date2: Date | null | undefined) => {
        if (date1 == null || date2 == null) return false;
        return date1.getFullYear() === date2.getFullYear();
    },
    equalWeek: (date1: Date | null | undefined, date2: Date | null | undefined) => {
        if (date1 == null || date2 == null) return false;
        return date1.getDay() === date2.getDay();
    },
};
export default DatetimeUtils;