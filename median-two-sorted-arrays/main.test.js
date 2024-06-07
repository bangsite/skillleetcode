const {findMedianSortedArrays,findMedianSortedArrays2} = require('./main');

describe('findMedianSortedArrays',()=>{
    const num1 = [1, 3], num2 = [2];
    const num3 = [1, 2], num4 = [3, 4];
    const num5 = [], num6 = [1];
    const num7 = [3], num8 = [-2, -1];
    const num9 = [], num10 = [2, 3];

    test('should return the correct median', () => {
        expect(findMedianSortedArrays(num1, num2)).toBe(2);
        expect(findMedianSortedArrays(num3, num4)).toBe(2.5);
        expect(findMedianSortedArrays(num5, num6)).toBe(1);
        expect(findMedianSortedArrays(num7, num8)).toBe(-1);
        expect(findMedianSortedArrays(num9, num10)).toBe(2.5);
    });
});


describe('findMedianSortedArrays 2',()=>{
    const num1 = [1, 3], num2 = [2];
    const num3 = [1, 2], num4 = [3, 4];
    const num5 = [], num6 = [1];
    const num7 = [3], num8 = [-2, -1];
    const num9 = [], num10 = [2, 3];

    test('should return the correct median', () => {
        expect(findMedianSortedArrays2(num1, num2)).toBe(2);
        expect(findMedianSortedArrays2(num3, num4)).toBe(2.5);
        expect(findMedianSortedArrays2(num5, num6)).toBe(1);
        expect(findMedianSortedArrays2(num7, num8)).toBe(-1);
        expect(findMedianSortedArrays2(num9, num10)).toBe(2.5);
    });
});


