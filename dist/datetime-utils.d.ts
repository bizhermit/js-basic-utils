declare const DatetimeUtils: {
    isValidNumber: (yearNum: unknown, monthNum: unknown, dayNum: unknown) => boolean;
    getDateByYMD: (yearNum: unknown, monthNum: unknown, dayNum: unknown) => Date;
    convertStringToDate: (str: string | null | undefined, whenFailedValue?: Date | null | undefined) => Date | null | undefined;
    convertToDate: (date: string | number | Date | null | undefined, whenFailedValue?: Date | null | undefined) => Date | null | undefined;
    convertDateToString: (date: Date | null | undefined, format?: string) => string;
    datetimeStr: () => string;
    copy: (date: Date) => Date;
    resetTime: (date: Date) => Date;
    getResetedTimeDate: () => Date;
    getDaysDiff: (before: Date | null | undefined, after: Date | null | undefined) => number;
    getDays: (date1: Date | null | undefined, date2: Date | null | undefined) => number;
};
export default DatetimeUtils;
