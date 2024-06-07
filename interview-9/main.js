/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
    let indexArr = [];

    for (let i = 0; i < heyStack.length; i++) {

        if (needle[i] === heyStack[i]) {
            indexArr.push(i);
        }
    }
    // console.log(indexArr[0]);

    return  indexArr.length ? indexArr[0]: -1;
};

const heyStack = "sadbutsad", needle = "sad";
const heyStack2 = "leetcode", needle2 = "leeto";


console.log(strStr(heyStack, needle));
console.log(strStr(heyStack2, needle2));
