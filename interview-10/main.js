/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
    if (!s.length) return true;
    if (!s.length) return true;

    let strClean = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
    let strReverse = strClean.split('').reverse().join('');

    return strClean === strReverse;
};

const s = "A man, a plan, a canal: Panama";
const s2 = "race a car";
const s3 = '';
const s4 = 'a.';

console.log(isPalindrome(s));
console.log(isPalindrome(s2));
console.log(isPalindrome(s3));
console.log(isPalindrome(s4));
