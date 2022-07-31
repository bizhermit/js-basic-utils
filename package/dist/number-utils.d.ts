declare namespace NumberUtils {
    const isNumber: (value: unknown) => value is number;
    const isNull: (value: number | null | undefined) => value is null | undefined;
    const format: (value: number | null | undefined, options?: {
        thou?: boolean;
        fpad?: number;
    }) => string | undefined;
    const removeThousandsSeparator: (value: string | null | undefined) => number | undefined;
    const add: (value1: number | null | undefined, value2: number | null | undefined) => number;
    const adds: (...values: Array<number | null | undefined>) => number;
    const minus: (value1: number | null | undefined, value2: number | null | undefined) => number;
    const getFloatPosition: (value: number | null | undefined) => number;
    const round: (value: number, float?: number) => number;
    const ceil: (value: number, float?: number) => number;
    const floor: (value: number, float?: number) => number;
    const average: (...values: Array<number | null | undefined>) => number;
    const nullZeroAverage: (...values: Array<number | null | undefined>) => number;
}
export default NumberUtils;
export declare const numFormat: (value: number | null | undefined, options?: {
    thou?: boolean;
    fpad?: number;
}) => string | undefined;
export declare const add: (value1: number | null | undefined, value2: number | null | undefined) => number;
export declare const adds: (...values: Array<number | null | undefined>) => number;
export declare const minus: (value1: number | null | undefined, value2: number | null | undefined) => number;
export declare const round: (value: number, float?: number) => number;
export declare const floor: (value: number, float?: number) => number;
export declare const ceil: (value: number, float?: number) => number;
