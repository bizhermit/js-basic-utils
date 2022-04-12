# Basic types utilities

Give to the basic types utilities.
* StringUtils
* NumberUtils
* DatetimeUtils
* ArrayUtils

---

## Module

Install
```bash
npm i @bizhermit/basic-utils
```

### Example
```ts
import StringUtils, { isEmpty } from "@bizhermit/basic-utils/dist/string-utils";
import NumberUtils from "@bizhermit/basic-utils/dist/number-utils";
import DatetimeUtils from "@bizhermit/basic-utils/dist/datetime-utils";
import ArrayUtils from "@bizhermit/basic-utils/dist/array-utils";

console.log(isEmpty(""));
console.log(StringUtils.generateUuidV4());

console.log(NumberUtils.format(1234567.89, { fpad: 3 }));
console.log(NumberUtils.adds(1.1, 1.2, 1.3));

console.log(DatetimeUtils.format("2022-02-05", "yyyy/MM/dd"));
console.log(DatetimeUtils.equalDate(new Date(2022, 0, 31), new Date(2022, 1, 0)));

console.log(ArrayUtils.generateArray(24, (index) => index * 10));
```

---

## StringUtils

* **isString(value: unknown) => value is string**  
  return value is string.
  ```ts
  StringUtils.isString("string");  // => true
  StringUtils.isString(100);       // => false
  StringUtils.isString(null);      // => false
  StringUtils.isString(undefined); // => false
  ```

* ***isNull(value: string | null | undefined) => value is null | undefined***  
  return value is null or undefined.
  ```ts
  StringUtils.isNull(null);      // => true
  StringUtils.isNull(undefined); // => true
  StringUtils.isNull("");        // => false
  StringUtils.isNull("string");  // => false
  ```

* ***isEmpty(value: string | null | undefined) => value is null | undefined***  
  return value is null or undefined or empty.
  ```ts
  StringUtils.isEmpty(null);      // => true
  StringUtils.isEmpty(undefined); // => true
  StringUtils.isEmpty("");        // => true
  StringUtils.isEmpty("string");  // => false
  ```

* **isNotNull(value: string | null | undefined) => value is string**  
  return value is **not** null or undefined.
  ```ts
  StringUtils.isNotNull(null);      // => false
  StringUtils.isNotNull(undefined); // => false
  StringUtils.isNotNull("");        // => true
  StringUtils.isNotNull("string");  // => true
  ```

* **isNotEmpty(value: string | null | undefined) => value is string**  
  return value is **not** null or undefined or blank.
  ```ts
  StringUtils.isNotEmpty(null);      // => false
  StringUtils.isNotEmpty(undefined); // => false
  StringUtils.isNotEmpty("");        // => false
  StringUtils.isNotEmpty("string");  // => true
  ```

* **isAllEmpty(...value: Array<string | null | undefined>) => value is string**  
  return values is all empty.
  ```ts
  StringUtils.isAllEmpty(null, "", "");  // => true
  StringUtils.isAllEmpty(null, "", "3"); // => false
  ```

* **isAnyEmpty(...value: Array<string | null | undefined>) => value is string**  
  return values is any empty.
  ```ts
  StringUtils.isAllEmpty("1", "2", "3"); // => false
  StringUtils.isAllEmpty("1", "", "3");  // => true
  ```

* **notNull(value: string | null | undefined, whenNullValue: string) => string**  
  return value. if value is null or undefined, reutrn whenNullValue.
  ```ts
  StringUtils.notNull(null, "null value");      // => "null value"
  StringUtils.notNull(undefined, "null value"); // => "null value"
  StringUtils.notNull("", "null value");        // => ""
  StringUtils.notNull("string", "null value");  // => "string"
  ```

* **notEmpty(value: string | null | undefined, whenEmptyValue: string) => string**  
  return value. if value is null or undefined, reutrn whenNullOrEmptyValue.
  ```ts
  StringUtils.notEmpty(null, "null value");      // => "null value"
  StringUtils.notEmpty(undefined, "null value"); // => "null value"
  StringUtils.notEmpty("", "null value");        // => "null value"
  StringUtils.notEmpty("string", "null value");  // => "string"
  ```

* **contains(value: string | null | undefined, search: string) => boolean**  
  return value has search text.
  ```ts
  StringUtils.contains("ho1234ge", "hoge"); // => false
  StringUtils.contains("12hoge34", "hoge"); // => true
  ```

