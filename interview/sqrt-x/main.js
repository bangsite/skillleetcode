/**
 * Solution 1
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
    let left = 1, right = Math.floor(x / 2), mid;

    if (x === 1 || x === 0) return x;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);

        if (mid * mid > x) {
            right = mid - 1;

        } else if (mid * mid < x) {
            left = mid + 1;

        } else {
            return mid;

        }
    }

    return right;

};

/**
 * Solution 2
 * @param {number} x
 * @return {number}
 */
const mySqrt2 = function (x) {
    let left = 1, right = x, result;

    if (x === 1 || x === 0) return x;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (mid * mid <= x) {
            left = mid + 1;
            result = mid;

        } else {
            right = mid - 1;
        }
    }

    return result;
};

module.exports = {mySqrt, mySqrt2};

const x = 1, x2 = 8, x3 = 10, x4 = 5;

console.log(mySqrt2(x));
console.log(mySqrt2(x2));
console.log(mySqrt2(x3));
console.log(mySqrt2(x4));

