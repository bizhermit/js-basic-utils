declare namespace DatetimeUtils {
    namespace Week {
        const ja: readonly ["日", "月", "火", "水", "木", "金", "土"];
        const en: readonly ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    }
    namespace Month {
        const En: readonly ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const en: readonly ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];
        const Ja: readonly ["１月", "２月", "３月", "４月", "５月", "６月", "７月", "８月", "９月", "１０月", "１１月", "１２月"];
    }
    const convert: (date: string | number | Date | null | undefined) => Date | undefined;
    const format: (date?: string | number | Date | null | undefined, pattern?: string, week?: Array<string> | "ja" | "en") => string | undefined;
    const copy: (date: Date) => Date;
    const removeTime: (date: Date, copy?: boolean) => Date;
    const getDate: () => Date;
    const getDatetime: () => Date;
    const getDaysDiff: (before: Date | null | undefined, after: Date | null | undefined) => number;
    const getDays: (date1: Date | null | undefined, date2: Date | null | undefined) => number;
    const addDay: (date: Date, add: number) => Date;
    const addMonth: (date: Date, add: number) => Date;
    const addYear: (date: Date, add: number) => Date;
    const getFirstDateAtMonth: (date?: Date) => Date;
    const getLastDateAtMonth: (date?: Date) => Date;
    const getFirstDateAtYear: (date?: Date) => Date;
    const getLastDateAtYear: (date?: Date) => Date;
    const getPrevDate: (date?: Date) => Date;
    const getNextDate: (date?: Date) => Date;
    const getPrevWeekDate: (date?: Date) => Date;
    const getNextWeekDate: (date?: Date) => Date;
    const getPrevMonthDate: (date?: Date, sameYearMonth?: boolean) => Date;
    const getNextMonthDate: (date?: Date, sameYearMonth?: boolean) => Date;
    const getPrevYearDate: (date?: Date, sameYearMonth?: boolean) => Date;
    const getNextYearDate: (date?: Date, sameYearMonth?: boolean) => Date;
    const equal: (date1: Date | null | undefined, date2: Date | null | undefined) => boolean;
    const equalDate: (date1: Date | null | undefined, date2: Date | null | undefined) => boolean;
    const equalDay: (date1: Date | null | undefined, date2: Date | null | undefined) => boolean;
    const equalYearMonth: (date1: Date | null | undefined, date2: Date | null | undefined) => boolean;
    const equalMonth: (date1: Date | null | undefined, date2: Date | null | undefined) => boolean;
    const equalYear: (date1: Date | null | undefined, date2: Date | null | undefined) => boolean;
    const equalWeek: (date1: Date | null | undefined, date2: Date | null | undefined) => boolean;
    const equalMonthDay: (date1: Date | null | undefined, date2: Date | null | undefined) => boolean;
    const isBefore: (base: Date, date: Date) => boolean;
    const isAfter: (base: Date, date: Date) => boolean;
    const isBeforeDate: (base: Date, date: Date) => boolean;
    const isAfterDate: (base: Date, date: Date) => boolean;
    const validContext: (before: Date | null | undefined, after: Date | null | undefined) => boolean;
}
export default DatetimeUtils;
export declare const dateFormat: (date?: string | number | Date | null | undefined, pattern?: string, week?: Array<string> | "ja" | "en") => string | undefined;
export declare const convertDate: (date: string | number | Date | null | undefined) => Date | undefined;
