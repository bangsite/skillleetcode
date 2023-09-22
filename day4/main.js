/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
const cancellable = function (fn, args, t) {
    const start = performance.now();
    const result = [];


    return () =>  setTimeout(() => {
        result.push({"time":  Math.floor(performance.now() - start), "returned": fn(...args)});
        console.log(result);
    }, t);

};

/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
const  isEmpty = function(obj) {
    console.log((Object.keys(obj).length));
    console.log(!(Object.keys(obj).length));
    return !!(Object.keys(obj).length);
};

/**
 *  const result = []
 *
 *  const fn = (x) => x * 5
 *  const args = [2], t = 20, cancelT = 50
 *
 *  const start = performance.now()
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)})
 *  }
 *
 *  const cancel = cancellable(log, args, t);
 *
 *  const maxT = Math.max(t, cancelT)
 *
 *  setTimeout(() => {
 *     cancel()
 *  }, cancelT)
 *
 *  setTimeout(() => {
 *     console.log(result) // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */

// const result = []
// const start = performance.now()

const fn = (x) => x * 5
const args = [2], t = 20;
// cancelT = 50;
// const log = (...argsArr) => {
//     const diff = Math.floor(performance.now() - start);
//     result.push({"time": diff, "returned": fn(...argsArr)})
// }

// const test = cancellable(log, args, t);
// const maxT = Math.max(t, cancelT);

// setTimeout(() => {
//     cancellable(log, args, t);
// }, cancelT)
//
// setTimeout(() => {
//     console.log(result) // [{"time":20,"returned":10}]
// }, maxT + 15)

const testTimer = cancellable(fn, args, t);
testTimer();
clearTimeout(testTimer());

isEmpty({"x": 5, "y": 42});
isEmpty([null, false, 0]);
isEmpty({});
