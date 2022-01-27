const NumberUtils = {
    isNumber: (value: unknown): value is number => {
        return typeof value === "number";
    },
    isNull: (value: number | null | undefined): value is null | undefined => {
        return value == null;
    },
    thousandsSeparator: (value: number | null | undefined, whenNullValue = "") => {
        if (value == null) return whenNullValue;
        if (typeof value === "string") return Number(value).toLocaleString("ja");
        return value.toLocaleString("ja");
    },
    removeThousandsSeparator: (value: string | null | undefined, whenNullOrEmptyValue = 0) => {
        if (value == null || value === "") return whenNullOrEmptyValue;
        if (typeof value === "number") return value;
        return Number(value.replace(/,/g, ""));
    },
    add: (value1: number | null | undefined, value2: number | null | undefined) => {
        if (value2 == null) return value1 ?? 0;
        if (value1 == null) return value2 ?? 0;
        const dotPos1 = NumberUtils.getFloatPosition(value1), dotPos2 = NumberUtils.getFloatPosition(value2);
        const maxDotPos = Math.max(dotPos1, dotPos2);
        return (Number((String(value1) + "0".repeat(maxDotPos - dotPos1)).replace(".", "")) + Number((String(value2) + "0".repeat(maxDotPos - dotPos2)).replace(".", ""))) / Math.pow(10, maxDotPos);
    },
    adds: (...values: Array<number | null | undefined>) => {
        if (values.length === 0) return 0;
        if (values.length === 1) return values[0] ?? 0;
        let ret = values[0] ?? 0;
        for (let i = 1, il = values.length; i < il; i++) ret = NumberUtils.add(ret, values[i]);
        return ret;
    },
    minus: (value1: number | null | undefined, value2: number | null | undefined) => {
        if (value2 == null) return value1 ?? 0;
        if (value1 == null) return -value2 ?? 0;
        const dotPos1 = NumberUtils.getFloatPosition(value1), dotPos2 = NumberUtils.getFloatPosition(value2);
        const maxDotPos = Math.max(dotPos1, dotPos2);
        return (Number((String(value1) + "0".repeat(maxDotPos - dotPos1)).replace(".", "")) - Number((String(value2) + "0".repeat(maxDotPos - dotPos2)).replace(".", ""))) / Math.pow(10, maxDotPos);
    },
    getFloatPosition: (value: number | null | undefined) => {
        if (value == null) return 0;
        const str = String(value);
        if (str.indexOf(".") < 0) return 0;
        return str.length - 1 - str.lastIndexOf(".");
    }
};
export default NumberUtils;