const {
    uniquePaths,
    uniquePaths2,
    uniquePaths3
} = require('./main');

describe('uniquePaths functions', () => {
    const m = 3, n = 7;
    const m2 = 3, n2 = 2;

    test('uniquePaths returns true 28', () => {
        expect(uniquePaths(m, n)).toBe(28);

    });

    test('uniquePaths returns true 3', () => {
        expect(uniquePaths(m2, n2)).toBe(3);
    });
});
describe('uniquePaths2 functions', () => {
    const m = 3, n = 7;
    const m2 = 3, n2 = 2;

    test('uniquePaths returns true 28', () => {
        expect(uniquePaths2(m, n)).toBe(28);
    });

    test('uniquePaths returns true 3', () => {
        expect(uniquePaths2(m2, n2)).toBe(3);
    });
});
