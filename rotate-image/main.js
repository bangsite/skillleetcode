/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function (matrix) {

    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix.length; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length / 2; j++) {
            [matrix[i][j], matrix[i][matrix.length - 1 - j]] = [matrix[i][matrix.length - 1 - j], matrix[i][j]];
        }
    }

    // console.log(matrix)
};

const rotate2 = function (matrix) {
    let n = matrix.length, depth = n / 2;

    for (let i = 0; i < n; i++) {
        let len = n - 2 * i - 1, opp = n - 1 - i;
        for (let j = 0; j < len; j++) {
            let temp = matrix[i][i + j];
            matrix[i][i + j] = matrix[opp - j][i];
            matrix[opp - j][i] = matrix[opp][opp - j];
            matrix[opp][opp - j] = matrix[i + j][opp];
            matrix[i + j][opp] = temp;
        }
    }

    // console.log(matrix)
};
module.exports = {
    rotate, rotate2
}

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const matrix2 = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]];

// console.log(rotate2(matrix));
// console.log(rotate2(matrix2));
