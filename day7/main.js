/**
 * @param {number[]} nums
 * @return {void}
 */
const ArrayWrapper = function (nums) {
    this.nums = nums;

    console.log(this.nums)
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function () {
    return this.nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function () {
    return `[${this.nums.toString()}]`;
}


// const obj1 = new ArrayWrapper([1, 2]);
const obj1 = new ArrayWrapper([]);
// const obj2 = new ArrayWrapper([3, 4]);
const obj2 = new ArrayWrapper([]);
console.log(obj1); //[ 1, 2 ]

console.log(obj2); // [ 3, 4 ]

console.log(obj1 + obj2); // 10
console.log(String(obj1)); // "[1,2]"
console.log(String(obj2)); // "[3,4]"

/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
    const result = {};

    this.forEach((item) => {
        let keys = fn(item);
        // result[`${index}`] = [];

        if (keys in result) {
            result[`${keys}`].push(item);
        } else {
            result[`${keys}`] = [item];
        }
    })

    return result;
};


function fn1(item) {
    return item.id;
}

function fn2(list) {
    return String(list[0]);
}
function fn3(n) {
    return String(n > 5);
}

const arr1 = [
    {"id": "1"},
    {"id": "1"},
    {"id": "2"}
];
const arr2 = [
    [1, 2, 3],
    [1, 3, 5],
    [1, 5, 9]
]
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(arr1.groupBy(fn1))// {"1":[1],"2":[2],"3":[3]}
console.log(arr2.groupBy(fn2))// {"1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]]}
console.log(arr3.groupBy(fn3))// { "true": [6, 7, 8, 9, 10],"false": [1, 2, 3, 4, 5]}
