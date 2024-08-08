/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = function (x, n) {
    let result = 1;

    if (x === 0) return 0;
    if (n === 0) return 1;

    if (n < 0) {
        x = 1 / x;
        n = -n;
    }

    while (n > 0) {
        if (n % 2 === 1) {
            result *= x;
        }

        x *= x;
        n = Math.floor(n / 2);
    }


    return result;
};


const myPow2 = function (x, n) {
    let result = 1;

    if (x === 0) return 0;
    if (n === 0) return 1;

    result = n > 0 ? x ** n : 1 / x ** Math.abs(n);

    return result;
};

module.exports = {
    myPow, myPow2
}

const x = 2.00000, n = 10;
const x2 = 2.10000, n2 = 3;
const x3 = 2.00000, n3 = -2;
const x4 = 0.44894, n4 = -5;


console.log(myPow(x, n));
console.log(myPow(x2, n2));
console.log(myPow(x3, n3));
console.log(myPow(x4, n4));//54.83508
