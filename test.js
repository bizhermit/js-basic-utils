const StringUtils = require("./dist/string-utils").default;
const NumberUtils = require("./dist/number-utils").default;
const DatetimeUtils = require("./dist/datetime-utils").default;

console.log(StringUtils.isUuidV4(StringUtils.generateUuidV4()));
console.log(NumberUtils.adds(1.111, 2.222, 3.333, 4.444, 5.555));

const beforeDate = new Date();
const afterDate = new Date(beforeDate);
// beforeDate.setDate(beforeDate.getDate() + 2);
// afterDate.setMonth(afterDate.getMonth() + 1);
// afterDate.setFullYear(afterDate.getFullYear() - 1);
console.log(DatetimeUtils.getDaysDiff(beforeDate, afterDate));
console.log(DatetimeUtils.getDays(beforeDate, afterDate));