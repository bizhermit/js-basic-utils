declare module "@bizhermit/basic-utils/dist/string-utils" {
    const StringUtils: {
        isString: (value: unknown) => value is string;
        isNull: (value: string | null | undefined) => value is null | undefined;
        isNullOrEmpty: (value: string | null | undefined) => value is null | undefined;
        isNotNull: (value: string | null | undefined) => value is string;
        isNotNullOrEmpty: (value: string | null | undefined) => value is string;
        notNull: (value: string | null | undefined, whenNullValue: string) => string;
        notNullOrEmpty: (value: string | null | undefined, whenNullOrEmptyValue: string) => string;
        contains: (value: string | null | undefined, search: string) => boolean;
        isHalfWidthNumeric: (value: string | null | undefined) => boolean;
        isHalfWidthAlphabet: (value: string | null | undefined) => boolean;
        isHalfWidthSymbols: (value: string | null | undefined) => boolean;
        isHalfWidthAlphanumeric: (value: string | null | undefined) => boolean;
        isHalfWidthAlphanumericAndSymbols: (value: string | null | undefined) => boolean;
        isHalfWidthKatakana: (value: string | null | undefined) => boolean;
        isHiragana: (value: string | null | undefined) => boolean;
        isKatakana: (value: string | null | undefined) => boolean;
        isFullOrHalfWidthKatakana: (value: string | null | undefined) => boolean;
        isInteger: (value: string | null | undefined) => boolean;
        isPhoneNumber: (value: string | null | undefined) => boolean;
        isPostalCode: (value: string | null | undefined) => boolean;
        isMailAddress: (value: string | null | undefined) => boolean;
        isIpv4Address: (value: string | null | undefined) => boolean;
        isIpv6Address: (value: string | null | undefined) => boolean;
        generateUuidV4: () => string;
        isUuidV4: (value: string | null | undefined) => boolean;
    };
    export default StringUtils;
}
declare module "@bizhermit/basic-utils/dist/datetime-utils" {
    const DatetimeUtils: {
        isValidNumber: (yearNum: unknown, monthNum: unknown, dayNum: unknown) => boolean;
        getDateByYMD: (yearNum: unknown, monthNum: unknown, dayNum: unknown) => Date;
        convertStringToDate: (str: string | null | undefined, whenFailedValue?: Date) => Date;
        convertToDate: (date: string | number | Date | null | undefined, whenFailedValue?: Date) => Date;
        convertDateToString: (date: Date | null | undefined, format?: string) => string;
        datetimeStr: () => string;
        copy: (date: Date | null | undefined) => Date;
        resetTime: (date: Date | null | undefined) => Date | null | undefined;
        getResetedTimeDate: () => Date | null | undefined;
        getDaysDiff: (before: Date | null | undefined, after: Date | null | undefined) => number;
        getDays: (date1: Date | null | undefined, date2: Date | null | undefined) => number;
    };
    export default DatetimeUtils;
}
declare module "@bizhermit/basic-utils/dist/number-utils" {
    const NumberUtils: {
        isNumber: (value: unknown) => value is number;
        isNull: (value: number | null | undefined) => value is null | undefined;
        thousandsSeparator: (value: number | null | undefined, whenNullValue?: string) => string;
        removeThousandsSeparator: (value: string | null | undefined, whenNullOrEmptyValue?: number) => number;
        add: (value1: number | null | undefined, value2: number | null | undefined) => number | null | undefined;
        adds: (...values: Array<number | null | undefined>) => number | null | undefined;
        minus: (value1: number | null | undefined, value2: number | null | undefined) => number | null | undefined;
        getFloatPosition: (value: number | null | undefined) => number;
    };
    export default NumberUtils;
}
