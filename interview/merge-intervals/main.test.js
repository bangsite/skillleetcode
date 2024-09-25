const {merge} = require('./main');


describe('merge', () => {
    test('should merge overlapping intervals correctly', () => {
        const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
        expect(merge(intervals)).toEqual([[1, 6], [8, 10], [15, 18]]);
    });

    test('should merge intervals where one interval is a subset of another', () => {
        const intervals = [[1, 4], [4, 5]];
        expect(merge(intervals)).toEqual([[1, 5]]);
    });

    test('should handle intervals with the same start point', () => {
        const intervals = [[1, 4], [0, 4]];
        expect(merge(intervals)).toEqual([[0, 4]]);
    });

    test('should handle intervals with adjacent start and end points', () => {
        const intervals = [[1, 4], [0, 1]];
        expect(merge(intervals)).toEqual([[0, 4]]);
    });

    test('should handle completely overlapping intervals', () => {
        const intervals = [[1, 4], [0, 5]];
        expect(merge(intervals)).toEqual([[0, 5]]);
    });

    test('should merge multiple overlapping intervals', () => {
        const intervals = [[1, 4], [0, 2], [3, 5]];
        expect(merge(intervals)).toEqual([[0, 5]]);
    });
});

