/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
const cancellable = function (fn, args, t) {
    const result = [];
    const start = performance.now();

    const timer = setInterval(() => {
        const diff = Math.floor(performance.now() - start);

        result.push({"time": diff, "returned": fn(...args)})
        console.log(result);
    }, t);


    return () => clearInterval(timer);
};

/**
 * @param {Array} arr
 * @param {number} size
 * @return {*[]}
 */
const chunk = function (arr, size) {
    let result = []
    if (arr.length < size) {
        result.push(arr);
        console.log(result);

        return result;
    }


    for (let i = 0; i < arr.length; i = i + size) {
        const tmp = arr.slice(i, i + size);
        result.push(tmp);
    }


    console.log(result);

    return result;
};


const fn = (x) => x * 2
const args = [4], t = 35, cancelT = 190

// const cancel = cancellable(fn, args, t);
// setTimeout(() => cancel(), cancelT);
// clearInterval(cancel);

// chunk
const arr = [1, 9, 6, 3, 2], size = 6;
chunk(arr, size);




