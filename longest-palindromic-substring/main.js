/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
    // keep track of the most recent index of letter
    let seen = new Map();
    // keep track of the starting index of the current substring
    let start = 0;
    // keeps track of the maximum substring length
    let maxSize = 0;


    if (s.length < 2) return s.length;

    for (let i = 0; i < s.length; i++) {
        // if the current char was seen, move the start to (1 + last index of char)
        // max prevents moving backward, start can only move forward
        if (seen.has(s[i])) {
            start = Math.max(start, seen.get(s[i]) + 1)
        }

        seen.set(s[i], i);
        // maximum of the current substring length and maxSize
        maxSize = Math.max(maxSize, i - start + 1)
    }

    return maxSize

};

/**
 * Solution 2
 * @param s
 * @return {number|*}
 */
const lengthOfLongestSubstring2 = function (s) {
    let arrStr = s.split('');
    let map = {};
    let start = 0;

    if (s.length < 2) return s.length;

    return arrStr.reduce((max, char, index) => {
        start = map[char] >= start ? map[char] + 1 : start;
        map[char] = index;
        return Math.max(max, index - start + 1)
    }, 0);
};

module.exports = {
    lengthOfLongestSubstring,
    lengthOfLongestSubstring2
}
const s = 'abcabcbb', s2 = 'bbbbb', s3 = 'pwwkew';

console.log(lengthOfLongestSubstring2(s));// 3
console.log(lengthOfLongestSubstring2(s2));// 1
console.log(lengthOfLongestSubstring2(s3));// 3
