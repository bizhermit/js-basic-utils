const ArrayUtils = {
    generateArray: <T = unknown>(length: number, initValue: (index: number) => T) => {
        const arr: Array<T> = [];
        for (let i = 0; i < length; i++) arr.push(initValue(i));
        return arr;
    },
    replaceValue: <T = unknown, U = T>(array: Array<T>, replace: (value: T) => U, copy = false) => {
        const retArr = (copy ? [] : array as unknown) as Array<U>;
        for (let i = 0, il = array.length; i < il; i++) retArr[i] = replace(array[i]);
        return retArr;
    },
};
export default ArrayUtils;
