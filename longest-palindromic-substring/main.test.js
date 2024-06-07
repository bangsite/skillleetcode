const {longestPalindrome, longestPalindrome2} = require('./main');

describe('longestPalindrome', () => {
    const s = 'babad', s2 = 'cbbd', s3 = 'a', s4 = 'ac', s5 = 'ccc', s6 = 'aacabdkacaa', s7 = "abcba",
        s8 = "xaabacxcabaaxcabaax", s9 = "aaabaaaa";

    test('should return the correct longest palindrome substring ', () => {
        expect(longestPalindrome(s)).toBe('bab');
        expect(longestPalindrome(s2)).toBe('bb');
        expect(longestPalindrome(s3)).toBe('a');
        expect(longestPalindrome(s4)).toBe('a');
        expect(longestPalindrome(s5)).toBe('ccc');
        expect(longestPalindrome(s6)).toBe('aca');
        expect(longestPalindrome(s7)).toBe('abcba');
        expect(longestPalindrome(s8)).toBe('xaabacxcabaax');
        expect(longestPalindrome(s9)).toBe('aaabaaa');

    });
});


describe('longestPalindrome 2', () => {
    const s = 'babad', s2 = 'cbbd', s3 = 'a', s4 = 'ac', s5 = 'ccc', s6 = 'aacabdkacaa', s7 = "abcba",
        s8 = "xaabacxcabaaxcabaax", s9 = "aaabaaaa";


    test('should return the correct longest palindrome substring ', () => {
        expect(longestPalindrome2(s)).toBe('bab');
        expect(longestPalindrome2(s2)).toBe('bb');
        expect(longestPalindrome2(s3)).toBe('a');
        expect(longestPalindrome2(s4)).toBe('a');
        expect(longestPalindrome2(s5)).toBe('ccc');
        expect(longestPalindrome2(s6)).toBe('aca');
        expect(longestPalindrome2(s7)).toBe('abcba');
        expect(longestPalindrome2(s8)).toBe('xaabacxcabaax');
        expect(longestPalindrome2(s9)).toBe('aaabaaa');
    });
});


