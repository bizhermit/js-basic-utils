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
import StringUtils from "@bizhermit/basic-utils/dist/string-utils";
import NumberUtils from "@bizhermit/basic-utils/dist/number-utils";
import DatetimeUtils from "@bizhermit/basic-utils/dist/datetime-utils";
import ArrayUtils from "@bizhermit/basic-utils/dist/array-utils";

console.log(StringUtils.isNullOrEmpty(""));
console.log(StringUtils.generateUuidV4());

console.log(NumberUtils.format(1234567.89, { fpad: 3 }));
console.log(NumberUtils.adds(1.1, 1.2, 1.3));

console.log(DatetimeUtils.convertDateToString(new Date, "yyyy/MM/dd"));
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

* **isNull(value: string | null | undefined) => value is null | undefined**
  return value is null or undefined.
  ```ts
  StringUtils.isNull(null);      // => true
  StringUtils.isNull(undefined); // => true
  StringUtils.isNull("");        // => false
  StringUtils.isNull("string");  // => false
  ```

* **isNullOrEmpty(value: string | null | undefined) => value is null | undefined**
  return value is null or undefined or empty.
  ```ts
  StringUtils.isNullOrEmpty(null);      // => true
  StringUtils.isNullOrEmpty(undefined); // => true
  StringUtils.isNullOrEmpty("");        // => true
  StringUtils.isNullOrEmpty("string");  // => false
  ```

* **isNotNull(value: string | null | undefined) => value is string**
  return value is **not** null or undefined.
  ```ts
  StringUtils.isNotNull(null);      // => false
  StringUtils.isNotNull(undefined); // => false
  StringUtils.isNotNull("");        // => true
  StringUtils.isNotNull("string");  // => true
  ```

* **isNotNullOrEmpty(value: string | null | undefined) => value is string**
  return value is **not** null or undefined or empty.
  ```ts
  StringUtils.isNotNullOrEmpty(null);      // => false
  StringUtils.isNotNullOrEmpty(undefined); // => false
  StringUtils.isNotNullOrEmpty("");        // => false
  StringUtils.isNotNullOrEmpty("string");  // => true
  ```

* **notNull(value: string | null | undefined, whenNullValue: string) => string**
  return value. if value is null or undefined, reutrn whenNullValue.
  ```ts
  StringUtils.notNull(null, "null value");      // => "null value"
  StringUtils.notNull(undefined, "null value"); // => "null value"
  StringUtils.notNull("", "null value");        // => ""
  StringUtils.notNull("string", "null value");  // => "string"
  ```

* **notNullOrEmpty(value: string | null | undefined, whenNullOrEmptyValue: string) => string**
  return value. if value is null or undefined, reutrn whenNullOrEmptyValue.
  ```ts
  StringUtils.notNullOrEmpty(null, "null value");      // => "null value"
  StringUtils.notNullOrEmpty(undefined, "null value"); // => "null value"
  StringUtils.notNullOrEmpty("", "null value");        // => "null value"
  StringUtils.notNullOrEmpty("string", "null value");  // => "string"
  ```

* **contains(value: string | null | undefined, search: string) => boolean**
  return value has search text.
  ```ts
  StringUtils.contains("ho1234ge", "hoge"); // => false
  StringUtils.contains("12hoge34", "hoge"); // => true
  ```

* **join(joinStr?: string, ...values: Array<string | null | undefined>) => string**
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