* **join(joinStr: string, ...values: Array<string | null | undefined>) => string**  
  return combined text at values. if value is null or undefined, skip combine.
  ```ts
  StringUtils.join(":", "value1", "value2", null, "value4");  // => "value1:value2:value4"
  StringUtils.join(":", ["value1", "value2", null, "value4"]);  // => "value1:value2:value4"
  ```

* **isHalfWidthNumeric(value: string | null | undefined) => boolean**  
  return value is half width numeric.
  ```ts
  StringUtils.isHalfWidthNumeric("123456"); // => true
  StringUtils.isHalfWidthNumeric("123c56"); // => false
  ```

* **isHalfWidthAlphabet(value: string | null | undefined) => boolean**  
  return value is half width alphabet.
  ```ts
  StringUtils.isHalfWidthAlphabet("abcdefg"); // => true
  StringUtils.isHalfWidthAlphabet("ab4defg"); // => false
  ```

* **isHalfWidthSymbols(value: string | null | undefined) => boolean**  
  return value is half width symbols.
  ```ts
  StringUtils.isHalfWidthSymbols("./,!"); // => true
  StringUtils.isHalfWidthSymbols("./,1"); // => false
  ```

* **isHalfWidthAlphanumeric(value: string | null | undefined) => boolean**  
  return value is half width alphabet or numeric.
  ```ts
  StringUtils.isHalfWidthAlphanumeric("123abc"); // => true
  StringUtils.isHalfWidthAlphanumeric("123");    // => true
  StringUtils.isHalfWidthAlphanumeric("abc");    // => true
  StringUtils.isHalfWidthAlphanumeric("abc,23"); // => false
  StringUtils.isHalfWidthAlphanumeric("あc,23"); // => false
  ```

* **isHalfWidthAlphanumericAndSymbols(value: string | null | undefined) => boolean**  
  return value is half width alphabet or numeric or symbols.
  ```ts
  StringUtils.isHalfWidthAlphanumericAndSymbols("123abc"); // => true
  StringUtils.isHalfWidthAlphanumericAndSymbols("123");    // => true
  StringUtils.isHalfWidthAlphanumericAndSymbols("abc");    // => true
  StringUtils.isHalfWidthAlphanumericAndSymbols("abc,23"); // => true
  StringUtils.isHalfWidthAlphanumericAndSymbols("あc,23"); // => false
  ```

* **isHalfWidthKatakana(value: string | null | undefined) => boolean**  
  return value is half width katakana.
  ```ts
  StringUtils.isHalfWidthKatakana("ｲﾛﾊ");    // => true
  StringUtils.isHalfWidthKatakana("イロハ"); // => false
  StringUtils.isHalfWidthKatakana("いろは"); // => false
  StringUtils.isHalfWidthKatakana("abc");    // => false
  ```

* **isKatakana(value: string | null | undefined) => boolean**  
  return value is full width katakana.
  ```ts
  StringUtils.isKatakana("ｲﾛﾊ");    // => false
  StringUtils.isKatakana("イロハ"); // => true
  StringUtils.isKatakana("イろハ"); // => false
  StringUtils.isKatakana("いろ歯"); // => false
  StringUtils.isKatakana("abc");   // => false
  ```

* **isFullOrHalfWidthKatakana(value: string | null | undefined) => boolean**  
  return value is katakana.
  ```ts
  StringUtils.isFullOrHalfWidthKatakana("ｲﾛﾊ");    // => true
  StringUtils.isFullOrHalfWidthKatakana("イロハ"); // => true
  StringUtils.isFullOrHalfWidthKatakana("イろハ"); // => false
  StringUtils.isFullOrHalfWidthKatakana("いろ歯"); // => false
  StringUtils.isFullOrHalfWidthKatakana("abc");   // => false
  ```

* **isHiragana(value: string | null | undefined) => boolean**  
  return value is hiragana.
  ```ts
  StringUtils.isHiragana("ｲﾛﾊ");    // => false
  StringUtils.isHiragana("イろハ"); // => false
  StringUtils.isHiragana("いろは"); // => true
  StringUtils.isHiragana("いろ歯"); // => false
  StringUtils.isHiragana("abc");   // => false
  ```

