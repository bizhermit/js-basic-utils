"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumberUtils = {
    isNumber: (value) => {
        return typeof value === "number";
    },
    isNull: (value) => {
        return value == null;
    },
    thousandsSeparator: (value, whenNullValue = "") => {
        if (value == null)
            return whenNullValue;
        if (typeof value === "string")
            return Number(value).toLocaleString("ja");
        return value.toLocaleString("ja");
    },
    removeThousandsSeparator: (value, whenNullOrEmptyValue = 0) => {
        if (value == null || value === "")
            return whenNullOrEmptyValue;
        if (typeof value === "number")
            return value;
        return Number(value.replace(/,/g, ""));
    },
    add: (value1, value2) => {
        if (value2 == null)
            return value1 ?? 0;
        if (value1 == null)
            return value2 ?? 0;
        const dotPos1 = NumberUtils.getFloatPosition(value1), dotPos2 = NumberUtils.getFloatPosition(value2);
        const maxDotPos = Math.max(dotPos1, dotPos2);
        return (Number((String(value1) + "0".repeat(maxDotPos - dotPos1)).replace(".", "")) + Number((String(value2) + "0".repeat(maxDotPos - dotPos2)).replace(".", ""))) / Math.pow(10, maxDotPos);
    },
    adds: (...values) => {
        if (values.length === 0)
            return 0;
        if (values.length === 1)
            return values[0] ?? 0;
        let ret = values[0] ?? 0;
        for (let i = 1, il = values.length; i < il; i++)
            ret = NumberUtils.add(ret, values[i]);
        return ret;
    },
    minus: (value1, value2) => {
        if (value2 == null)
            return value1 ?? 0;
        if (value1 == null)
            return -value2 ?? 0;
        const dotPos1 = NumberUtils.getFloatPosition(value1), dotPos2 = NumberUtils.getFloatPosition(value2);
        const maxDotPos = Math.max(dotPos1, dotPos2);
        return (Number((String(value1) + "0".repeat(maxDotPos - dotPos1)).replace(".", "")) - Number((String(value2) + "0".repeat(maxDotPos - dotPos2)).replace(".", ""))) / Math.pow(10, maxDotPos);
    },
    getFloatPosition: (value) => {
        if (value == null)
            return 0;
        const str = String(value);
        if (str.indexOf(".") < 0)
            return 0;
        return str.length - 1 - str.lastIndexOf(".");
    },
    round: (value, float = 0) => {
        if (value == null)
            return value;
        const denom = Math.pow(10, float);
        return Math.round(value * denom) / denom;
    },
    ceil: (value, float = 0) => {
        if (value == null)
            return value;
        const denom = Math.pow(10, float);
        return Math.ceil(value * denom) / denom;
    },
    floor: (value, float = 0) => {
        if (value == null)
            return value;
        const denom = Math.pow(10, float);
        return Math.floor(value * denom) / denom;
    },
    average: (...values) => {
        let sum = 0, denom = 0;
        values.forEach(v => {
            if (v == null)
                return;
            sum = NumberUtils.add(sum, v);
            denom++;
        });
        return sum / denom;
    },
    nullZeroAverage: (...values) => {
        let sum = 0, denom = 0;
        values.forEach(v => {
            sum = NumberUtils.add(sum, v ?? 0);
            denom++;
        });
        return sum / denom;
    },
};
exports.default = NumberUtils;
