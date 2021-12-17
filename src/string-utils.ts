const StringUtils = {
    isString: (value: any): value is string => {
        return typeof value === "string";
    },
    isNull: (value: string | null | undefined): value is null | undefined => {
        return value == null;
    },
    isNullOrEmpty: (value: string | null | undefined): value is null | undefined => {
        return value == null || value === "";
    },
    isNotNull: (value: string | null | undefined): value is string => {
        return value != null;
    },
    isNotNullOrEmpty: (value: string | null | undefined): value is string => {
        return value != null && value !== "";
    },
    notNull: (value: string | null | undefined, whenNullValue: string): string => {
        if (StringUtils.isNull(value)) return whenNullValue;
        return value;
    },
    notNullOrEmpty: (value: string | null | undefined, whenNullOrEmptyValue: string): string => {
        if (StringUtils.isNullOrEmpty(value)) return whenNullOrEmptyValue;
        return value;
    },
    contains: (value: string | null | undefined, search: string): boolean => {
        if (StringUtils.isNotNullOrEmpty(value)) return value.indexOf(search) != -1;
        return false;
    },
    isHalfWidthNumeric: (value: string) => {
        return /^[0-9]+$/.test(value);
    },
    isHalfWidthAlphabet: (value: string) => {
        return /^[a-zA-Z]+$/.test(value);
    },
    isHalfWidthSymbols: (value: string) => {
        return /^[!-/:-@¥[-`{-~]+$/.test(value);
    },
    isHalfWidthAlphanumeric: (value: string) => {
        return /^[a-zA-Z0-9]+$/.test(value);
    },
    isHalfWidthAlphanumericAndSymbols: (value: string) => {
        return /^[a-zA-Z0-9!-/:-@¥[-`{-~]*$/.test(value);
    },
    isHalfWidthKatakana: (value: string) => {
        return /^[｡-ﾟ+]+$/.test(value);
    },
    isHiragana: (value: string) => {
        return /^[ぁ-ゞ]+$/.test(value);
    },
    isKatakana: (value: string) => {
        return /^[ァ-ヶ]+$/.test(value);
    },
    isInteger: (value: string) => {
        return /[+-]?(0|[1-9]+\\d*)/.test(value);
    },
    isPhoneNumber: (value: string) => {
        return /^0\\d-\\d{4}-\\d{4}$/.test(value)
            || /^0\\d{3}-\\d{2}-\\d{4}$/.test(value)
            || /^0\\d{2}-\\d{3}-\\d{4}$/.test(value)
            || /^(070|080|090)-\\d{4}-\\d{4}$/.test(value)
            || /^050-\\d{4}-\\d{4}$/.test(value)
            || /^\\(0\\d\\)\\d{4}-\\d{4}$/.test(value)
            || /^\\(0\\d{3}\\)\\d{2}-\\d{4}$/.test(value)
            || /^0120-\\d{3}-\\d{3}$/.test(value);
    },
    isPostalCode: (value: string) => {
        return /^[0-9]{3}-[0-9]{4}$/.test(value) || /^[0-9]{7}$/.test(value);
    },
    isMailAddress: (value: string) => {
        return /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}.[A-Za-z0-9]{1,}$/.test(value);
    },
    isIpv4Address: (value: string) => {
        return /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])$/.test(value);
    },
    isIpv6Address: (value: string) => {
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
};
export default StringUtils;