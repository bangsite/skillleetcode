/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const testFilter = function (arr, fn) {
    console.log('input', arr)
    const result = arr.filter((item, index) => {
        console.log(index, item);
        console.log(item + 1)
        return item + 1;
    });
    console.log('result:::', result)
    return result;
};

/**
 * 2626. Array Reduce Transformation
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
const testReduce = function (nums, fn, init) {
    return nums.reduce((accumulator, currentItem, index) => fn(accumulator, currentItem), init)
};

function sum(accumulator, currentItem) {
    return accumulator + currentItem;
}

function fnFilter(n) {
    return n + 1;
}

/**
 * @param {Function[]} functions
 * @return {Function}
 */
const testCompose = function (functions) {
    console.log("functions:::", functions);
    return function (x) {
        functions.reverse().forEach(item => {
            x = item(x);
        });

        return x;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */





let temp = [1, 2, 3, 4];
let temp2 = [-2, -1, 0, 1, 2];
let functions = [x => x + 1, x => x * x, x => 2 * x], x = 4;
console.log(`testFilter:::`, testFilter(temp2));
console.log(testReduce(temp, sum, 0));
const result = testCompose(functions);
console.log(result);
console.log(result(x));


