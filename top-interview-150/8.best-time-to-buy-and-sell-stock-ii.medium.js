/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/?envType=study-plan-v2&envId=top-interview-150
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0;
  let currentPrice = prices[0];

  for (let idx = 1; idx < prices.length; idx++) {
    const nextPrice = prices[idx];
    const profit = nextPrice - currentPrice;
    maxProfit = profit > 0 ? maxProfit + profit : maxProfit;
    currentPrice = nextPrice;
  }

  return maxProfit;
};

console.log(maxProfit([7, 6, 4, 3, 1]));
