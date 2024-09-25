const {
    moveZeroes,
    moveZeroes2
} = require('./main');

describe('moveZeroes functions', () => {
    test('moves zeroes to the end of the array', () => {
        const nums = [0, 1, 0, 3, 12];
        moveZeroes(nums);
        expect(nums).toEqual([1, 3, 12, 0, 0]);
    });

    test('handles array with one element', () => {
        const nums = [0];
        moveZeroes(nums);
        expect(nums).toEqual([0]);
    });

    test('handles array with multiple zeroes', () => {
        const nums = [0, 0, 1];
        moveZeroes(nums);
        expect(nums).toEqual([1, 0, 0]);
    });

    test('handles array with no zeroes', () => {
        const nums = [1, 2, 3];
        moveZeroes(nums);
        expect(nums).toEqual([1, 2, 3]);
    });
    test('handles empty array', () => {
        const nums = [];
        moveZeroes(nums);
        expect(nums).toEqual([]);
    });

    test('handles array with zero at the end', () => {
        const nums = [1, 2, 3, 0];
        moveZeroes(nums);
        expect(nums).toEqual([1, 2, 3, 0]);
    });
})
describe('moveZeroes2', () => {
    test('moves zeroes to the end of the array', () => {
        const nums = [0, 1, 0, 3, 12];
        moveZeroes2(nums);
        expect(nums).toEqual([1, 3, 12, 0, 0]);
    });

    test('handles array with one element', () => {
        const nums = [0];
        moveZeroes2(nums);
        expect(nums).toEqual([0]);
    });

    test('handles array with multiple zeroes', () => {
        const nums = [0, 0, 1];
        moveZeroes2(nums);
        expect(nums).toEqual([1, 0, 0]);
    });

    test('handles array with no zeroes', () => {
        const nums = [1, 2, 3];
        moveZeroes2(nums);
        expect(nums).toEqual([1, 2, 3]);
    });
    test('handles empty array', () => {
        const nums = [];
        moveZeroes2(nums);
        expect(nums).toEqual([]);
    });

    test('handles array with zero at the end', () => {
        const nums = [1, 2, 3, 0];
        moveZeroes2(nums);
        expect(nums).toEqual([1, 2, 3, 0]);
    });
});
