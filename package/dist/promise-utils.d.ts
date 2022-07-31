declare namespace PromiseUtils {
    const awaitAll: (promises: Array<Promise<any> | (() => Promise<any>)>, options?: {
        listenInterval?: number;
    }) => Promise<any[]>;
    const awaitAny: (promises: Array<Promise<any> | (() => Promise<any>)>, options?: {
        listenInterval?: number | undefined;
        finally?: ((errors: Array<any>) => void) | undefined;
    } | undefined) => Promise<void>;
    const awaitAnySucceeded: (promises: Array<Promise<any> | (() => Promise<any>)>, options?: {
        listenInterval?: number | undefined;
        finally?: ((errors: Array<any>) => void) | undefined;
    } | undefined) => Promise<void>;
    const awaitAnyFailed: (functions: Array<Promise<any> | (() => Promise<any>)>, options?: {
        listenInterval?: number | undefined;
        finally?: ((errors: Array<any>) => void) | undefined;
    } | undefined) => Promise<any>;
}
export default PromiseUtils;
export declare const awaitAll: (promises: Array<Promise<any> | (() => Promise<any>)>, options?: {
    listenInterval?: number;
}) => Promise<any[]>;
export declare const awaitAny: (promises: Array<Promise<any> | (() => Promise<any>)>, options?: {
    listenInterval?: number | undefined;
    finally?: ((errors: Array<any>) => void) | undefined;
} | undefined) => Promise<void>;
