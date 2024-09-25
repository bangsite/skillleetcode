const {twoSum,twoSum2} = require('./main');

describe('twoSum',()=>{
    const arr = [2, 7, 11, 15], target = 9;
    const arr2 = [3, 2, 4], target2 = 6;
    const arr3 = [3, 3], target3 = 6;

    test('should return the correct index of the two numbers', () => {
        expect(twoSum(arr, target)).toStrictEqual([0,1]);
        expect(twoSum(arr2, target2)).toStrictEqual([1,2]);
        expect(twoSum(arr3, target3)).toStrictEqual([0,1]);

    });
});


describe('twoSum 2',()=>{
    const arr = [2, 7, 11, 15], target = 9;
    const arr2 = [3, 2, 4], target2 = 6;
    const arr3 = [3, 3], target3 = 6;

    test('should return the correct index of the two numbers', () => {
        expect(twoSum2(arr, target)).toStrictEqual([0,1]);
        expect(twoSum2(arr2, target2)).toStrictEqual([1,2]);
        expect(twoSum2(arr3, target3)).toStrictEqual([0,1]);

    });
});


