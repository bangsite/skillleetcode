/**
 * @param {Function} fn
 * @return {Function}
 */
const once = function (fn) {
    let count = 0;

    return function (...args) {

        if (count > 0) return undefined;
        count++;

        console.log(fn(...args))

        return fn(...args);
    }
};

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
const addTwoPromises = async function (promise1, promise2) {
    let sum = await Promise.all([promise1, promise2]);
    console.log(sum.length)
    console.log(sum.reduce((accumulator, currentValue) => accumulator + currentValue,0));
};


/**
 * @param {number} millis
 */
async function sleep(millis) {
    return new Promise((resolve,reject)=>{
            setTimeout(()=>  resolve(), millis);
        }
    )
}



/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
let fn = (a, b, c) => (a + b + c)
let onceFn = once(fn);

// onceFn(1, 2, 3); // 6
// onceFn(2, 3, 6); // returns undefined without calling fn

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
console.log(addTwoPromises(Promise.resolve(2), Promise.resolve(2)))

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
sleep(100).then((val) => console.log(val))
