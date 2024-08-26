const {
    sortColors,
    sortColors2,
    sortColors3
} = require('./main');


describe('sortColors (Bubble Sort)', () => {
    test('sorts an array of [2, 0, 2, 1, 1, 0]', () => {
        const nums = [2, 0, 2, 1, 1, 0];

        expect( sortColors(nums)).toEqual([0, 0, 1, 1, 2, 2]);
    });

    test('sorts an array of [2, 0, 1]', () => {
        const nums = [2, 0, 1];

        expect( sortColors(nums)).toEqual([0, 1, 2]);
    });

    test('handles an empty array', () => {
        const nums = [];
        expect(sortColors(nums)).toEqual([]);
    });

    test('handles an array with one element', () => {
        const nums = [1];
        sortColors(nums);
        expect( sortColors(nums)).toEqual([1]);
    });
})

describe('sortColors2 (Merge Sort)', () => {
    test('sorts an array of [2, 0, 2, 1, 1, 0]', () => {
        const nums = [2, 0, 2, 1, 1, 0];
        expect(sortColors2(nums)).toEqual([0, 0, 1, 1, 2, 2]);
    });

    test('sorts an array of [2, 0, 1]', () => {
        const nums = [2, 0, 1];
        expect(sortColors2(nums)).toEqual([0, 1, 2]);
    });

    test('handles an empty array', () => {
        const nums = [];
        expect(sortColors2(nums)).toEqual([]);
    });

    test('handles an array with one element', () => {
        const nums = [1];
        expect(sortColors2(nums)).toEqual([1]);
    });
})
describe('sortColors3 (Dutch National Flag)', () => {
    test('sorts an array of [2, 0, 2, 1, 1, 0]', () => {
        const nums = [2, 0, 2, 1, 1, 0];
        expect(sortColors3(nums)).toEqual([0, 0, 1, 1, 2, 2]);
    });

    test('sorts an array of [2, 0, 1]', () => {
        const nums = [2, 0, 1];
        expect(sortColors3(nums)).toEqual([0, 1, 2]);
    });

    test('handles an empty array', () => {
        const nums = [];
        expect(sortColors3(nums)).toEqual([]);
    });

    test('handles an array with one element', () => {
        const nums = [1];
        expect(sortColors3(nums)).toEqual([1]);
    });
});
