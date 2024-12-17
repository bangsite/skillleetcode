/**
 * Use depth first search & backtracking
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
    const result = [];

    const dfs = (current, open, close) => {
        if (current.length === 2 * n) {
            return result.push(current);
        }

        if (open < n) {
            dfs(current + '(', open + 1, close);
        }

        if (close < open) {
            dfs(current + ')', open, close + 1);
        }
    }

    dfs('', 0, 0);
    return result;

};

/**
 * Use depth first search & backtracking
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis2 = function (n) {
    const result = [];

    const dfs = (current, open, close) => {
        if (current.length === 2 * n) {
            return result.push(current);
        }

        if (open < n) {
            dfs(current + '(', open + 1, close);
        }

        if (close < open) {
            dfs(current + ')', open, close + 1);
        }
    }

    dfs('', 0, 0);
    return result;

};



module.exports = {
    generateParenthesis
}

const n = 3;
const n2 = 1;

console.log(generateParenthesis(n));
console.log(generateParenthesis(n2));
