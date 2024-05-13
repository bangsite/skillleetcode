/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
    let remainder = 0;
    let num = Math.abs(x);
    let numReverse = 0;

    if (x < 0) return false;

    while (num) {
        remainder = num % 10;
        numReverse = numReverse * 10 + remainder;
        num = Math.floor(num / 10);
    }

    return numReverse === x;
};
module.exports = isPalindrome;

const x = 121, x2 = -121, x3 = 10;

// output
// console.log(isPalindrome(x));
// console.log(isPalindrome(x2));
// console.log(isPalindrome(x3));
