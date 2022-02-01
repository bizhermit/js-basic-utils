declare const NumberUtils: {
    isNumber: (value: unknown) => value is number;
    isNull: (value: number | null | undefined) => value is null | undefined;
    thousandsSeparator: (value: number | null | undefined, whenNullValue?: string) => string;
    removeThousandsSeparator: (value: string | null | undefined, whenNullOrEmptyValue?: number) => number;
    format: (value: number | null | undefined, options?: {
        nullVal?: string | undefined;
        thou?: boolean | undefined;
        fpad?: number | undefined;
    } | undefined) => string | undefined;
    add: (value1: number | null | undefined, value2: number | null | undefined) => number;
    adds: (...values: Array<number | null | undefined>) => number;
    minus: (value1: number | null | undefined, value2: number | null | undefined) => number;
    getFloatPosition: (value: number | null | undefined) => number;
    round: (value: number, float?: number) => number;
    ceil: (value: number, float?: number) => number;
    floor: (value: number, float?: number) => number;
    average: (...values: Array<number | null | undefined>) => number;
    nullZeroAverage: (...values: Array<number | null | undefined>) => number;
};
export default NumberUtils;
