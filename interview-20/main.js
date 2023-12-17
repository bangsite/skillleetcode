/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
    const result = [];
    const newS = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    if (s.length % 2 !== 0) return false;

    for (let i = 0; i < s.length; i++) {
        console.log(newS[`${s[i]}`])

        if (newS[s[i]]) result.push(s[i]);
        else if (s[i] !== newS[result.pop()]) return false;
    }

    return result.length === 0;
};


const s = '()',
    s2 = "()[]{}",
    s3 = "(]",
    s4 = "(])]";


console.log(isValid(s))
console.log(isValid(s2))
console.log(isValid(s3));
console.log(isValid(s4));
