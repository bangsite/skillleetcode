/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
    let min = prices[0];
    let max = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] - min > max) {
            max = prices[i] - min;
        }
        if (prices[i] < min) min = prices[i];
    }

    return max;
};


const prices = [7, 1, 5, 3, 6, 4];
const prices2 = [7, 6, 4, 3, 1];
const prices3 = [1,2];

console.log(maxProfit(prices));
console.log(maxProfit(prices2));
console.log(maxProfit(prices3));

