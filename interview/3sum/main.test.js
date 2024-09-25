const {threeSum} = require('./main');


describe('threeSum', () => {
    it('should return the correct result for input [-1, 0, 1, 2, -1, -4]', () => {
        const nums = [-1, 0, 1, 2, -1, -4];
        const expected = [[-1, -1, 2], [-1, 0, 1]];
        const result = threeSum(nums);
        expect(result).toEqual(expected);
    });

    it('should return the correct result for input [0, 1, 1]', () => {
        const nums = [0, 1, 1];
        const expected = [];
        const result = threeSum(nums);
        expect(result).toEqual(expected);
    });

    it('should return the correct result for input [0, 0, 0]', () => {
        const nums = [0, 0, 0];
        const expected = [[0, 0, 0]];
        const result = threeSum(nums);
        expect(result).toEqual(expected);
    });

    it('should return the correct result for input [0, 0, 0, 0]', () => {
        const nums = [0, 0, 0, 0];
        const expected = [[0, 0, 0]];
        const result = threeSum(nums);
        expect(result).toEqual(expected);
    });
});


