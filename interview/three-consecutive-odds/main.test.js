const {threeConsecutiveOdds, threeConsecutiveOdds2} = require('./main');
const constants = require("constants");


describe('threeConsecutiveOdds', () => {
    it('should return true if there are three consecutive odds', () => {
        const arr = [1, 2, 34, 3, 4, 5, 7, 23, 12];
        const expected = true;
        const result = threeConsecutiveOdds(arr);
        expect(result).toEqual(expected);
    });

    it('should return false if there are not three consecutive odds', () => {
        const arr = [2, 6, 4, 1];
        const expected = false;
        const result = threeConsecutiveOdds(arr);
        expect(result).toEqual(expected);
    });
})


describe('threeConsecutiveOdds2', () => {
    it('should return true if there are three consecutive odds', () => {
        const arr = [1, 2, 34, 3, 4, 5, 7, 23, 12];
        const expected = true;
        const result = threeConsecutiveOdds2(arr);
        expect(result).toEqual(expected);
    });

    it('should return false if there are not three consecutive odds', () => {
        const arr = [2, 6, 4, 1];
        const expected = false;
        const result = threeConsecutiveOdds2(arr);
        expect(result).toEqual(expected);
    });
})
