const {reverseString, reverseString2, reverseString3} = require('./main');

// Setup data;

describe('reverse string', () => {
    const s = ["h", "e", "l", "l", "o"],
        s2 = [],
        s3 = ["A"],
        s4 = ["A", "B"],
        s5 = ["a", "a", "a", "a"],
        s6 = ["!", "@", "#", "$", "%"],
        s7 = ["a", "b", "c", "d", "e", "f", "g", "h"];
    test('should reverse the characters in place', () => {
        const result = ["o", "l", "l", "e", "h"];
        expect(reverseString(s)).toEqual(result);
    });


    test('should handle edge case with empty array', () => {
        const result = [];
        expect(reverseString(s2)).toEqual(result);
    });

    test('should reverse a single character', () => {
        const result = ["A"];
        expect(reverseString(s3)).toEqual(result);
    });

    test('should reverse an array with two characters', () => {
        const result = ["B", "A"];
        expect(reverseString(s4)).toEqual(result);
    });

    test('should reverse an array with multiple identical characters', () => {
        const result = ["a", "a", "a", "a"];
        expect(reverseString(s5)).toEqual(result);
    });

    test('should reverse an array with special characters', () => {
        const result = ["%", "$", "#", "@", "!"];
        expect(reverseString(s6)).toEqual(result);
    });

    test('should reverse a long array', () => {
        const result = ["h", "g", "f", "e", "d", "c", "b", "a"]
        expect(reverseString(s7)).toEqual(result);
    });
})

describe('reverse string 2', () => {
    const s = ["h", "e", "l", "l", "o"],
        s2 = [],
        s3 = ["A"],
        s4 = ["A", "B"],
        s5 = ["a", "a", "a", "a"],
        s6 = ["!", "@", "#", "$", "%"],
        s7 = ["a", "b", "c", "d", "e", "f", "g", "h"];
    test('should reverse the characters in place', () => {
        const result = ["o", "l", "l", "e", "h"];
        expect(reverseString2(s)).toEqual(result);
    });


    test('should handle edge case with empty array', () => {
        const result = [];
        expect(reverseString2(s2)).toEqual(result);
    });

    test('should reverse a single character', () => {
        const result = ["A"];
        expect(reverseString2(s3)).toEqual(result);
    });

    test('should reverse an array with two characters', () => {
        const result = ["B", "A"];
        expect(reverseString2(s4)).toEqual(result);
    });

    test('should reverse an array with multiple identical characters', () => {
        const result = ["a", "a", "a", "a"];
        expect(reverseString2(s5)).toEqual(result);
    });

    test('should reverse an array with special characters', () => {
        const result = ["%", "$", "#", "@", "!"];
        expect(reverseString2(s6)).toEqual(result);
    });

    test('should reverse a long array', () => {
        const result = ["h", "g", "f", "e", "d", "c", "b", "a"]
        expect(reverseString2(s7)).toEqual(result);
    });
})

describe('reverse string 3', () => {
    const s = ["h", "e", "l", "l", "o"],
        s2 = [],
        s3 = ["A"],
        s4 = ["A", "B"],
        s5 = ["a", "a", "a", "a"],
        s6 = ["!", "@", "#", "$", "%"],
        s7 = ["a", "b", "c", "d", "e", "f", "g", "h"];
    test('should reverse the characters in place', () => {
        const result = ["o", "l", "l", "e", "h"];
        expect(reverseString3(s)).toEqual(result);
    });


    test('should handle edge case with empty array', () => {
        const result = [];
        expect(reverseString3(s2)).toEqual(result);
    });

    test('should reverse a single character', () => {
        const result = ["A"];
        expect(reverseString3(s3)).toEqual(result);
    });

    test('should reverse an array with two characters', () => {
        const result = ["B", "A"];
        expect(reverseString3(s4)).toEqual(result);
    });

    test('should reverse an array with multiple identical characters', () => {
        const result = ["a", "a", "a", "a"];
        expect(reverseString3(s5)).toEqual(result);
    });

    test('should reverse an array with special characters', () => {
        const result = ["%", "$", "#", "@", "!"];
        expect(reverseString3(s6)).toEqual(result);
    });

    test('should reverse a long array', () => {
        const result = ["h", "g", "f", "e", "d", "c", "b", "a"]
        expect(reverseString3(s7)).toEqual(result);
    });
})

