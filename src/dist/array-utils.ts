namespace ArrayUtils {

  export const generateArray = <T = unknown>(length: number, initValue?: T | ((index: number) => T)) => {
    const arr: Array<T> = [];
    if (initValue == null) {
      for (let i = 0; i < length; i++) arr.push(undefined as any);
    } else {
      if (typeof initValue === "function") {
        for (let i = 0; i < length; i++) arr.push((initValue as any)(i));
      } else {
        for (let i = 0; i < length; i++) arr.push(initValue);
      }
    }
    return arr;
  };

  export const replaceValue = <T = unknown, U = T>(array: Array<T>, replace: (value: T) => U, copy = false) => {
    const retArr = (copy ? [] : array as unknown) as Array<U>;
    for (let i = 0, il = array.length; i < il; i++) retArr[i] = replace(array[i]);
    return retArr;
  };

};

export default ArrayUtils;
export const generateArray = ArrayUtils.generateArray;