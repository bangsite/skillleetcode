const isPalindrome = require('./main');

test('should be a palindrome number', () => {
    const x = 121;
    const result = isPalindrome(x);
    expect(result).toEqual(true);
})

test('not should be a palindrome number', () => {
    const x = -121;
    const result = isPalindrome(x);
    expect(result).toEqual(false);
})

test('not should be a palindrome number', () => {
    const x = 10;
    const result = isPalindrome(x);
    expect(result).toEqual(false);
})
