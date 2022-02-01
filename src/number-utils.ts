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
    format: (value: number | null | undefined, options?: { nullVal?: string; thou?: boolean; fpad?: number; }) => {
        if (value == null || typeof value !== "number") return options?.nullVal;
        let ret = value.toString(10);
        const s = ret.split(".");
        ret = options?.thou !== false ? s[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") : s[0];
        const f = s[1] || "";
        if (options?.fpad) {
            ret += "." + f;
            const c = options.fpad - f.length;
            if (c > 0) ret += "0".repeat(c);
        } else if (f) {
            ret += "." + f;
        }
        return ret;
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
    },
    round: (value: number, float = 0) => {
        if (value == null) return value;
        const denom = Math.pow(10, float);
        return Math.round(value * denom) / denom;
    },
    ceil: (value: number, float = 0) => {
        if (value == null) return value;
        const denom = Math.pow(10, float);
        return Math.ceil(value * denom) / denom;
    },
    floor: (value: number, float = 0) => {
        if (value == null) return value;
        const denom = Math.pow(10, float);
        return Math.floor(value * denom) / denom;
    },
    average: (...values: Array<number | null | undefined>) => {
        let sum = 0, denom = 0;
        values.forEach(v => {
            if (v == null) return;
            sum = NumberUtils.add(sum, v);
            denom++;
        });
        return sum / denom;
    },
    nullZeroAverage: (...values: Array<number | null | undefined>) => {
        let sum = 0, denom = 0;
        values.forEach(v => {
            sum = NumberUtils.add(sum, v ?? 0);
            denom++;
        });
        return sum / denom;
    },
};
export default NumberUtils;