* **isInteger(value: string | null | undefined) => boolean**  
  return value is integer.
  ```ts
  StringUtils.isInteger("0");      // => true
  StringUtils.isInteger("123");    // => true
  StringUtils.isInteger("+1234");  // => true
  StringUtils.isInteger("-1234");  // => true
  StringUtils.isInteger("123.45"); // => false
  StringUtils.isInteger("0123");   // => false
  StringUtils.isInteger("+0123");  // => false
  ```

* **isPhoneNumber(value: string | null | undefined) => boolean**  
  return value is phone number. maybe only Japan.

* **isPostalCode(value: string | null | undefined) => boolean**  
  return value is post code. maybe only Japan.

* **isMailAddress(value: string | null | undefined) => boolean**  
  return value is mail address.

* **isIpv4Address(value: string | null | undefined) => boolean**  
  return value is ip v4 address.

* **isIpv6Address(value: string | null | undefined) => boolean**  
  return value is ip v6 address.

* **generateUuidV4() => string**  
  return uuid ver4.
  ```ts
  StringUtils.generateUuidV4(); // => e.g.) "54fce1e8-7e4e-4112-8b95-f03130e9f822"
  ```

* **isUuidV4(value: string | null | undefined) => boolean**  
  return value is uuid ver4.
  ```ts
  StringUtils.isUuidV4("54fce1e8-7e4e-4112-8b95-f03130e9f822"); // => true
  StringUtils.isUuidV4("uuidV4"); // => false
  ```

---

## NumberUtils

* **isNumber(value: unknown) => value is number**  
  return value is number object.
  ```ts
  NumberUtils.isNumber(100);       // => true
  NumberUtils.isNumber("string");  // => false
  NumberUtils.isNumber(null);      // => false
  NumberUtils.isNumber(undefined); // => false
  ```

* **isNull(value: number | null | undefined) => value is null | undefined**  
  return value is null or undefined.
  ```ts
  NumberUtils.isNull(null);      // => true
  NumberUtils.isNull(undefined); // => true
  NumberUtils.isNull(0);         // => false
  NumberUtils.isNull(100);       // => false
  ```

* ***format(value: number | null | undefined, options?: { thou?: boolean; fpad?: number; }) => string | undefined***  
  number format.
  ```ts
  NumberUtils.format(1234567);                  // => "1,234,567"
  NumberUtils.format(1234567, { thou: false }); // => "1234567"
  NumberUtils.format(1234.5, { fpad: 3 });      // => "1,234.500"
  ```

* **removeThousandsSeparator(value: string | null | undefined) => number | undefined**  
  return remove colon and convert number.
  ```ts
  NumberUtils.removeThousandsSeparator("1,234,567"); // => 1234567
  NumberUtils.removeThousandsSeparator("12,345.67"); // => 12345.67
  ```

* **add(value1: number | null | undefined, value2: number | null | undefined) => number**  
  return added value.
  ```ts
  NumberUtils.add(1.1, 1.2);          // => 2.3
  NumberUtils.add([undefinded, 1.2]); // => 1.2
  NumberUtils.add(1.1, null);         // => 1.1
  ```

* **adds(...values: Array<number | null | undefined>) => number**  
  return multi added value.
  ```ts
  NumberUtils.adds(1.1, 1.2, 1.3); // => 3.6
  NumberUtils.adds([1.1, 1.2, 1.3]); // => 3.6
  NumberUtils.adds([1.1, null, 1.3]); // => 2.4
  ```

* **minus(value1: number | null | undefined, value2: number | null | undefined) => number**  
  return minus value.
  ```ts
  NumberUtils.minus(2.5 - 1.1); // => 1.4
  ```

* **getFloatPosition(value: number | null | undefined) => number**  
  return float position.
  ```ts
  NumberUtils.getFloatPosition(null);   // => 0
  NumberUtils.getFloatPosition(123);    // => 0
  NumberUtils.getFloatPosition(123.45); // => 2
  ```

* **round(value: number, float?: number) => number**  
  return rounded value.
  ```ts
  NumberUtils.round(31.5);     // => 32
  NumberUtils.round(1.4);      // => 1
  NumberUtils.round(1.55, 1);  // => 1.6
  NumberUtils.round(1.544, 2); // => 1.54
  NumberUtils.round(1.464, 1); // => 1.5
  ```

