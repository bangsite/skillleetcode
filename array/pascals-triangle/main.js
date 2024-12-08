/**
 * Dynamic with 1D array
 * @param {number} numRows
 * @return {number[][]}
 */
let generate = function (numRows) {
    let result = Array();

    for (let i = 0; i < numRows; i++) {
        result.push(Array(i + 1));

        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) result[i][j] = 1; else {
                result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
            }
        }
    }
    return result;
};

/**
 * Recursion
 * @param {number} numRows
 * @return {number[][]}
 */
let generate2 = function (numRows) {
    let result = Array();
    if (numRows === 0) return [];

    if (numRows === 1) return [[1]];

    let prevRow = generate2(numRows - 1);
    let newArr = new Array(numRows).fill(1);


    for (let i = 1; i < numRows - 1; i++) {
        newArr[i] = prevRow[numRows - 2][i - 1] + prevRow[numRows - 2][i];
    }

    prevRow.push(newArr);
    return prevRow;
};

/**
 * Use the binomial coefficient formula C(n, k) to calculate each element.
 * @param {number} numRows
 * @return {number[][]}
 */
let generate3 = function (numRows) {
    let result = [];
    if (numRows === 0) return [];
    let firstRow = [1];
    result.push(firstRow);


    for (let i = 1; i < numRows; i++) {
        let prevRow = result[i - 1];
        let currentRow = [1];

        for (let j = 1; j < i; j++) {
            currentRow.push(prevRow[j - 1] + prevRow[j]);
        }

        currentRow.push(1);
        result.push(currentRow)
    }

    return result;
};

module.exports = {
    generate
}

const n = 5;
const n2 = 1;

console.log(generate(n));
console.log(generate2(n));
console.log(generate3(n));
