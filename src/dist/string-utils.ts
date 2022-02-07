export const isNull = (value: string | null | undefined): value is null | undefined => {
    return value == null;
};

export const isEmpty = (value: string | null | undefined): value is null | undefined => {
    return value == null || value.length === 0;
};

const StringUtils = {
    isString: (value: unknown): value is string => {
        return typeof value === "string";
    },
    isNull,
    isEmpty,
    isNotNull: (value: string | null | undefined): value is string => {
        return !isNull(value);
    },
    isNotEmpty: (value: string | null | undefined): value is string => {
        return !isEmpty(value);
    },
    notNull: (value: string | null | undefined, whenNullValue: string) => {
        return isNull(value) ? whenNullValue : value;
    },
    notEmpty: (value: string | null | undefined, whenEmptyValue: string) => {
        return isEmpty(value) ? whenEmptyValue : value;
    },
    contains: (value: string | null | undefined, search: string): boolean => {
        return isEmpty(value) ? false : value.indexOf(search) != -1;
    },
    join: (joinStr: string, ...values: Array<string | null | undefined>) => {
        let ret = "";
        const js = joinStr ?? " ";
        values.forEach(v => {
            if (StringUtils.isEmpty(v)) return;
            if (ret.length > 0) ret += js;
            ret += v;
        });
        return ret;
    },
    isHalfWidthNumeric: (value: string | null | undefined) => {
        if (value == null) return false;
        return /^[0-9]+$/.test(value);
    },
    isHalfWidthAlphabet: (value: string | null | undefined) => {
        if (value == null) return false;
        return /^[a-zA-Z]+$/.test(value);
    },
    isHalfWidthSymbols: (value: string | null | undefined) => {
        if (value == null) return false;
        return /^[!-/:-@¥[-`{-~]+$/.test(value);
    },
    isHalfWidthAlphanumeric: (value: string | null | undefined) => {
        if (value == null) return false;
        return /^[a-zA-Z0-9]+$/.test(value);
    },
    isHalfWidthAlphanumericAndSymbols: (value: string | null | undefined) => {
        if (value == null) return false;
        return /^[a-zA-Z0-9!-/:-@¥[-`{-~]+$/.test(value);
    },
    isHalfWidthKatakana: (value: string | null | undefined) => {
        if (value == null) return false;
        return /^[｡-ﾟ+]+$/.test(value);
    },
    isKatakana: (value: string | null | undefined) => {
        if (value == null) return false;
        return /^[ァ-ヶ]+$/.test(value);
    },
    isFullOrHalfWidthKatakana: (value: string | null | undefined) => {
        if (value == null) return false;
        return /^[｡-ﾟ+ァ-ヶ]+$/.test(value);
    },
    isHiragana: (value: string | null | undefined) => {
        if (value == null) return false;
        return /^[ぁ-ゞ]+$/.test(value);
    },
    isInteger: (value: string | null | undefined) => {
        if (value == null) return false;
        return /^[+-]?(0|[1-9]\d*)$/.test(value);
    },
    isPhoneNumber: (value: string | null | undefined) => {
        if (value == null) return false;
        return /^0\d-\d{4}-\d{4}$/.test(value)
            || /^0\d{3}-\d{2}-\d{4}$/.test(value)
            || /^0\d{2}-\d{3}-\d{4}$/.test(value)
            || /^0(7|8|9)0-\d{4}-\d{4}$/.test(value)
            || /^050-\d{4}-\d{4}$/.test(value)
            || /^\(0\d\)\d{4}-\d{4}$/.test(value)
            || /^\(0\d{3}\)\d{2}-\d{4}$/.test(value)
            || /^0120-\d{3}-\d{3}$/.test(value);
    },
    isPostalCode: (value: string | null | undefined) => {
        if (value == null) return false;
        return /^[0-9]{3}-[0-9]{4}$/.test(value) || /^[0-9]{7}$/.test(value);
    },
    isMailAddress: (value: string | null | undefined) => {
        if (value == null) return false;
        return /^[A-Za-z0-9][a-zA-Z0-9_.+-]*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]+$/.test(value);
    },
    isIpv4Address: (value: string | null | undefined) => {
        if (value == null) return false;
        const s = value.split(".");
        if (s.length !== 4) return false;
        for (const numStr of s) {
            if (!/^(0|[1-9]\d{0,2})/.test(numStr)) return false;
            const num = Number(numStr);
            if (num < 0 || num > 255) return false;
        }
        return true;
    },
    isIpv6Address: (value: string | null | undefined) => {
        if (value == null) return false;
        return /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/.test(value);
    },
    generateUuidV4: () => {
        const chars = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split("");
        for (let i = 0, il = chars.length; i < il; i++) {
            switch (chars[i]) {
                case "x":
                    chars[i] = Math.floor(Math.random() * 16).toString(16);
                    break;
                case "y":
                    chars[i] = (Math.floor(Math.random() * 4) + 8).toString(16);
                    break;
                default:
                    break;
            }
        }
        return chars.join("");
    },
    isUuidV4: (value: string | null | undefined) => {
        if (value == null) return false;
        return /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(value);
    },
};
export default StringUtils;