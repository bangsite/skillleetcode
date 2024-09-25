const {myAtoi} = require('./main');

describe('myAtoi', () => {
    const s = "42",
        s2 = "   -042",
        s3 = "1337c0d3",
        s4 = "0-1",
        s5 = "words and 987",
        s6 = "-91283472332",
        s7 = "-+12",
        s8 = "21474836460",
        s9 = "  -0012a42",
        s10 = "      -11919730356x",
        s11 = "+"
    ;

    test('should convert a string to an integer', () => {
        expect(myAtoi(s)).toStrictEqual(42);
    });

    test('should handle leading spaces', () => {
        expect(myAtoi(s2)).toStrictEqual(-42);
        expect(myAtoi(s9)).toBe(-12);

    });

    test('should handle non-numeric characters following the number', () => {
        expect(myAtoi(s3)).toStrictEqual(1337);
        expect(myAtoi(s4)).toStrictEqual(0);
    });

    test('should return 0 for a string with non-numeric character as the first character', () => {
        expect(myAtoi(s5)).toStrictEqual(0);
    });

    test('should handle negative numbers', () => {
        expect(myAtoi(s6)).toBe(-2147483648); // Assuming this is the correct behavior based on the provided code
    });

    test('should handle max int', () => {
        expect(myAtoi(s8)).toBe(2147483647);
    });

    test('should handle min int', () => {
        expect(myAtoi(s10)).toBe(-2147483648);
    });

    test('should handle invalid signs', () => {
        expect(myAtoi(s7)).toBe(-0);
    });

    test('should handle only sign', () => {
        expect(myAtoi(s11)).toStrictEqual(0);
    });
});


