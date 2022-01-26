declare const NumberUtils: {
    isNumber: (value: any) => value is number;
    isNull: (value: number | null | undefined) => value is null | undefined;
    thousandsSeparator: (value: number, whenNullValue?: string) => string;
    removeThousandsSeparator: (value: string, whenNullOrEmptyValue?: number) => number;
    add: (value1: number, value2: number) => number;
    adds: (...values: Array<number>) => number;
    minus: (value1: number, value2: number) => number;
    getFloatPosition: (value: number) => number;
};
export default NumberUtils;
