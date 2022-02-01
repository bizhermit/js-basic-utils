# Basic types utilities

各基本クラスのユーティリティーを提供します。

- StringUtils
- NumberUtils
- DatetimeUtils
- ArrayUtils

---

## StringUtils

#### isString(value: unknown) => value is string
オブジェクトの型がstringであるかどうかを返します。

####  isNull(value: string | null | undefined) => value is null | undefined
valueがnullまたはundefindであるかどうかを返します。

#### isNullOrEmpty(value: string | null | undefined) => value is null | undefined
valueがnullまたはundefind、ブランクであるかどうかを返します。

#### isNotNull(value: string | null | undefined) => value is string
valueがnullまたはundefindではないかどうかを返します。

#### isNotNullOrEmpty(value: string | null | undefined) => value is string
valueがnullまたはundefind、ブランクではないかどうかを返します。

#### notNull(value: string | null | undefined, whenNullValue: string) => string
valueがnullまたはundefindの場合、whenNullValueに置き換えた値を返します。

#### notNullOrEmpty(value: string | null | undefined, whenNullOrEmptyValue: string) => string
valueがnullまたはundefind、ブランクの場合、whenNullValueに置き換えた値を返します。

#### contains(value: string | null | undefined, search: string) => boolean
valueの中にsearchで指定された文字列が含まれるかどうかを返します。

#### join(joinStr?: string, ...values: Array<string | null | undefined>) => string
valuesをjoinStrで結合した文字列を返します。valuesはnull、undefind、ブランクだった場合は結合をスキップします。  

#### isHalfWidthNumeric(value: string | null | undefind) => boolean
valueが半角数字であるかどうかを返します。

#### isHalfWidthAlphabet(value: string | null | undefind) => boolean
valueが半角英字であるかどうかを返します。

#### isHalfWidthSymbols(value: string | null | undefind) => boolean
valueが半角記号であるかどうかを返します。

#### isHalfWidthAlphanumeric(value: string | null | undefind) => boolean
valueが半角英数字であるかどうかを返します。

#### isHalfWidthAlphanumericAndSymbols(value: string | null | undefind) => boolean
valueが半角英数字記号であるかどうかを返します。

#### isHalfWidthKatakana(value: string | null | undefind) => boolean
valueが半角カタカナであるかどうかを返します。

#### isHiragana(value: string | null | undefind) => boolean
valueが全角ひらがなであるかどうかを返します。

#### isKatakana(value: string | null | undefind) => boolean
valueが全角カタカナであるかどうかを返します。

#### isFullOrHalfWidthKatakana(value: string | null | undefind) => boolean
valueが半角または全角のカタカナであるかどうかを返します。

#### isInteger(value: string | null | undefind) => boolean
valueが数値を表しているかどうかを返します。

#### isPhoneNumber(value: string | null | undefind) => boolean
valueが電話番号のフォーマットであるかどうかを返します。

#### isPostalCode(value: string | null | undefind) => boolean
valueが郵便番号のフォーマットであるかどうかを返します。

#### isMailAddress(value: string | null | undefind) => boolean
valueがメールアドレスのフォーマットであるかどうかを返します。

#### isIpv4Address(value: string | null | undefind) => boolean
valueがIPv4アドレスのフォーマットであるかどうかを返します。

#### isIpv6Address(value: string | null | undefind) => boolean
valueがIPv6アドレスのフォーマットであるかどうかを返します。

#### generateUuidV4() => string
UUID Ver4を生成します。

#### isUuidV4(value: string | null | undefind) => boolean
UUID Ver4であるかどうかを返します。

---

## NumberUtils

#### isNumber(value: unknown) => value is number
オブジェクトの型がnumberであるかどうかを返します。

#### isNull(value: number | null | undefined) => value is null | undefined
valueがnullまたはundefindであるかどうかを返します。

#### thousandsSeparator(value: number | null | undefined, whenNullValue?: string) => string
valueを三桁区切りの文字列に変換します。valueがnullまたはundefindの場合は、whenNullValueを返します。

#### removeThousandsSeparator(value: string | null | undefined, whenNullOrEmptyValue?: number) => number
value（string）から三桁区切りのコンマを除去した数値を返します。

#### add(value1: number | null | undefined, value2: number | null | undefined) => number
value1にvalue2を加算した値を返します。浮動小数点を含む演算に対応しています。

#### adds(...values: Array<number | null | undefined>) => number
valuesを合算した値を返します。浮動小数点を含む演算に対応しています。

#### minus(value1: number | null | undefined, value2: number | null | undefined) => number
value1からvalue2を減算した値を返します。浮動小数点を含む演算に対応しています。

#### getFloatPosition(value: number | null | undefined) => number
valueの少数部の桁数（少数第n位）を返します。

#### round(value: number, float?: number) => number
valueを四捨五入した値を返します。floatで少数部の桁数を指定できます。

#### ceil(value: number, float?: number) => number
valueを切り捨てした値を返します。floatで少数部の桁数を指定できます。

#### floor(value: number, float?: number) => number
valueを切り上げした値を返します。floatで少数部の桁数を指定できます。

#### average(...values: Array<number | null | undefined>) => number
valuesの平均値を返します。nullまたはundefindの場合は集計されません。

