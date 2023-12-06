/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function (ransomNote, magazine) {

    for (let i = 0; i < magazine.length; i++) {
        ransomNote = ransomNote.replace(magazine[i], '');
    }

    console.log('out:::',ransomNote);

    return (!ransomNote);

};


const ransomNote = "a", magazine = "b",
    ransomNote2 = "aa", magazine2 = "ab",
    ransomNote3 = "aa", magazine3 = "aab";


console.log(canConstruct(ransomNote, magazine));
console.log(canConstruct(ransomNote2, magazine2));
console.log(canConstruct(ransomNote3, magazine3));
