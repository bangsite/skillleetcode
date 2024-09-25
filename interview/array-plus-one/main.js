/**
 * Solution 1
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
    let num = 0;
    if (!digits.length) return digits;

    if (digits.length > 8) {
        num = BigInt(digits.join('')) + 1;
    } else {
        num = parseInt(digits.join('')) + 1;
    }

    return String(num).split('').map(Number);
    // return Array.from(String(num),Number);
};

/**
 * Solution 2
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne2 = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i]++;
        if (digits[i] > 9) {
            digits[i] = 0;
        } else {
            return digits;
        }
    }
    digits.unshift(1);
    return digits;
};

module.exports = {plusOne, plusOne2};


const digits = [1, 2, 3],
    digits2 = [4, 3, 2, 1],
    digits3 = [9],
    digits4 = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3],
    digits5 = [9,0,9];


console.log(plusOne2(digits));
console.log(plusOne2(digits2));
console.log(plusOne2(digits3));
console.log(plusOne2(digits4));
console.log(plusOne2(digits5));

