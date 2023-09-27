Array.prototype.last = function () {
    // if (this.length === 0) return -1;

    return this.pop() ? this.pop() : -1;
};

const arr = [1, 2, 3];
const arr2 = [];
// arr.last(); // 3
// console.log(arr.last());
console.log(arr2.last());

/**
 * @param {Function} fn
 */
function memoize(fn) {
    const result= [];
    const cacheData = new Map();
    return function (...args) {
       let key = JSON.stringify(args);

        console.log('args:::', args)
        if (cacheData.has(key)) {
            console.log('cacheData.get(key):::',cacheData.get(key))
            result.push(cacheData.get(key));
            return result;
        } else {
            cacheData.set(key, fn(...args));
            console.log(cacheData);
            result.push(cacheData.get(key)) ;
            return result;
        }
    }
}


/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
const sum = (a, b) => a + b;
const actions = ["call", "call", "getCallCount", "call", "getCallCount"];
const values = [[2, 2], [2, 2], [], [1, 2], []];
// expert: [4,4,1,3,2]
const test = memoize(sum);
// test(values);
console.log(test(2, 2))
console.log(test(2, 2))
console.log(test())
console.log(test(1, 2))
console.log(test())

/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
const debounce = function(fn, t) {

    return function(...args) {
        return () => setInterval(() => fn(args), t);
    }
