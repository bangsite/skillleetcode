/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = function (pattern, s) {
    const arrWords = s.split(/\s+/);
    const arrResult = new Map();
    console.log(pattern,arrWords)
    if (arrWords.length !== pattern.length) return false;
    if (new Set(arrWords).size !== new Set(pattern).size) return false;



    for (let i = 0; i < pattern.length; i++) {
        console.log(arrResult.get(pattern[i]),arrWords[i]);

        if (arrResult.has(pattern[i]) && arrResult.get(pattern[i]) !== arrWords[i]) return false;

        arrResult.set(pattern[i], arrWords[i]);
        console.log(arrResult);

    }
    console.log(arrResult)

    return true;
};


const pattern = "abba", s = "dog cat cat dog",
    pattern2 = "abba", s2 = "dog cat cat fish",
    pattern3 = "aaaa", s3 = "dog cat cat dog",
    pattern4 = "aba", s4 = "dog cat cat";

console.log(wordPattern(pattern, s));
console.log(wordPattern(pattern2, s2));
console.log(wordPattern(pattern3, s3));
console.log(wordPattern(pattern4, s4));
