"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const string_utils_1 = __importDefault(require("./string-utils"));
const padding = (val, paddingStr = "00") => {
    return (paddingStr + String(val)).slice(-paddingStr.length);
};
const DatetimeUtils = {
    isValidNumber: (yearNum, monthNum, dayNum) => {
        if (yearNum == null || monthNum == null || dayNum == null)
            return false;
        const d = new Date(Number(yearNum), Number(monthNum) - 1, Number(dayNum));
        return d.getFullYear() === Number(yearNum) && d.getMonth() + 1 === Number(monthNum) && d.getDate() === Number(dayNum);
    },
    getDateByYMD: (yearNum, monthNum, dayNum) => {
        return new Date(Number(yearNum), Number(monthNum) - 1, Number(dayNum));
    },
    convertStringToDate: (str, whenFailedValue) => {
        if (string_utils_1.default.isNullOrEmpty(str))
            return whenFailedValue;
        const ev = new Date();
        if (str.indexOf("-") > 0) {
            const vals = str.split("-");
            if (vals.length !== 3)
                return ev;
            if (!DatetimeUtils.isValidNumber(vals[0], vals[1], vals[2]))
                return ev;
            return DatetimeUtils.getDateByYMD(vals[0], vals[1], vals[2]);
        }
        if (str.indexOf("/") > 0) {
            const vals = str.split("/");
            if (vals.length !== 3)
                return ev;
            if (!DatetimeUtils.isValidNumber(vals[0], vals[1], vals[2]))
                return ev;
            return DatetimeUtils.getDateByYMD(vals[0], vals[1], vals[2]);
        }
        if (str.length === 8) {
            const yStr = str.substring(0, 4);
            const mStr = str.substring(4, 6);
            const dStr = str.substring(6, 8);
            if (!DatetimeUtils.isValidNumber(yStr, mStr, dStr))
                return ev;
            return DatetimeUtils.getDateByYMD(yStr, mStr, dStr);
        }
        const yPos = str.indexOf("年");
        const mPos = str.indexOf("月");
        const dPos = str.indexOf("日");
        if (yPos >= 0 && mPos >= 0 && dPos >= 0) {
            const yStr = str.substring(0, yPos);
            const mStr = str.substring(yPos + 1, mPos);
            const dStr = str.substr(mPos + 1, dPos);
            if (!DatetimeUtils.isValidNumber(yStr, mStr, dStr))
                return ev;
            return DatetimeUtils.getDateByYMD(yStr, mStr, dStr);
        }
        if (yPos >= 0 && mPos >= 0) {
            const yStr = str.substring(0, yPos);
            const mStr = str.substring(yPos + 1, mPos);
            if (!DatetimeUtils.isValidNumber(yStr, mStr, 1))
                return ev;
            return DatetimeUtils.getDateByYMD(yStr, mStr, 1);
        }
        return whenFailedValue;
    },
    convertToDate: (date, whenFailedValue) => {
        if (date == null)
            return whenFailedValue;
        if (typeof date === "string" || typeof date === "number")
            return DatetimeUtils.convertStringToDate(String(date), whenFailedValue);
        return new Date(date);
    },
    convertDateToString: (date, format = "yyyy-MM-dd") => {
        if (date == null || string_utils_1.default.isNullOrEmpty(format))
            return "";
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
            + padding(d.getMonth() + 1)
            + padding(d.getDate())
            + padding(d.getHours())
            + padding(d.getMinutes());
    },
    copy: (date) => {
        if (date == null)
            return date;
        return new Date(date);
    },
    resetTime: (date) => {
        if (date == null)
            return date;
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        return date;
    },
    getResetedTimeDate: () => {
        return DatetimeUtils.resetTime(new Date());
    },
    getDaysDiff: (before, after) => {
        if (before == null || after == null)
            return 0;
        const b = Math.floor(before.getTime() / 86400000);
        const a = Math.floor(after.getTime() / 86400000);
        return a - b;
    },
    getDays: (date1, date2) => {
        if (date1 == null && date2 == null)
            return 0;
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
    validContext: (before, after) => {
        if (before == null || after == null)
            return true;
        return DatetimeUtils.getDaysDiff(before, after) >= 0;
    },
};
exports.default = DatetimeUtils;
