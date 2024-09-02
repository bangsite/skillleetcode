/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = function (m, n) {
    let result = 1;
    for (let i = 1; i <= m - 1; i++) {
        result = result * (n - 1 + i) / i;
    }
    return result;
};

/**
 * Solution 2
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths2 = function (m, n) {
    const dp = Array.from({length: m}, () => Array(n).fill(0));
    console.log('dp:', dp)

    for (let i = 0; i < m; i++) {
        dp[i][0] = 1;
    }
    for (let j = 0; j < n; j++) {
        dp[0][j] = 1;
    }
    console.log('dp before:', dp)

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    console.log('dp after:', dp)

    return dp[m - 1][n - 1];
};

/**
 * Solution 3
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths3 = function (m, n) {
    let dp = Array(n).fill(1);
    console.log('dp:', dp)

    for (let i = 1; i < m; i++) {
        let currRow = Array(n).fill(1);
        for (let j = 1; j < n; j++) {
            currRow[j] = currRow[j - 1] + dp[j];
        }

        dp = currRow;
    }
    console.log('dp after:', dp)

    return dp[n - 1];
};

const m = 3, n = 7;
const m2 = 3, n2 = 2;
const m3 = 3, n3 = 7;


console.log(uniquePaths3(m, n));
console.log(uniquePaths3(m2, n2));
