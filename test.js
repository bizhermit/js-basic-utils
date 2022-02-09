const { default: arrayUtils } = require("./dist/array-utils");

const StringUtils = require("./dist/string-utils").default;
const NumberUtils = require("./dist/number-utils").default;
const DatetimeUtils = require("./dist/datetime-utils").default;
const ArrayUtils = require("./dist/array-utils").default;

const date = new Date(2022, 3, 5, 6, 7, 8, 1);
console.log(DatetimeUtils.getPrevDate(date));
console.log(DatetimeUtils.getPrevDate());
console.log(DatetimeUtils.getPrevDate(new Date()));
// console.log(DatetimeUtils.format(date, "yyyy/MM/dd(w)"))
// console.log(StringUtils.isNull(null));
// console.log(StringUtils.isNull(undefined));
// console.log(StringUtils.isNull(""));
// console.log(StringUtils.isNull("s"));
// console.log(StringUtils.isEmpty(null));
// console.log(StringUtils.isEmpty(undefined));
// console.log(StringUtils.isEmpty(""));
// console.log(StringUtils.isEmpty("s"));


// console.log(StringUtils.isHalfWidthAlphabet("abcd"))
// console.log(StringUtils.isHalfWidthAlphabet("1234"))
// console.log(StringUtils.isHalfWidthAlphabet(undefined))
// console.log(StringUtils.isHalfWidthAlphabet(null))

// console.log(StringUtils.isInteger("0"))
// console.log(StringUtils.isInteger("123"))
// console.log(StringUtils.isInteger("+123"))
// console.log(StringUtils.isInteger("-123"))
// console.log("-----------");
// console.log(StringUtils.isInteger(""))
// console.log(StringUtils.isInteger("*123"))
// console.log(StringUtils.isInteger("0123"))
// console.log(StringUtils.isInteger("123.56"))

// console.log(StringUtils.isMailAddress("rsenda@bizhermit.com"));
// console.log(StringUtils.isMailAddress("a@bizhermit.com"));
// console.log(StringUtils.isMailAddress("a@bizhermit.co"));
// console.log(StringUtils.isMailAddress("a@bizhermit.c"));
// console.log(StringUtils.isMailAddress("a@bizhermit.co.jp"));
// console.log("-----------");
// console.log(StringUtils.isMailAddress(""));
// console.log(StringUtils.isMailAddress("a@bizhermit."));
// console.log(StringUtils.isMailAddress("a@bizhermit..co.jp"));
// console.log(StringUtils.isMailAddress("a@bizhermit.co..jp"));
// console.log(StringUtils.isMailAddress("rsenda@bizhermitcom"));
// console.log(StringUtils.isMailAddress("rsendabizhermit.com"));
// console.log(StringUtils.isMailAddress("@bizhermit.com"));

// console.log(StringUtils.isIpv4Address("255.255.255.255"));
// console.log(StringUtils.isIpv4Address("0.0.0.0"));
// console.log(StringUtils.isIpv4Address("172.0.0.1"));
// console.log(StringUtils.isIpv4Address("0.2.254.255"));
// console.log(StringUtils.isIpv4Address("192.168.30.1"));
// console.log("-----------");
// console.log(StringUtils.isIpv4Address(""));
// console.log(StringUtils.isIpv4Address("256.255.255.255"));
// console.log(StringUtils.isIpv4Address("255.256.255.255"));
// console.log(StringUtils.isIpv4Address("255.255.256.255"));
// console.log(StringUtils.isIpv4Address("255.255.255.256"));
// console.log(StringUtils.isIpv4Address("0.0.0"));
// console.log(StringUtils.isIpv4Address("0.a.0.0"));

