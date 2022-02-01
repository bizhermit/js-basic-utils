const StringUtils = require("./dist/string-utils").default;
const NumberUtils = require("./dist/number-utils").default;
const DatetimeUtils = require("./dist/datetime-utils").default;
const ArrayUtils = require("./dist/array-utils").default;

// console.log(StringUtils.isUuidV4(StringUtils.generateUuidV4()));
// console.log(StringUtils.join(":", "hoge", "fuga", "hage"));

// console.log(NumberUtils.adds(1.111, 2.222, 3.333, 4.444, 5.555));
// const num = 10.5;
// console.log(NumberUtils.round(num));
// console.log(NumberUtils.ceil(num));
// console.log(NumberUtils.floor(num));
// for (let i = 0; i < 17; i++) {
//     // console.log(NumberUtils.format(Number("9".repeat(i) || "0")));
// }
// console.log(NumberUtils.format(0, { thou: true }));
// console.log(NumberUtils.format(123450, { thou: true }));
// console.log(NumberUtils.format(12345.6, { thou: false }));
console.log(NumberUtils.format(12345.44, { fpad: 3 }));
// console.log(NumberUtils.format(12345.6, { fpad: 0 }));
// console.log(NumberUtils.format(12345.67, { fpad: 3 }));
// console.log(NumberUtils.format(12345.678, { fpad: 3 }));
// console.log(NumberUtils.format(12345.6789, { fpad: 3 }));
// console.log(NumberUtils.format(12345.67891, { fpad: 3 }));

// const beforeDate = new Date();
// const afterDate = new Date(beforeDate);
// beforeDate.setDate(beforeDate.getDate() + 2);
// afterDate.setMonth(afterDate.getMonth() + 1);
// afterDate.setFullYear(afterDate.getFullYear() - 1);
// console.log(DatetimeUtils.getDaysDiff(beforeDate, afterDate));
// console.log(DatetimeUtils.getDays(beforeDate, afterDate));

// console.log(DatetimeUtils.convertDateToString(DatetimeUtils.convertToDate("2022/01/27")));
// console.log(DatetimeUtils.convertDateToString(DatetimeUtils.convertToDate("2022-01-27")));
// console.log(DatetimeUtils.convertDateToString(DatetimeUtils.convertToDate(20220127)));
// console.log(DatetimeUtils.convertDateToString(DatetimeUtils.convertToDate(new Date(2022, 0, 27))));
// console.log(DatetimeUtils.convertDateToString(DatetimeUtils.getFirstDateAtMonth()));
// console.log(DatetimeUtils.convertDateToString(DatetimeUtils.getLastDateAtMonth()));
// console.log(DatetimeUtils.convertDateToString(DatetimeUtils.getFirstDateAtYear()));
// console.log(DatetimeUtils.convertDateToString(DatetimeUtils.getLastDateAtYear()));
// console.log(DatetimeUtils.convertDateToString(DatetimeUtils.getNextMonthDate(new Date(2022, 0, 31))));
// console.log(DatetimeUtils.convertDateToString(DatetimeUtils.getPrevMonthDate(new Date(2022, 2, 31))));
// console.log(DatetimeUtils.convertDateToString(DatetimeUtils.getNextMonthDate(new Date(2022, 2, 31))));
// console.log(DatetimeUtils.convertDateToString(DatetimeUtils.getPrevYearDate(new Date(2004, 1, 29), true)));
// console.log(DatetimeUtils.convertDateToString(DatetimeUtils.getNextYearDate(new Date(2004, 1, 29), true)));
// const before = new Date(2022, 0, 21);
// const after = new Date(2022, 1, 20);
// console.log(DatetimeUtils.validContext(before, after));

// const arr = ArrayUtils.generateArray(10, (idx) => idx+1);
// console.log(arr);
// const replacedArr = ArrayUtils.replaceValue(arr, (val) => `${val}`, true);
// console.log(arr, replacedArr);
// console.log(NumberUtils.average(...arr));