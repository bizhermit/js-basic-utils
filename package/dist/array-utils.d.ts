declare namespace ArrayUtils {
    const generateArray: <T = unknown>(length: number, initValue?: T | ((index: number) => T) | undefined) => T[];
    const replaceValue: <T = unknown, U = T>(array: T[], replace: (value: T) => U, copy?: boolean) => U[];
}
export default ArrayUtils;
export declare const generateArray: <T = unknown>(length: number, initValue?: T | ((index: number) => T) | undefined) => T[];
