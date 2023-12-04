/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {

    let strArr = s.trim().split(' ');

    return strArr.pop().length;
};

const lengthOfLastWord2 = function (s) {

    let trimmedString = s.trim();
    console.log('trimmedString:::',trimmedString.lastIndexOf(' '));
    console.log('trimmedString:::',trimmedString.length - trimmedString.lastIndexOf(' '));

    return trimmedString.length - trimmedString.lastIndexOf(' ') - 1;
};

const s = "Hello World"
const s2 = "   fly me   to   the moon  "
const s3 = "luffy is still joyboy"

console.log(lengthOfLastWord(s));
console.log(lengthOfLastWord(s2));
console.log(lengthOfLastWord(s3));
console.log(lengthOfLastWord2(s3));
