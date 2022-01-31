"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StringUtils = {
    isString: (value) => {
        return typeof value === "string";
    },
    isNull: (value) => {
        return value == null;
    },
    isNullOrEmpty: (value) => {
        return value == null || value === "";
    },
    isNotNull: (value) => {
        return value != null;
    },
    isNotNullOrEmpty: (value) => {
        return value != null && value !== "";
    },
    notNull: (value, whenNullValue) => {
        if (StringUtils.isNull(value))
            return whenNullValue;
        return value;
    },
    notNullOrEmpty: (value, whenNullOrEmptyValue) => {
        if (StringUtils.isNullOrEmpty(value))
            return whenNullOrEmptyValue;
        return value;
    },
    contains: (value, search) => {
        if (StringUtils.isNotNullOrEmpty(value))
            return value.indexOf(search) != -1;
        return false;
    },
    join: (joinStr, ...values) => {
        let ret = "";
        const js = joinStr ?? " ";
        values.forEach(v => {
            if (StringUtils.isNullOrEmpty(v))
                return;
            if (ret.length > 0)
                ret += js;
            ret += v;
        });
        return ret;
    },
    isHalfWidthNumeric: (value) => {
        if (value == null)
            return false;
        return /^[0-9]+$/.test(value);
    },
    isHalfWidthAlphabet: (value) => {
        if (value == null)
            return false;
        return /^[a-zA-Z]+$/.test(value);
    },
    isHalfWidthSymbols: (value) => {
        if (value == null)
            return false;
        return /^[!-/:-@¥[-`{-~]+$/.test(value);
    },
    isHalfWidthAlphanumeric: (value) => {
        if (value == null)
            return false;
        return /^[a-zA-Z0-9]+$/.test(value);
    },
    isHalfWidthAlphanumericAndSymbols: (value) => {
        if (value == null)
            return false;
        return /^[a-zA-Z0-9!-/:-@¥[-`{-~]*$/.test(value);
    },
    isHalfWidthKatakana: (value) => {
        if (value == null)
            return false;
        return /^[｡-ﾟ+]+$/.test(value);
    },
    isHiragana: (value) => {
        if (value == null)
            return false;
        return /^[ぁ-ゞ]+$/.test(value);
    },
    isKatakana: (value) => {
        if (value == null)
            return false;
        return /^[ァ-ヶ]+$/.test(value);
    },
    isFullOrHalfWidthKatakana: (value) => {
        if (value == null)
            return false;
        return /^[｡-ﾟ+ァ-ヶ]+$/.test(value);
    },
    isInteger: (value) => {
        if (value == null)
            return false;
        return /[+-]?(0|[1-9]+\\d*)/.test(value);
    },
    isPhoneNumber: (value) => {
        if (value == null)
            return false;
        return /^0\\d-\\d{4}-\\d{4}$/.test(value)
            || /^0\\d{3}-\\d{2}-\\d{4}$/.test(value)
            || /^0\\d{2}-\\d{3}-\\d{4}$/.test(value)
            || /^(070|080|090)-\\d{4}-\\d{4}$/.test(value)
            || /^050-\\d{4}-\\d{4}$/.test(value)
            || /^\\(0\\d\\)\\d{4}-\\d{4}$/.test(value)
            || /^\\(0\\d{3}\\)\\d{2}-\\d{4}$/.test(value)
            || /^0120-\\d{3}-\\d{3}$/.test(value);
    },
    isPostalCode: (value) => {
        if (value == null)
            return false;
        return /^[0-9]{3}-[0-9]{4}$/.test(value) || /^[0-9]{7}$/.test(value);
    },
    isMailAddress: (value) => {
        if (value == null)
            return false;
        return /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}.[A-Za-z0-9]{1,}$/.test(value);
    },
    isIpv4Address: (value) => {
        if (value == null)
            return false;
        return /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])$/.test(value);
    },
    isIpv6Address: (value) => {
        if (value == null)
            return false;
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
    isUuidV4: (value) => {
        if (value == null)
            return false;
        return /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(value);
    },
};
exports.default = StringUtils;
