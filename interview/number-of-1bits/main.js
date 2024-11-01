'use strict';

/**
 * Solution 1
 * @param {number} n
 * @return {number}
 */
const hammingWeight = function (n) {
    let result;

    result = n.toString(2);
    result= result.split('');

    return result.reduce((acc, item) => acc + parseInt(item), 0);
};

/**
 * Solution 2
 * @param n
 * @return {*}
 */
const hammingWeight2 = function (n) {
    let setBitCount = 0;

    while (n > 0) {
        n &= (n - 1);

        setBitCount++;
    }
    return setBitCount;
};

/**
 * Solution 3 : Use bitwise AND 1(= & 1)
 * @param n
 * @return {*}
 */
const hammingWeight3 = function (n) {
    let res = 0;
    for (let i = 0; i < 32; i++) {
        if ((n >> i) & 1) {
            res += 1;
        }
    }
    return res;
};

module.exports = {
    hammingWeight
}

const n = 11, n2 = 128, n3 = 2147483645;

console.log(hammingWeight3(n));
console.log(hammingWeight3(n2));
console.log(hammingWeight3(n3));
