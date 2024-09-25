/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = function (n) {
    let bigNumberBinaryStr = n.toString(2);

    while (bigNumberBinaryStr < 32) {
        bigNumberBinaryStr = bigNumberBinaryStr + '0';
    }

    bigNumberBinaryStr = bigNumberBinaryStr.split("").reverse().join("");
    console.log(bigNumberBinaryStr)
    return parseInt(bigNumberBinaryStr, 2);
};

const reverseBits2 = function (n) {
    let bigNumberBinary = parseInt(n, 2);
    let result = 0;
    let count = 32;
    let tmp = '';
    while (count--) {
        result *= 2;
        result += bigNumberBinary & 1;
        tmp = result.toString(2)
        bigNumberBinary = bigNumberBinary >> 1;
    }

    return result;
};

const reverseBits3 = (n) => {
    let bigNumberBinary = parseInt(n, 2);
    let res = 0;
    let tmp = '';

    for (let i = 0; i < 32; i++) {
        res = (res << 1) + (bigNumberBinary & 1);
        tmp = res.toString(2)

        bigNumberBinary = bigNumberBinary >>> 1;
    }

    return res >>> 0;
}

const n = '00000010100101000001111010011100';
const n2 = '11111111111111111111111111111101';


// console.log(reverseBits2(n));
// console.log(reverseBits2(n2));
console.log(reverseBits3(n));
console.log(reverseBits3(n2));
