"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});const string_utils_1=__importDefault(require("./string-utils")),padding=(e,t="00")=>(t+String(e)).slice(-t.length),DatetimeUtils={getResetedTimeDate:()=>DatetimeUtils.resetTime(new Date),datetimeStr:()=>{const e=new Date;return padding(e.getFullYear(),"0000")+padding(e.getMonth()+1)+padding(e.getDate())+padding(e.getHours())+padding(e.getMinutes())},isValidNumber:(e,t,i)=>{if(null==e||null==t||null==i)return!1;const r=new Date(Number(e),Number(t)-1,Number(i));return r.getFullYear()===Number(e)&&r.getMonth()+1===Number(t)&&r.getDate()===Number(i)},getDateByYMD:(e,t,i)=>new Date(Number(e),Number(t)-1,Number(i)),convertStringToDate:e=>{const t=new Date;if(string_utils_1.default.isNullOrEmpty(e))return null;if(e.indexOf("-")>0){const i=e.split("-");return 3!==i.length?t:DatetimeUtils.isValidNumber(i[0],i[1],i[2])?DatetimeUtils.getDateByYMD(i[0],i[1],i[2]):t}if(e.indexOf("/")>0){const i=e.split("/");return 3!==i.length?t:DatetimeUtils.isValidNumber(i[0],i[1],i[2])?DatetimeUtils.getDateByYMD(i[0],i[1],i[2]):t}if(8===e.length){const i=e.substring(0,4),r=e.substring(4,6),s=e.substring(6,8);return DatetimeUtils.isValidNumber(i,r,s)?DatetimeUtils.getDateByYMD(i,r,s):t}const i=e.indexOf("年"),r=e.indexOf("月"),s=e.indexOf("日");if(i>=0&&r>=0&&s>=0){const n=e.substring(0,i),l=e.substring(i+1,r),u=e.substr(r+1,s);return DatetimeUtils.isValidNumber(n,l,u)?DatetimeUtils.getDateByYMD(n,l,u):t}if(i>=0&&r>=0){const s=e.substring(0,i),n=e.substring(i+1,r);return DatetimeUtils.isValidNumber(s,n,1)?DatetimeUtils.getDateByYMD(s,n,1):t}return null},convertDateToString:(e,t)=>{if(null==e||string_utils_1.default.isNullOrEmpty(t))return"";const i=e.getFullYear(),r=e.getMonth()+1,s=e.getDate(),n=e.getHours(),l=e.getMinutes(),u=e.getSeconds();return t.replace("yyyy",String(i)).replace("yy","00"+String(i).slice(-2)).replace("MM",("0"+String(r)).slice(-2)).replace("M",String(r)).replace("dd",("0"+String(s)).slice(-2)).replace("d",String(s)).replace("hh",("0"+String(n)).slice(-2)).replace("h",String(n)).replace("mm",("0"+String(l)).slice(-2)).replace("m",String(l)).replace("ss",("0"+String(u)).slice(-2)).replace("s",String(u))},copy:e=>new Date(e),resetTime:e=>(null==e||(e.setHours(0),e.setMinutes(0),e.setSeconds(0),e.setMilliseconds(0)),e)};exports.default=DatetimeUtils;