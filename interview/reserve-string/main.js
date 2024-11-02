/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function (s) {
    return s.reverse();
};

/**
 * Loop reverse arr
 * @param s
 * @return {[]}
 */
const reverseString2 = function (s) {
    let tmp = [];
    for (let i = s.length - 1; i >= 0; i--) {
        tmp.push(s[i])
    }

    return tmp;
};

/**
 * ES6 destructuring assignment
 * @param s
 * @return {*}
 */
const reverseString3 = function (s) {
    let i = 0, j = s.length - 1;

    while (i < j) {
        [s[i], s[j]] = [s[j], s[i]];
        i++;
        j--;
    }

    return s;
};

module.exports = {
    reverseString,
    reverseString2,
    reverseString3,

}

const s = ["h", "e", "l", "l", "o"];
const s2 = ["H", "a", "n", "n", "a", "h"];
const s3 = ["a", "b", "c", "d", "e", "f", "g", "h"];  ;

console.log(reverseString3(s));
console.log(reverseString3(s2));
console.log(reverseString3(s3));
