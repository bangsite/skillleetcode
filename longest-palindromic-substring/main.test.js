const {lengthOfLongestSubstring, lengthOfLongestSubstring2} = require('./main');


describe('lengthOfLongestSubstring', () => {
    it('should return the correct length of the longest substring', () => {
        expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
        expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
        expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
    });

    it('should handle empty strings', () => {
        expect(lengthOfLongestSubstring2('')).toBe(0);
    });

    it('should handle single-character strings', () => {
        expect(lengthOfLongestSubstring2('a')).toBe(1);
    });
});


describe('lengthOfLongestSubstring2', () => {
    it('should return the correct length of the longest substring', () => {
        expect(lengthOfLongestSubstring2('abcabcbb')).toBe(3);
        expect(lengthOfLongestSubstring2('bbbbb')).toBe(1);
        expect(lengthOfLongestSubstring2('pwwkew')).toBe(3);
    });

    it('should handle empty strings', () => {
        expect(lengthOfLongestSubstring2('')).toBe(0);
    });

    it('should handle single-character strings', () => {
        expect(lengthOfLongestSubstring2('a')).toBe(1);
    });
});