* **ceil(value: number, float?: number) => number**  
  return rounded up value.
  ```ts
  NumberUtils.ceil(31.5);     // => 32
  NumberUtils.ceil(1.4);      // => 2
  NumberUtils.ceil(1.55, 1);  // => 1.6
  NumberUtils.ceil(1.544, 2); // => 1.55
  NumberUtils.ceil(1.464, 1); // => 1.5
  ```

* **floor(value: number, float?: number) => number**  
  return rounded down value.
  ```ts
  NumberUtils.floor(31.5);     // => 31
  NumberUtils.floor(1.4);      // => 1
  NumberUtils.floor(1.55, 1);  // => 1.5
  NumberUtils.floor(1.544, 2); // => 1.54
  NumberUtils.floor(1.464, 1); // => 1.4
  ```

* **average(...values: Array<number | null | undefined>) => number**  
  return average. null or undefined value is skip.
  ```ts
  NumberUtils.average(10, 20, 30, 40);       // => 25
  NumberUtils.average(10, 20, 30, 40, null); // => 25
  ```

* **nullZeroAverage(...values: Array<number | null | undefined>) => number**  
  return average. null or undefined value is 0.
  ```ts
  NumberUtils.average(10, 20, 30, 40);       // => 25
  NumberUtils.average(10, 20, 30, 40, null); // => 20
  ```

---

## DatetimeUtils

* ***convert(date: string | number | Date | null | undefined) => Date | undefined***  
  return date.
  ```ts
  DatetimeUtils.convert("2022");                          // => 2022-01-01T00:00:00.000Z
  DatetimeUtils.convert("2022-04");                       // => 2022-04-01T00:00:00.000Z
  DatetimeUtils.convert("2022-10-20");                    // => 2022-10-20T00:00:00.000Z
  DatetimeUtils.convert("2022-10-20 12");                 // => 2022-10-20T12:00:00.000Z
  DatetimeUtils.convert("2022-10-20 12:34");              // => 2022-10-20T12:34:00.000Z
  DatetimeUtils.convert("2022-10-20 12:34:56");           // => 2022-10-20T12:34:56.000Z
  DatetimeUtils.convert("2022-10-20 12:34:56.123");       // => 2022-10-20T12:34:56.123Z
  DatetimeUtils.convert("2022/10/20T12:34:56.123");       // => 2022-10-20T12:34:56.123Z
  DatetimeUtils.convert("2022年10月20日 12時34分56秒123"); // => 2022-10-20T12:34:56.123Z
  DatetimeUtils.convert(new Date(2022, 9, 20));           // => 2022-10-20T00:00:00.000Z
  ```

* ***format(date?: string | number | Date | null | undefined, pattern?: string, week?: Array<string> | "ja" | "en") => string | undefined***  
  return formated string.

  * `yyyy` year
  * `yy` year (last two digits)
  * `MM` month (zero padding as two digits)
  * `M` month
  * `dd` day (zero padding as two digits)
  * `d` day
  * `hh` hour (zero padding as two digits)
  * `h` hour
  * `mm` minutes (zero padding as two digits)
  * `m` minutes
  * `ss` seconds (zero padding as two digits)
  * `s` seconds
  * `SSS` milliseconds (zero padding as three digits)
  * `SS` milliseconds (zero padding as three digits and first two digits)
  * `S` milliseconds
  * `w` week

  ```ts
  const date = Date(2022, 1, 5, 6, 7, 8, 1);
  DatetimeUtils.format(date); // => "2022-02-05"
  DatetimeUtils.format(date, "yyyy/M/d"); // "2022/2/5"
  DatetimeUtils.format(date, "yyyy年M月d日(w)"); // "2022年2月5日(土)"
  DatetimeUtils.format(date, "yyyy-MM-dd(w) hh:mm:ss.SS", "en"); // "2022-02-05(Sat) 06:07:08.00"
  DatetimeUtils.format("2022-02-05", "yyyy/MM/dd"); // => "2022/02/05"
  ```


* **copy(date: Date) => Date**  
  return another date object.

* **removeTime(date: Date) => Date**  
  remove time.

* **getDate() => Date**  
  return removed current date.

* **getDatetime() => Date**  
  return current date.

