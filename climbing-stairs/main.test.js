const {climbStairs,climbStairs2} = require('./main');


describe('climbStairs', () => {
    test('should return 1 for n = 1', () => {
        expect(climbStairs(1)).toBe(1);
    });

    test('should return 2 for n = 2', () => {
        expect(climbStairs(2)).toBe(2);
    });

    test('should return 3 for n = 3', () => {
        expect(climbStairs(3)).toBe(3);
    });

    test('should return 5 for n = 4', () => {
        expect(climbStairs(4)).toBe(5);
    });

    test('should return 8 for n = 5', () => {
        expect(climbStairs(5)).toBe(8);
    });

});

describe('climbStairs2', () => {
    test('should return 1 for n = 1', () => {
        expect(climbStairs2(1)).toBe(1);
    });

    test('should return 2 for n = 2', () => {
        expect(climbStairs2(2)).toBe(2);
    });

    test('should return 3 for n = 3', () => {
        expect(climbStairs2(3)).toBe(3);
    });

    test('should return 5 for n = 4', () => {
        expect(climbStairs2(4)).toBe(5);
    });

    test('should return 8 for n = 5', () => {
        expect(climbStairs2(5)).toBe(8);
    });

});
