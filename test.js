const StringUtils = require("./dist/string-utils").default;
const NumberUtils = require("./dist/number-utils").default;
const DatetimeUtils = require("./dist/datetime-utils").default;

console.log(StringUtils.isUuidV4(StringUtils.generateUuidV4()));
console.log(StringUtils.join(":", "hoge", "fuga", "hage"));

console.log(NumberUtils.adds(1.111, 2.222, 3.333, 4.444, 5.555));
const num = 10.5;
console.log(NumberUtils.round(num));
console.log(NumberUtils.ceil(num));
console.log(NumberUtils.floor(num));

const beforeDate = new Date();
const afterDate = new Date(beforeDate);
// beforeDate.setDate(beforeDate.getDate() + 2);
afterDate.setMonth(afterDate.getMonth() + 1);
// afterDate.setFullYear(afterDate.getFullYear() - 1);
console.log(DatetimeUtils.getDaysDiff(beforeDate, afterDate));
console.log(DatetimeUtils.getDays(beforeDate, afterDate));

console.log(DatetimeUtils.convertDateToString(DatetimeUtils.convertToDate("2022/01/27")));
console.log(DatetimeUtils.convertDateToString(DatetimeUtils.convertToDate("2022-01-27")));
console.log(DatetimeUtils.convertDateToString(DatetimeUtils.convertToDate(20220127)));
console.log(DatetimeUtils.convertDateToString(DatetimeUtils.convertToDate(new Date(2022, 0, 27))));