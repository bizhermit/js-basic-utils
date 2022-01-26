declare module "@bizhermit/basic-utils/dist/string-utils" {
    const StringUtils: {
        isString: (value: any) => value is string;
        isNull: (value: string | null | undefined) => value is null | undefined;
        isNullOrEmpty: (value: string | null | undefined) => value is null | undefined;
        isNotNull: (value: string | null | undefined) => value is string;
        isNotNullOrEmpty: (value: string | null | undefined) => value is string;
        notNull: (value: string | null | undefined, whenNullValue: string) => string;
        notNullOrEmpty: (value: string | null | undefined, whenNullOrEmptyValue: string) => string;
        contains: (value: string | null | undefined, search: string) => boolean;
        isHalfWidthNumeric: (value: string) => boolean;
        isHalfWidthAlphabet: (value: string) => boolean;
        isHalfWidthSymbols: (value: string) => boolean;
        isHalfWidthAlphanumeric: (value: string) => boolean;
        isHalfWidthAlphanumericAndSymbols: (value: string) => boolean;
        isHalfWidthKatakana: (value: string) => boolean;
        isHiragana: (value: string) => boolean;
        isKatakana: (value: string) => boolean;
        isFullOrHalfWidthKatakana: (value: string) => boolean;
        isInteger: (value: string) => boolean;
        isPhoneNumber: (value: string) => boolean;
        isPostalCode: (value: string) => boolean;
        isMailAddress: (value: string) => boolean;
        isIpv4Address: (value: string) => boolean;
        isIpv6Address: (value: string) => boolean;
        generateUuidV4: () => string;
        isUuidV4: (value: string) => boolean;
    };
    export default StringUtils;
}
declare module "@bizhermit/basic-utils/dist/datetime-utils" {
    const DatetimeUtils: {
        isValidNumber: (yearNum: any, monthNum: any, dayNum: any) => boolean;
        getDateByYMD: (yearNum: any, monthNum: any, dayNum: any) => Date;
        convertStringToDate: (str: string) => Date | null;
        convertDateToString: (date: Date, format: string) => string;
        datetimeStr: () => string;
        copy: (date: Date) => Date;
        resetTime: (date: Date) => Date;
        getResetedTimeDate: () => Date;
    };
    export default DatetimeUtils;
}
declare module "@bizhermit/basic-utils/dist/number-utils" {
    const NumberUtils: {
        isNumber: (value: any) => value is number;
        isNull: (value: number | null | undefined) => value is null | undefined;
        thousandsSeparator: (value: number, whenNullValue?: string) => string;
        removeThousandsSeparator: (value: string, whenNullOrEmptyValue?: number) => number;
        add: (value1: number, value2: number) => number;
        adds: (...values: Array<number>) => number;
        minus: (value1: number, value2: number) => number;
        getFloatPosition: (value: number) => number;
    };
    export default NumberUtils;
}
