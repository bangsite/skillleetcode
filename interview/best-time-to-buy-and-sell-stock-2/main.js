/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
    let profit = 0;

    for (let i = 0; i < prices.length; i++) {

        let prevPrice = prices[i - 1];
        let currentPrice = prices[i];

        if (prevPrice < currentPrice) {
            profit += currentPrice - prevPrice;
        }

    }

    return profit;

};

// solution 2
const maxProfit2 = function (prices) {
    let profit = [];
    let max = 0;
    let mix = 0;
    let [currentHold, currentNotHold] = [-Infinity, 0];
    for (const stockPrice of prices) {
        let [prevHold, prevNotHold] = [currentHold, currentNotHold];

        // either keep hold, or buy in stock today at stock price
        currentHold = Math.max(prevHold, prevNotHold - stockPrice);

        // either keep not-hold, or sell out stock today at stock price
        currentNotHold = Math.max(prevNotHold, prevHold + stockPrice);


    }

    // max profit must come from notHold state finally
    return currentNotHold;

};

// solution 2
const maxProfit3 = function (prices) {
    return prices.reduce((profit, price, i, prices) => i > 0 && price > prices[i - 1] ? profit + price - prices[i - 1] : profit, 0);
};

const prices = [7, 1, 5, 3, 6, 4],
    prices2 = [1, 2, 3, 4, 5],
    prices3 = [7, 6, 4, 3, 1];

console.log(maxProfit(prices));
console.log(maxProfit(prices2));
console.log(maxProfit(prices3));
