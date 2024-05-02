/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/?envType=study-plan-v2&envId=top-interview-150
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length <= 1) return 0;

  const dp = new Array(prices.length).fill(0);
  let minPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];
    minPrice = Math.min(minPrice, currentPrice);
    dp[i] = Math.max(dp[i - 1], currentPrice - minPrice);
  }

  return dp[prices.length - 1];
};

console.log(maxProfit([9, 6, 4, 5, 1]));
