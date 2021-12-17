import StringUtils from "./string-utils";

const padding = (val: number, paddingStr: string = "00") => {
    return (paddingStr + String(val)).slice(-paddingStr.length);
}

const DatetimeUtils = {
    getResetedTimeDate: () => {
        return DatetimeUtils.resetTime(new Date());
    },
    datetimeStr: () => {
        const d = new Date();
        return padding(d.getFullYear(), "0000")
            + padding(d.getMonth()+1)
            + padding(d.getDate())
            + padding(d.getHours())
            + padding(d.getMinutes());
    },
    isValidNumber: (yearNum: any, monthNum: any, dayNum: any) => {
        if (yearNum == null || monthNum == null || dayNum == null) return false;
        const d = new Date(Number(yearNum), Number(monthNum) - 1, Number(dayNum));
        return d.getFullYear() === Number(yearNum) && d.getMonth() + 1 === Number(monthNum) && d.getDate() === Number(dayNum);
    },
    getDateByYMD: (yearNum: any, monthNum: any, dayNum: any) => {
        return new Date(Number(yearNum), Number(monthNum) - 1, Number(dayNum));
    },
    convertStringToDate: (str: string) => {
        const ev = new Date();
        if (StringUtils.isNullOrEmpty(str)) return null;
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
        return null;
    },
    convertDateToString: (date: Date, format: string) => {
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
    copy: (date: Date) => {
        return new Date(date);
    },
    resetTime: (date: Date) => {
        if (date == null) return date;
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        return date;
    }
};
export default DatetimeUtils;