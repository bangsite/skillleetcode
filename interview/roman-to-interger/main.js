/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
    let result = 0;

    if (s) {
        for (let i = 0; i < s.length; i++) {
            if (SymbolValue[`${s[i]}`] < SymbolValue[`${s[i + 1]}`]) {
                result -= +SymbolValue[`${s[i]}`]
            } else result += +SymbolValue[`${s[i]}`];
        }
    }
    return result;
};

const s = 'III';
const s2 = 'LVIII';
const s3 = 'MCMXCIV';

const SymbolValue = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
}

console.log(romanToInt(s));
console.log(romanToInt(s2));
console.log(romanToInt(s3));

