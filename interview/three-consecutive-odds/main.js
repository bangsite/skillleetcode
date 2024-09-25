/**
 * @param {number[]} arr
 * @return {boolean}
 */
const threeConsecutiveOdds = function (arr) {
    if (arr.length < 1) return false;

    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0 && arr[i + 2] % 2 !== 0) return true;
    }
    return false;
};


/**
 * Solution
 * @param arr
 * @return {boolean}
 */

const threeConsecutiveOdds2 = function (arr) {
    let count = 0;
    if (arr.length < 1) return false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            count++;
            if (count === 3) return true;
        } else count = 0;
    }
    return false;
};

module.exports={
    threeConsecutiveOdds,
    threeConsecutiveOdds2,
}
const arr = [2, 6, 4, 1],
    arr2 = [1, 2, 34, 3, 4, 5, 7, 23, 12];

console.log(threeConsecutiveOdds2(arr));
console.log(threeConsecutiveOdds2(arr2));