* **isHiragana(value: string | null | undefined) => boolean**
  return value is hiragana.
  ```ts
  StringUtils.isHiragana("ｲﾛﾊ");    // => false
  StringUtils.isHiragana("イろハ"); // => false
  StringUtils.isHiragana("いろは"); // => true
  StringUtils.isHiragana("いろ歯"); // => false
  StringUtils.isHiragana("abc");   // => false
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

* **isInteger(value: string | null | undefined) => boolean**
  return value is integer.
  ```ts
  StringUtils.isInteger("1234");  // => true
  StringUtils.isInteger("0123");  // => false
  StringUtils.isInteger("+0123"); // => false
  StringUtils.isInteger("+1234"); // => true
  StringUtils.isInteger("-1234"); // => true
  StringUtils.isInteger("0");     // => true
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
  StringUtils.isString(100);       // => true
  StringUtils.isString("string");  // => false
  StringUtils.isString(null);      // => false
  StringUtils.isString(undefined); // => false
  ```

* **isNull(value: number | null | undefined) => value is null | undefined**
valueがnullまたはundefinedであるかどうかを返します。

* **thousandsSeparator(value: number | null | undefined, whenNullValue?: string) => string**
valueを三桁区切りの文字列に変換します。valueがnullまたはundefinedの場合は、whenNullValueを返します。  
※ formatの使用を推奨

* **removeThousandsSeparator(value: string | null | undefined, whenNullOrEmptyValue?: number) => number**
value（string）から三桁区切りのコンマを除去した数値を返します。

* **format(value: number, options?: { nullVal?: string; thou?: boolean; fpad?: number; }) => string | undefined**
数値をフォーマットします。
- nullVal: valueがnullまたはundefinedの場合に戻り値として使用されます。
- thou: 三桁区切りをするかどうかを指定します。初期値はtrueです。
- fpad: 少数部のゼロ埋めの桁数です。初期値は0です。

* **add(value1: number | null | undefined, value2: number | null | undefined) => number**
value1にvalue2を加算した値を返します。浮動小数点を含む演算に対応しています。

* **adds(...values: Array<number | null | undefined>) => number**
valuesを合算した値を返します。浮動小数点を含む演算に対応しています。

* **minus(value1: number | null | undefined, value2: number | null | undefined) => number**
value1からvalue2を減算した値を返します。浮動小数点を含む演算に対応しています。

* **getFloatPosition(value: number | null | undefined) => number**
valueの少数部の桁数（少数第n位）を返します。

* **round(value: number, float?: number) => number**
valueを四捨五入した値を返します。floatで少数部の桁数を指定できます。

* **ceil(value: number, float?: number) => number**
valueを切り捨てした値を返します。floatで少数部の桁数を指定できます。

* **floor(value: number, float?: number) => number**
valueを切り上げした値を返します。floatで少数部の桁数を指定できます。

* **average(...values: Array<number | null | undefined>) => number**
valuesの平均値を返します。nullまたはundefinedの場合は集計されません。

* **nullZeroAverage(...values: Array<number | null | undefined>) => number**
valuesの平均値を返します。nullまたはundefinedの場合は0として集計されます。

---

## DatetimeUtils

* **isValidNumber(yearNum: unknown, monthNum: unknown, dayNum: unknown) => boolean**
  年・月・日の値が日付の値として適切かどうかを返します。  
  ```ts
  isValidNumber(2022, 1, 1) => true // 2022/1/1
  isValidNumber(2022, 0, 1) => false // 2021/12/1
  ```

* **getDateByYMD(yearNum: unknown, monthNum: unknown, dayNum: unknown) => Date**
  年・月・日の値からDateを返します。

* **convertStringToDate(str: string | null | undefined, whenFailedValue?: Date) => Date**
  strDate型に変換した値を返します。変換に失敗した場合はwhenFailedValueを返します。  
  対応フォーマットは以下の通り。
    - ハイフン（-）で区切られている（yyyy-MM-dd）（yyyy-M-d）
    - スラッシュ（/）で区切られている（yyyy/MM/dd）（yyyy/M/d）
    - 数字八桁（yyyyMMdd）
    - 年月日で区切られている（yyyy年MM月dd日）（yyyy年M月d日）

* **convertToDate(date: string | number | Date | null | undefined, whenFailedValue?: Date) => Date**
Dateに変換した値を返します。変換に失敗した場合はwhenFailedValueを返します。  
stringおよびnumberの場合はconvertStringToDateに基づいて変換されます。

* **convertDateToString(date: Date | null | undefined, format: string) => string**
dateをフォーマットに基づいて文字列に変換した値を返します。未指定の場合は"yyyy-MM-dd"です。
  - yyyy: 西暦
  - yy: 西暦下二桁
  - MM: 月（ゼロ埋め二桁）
  - M: 月
  - dd: 日（ゼロ埋め二桁）
  - d: 日
  - hh: 時（ゼロ埋め二桁）
  - h: 時
  - mm: 分（ゼロ埋め二桁）
  - m: 分
  - ss: 秒（ゼロ埋め二桁）
  - s: 秒

* **datetimeStr() => string**
現在時刻をフォーマット：yyyyMMddHHmmの文字列で取得します。

* **copy(date: Date) => Date**
コピーした日付オブジェクトを返します。

* **resetTime(date: Date) => Date**
dateの時・分・秒・ミリ秒を0にした値を返します。

* **getResetedTimeDate() => Date**
時・分・秒・ミリ秒を0にした現在日付を返します。

* **getDaysDiff(before: Date | null | undefined, after: Date | null | undefined) => number**
二つの日付の日数差を返します。

* **getDays(date1: Date | null | undefined, date2: Date | null | undefined) => number**
二つの日付の日数を返します。

* **getFirstDateAtMonth(date?: Date) => Date**
date（未指定の場合現在日）の月初日を返します。

* **getLastDateAtMonth(date?: Date) => Date**
date（未指定の場合現在日）の月末日を返します。

* **getFirstDateAtYear(date?: Date) => Date**
date（未指定の場合現在日）の年初日を返します。

* **getLastDateAtYear(date?: Date) => Date**
date（未指定の場合現在日）の年末日を返します。

* **validContext(before: Date | null | undefined, after: Date | null | undefined) => boolean**
beforeとafterの前後関係が適切かどうかを返します。  
※ beforeとafterが同日の場合はtrueを返します。

* **addDay(date: Date | undefined, add: number) => Date**
date（未指定の場合現在日）に日数を加算した値を返します。

* **getPrevDate(date?: Date) => Date**
date（未指定の場合現在日）の前日を返します。

* **getNextDate(date?: Date) => Date**
date（未指定の場合現在日）の翌日を返します。

* **getPrevWeekDate(date?: Date) => Date**
date（未指定の場合現在日）の前週日を返します。

* **getNextWeekDate(date?: Date) => Date**
date（未指定の場合現在日）の翌週日を返します。

* **getPrevMonthDate(date?: Date, sameYearMonth?: boolean) => Date**
date（未指定の場合現在日）の前月日を返します。sameYearMonthにtrueを設定した場合は年月を揃えます。

* **getNextMonthDate(date?: Date, sameYearMonth?: boolean) => Date**
date（未指定の場合現在日）の翌月日を返します。sameYearMonthにtrueを設定した場合は年月を揃えます。

* **getPrevYearDate(date?: Date, sameYearMonth?: boolean) => Date**
date（未指定の場合現在日）の前年日を返します。sameYearMonthにtrueを設定した場合は年月を揃えます。

* **getNextYearDate(date?: Date, sameYearMonth?: boolean) => Date**
date（未指定の場合現在日）の翌年日を返します。sameYearMonthにtrueを設定した場合は年月を揃えます。

* **equalDate(date1: Date | null | undefined, date2: Date | null | undefined) => boolean**
年月日が一致しているかどうかを返します。

* **equalDay(date1: Date | null | undefined, date2: Date | null | undefined) => boolean**
日が一致しているかどうかを返します。

* **equalYearMonth(date1: Date | null | undefined, date2: Date | null | undefined) => boolean**
年月が一致しているかどうかを返します。

* **equalMonth(date1: Date | null | undefined, date2: Date | null | undefined) => boolean**
月が一致しているかどうかを返します。

* **equalYear(date1: Date | null | undefined, date2: Date | null | undefined) => boolean**
年が一致しているかどうかを返します。

* **equalWeek(date1: Date | null | undefined, date2: Date | null | undefined) => boolean**
曜日が一致しているかどうかを返します。

---

## ArrayUtils

* **generateArray<T = unknown>(length: number, initValue: (index: number) => T) => T[]**
  return new array object.
  ```ts
  const arr = ArrayUtils.generateArray(5, (index) => {
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
