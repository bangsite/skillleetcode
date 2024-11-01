const {existDFS} = require('./main');

// Setup data;
const data = [];

describe('existDFS', () => {
    test('should be return true for the word "ABCCED"', () => {
        const board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]];
        const word = "ABCCED";
        expect(existDFS(board, word)).toBe(true);
    });

    test('should be return true for the word "SEE"', () => {
        const board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]];
        const word = "SEE";
        expect(existDFS(board, word)).toBe(true);
    });

    test('should be return false for the word "ABCB"', () => {
        const board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]];
        const word = "ABCB";
        expect(existDFS(board, word)).toBe(false);
    });

    test('should be return false for an board"', () => {
        const board = [];
        const word = "ANY";
        expect(existDFS(board, word)).toBe(false);
    });

    test('should be return true for the word "BCD" on a single row', () => {
        const board = [["A", "B", "C", "D"]];
        const word = "BCD";
        expect(existDFS(board, word)).toBe(true);
    });

    test('should be return true for the word "BCB"', () => {
        const board = [["A", "B", "C", "B"], ["S", "B", "C", "S"], ["A", "D", "E", "E"]];
        const word = "BCB";
        expect(existDFS(board, word)).toBe(true);
    });
})