// console.log(DatetimeUtils.format("2023", "yyyy/MM/dd hh:mm:ss.SSS"));
// console.log(DatetimeUtils.format("202202", "yyyy/MM/dd hh:mm:ss.SSS"));
// console.log(DatetimeUtils.format("2022121210", "yyyy/MM/dd hh:mm:ss.SSS"));
// console.log(DatetimeUtils.format("202212121021", "yyyy/MM/dd hh:mm:ss.SSS"));
// console.log(DatetimeUtils.format("20221212113243", "yyyy/MM/dd hh:mm:ss.SSS"));
// console.log(DatetimeUtils.format("20221212040506300", "yyyy/MM/dd hh:mm:ss.SSS"));
// console.log(DatetimeUtils.format("2023", "yyyy/MM/dd hh:mm:ss.SSS"));
// console.log(DatetimeUtils.format("2022-02", "yyyy/MM/dd hh:mm:ss.SSS"));
// console.log(DatetimeUtils.format("2022-08-13", "yyyy/MM/dd hh:mm:ss.SSS"));
// console.log(DatetimeUtils.format("2022-9-14 10", "yyyy/MM/dd hh:mm:ss.SSS"));
// console.log(DatetimeUtils.format("2022-10-15 10:20", "yyyy/MM/dd hh:mm:ss.SSS"));
// console.log(DatetimeUtils.format("2022-11-16 10:20:30", "yyyy/MM/dd hh:mm:ss.SSS"));
// console.log(DatetimeUtils.format("2022-12-17 10:20:30.400Z", "yyyy/MM/dd hh:mm:ss.SSS"));
// console.log(DatetimeUtils.format("2023", "yyyy/MM/dd hh:mm:ss.SSS"));
// console.log(DatetimeUtils.format("2022/02", "yyyy/MM/dd hh:mm:ss.SSS"));
// console.log(DatetimeUtils.format("2022/08/13", "yyyy/MM/dd hh:mm:ss.SSS"));
// console.log(DatetimeUtils.format("2022/9/14 10", "yyyy/MM/dd hh:mm:ss.SSS"));
// console.log(DatetimeUtils.format("2022/10/15 10:20", "yyyy/MM/dd hh:mm:ss.SSS"));
// console.log(DatetimeUtils.format("2022/11/16 10:20:30", "yyyy/MM/dd hh:mm:ss.SSS"));
// console.log(DatetimeUtils.format("2022/12/17 10:20:30.400Z", "yyyy/MM/dd hh:mm:ss.SSS"));
// console.log(DatetimeUtils.format("2023年", "yyyy/MM/dd hh:mm:ss.SSS"));
// console.log(DatetimeUtils.format("2022年02月", "yyyy/MM/dd hh:mm:ss.SSS"));
// console.log(DatetimeUtils.format("2022年08月13日", "yyyy/MM/dd hh:mm:ss.SSS"));
// console.log(DatetimeUtils.format("2022年9月14日 10時", "yyyy/MM/dd hh:mm:ss.SSS"));
// console.log(DatetimeUtils.format("2022年10月15日 10時20分", "yyyy/MM/dd hh:mm:ss.SSS"));
// console.log(DatetimeUtils.format("2022年11月16日 10時20分30秒", "yyyy/MM/dd hh:mm:ss.SSS"));
// console.log(DatetimeUtils.format("2022年12月17日 10時20分30秒400", "yyyy/MM/dd hh:mm:ss.SSS"));
// console.log(DatetimeUtils.format(new Date(), "yyyy/MM/dd hh:mm:ss.SSS"));
// console.log(DatetimeUtils.format(new Date().toString(), "yyyy/MM/dd hh:mm:ss.SSS"));
// console.log(DatetimeUtils.isAfterDate(new Date(2021, 0, 1), new Date(2021, 0, 2)));

// console.log(DatetimeUtils.format("2022/2/12"));
// console.log(DatetimeUtils.format("2022-12-2"));
// console.log(DatetimeUtils.format("2022年1月1日"));
// console.log("===================================");
// console.log(DatetimeUtils.format("2022/2"));
// console.log(DatetimeUtils.format("202212"));
// console.log(DatetimeUtils.format("2022"));
// console.log(DatetimeUtils.format("2022/12/12"));
// console.log(DatetimeUtils.format("2022/12"));
// console.log(DatetimeUtils.format("2022"));
// console.log(DatetimeUtils.format(20220131, "yyyy/M/d(w)"));
// console.log(DatetimeUtils.format(null));

// console.log(StringUtils.generateUuidV4());
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
// console.log(NumberUtils.format(12345.44, { fpad: 3 }));
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

// console.log(ArrayUtils.generateArray(10));
// console.log(ArrayUtils.generateArray(10, 0));
// console.log(ArrayUtils.generateArray(10, idx => idx * 2));
// const arr = ArrayUtils.generateArray(10, (idx) => idx+1);
// console.log(arr);
// const replacedArr = ArrayUtils.replaceValue(arr, (val) => `${val}`, true);
// console.log(arr, replacedArr);
// console.log(NumberUtils.average(...arr));

// console.log(NumberUtils.nullZeroAverage(10, 20, 30, 40, null))