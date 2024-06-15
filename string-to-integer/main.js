/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = function (s) {
    const MIN = -Math.pow(2, 31);
    const MAX = Math.pow(2, 31) - 1;

    let i = 0;
    let result = 0;
    let sign = 1;

    s = s.trim();

    if (!s.length) return 0;

    if (s[i] === '-' || s[i] === '+') {
        sign = s[0] === '-' ? -1 : 1;
        i++;
    }

    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        const digit = s[i].charCodeAt(0) - '0'.charCodeAt(0);
        // check overflow/underflow  if result >  (MAX / 10) or if result ===  (MAX / 10)
        // and the next digit is greater than 7 (for positive number) or 8 (for negative number)
        if (result > Math.floor(MAX / 10) || (result === Math.floor(MAX / 10) && digit > MAX % 10)) {
            return sign === 1 ? MAX : MIN
        }
        result = result * 10 + digit;
        i++;
    }

    return result * sign;
};

module.exports = {
    myAtoi
}

const s = "42",
    s2 = "   -042",
    s3 = "1337c0d3",
    s4 = "0-1",
    s5 = "words and 987",
    s6 = "-91283472332",
    s7 = "-+12",
    s8 = "21474836460",
    s9 = "  -0012a42",
    s10 = "      -11919730356x",
    s11 = "+"
;

console.log(myAtoi(s)); // 42
console.log(myAtoi(s2));// -42
console.log(myAtoi(s3));// 1337
console.log(myAtoi(s4));// 0
console.log(myAtoi(s5));// 0
console.log(myAtoi(s6));// 0
console.log(myAtoi(s7));// 0
console.log(myAtoi(s8));// 0
console.log(myAtoi(s9));// 0
console.log(myAtoi(s10));// 0
console.log(myAtoi(s11));// 0
