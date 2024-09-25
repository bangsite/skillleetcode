const {maxArea} = require('./main');


describe('maxArea', () => {
    it('should return the maximum area for the height array [1, 8, 6, 2, 5, 4, 8, 3, 7]', () => {
        const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
        const expected = 49;
        const result = maxArea(height);
        expect(result).toBe(expected);
    });

    it('should return the maximum area for the height array [1, 1]', () => {
        const height = [1, 1];
        const expected = 1;
        const result = maxArea(height);
        expect(result).toBe(expected);
    });

    it('should return the maximum area for the height array [1, 2, 1]', () => {
        const height = [1, 2, 1];
        const expected = 2;
        const result = maxArea(height);
        expect(result).toBe(expected);
    });

    it('should return the maximum area for the height array [2, 3, 4, 5, 18, 17, 6]', () => {
        const height = [2, 3, 4, 5, 18, 17, 6];
        const expected = 17;
        const result = maxArea(height);
        expect(result).toBe(expected);
    });
})


