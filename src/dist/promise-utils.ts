namespace PromiseUtils {

  export const awaitAll = (promises: Array<Promise<any> | (() => Promise<any>)>, options?: { listenInterval?: number; }) => {
    return new Promise<Array<any>>((resolve, reject) => {
      try {
        let count = 0;
        const errors: Array<any> = [];
        promises.forEach(promise => {
          (typeof promise === "function" ? promise() : promise).catch((err) => {
            errors.push(err);
          }).finally(() => {
            count++;
          });
        });
        const interval = options?.listenInterval ?? 10;
        const listener = () => {
          if (count === promises.length) {
            resolve(errors);
            return;
          }
          setTimeout(listener, interval);
        }
        listener();
      } catch (err) {
        reject(err);
      }
    });
  };

  export const awaitAny = (promises: Array<Promise<any> | (() => Promise<any>)>, options?: { listenInterval?: number; finally?: (errors: Array<any>) => void; }) => {
    return new Promise<void>((resolve, reject) => {
      try {
        let count = 0;
        const errors: Array<any> = [];
        promises.forEach(promise => {
          (typeof promise === "function" ? promise() : promise).catch((err) => {
            errors.push(err);
          }).finally(() => {
            count++;
          });
        });
        const interval = options?.listenInterval ?? 10;
        const listener = () => {
          if (count > 0) {
            resolve();
            if (options?.finally == null) return;
          }
          if (count === promises.length) {
            options?.finally?.(errors);
            return;
          }
          setTimeout(listener, interval);
        }
        listener();
      } catch (err) {
        reject(err);
      }
    });
  };

  export const awaitAnySucceeded = (promises: Array<Promise<any> | (() => Promise<any>)>, options?: { listenInterval?: number; finally?: (errors: Array<any>) => void; }) => {
    return new Promise<void>((resolve, reject) => {
      try {
        let count = 0, sCount = 0;
        const errors: Array<any> = [];
        promises.forEach(promise => {
          (typeof promise === "function" ? promise() : promise).then(() => {
            sCount++;
          }).catch((err) => {
            errors.push(err);
          }).finally(() => {
            count++;
          });
        });
        const interval = options?.listenInterval ?? 10;
        const listener = () => {
          if (sCount > 0) {
            resolve();
            if (options?.finally == null) return;
          }
          if (count === promises.length) {
            options?.finally?.(errors);
            return;
          }
          setTimeout(listener, interval);
        }
        listener();
      } catch (err) {
        reject(err);
      }
    });
  };

  export const awaitAnyFailed = (functions: Array<Promise<any> | (() => Promise<any>)>, options?: { listenInterval?: number; finally?: (errors: Array<any>) => void; }) => {
    return new Promise<any>((resolve, reject) => {
      try {
        let count = 0;
        const errors: Array<any> = [];
        functions.forEach(func => {
          (typeof func === "function" ? func() : func).catch((err) => {
            errors.push(err);
          }).finally(() => {
            count++;
          });
        });
        const interval = options?.listenInterval ?? 10;
        const listener = () => {
          if (errors.length > 0) {
            resolve(errors[0]);
            if (options?.finally == null) return;
          }
          if (count === functions.length) {
            options?.finally?.(errors);
            return;
          }
          setTimeout(listener, interval);
        }
        listener();
      } catch (err) {
        reject(err);
      }
    });
  };

};

export default PromiseUtils;