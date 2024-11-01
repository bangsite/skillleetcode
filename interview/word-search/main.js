/**
 *
 * @param board
 * @param word
 * @param row
 * @param col
 * @param len
 * @return {*|boolean}
 */
const backtrack = (board, word, row, col, len) => {
    if (len === word.length) return true;

    if (row < 0 || row >= board.length
        || col < 0 || col >= board[0].length
        || board[row][col] !== word.charAt(len)) {
        return false;
    }

    const temp = board[row][col];
    board[row][col] = '\0';

    const result = backtrack(board, word, row + 1, col, len + 1) ||
        backtrack(board, word, row - 1, col, len + 1) ||
        backtrack(board, word, row, col + 1, len + 1) ||
        backtrack(board, word, row, col - 1, len + 1);

    board[row][col] = temp;

    return result;
}

/**
 * Use depth first search (DFS) + backtracking
 * @param board
 * @param word
 * @return {boolean}
 */
const existDFS = function (board, word) {

    for (let row = 0; row < board.length; ++row) {
        for (let col = 0; col < board[0].length; ++col) {
            if (backtrack(board, word, row, col, 0)) {
                return true;
            }
        }
    }
    return false;
};

module.exports = {
    existDFS
}

const board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]];
const word = "ABCCED", word2 = "SEE", word3 = "ABCB";


console.log(existDFS(board, word));
console.log(existDFS(board, word2));
console.log(existDFS(board, word3));
