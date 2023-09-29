/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
const timeLimit = function (fn, t) {
    const start = performance.now()
    let result = {};

    return async function (...args) {
        const result = await fn(...args);

        // let timer = Math.floor(performance.now() - start);

        // const timeLimitExceeded = new Promise((_, reject) => {
        //     setTimeout(() => reject("Time Limit Exceeded"), t)
        // })
        const timeLimitExceeded = Promise.reject(setTimeout(() => "Time Limit Exceeded", t))
        // console.log('timeLimitExceeded:::', timeLimitExceeded.catch(err => console.log(err)));

        // if (timer < t) return new Promise((resolve) => resolve(res));


        // let timer = Math.floor(performance.now() - start);

        // if (timer < t) return new Promise((resolve) => resolve(res));
       // return new Promise((resolve, reject)=>{
       //      setTimeout(() => reject("Time Limit Exceeded"), t)
       //      resolve(fn(...args))
       //  })

        return Promise.race([result, timeLimitExceeded]);
        // return timeLimitExceeded;

        // try {
        //     const res = await fn(args)
        //     let timer= Math.floor(performance.now() - start);
        //
        //     result = {"resolved": res, "time": };
        //     console.log(result) // Output
        //
        //     return result;
        // } catch (err) {
        //     result = {"rejected": "Time Limit Exceeded", "time": t};
        //     console.log(result) // Output
        //
        //     return result;
        // }
    }

};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */

const fn = async (n) => {
    await new Promise(res => setTimeout(res, 100));
    return n * n;
}
const inputs = [5], t = 50;
const limited = timeLimit(fn, t)


console.log(limited(inputs).then(r => console.log(r)).catch(err => console.log(err)));
