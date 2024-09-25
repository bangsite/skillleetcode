const {reverse,reverse2,reverse3} = require('./main');
const {benchMark} = require("./lib/testUtils");
const values= [1, 8, 10, 5, 100, 1000, 10000, 100000, 1000000];

describe('reverse',()=>{
    const x = 123, x2 = -123, x3 = 120, x4 = 1534236469, x5 = 1563847412;
    test('should reverse positive number correctly', () => {
        expect(reverse(x)).toBe(321);
        expect(reverse(x3)).toBe(21);
    });

    test('should reverse negative number', () => {
        expect(reverse(x2)).toBe(-321);
    });

    test('should return 0 for number that overflow 32-bit integer range', () => {
        expect(reverse(x4)).toBe(0);
        expect(reverse(x5)).toBe(0);
    });
});


describe('reverse2',()=>{
    const x = 123, x2 = -123, x3 = 120, x4 = 1534236469, x5 = 1563847412;
    test('should reverse positive number correctly', () => {
        expect(reverse(x)).toBe(321);
        expect(reverse(x3)).toBe(21);
    });

    test('should reverse negative number', () => {
        expect(reverse(x2)).toBe(-321);
    });

    test('should return 0 for number that overflow 32-bit integer range', () => {
        expect(reverse(x4)).toBe(0);
        expect(reverse(x5)).toBe(0);
    });
});

describe('reverse3',()=>{
    const x = 123, x2 = -123, x3 = 120, x4 = 1534236469, x5 = 1563847412;
    test('should reverse positive number correctly', () => {
        expect(reverse(x)).toBe(321);
        expect(reverse(x3)).toBe(21);
    });

    test('should reverse negative number', () => {
        expect(reverse(x2)).toBe(-321);
    });

    test('should return 0 for number that overflow 32-bit integer range', () => {
        expect(reverse(x4)).toBe(0);
        expect(reverse(x5)).toBe(0);
    });
});

