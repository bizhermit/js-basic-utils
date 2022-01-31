declare const ArrayUtils: {
    generateArray: <T = unknown>(length: number, initValue: (index: number) => T) => T[];
    replaceValue: <T_1 = unknown, U = T_1>(array: T_1[], replace: (value: T_1) => U, copy?: boolean) => U[];
};
export default ArrayUtils;
