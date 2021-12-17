declare const DatetimeUtils: {
    getResetedTimeDate: () => Date;
    datetimeStr: () => string;
    isValidNumber: (yearNum: any, monthNum: any, dayNum: any) => boolean;
    getDateByYMD: (yearNum: any, monthNum: any, dayNum: any) => Date;
    convertStringToDate: (str: string) => Date | null;
    convertDateToString: (date: Date, format: string) => string;
    copy: (date: Date) => Date;
    resetTime: (date: Date) => Date;
};
export default DatetimeUtils;
