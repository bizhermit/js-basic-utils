namespace DatetimeUtils {

  export namespace Week {
    export const ja = ["日", "月", "火", "水", "木", "金", "土"] as const;
    export const en = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;
  };

  export namespace Month {
    export const En = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] as const;
    export const en = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."] as const;
    export const Ja = ["１月", "２月", "３月", "４月", "５月", "６月", "７月", "８月", "９月", "１０月", "１１月", "１２月"] as const;
  };

  export const convert = (date: string | number | Date | null | undefined) => {
    if (date == null) return undefined;
    if (typeof date === "string") {
      let ctx = date.match(/^(\d{4})(\d{2}|$)(\d{2}|$)(\d{2}|$)(\d{2}|$)(\d{2}|$)(\d{3}|$)/);
      if (!ctx) ctx = date.match(/^(\d+)?(?:-|\/|年|$)(\d+)?(?:-|\/|月|$)(\d+)?(?:\s*|日\s*|T|$)(\d+)?(?::|時|$)(\d+)?(?::|分|$)(\d+)?(?:.|秒|$)(\d+)?(?:.*|$)/);
      if (ctx) return new Date(Number(ctx[1]), Number(ctx[2] || 1) - 1, Number(ctx[3] || 1), Number(ctx[4] || 0), Number(ctx[5] || 0), Number([ctx[6] || 0]), Number(ctx[7] || 0));
      ctx = date.match(/^(?:\w+)?\s(\w+)?\s(\d+)?\s(\d+)?\s(\d+)?:(\d+)?:(\d+)?/);
      if (ctx) {
        const re = new RegExp(`^${ctx[1]}`, "i");
        return new Date(Number(ctx[3]), Math.max(Month.En.findIndex(v => re.exec(v)), 0), Number(ctx[2]), Number(ctx[4]), Number(ctx[5]), Number(ctx[6]));
      }
      return undefined;
    }
    if (typeof date === "number") return new Date(date);
    return new Date(date);
  };

  export const format = (date?: string | number | Date | null | undefined, pattern = "yyyy-MM-dd", week?: Array<string> | "ja" | "en") => {
    const d = convert(date);
    if (d == null) return undefined;
    return pattern
      .replace("yyyy", String(d.getFullYear()))
      .replace("yy", `00${d.getFullYear()}`.slice(-2))
      .replace("MM", `0${d.getMonth() + 1}`.slice(-2))
      .replace("M", String(d.getMonth() + 1))
      .replace("dd", `0${d.getDate()}`.slice(-2))
      .replace("d", String(d.getDate()))
      .replace("hh", `0${d.getHours()}`.slice(-2))
      .replace("h", String(d.getHours()))
      .replace("mm", `0${d.getMinutes()}`.slice(-2))
      .replace("m", String(d.getMinutes()))
      .replace("ss", `0${d.getSeconds()}`.slice(-2))
      .replace("s", String(d.getSeconds()))
      .replace("SSS", `00${d.getMilliseconds()}`.slice(-3))
      .replace("SS", `00${d.getMilliseconds()}`.slice(-3).slice(2))
      .replace("S", String(d.getMilliseconds()))
      .replace("w", (week === "ja" ? Week.ja : (week === "en" ? Week.en : week ?? Week.ja))[d.getDay()]);
  };

  const getCopyOrCurrentDate = (date?: Date) => date ? DatetimeUtils.copy(date) : DatetimeUtils.getDate();

  export const copy = (date: Date) => {
    return date == null ? date : new Date(date);
  };

  export const removeTime = (date: Date, copy = false) => {
    if (date == null) return date;
    let d = copy ? DatetimeUtils.copy(date) : date;
    d.setHours(0, 0, 0, 0);
    return d;
  };

  export const getDate = () => {
    return DatetimeUtils.removeTime(new Date());
  };

  export const getDatetime = () => new Date();

  export const getDaysDiff = (before: Date | null | undefined, after: Date | null | undefined) => {
    if (before == null || after == null) return 0;
    return Math.floor(after.getTime() / 86400000) - Math.floor(before.getTime() / 86400000);
  };

  export const getDays = (date1: Date | null | undefined, date2: Date | null | undefined) => {
    if (date1 == null && date2 == null) return 0;
    return Math.abs(DatetimeUtils.getDaysDiff(date1, date2)) + 1;
  };

  export const addDay = (date: Date, add: number) => {
    date.setDate(date.getDate() + add);
    return date;
  };

  export const addMonth = (date: Date, add: number) => {
    date.setMonth(date.getMonth() + add);
    return date;
  };

  export const addYear = (date: Date, add: number) => {
    date.setFullYear(date.getFullYear() + add);
    return date;
  };

  export const getFirstDateAtMonth = (date = new Date()) => {
    return new Date(date.getFullYear(), date.getMonth(), 1);
  };

  export const getLastDateAtMonth = (date = new Date()) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
  };

  export const getFirstDateAtYear = (date = new Date()) => {
    return new Date(date.getFullYear(), 0, 1);
  };

  export const getLastDateAtYear = (date = new Date()) => {
    return new Date(date.getFullYear(), 11, 31);
  };

  export const getPrevDate = (date?: Date) => {
    return DatetimeUtils.addDay(getCopyOrCurrentDate(date), -1);
  };

  export const getNextDate = (date?: Date) => {
    return DatetimeUtils.addDay(getCopyOrCurrentDate(date), 1);
  };

  export const getPrevWeekDate = (date?: Date) => {
    return DatetimeUtils.addDay(getCopyOrCurrentDate(date), -7);
  };

  export const getNextWeekDate = (date?: Date) => {
    return DatetimeUtils.addDay(getCopyOrCurrentDate(date), 7);
  };

  export const getPrevMonthDate = (date = new Date(), sameYearMonth = false) => {
    const ret = new Date(date.getFullYear(), date.getMonth() - 1, date.getDate())
    if (sameYearMonth === true && ret.getDate() !== date.getDate()) ret.setDate(0);
    return ret;
  };

  export const getNextMonthDate = (date = new Date(), sameYearMonth = false) => {
    const ret = new Date(date.getFullYear(), date.getMonth() + 1, date.getDate());;
    if (sameYearMonth === true && ret.getDate() !== date.getDate()) ret.setDate(0);
    return ret;
  };

  export const getPrevYearDate = (date = new Date(), sameYearMonth = false) => {
    const ret = new Date(date.getFullYear() - 1, date.getMonth(), date.getDate());;
    if (sameYearMonth === true && ret.getDate() !== date.getDate()) ret.setDate(0);
    return ret;
  };

  export const getNextYearDate = (date = new Date(), sameYearMonth = false) => {
    const ret = new Date(date.getFullYear() + 1, date.getMonth(), date.getDate());
    if (sameYearMonth === true && ret.getDate() !== date.getDate()) ret.setDate(0);
    return ret;
  };

  export const equal = (date1: Date | null | undefined, date2: Date | null | undefined) => {
    return date1?.getTime() == date2?.getTime();
  };

  export const equalDate = (date1: Date | null | undefined, date2: Date | null | undefined) => {
    if (date1 == null || date2 == null) return false;
    return date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear();
  };

  export const equalDay = (date1: Date | null | undefined, date2: Date | null | undefined) => {
    if (date1 == null || date2 == null) return false;
    return date1.getDate() === date2.getDate();
  };

  export const equalYearMonth = (date1: Date | null | undefined, date2: Date | null | undefined) => {
    if (date1 == null || date2 == null) return false;
    return date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear();
  };

  export const equalMonth = (date1: Date | null | undefined, date2: Date | null | undefined) => {
    if (date1 == null || date2 == null) return false;
    return date1.getMonth() === date2.getMonth();
  };

  export const equalYear = (date1: Date | null | undefined, date2: Date | null | undefined) => {
    if (date1 == null || date2 == null) return false;
    return date1.getFullYear() === date2.getFullYear();
  };

  export const equalWeek = (date1: Date | null | undefined, date2: Date | null | undefined) => {
    if (date1 == null || date2 == null) return false;
    return date1.getDay() === date2.getDay();
  };

  export const equalMonthDay = (date1: Date | null | undefined, date2: Date | null | undefined) => {
    if (date1 == null || date2 == null) return false;
    return date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth();
  };

  export const isBefore = (base: Date, date: Date) => {
    return base.getTime() > date.getTime();
  };

  export const isAfter = (base: Date, date: Date) => {
    return base.getTime() < date.getTime();
  };

  export const isBeforeDate = (base: Date, date: Date) => {
    return Math.floor(base.getTime() / 86400000) > Math.floor(date.getTime() / 86400000);
  };

  export const isAfterDate = (base: Date, date: Date) => {
    return Math.floor(base.getTime() / 86400000) < Math.floor(date.getTime() / 86400000)
  };

  export const validContext = (before: Date | null | undefined, after: Date | null | undefined) => {
    if (before == null || after == null) return true;
    return DatetimeUtils.getDaysDiff(before, after) >= 0;
  };

};

export default DatetimeUtils;
export const dateFormat = DatetimeUtils.format;
export const convertDate = DatetimeUtils.convert;