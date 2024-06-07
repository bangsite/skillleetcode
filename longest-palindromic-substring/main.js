const check = (s, i, j) => {
    while (i < j) {
        if (s[i] !== s[j]) return false;
        i++;
        j--;
    }
    return true;
}

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
    let n = s.length;
    let maxLength = 0;
    let startIndex = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            if (check(s, i, j)) {
                if (j - i + 1 > maxLength) {
                    maxLength = j - i + 1;
                    startIndex = i;
                }
            }
        }

    }
    return s.substring(startIndex, startIndex + maxLength);

};


const expandAroundCenter = (s, left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }

    return s.substring(left + 1, right);
}
/**
 * Solution 2
 * @param {string} s
 * @return {string}
 */
const longestPalindrome2 = function (s) {
    let longest = "";

    for (let i = 0; i < s.length; i++) {
        let odd = expandAroundCenter(s, i, i);
        let even = expandAroundCenter(s, i, i + 1);

        if (odd.length > longest.length) {
            longest = odd;
        }

        if (even.length > longest.length) {
            longest = even;
        }
    }

    return longest;
};


module.exports = {
    longestPalindrome,
    longestPalindrome2
}
const s = 'babad', s2 = 'cbbd', s3 = 'a', s4 = 'ac', s5 = 'ccc', s6 = 'aacabdkacaa', s7 = "abcba",
    s8 = "xaabacxcabaaxcabaax", s9 = "aaabaaaa",
    s10 = "abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababa";

console.log(longestPalindrome2(s));// bab or aba
console.log(longestPalindrome2(s2));// bb
console.log(longestPalindrome2(s3));// a
console.log(longestPalindrome2(s4));// a
console.log(longestPalindrome2(s5));// ccc
console.log(longestPalindrome2(s6)); // aca
console.log(longestPalindrome2(s7)); // abcba
console.log(longestPalindrome2(s8)); // xaabacxcabaax
console.log(longestPalindrome2(s9)); // aaabaaa
console.log(longestPalindrome(s10)); //