#### nullZeroAverage(...values: Array<number | null | undefined>) => number
valuesの平均値を返します。nullまたはundefindの場合は0として集計されます。

---

## DatetimeUtils

#### isValidNumber(yearNum: unknown, monthNum: unknown, dayNum: unknown) => boolean
年・月・日の値が日付の値として適切かどうかを返します。  
```ts
isValidNumber(2022, 1, 1) => true // 2022/1/1
isValidNumber(2022, 0, 1) => false // 2021/12/1
```

#### getDateByYMD(yearNum: unknown, monthNum: unknown, dayNum: unknown) => Date
年・月・日の値からDateを返します。

#### convertStringToDate(str: string | null | undefined, whenFailedValue?: Date) => Date
strDate型に変換した値を返します。変換に失敗した場合はwhenFailedValueを返します。  
対応フォーマットは以下の通り。
  - ハイフン（-）で区切られている（yyyy-MM-dd）（yyyy-M-d）
  - スラッシュ（/）で区切られている（yyyy/MM/dd）（yyyy/M/d）
  - 数字八桁（yyyyMMdd）
  - 年月日で区切られている（yyyy年MM月dd日）（yyyy年M月d日）

#### convertToDate(date: string | number | Date | null | undefined, whenFailedValue?: Date) => Date
Dateに変換した値を返します。変換に失敗した場合はwhenFailedValueを返します。  
stringおよびnumberの場合はconvertStringToDateに基づいて変換されます。

#### convertDateToString(date: Date | null | undefined, format: string) => string
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

#### datetimeStr() => string
現在時刻をフォーマット：yyyyMMddHHmmの文字列で取得します。

#### copy(date: Date) => Date
コピーした日付オブジェクトを返します。

#### resetTime(date: Date) => Date
dateの時・分・秒・ミリ秒を0にした値を返します。

#### getResetedTimeDate() => Date
時・分・秒・ミリ秒を0にした現在日付を返します。

#### getDaysDiff(before: Date | null | undefined, after: Date | null | undefined) => number
二つの日付の日数差を返します。

#### getDays(date1: Date | null | undefined, date2: Date | null | undefined) => number
二つの日付の日数を返します。

#### getFirstDateAtMonth(date?: Date) => Date
date（未指定の場合現在日）の月初日を返します。

#### getLastDateAtMonth(date?: Date) => Date
date（未指定の場合現在日）の月末日を返します。

#### getFirstDateAtYear(date?: Date) => Date
date（未指定の場合現在日）の年初日を返します。

#### getLastDateAtYear(date?: Date) => Date
date（未指定の場合現在日）の年末日を返します。

#### validContext(before: Date | null | undefined, after: Date | null | undefined) => boolean
beforeとafterの前後関係が適切かどうかを返します。  
※ beforeとafterが同日の場合はtrueを返します。

#### addDay(date: Date | undefined, add: number) => Date
date（未指定の場合現在日）に日数を加算した値を返します。

#### getPrevDate(date?: Date) => Date
date（未指定の場合現在日）の前日を返します。

#### getNextDate(date?: Date) => Date
date（未指定の場合現在日）の翌日を返します。

#### getPrevWeekDate(date?: Date) => Date
date（未指定の場合現在日）の前週日を返します。

#### getNextWeekDate(date?: Date) => Date
date（未指定の場合現在日）の翌週日を返します。

#### getPrevMonthDate(date?: Date, sameYearMonth?: boolean) => Date
date（未指定の場合現在日）の前月日を返します。sameYearMonthにtrueを設定した場合は年月を揃えます。

#### getNextMonthDate(date?: Date, sameYearMonth?: boolean) => Date
date（未指定の場合現在日）の翌月日を返します。sameYearMonthにtrueを設定した場合は年月を揃えます。

#### getPrevYearDate(date?: Date, sameYearMonth?: boolean) => Date
date（未指定の場合現在日）の前年日を返します。sameYearMonthにtrueを設定した場合は年月を揃えます。

#### getNextYearDate(date?: Date, sameYearMonth?: boolean) => Date
date（未指定の場合現在日）の翌年日を返します。sameYearMonthにtrueを設定した場合は年月を揃えます。

#### equalDate(date1: Date | null | undefined, date2: Date | null | undefined) => boolean
年月日が一致しているかどうかを返します。

#### equalDay(date1: Date | null | undefined, date2: Date | null | undefined) => boolean
日が一致しているかどうかを返します。

#### equalYearMonth(date1: Date | null | undefined, date2: Date | null | undefined) => boolean
年月が一致しているかどうかを返します。

#### equalMonth(date1: Date | null | undefined, date2: Date | null | undefined) => boolean
月が一致しているかどうかを返します。

#### equalYear(date1: Date | null | undefined, date2: Date | null | undefined) => boolean
年が一致しているかどうかを返します。

#### equalWeek(date1: Date | null | undefined, date2: Date | null | undefined) => boolean
曜日が一致しているかどうかを返します。

---

## ArrayUtils

#### generateArray<T = unknown>(length: number, initValue: (index: number) => T) => T[]
新しい配列を返します。initValueの戻り値で値を初期化します。

#### replaceValue<T = unknown, U = T>(array: T_1[], replace: (value: T_1) => U, copy?: boolean) => U[]
配列の値を置換します。copyにtrueを設定すると、新しい配列を返します。