* **getDaysDiff(before: Date | null | undefined, after: Date | null | undefined) => number**  
  return date diff.

* **getDays(date1: Date | null | undefined, date2: Date | null | undefined) => number**  
  return day count.

* **addDay(date: Date, add: number) => Date**  
  day add.

* **addMonth(date: Date, add: number) => Date**  
  month add.

* **addYear(date: Date, add: number) => Date**  
  year add.

* **getFirstDateAtMonth(date?: Date) => Date**  
  return first date at month.

* **getLastDateAtMonth(date?: Date) => Date**  
  return last date at month.

* **getFirstDateAtYear(date?: Date) => Date**  
  return first date at year.

* **getLastDateAtYear(date?: Date) => Date**  
  return last date at year.

* **getPrevDate(date?: Date) => Date**  
  return previous date.

* **getNextDate(date?: Date) => Date**  
  return next date.

* **getPrevWeekDate(date?: Date) => Date**  
  return previous week date.

* **getNextWeekDate(date?: Date) => Date**  
  return next week date.

* **getPrevMonthDate(date?: Date, sameYearMonth?: boolean) => Date**  
  return previous month date.

* **getNextMonthDate(date?: Date, sameYearMonth?: boolean) => Date**  
  return next month date.

* **getPrevYearDate(date?: Date, sameYearMonth?: boolean) => Date**  
  return previous year date.

* **getNextYearDate(date?: Date, sameYearMonth?: boolean) => Date**  
  return next month date.

* **equal(date1: Date | null | undefined, date2: Date | null | undefined) => boolean**  
  return date1's datetime and date2's datetime is same.

* **equalDate(date1: Date | null | undefined, date2: Date | null | undefined) => boolean**  
  return date1's date and date2's date is same.

* **equalDay(date1: Date | null | undefined, date2: Date | null | undefined) => boolean**  
  return date1's day and date2's day is same.

* **equalYearMonth(date1: Date | null | undefined, date2: Date | null | undefined) => boolean**  
  return date1's year,month and date2's year,month is same.

* **equalMonth(date1: Date | null | undefined, date2: Date | null | undefined) => boolean**  
  return date1's month and date2's month is same.

* **equalYear(date1: Date | null | undefined, date2: Date | null | undefined) => boolean**  
  return date1's year and date2's year is same.

* **equalWeek(date1: Date | null | undefined, date2: Date | null | undefined) => boolean**  
  return date1's week and date2's week is same.

* **equalMonthDay(date1: Date | null | undefined, date2: Date | null | undefined) => boolean**  
  return date1's month,day and date2's month,day is same.

* **isBefore(base: Date, date: Date) => boolean**  
  return date's datetime is before (not same).

* **isAfter(base: Date, date: Date) => boolean**  
  return date's datetime is after (not same).

* **isBeforeDate(base: Date, date: Date) => boolean**  
  return date's date is before (not same).

* **isAfterDate(base: Date, date: Date) => boolean**  
  return date's date is after (not same).

* **validContext(before: Date | null | undefined, after: Date | null | undefined) => boolean**  
  return valid before after.

---

## ArrayUtils

* **generateArray<T = unknown>(length: number, initValue?: T | ((index: number) => T)) => T[]**  
  return new array object.
  ```ts
  ArrayUtils.generateArray(5); // => [undefined, undefined, undefined, undefined, undefined]
  ArrayUtils.generateArray(5, "string"); // => ["string", "string", "string", "string", "string"]
  ArrayUtils.generateArray(5, (index) => {
    return index * 5;
  }); // => [0, 5, 10, 15, 20];
  ```

* **replaceValue<T = unknown, U = T>(array: T[], replace: (value: T) => U, copy?: boolean) => U[]**  
  return array item replace new value.
  ```ts
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = ArrayUtils.replaceValue(arr1, (value) => {
    return String(value * 5);
  });
  console.log(arr1); // => ["5", "10", "15", "20", "25"]
  console.log(arr2); // => ["5", "10", "15", "20", "25"]

  // copy
  const arr3 = [1, 2, 3, 4, 5];
  const arr4 = ArrayUtils.replaceValue(arr3, (value) => {
    return String(value * 5);
  }, true);
  console.log(arr3); // => [1, 2, 3, 4, 5]
  console.log(arr4); // => ["5", "10", "15", "20", "25"]
  ```
