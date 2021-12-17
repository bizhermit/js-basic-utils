"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const StringUtils={isString:t=>"string"==typeof t,isNull:t=>null==t,isNullOrEmpty:t=>null==t||""===t,isNotNull:t=>null!=t,isNotNullOrEmpty:t=>null!=t&&""!==t,notNull:(t,s)=>StringUtils.isNull(t)?s:t,notNullOrEmpty:(t,s)=>StringUtils.isNullOrEmpty(t)?s:t,contains:(t,s)=>!!StringUtils.isNotNullOrEmpty(t)&&-1!=t.indexOf(s),isHalfWidthNumeric:t=>/^[0-9]+$/.test(t),isHalfWidthAlphabet:t=>/^[a-zA-Z]+$/.test(t),isHalfWidthSymbols:t=>/^[!-/:-@¥[-`{-~]+$/.test(t),isHalfWidthAlphanumeric:t=>/^[a-zA-Z0-9]+$/.test(t),isHalfWidthAlphanumericAndSymbols:t=>/^[a-zA-Z0-9!-/:-@¥[-`{-~]*$/.test(t),isHalfWidthKatakana:t=>/^[｡-ﾟ+]+$/.test(t),isHiragana:t=>/^[ぁ-ゞ]+$/.test(t),isKatakana:t=>/^[ァ-ヶ]+$/.test(t),isInteger:t=>/[+-]?(0|[1-9]+\\d*)/.test(t),isPhoneNumber:t=>/^0\\d-\\d{4}-\\d{4}$/.test(t)||/^0\\d{3}-\\d{2}-\\d{4}$/.test(t)||/^0\\d{2}-\\d{3}-\\d{4}$/.test(t)||/^(070|080|090)-\\d{4}-\\d{4}$/.test(t)||/^050-\\d{4}-\\d{4}$/.test(t)||/^\\(0\\d\\)\\d{4}-\\d{4}$/.test(t)||/^\\(0\\d{3}\\)\\d{2}-\\d{4}$/.test(t)||/^0120-\\d{3}-\\d{3}$/.test(t),isPostalCode:t=>/^[0-9]{3}-[0-9]{4}$/.test(t)||/^[0-9]{7}$/.test(t),isMailAddress:t=>/^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}.[A-Za-z0-9]{1,}$/.test(t),isIpv4Address:t=>/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])$/.test(t),isIpv6Address:t=>/(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/.test(t),generateUuidV4:()=>{const t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split("");for(let s=0,a=t.length;s<a;s++)switch(t[s]){case"x":t[s]=Math.floor(16*Math.random()).toString(16);break;case"y":t[s]=(Math.floor(4*Math.random())+8).toString(16)}return t.join("")}};exports.default=StringUtils;