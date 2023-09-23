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

/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
const sortBy = function (arr, fn) {
    console.log(arr.sort((i, j) => fn(i) - fn(j)));
    return arr.sort((i, j) => fn(i) - fn(j));
};

const fn = (x) => x * 2
const args = [4], t = 35, cancelT = 190

// const cancel = cancellable(fn, args, t);
// setTimeout(() => cancel(), cancelT);
// clearInterval(cancel);

// chunk
const arr = [1, 9, 6, 3, 2], size = 6;
chunk(arr, size);
const arrSort = [5, 4, 1, 2, 3], fnSort = (x) => x;
const arrSort1 = [{"x": 1}, {"x": 0}, {"x": -1}], fnSort1 = (d) => d.x;
const arrSort2 = [[3, 4], [5, 2], [10, 1]], fnSort2 = (x) => x[1]
sortBy(arrSort, fnSort);
sortBy(arrSort1, fnSort1);
sortBy(arrSort2, fnSort2);
