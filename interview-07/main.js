const getFloor = (x) => {
    return Math.sign(x) * Math.floor(Math.abs(x / 10));
}

/**
 * Solution 1
 * @param {number} x
 * @return {number}
 * You can store a number > Math.pow(2,31) which is not the point of question.
 * You can store in JS as JS numbers are 64 bit floating system
 */
const reverse = function (x) {
    const isNegative = x < 0;
    let result = 0;
    x = Math.abs(x);

    while (x > 0) {
        const number = x % 10;
        x = Math.floor(x / 10);
        result *= 10;
        result += number;
    }

    if (result >= Math.pow(2, 31)) return 0;

    return isNegative ? result * -1 : result;
};

/**
 * Solution 2
 * @param x
 * @return {number}
 */
const reverse2 = function (x) {
    const MAX = 2 ** 31 - 1, MIN = -(2 ** 31);
    let result = 0;

    while (x) {
        const pop = x % 10;

        if (result > getFloor(MAX) || (result === getFloor(MAX) && pop > MAX % 10)) return 0;
        if (result < getFloor(MIN) || (result === getFloor(MIN) && pop < MIN % 10)) return 0;

        result = result * 10 + pop;
        x = getFloor(x);
    }

    return result;
};


const reverse3 = function (x) {
    const numberReversed = Math.abs(x).toString().split('').reverse().join('');
    if (numberReversed > 2 ** 31) return 0;

    return numberReversed * Math.sign(x);
};


module.exports = {
    reverse, reverse2, reverse3
}

const x = 123, x2 = -123, x3 = 120, x4 = 1534236469, x5 = 1563847412;

// Solution 1
// console.log(reverse(x));
// console.log(reverse(x2));
// console.log(reverse(x3));
// console.log(reverse(x4));
// console.log(reverse(x5));

// Solution 2
// console.log(reverse2(x));
// console.log(reverse2(x2));
// console.log(reverse2(x3));
// console.log(reverse2(x4));
// console.log(reverse2(x5));

// Solution 3
// console.log(reverse3(x));
// console.log(reverse3(x2));
// console.log(reverse3(x3));
// console.log(reverse3(x4));
// console.log(reverse3(x5));
