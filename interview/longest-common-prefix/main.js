/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
    if (!strs.length) return '';
    if (strs.length === 1) return strs[0];

    let prefix = "";
    strs.sort();

    for (let i = 0; i < strs[0].length; i++) {
        if (strs[0][i] === strs[strs.length - 1][i]) {
            prefix += strs[0][i];
            // return prefix = strs[0].substring(0, i);
        }else{
            return prefix;
        }

    }
    return prefix;
};

const strs = ["flower", "flow", "flight"];
const strs2 = ["dog", "racecar", "car"];
const strs3 = ["cir", "car"];
const strs4 = [""];
const strs5 = ["ab", "a"];

console.log(longestCommonPrefix(strs));
console.log(longestCommonPrefix(strs2));
console.log(longestCommonPrefix(strs3));
console.log(longestCommonPrefix(strs4));
console.log(longestCommonPrefix(strs5));
