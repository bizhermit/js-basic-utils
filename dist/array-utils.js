"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ArrayUtils = {
    generateArray: (length, initValue) => {
        const arr = [];
        for (let i = 0; i < length; i++)
            arr.push(initValue(i));
        return arr;
    },
    replaceValue: (array, replace, copy = false) => {
        const retArr = (copy ? [] : array);
        for (let i = 0, il = array.length; i < il; i++)
            retArr[i] = replace(array[i]);
        return retArr;
    },
};
exports.default = ArrayUtils;
