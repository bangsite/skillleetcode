/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function (s, t) {
    if (!s) return true;

    let result = 0;

    for (let i = 0; i < t.length; i++) {
        if (t[i] === s[result]) result++;
        if (result === s.length) return true;
    }

    return false;
}


const s = 'abc', t = 'ahbgdc',
    s2 = 'axc', t2 = 'ahbgdc',
    s3 = 'bb', t3 = 'ahbgdc';

console.log(isSubsequence(s, t));
console.log(isSubsequence(s2, t2));
console.log(isSubsequence(s3, t3));
