"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});const string_utils_1=__importDefault(require("./string-utils")),padding=(e,t="00")=>(t+String(e)).slice(-t.length),DatetimeUtils={isValidNumber:(e,t,i)=>{if(null==e||null==t||null==i)return!1;const r=new Date(Number(e),Number(t)-1,Number(i));return r.getFullYear()===Number(e)&&r.getMonth()+1===Number(t)&&r.getDate()===Number(i)},getDateByYMD:(e,t,i)=>new Date(Number(e),Number(t)-1,Number(i)),convertStringToDate:(e,t)=>{if(string_utils_1.default.isNullOrEmpty(e))return t;const i=new Date;if(e.indexOf("-")>0){const t=e.split("-");return 3!==t.length?i:DatetimeUtils.isValidNumber(t[0],t[1],t[2])?DatetimeUtils.getDateByYMD(t[0],t[1],t[2]):i}if(e.indexOf("/")>0){const t=e.split("/");return 3!==t.length?i:DatetimeUtils.isValidNumber(t[0],t[1],t[2])?DatetimeUtils.getDateByYMD(t[0],t[1],t[2]):i}if(8===e.length){const t=e.substring(0,4),r=e.substring(4,6),n=e.substring(6,8);return DatetimeUtils.isValidNumber(t,r,n)?DatetimeUtils.getDateByYMD(t,r,n):i}const r=e.indexOf("年"),n=e.indexOf("月"),s=e.indexOf("日");if(r>=0&&n>=0&&s>=0){const t=e.substring(0,r),l=e.substring(r+1,n),a=e.substr(n+1,s);return DatetimeUtils.isValidNumber(t,l,a)?DatetimeUtils.getDateByYMD(t,l,a):i}if(r>=0&&n>=0){const t=e.substring(0,r),s=e.substring(r+1,n);return DatetimeUtils.isValidNumber(t,s,1)?DatetimeUtils.getDateByYMD(t,s,1):i}return t},convertToDate:(e,t)=>null==e?t:"string"==typeof e||"number"==typeof e?DatetimeUtils.convertStringToDate(String(e),t):new Date(e),convertDateToString:(e,t="yyyy-MM-dd")=>{if(null==e||string_utils_1.default.isNullOrEmpty(t))return"";const i=e.getFullYear(),r=e.getMonth()+1,n=e.getDate(),s=e.getHours(),l=e.getMinutes(),a=e.getSeconds();return t.replace("yyyy",String(i)).replace("yy","00"+String(i).slice(-2)).replace("MM",("0"+String(r)).slice(-2)).replace("M",String(r)).replace("dd",("0"+String(n)).slice(-2)).replace("d",String(n)).replace("hh",("0"+String(s)).slice(-2)).replace("h",String(s)).replace("mm",("0"+String(l)).slice(-2)).replace("m",String(l)).replace("ss",("0"+String(a)).slice(-2)).replace("s",String(a))},datetimeStr:()=>{const e=new Date;return padding(e.getFullYear(),"0000")+padding(e.getMonth()+1)+padding(e.getDate())+padding(e.getHours())+padding(e.getMinutes())},copy:e=>null==e?e:new Date(e),resetTime:e=>(null==e||(e.setHours(0),e.setMinutes(0),e.setSeconds(0),e.setMilliseconds(0)),e),getResetedTimeDate:()=>DatetimeUtils.resetTime(new Date),getDaysDiff:(e,t)=>{if(null==e||null==t)return 0;const i=Math.floor(e.getTime()/864e5);return Math.floor(t.getTime()/864e5)-i},getDays:(e,t)=>null==e&&null==t?0:Math.abs(DatetimeUtils.getDaysDiff(e,t))+1};exports.default=DatetimeUtils;