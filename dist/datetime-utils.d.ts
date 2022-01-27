declare const DatetimeUtils: {
    isValidNumber: (yearNum: any, monthNum: any, dayNum: any) => boolean;
    getDateByYMD: (yearNum: any, monthNum: any, dayNum: any) => Date;
    convertStringToDate: (str: string) => Date | null;
    convertDateToString: (date: Date, format: string) => string;
    datetimeStr: () => string;
    copy: (date: Date) => Date;
    resetTime: (date: Date) => Date;
    getResetedTimeDate: () => Date;
    getDaysDiff: (before: Date, after: Date) => number;
    getDays: (date1: Date, date2: Date) => number;
};
export default DatetimeUtils;
