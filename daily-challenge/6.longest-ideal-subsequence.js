/** https://leetcode.com/problems/longest-ideal-subsequence/
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestIdealString = function (s, k) {
  const dp = new Array(256).fill(0);

  for (let i = 0; i < s.length; i++) {
    const b = s.charCodeAt(i);
    let max = 0;

    for (let j = b - k; j <= b + k; j++) {
      if (j >= 0 && j < 256) {
        max = Math.max(max, dp[j]);
      }
    }

    dp[b] = max + 1;
  }

  return Math.max(...dp);
};

// const stringA = "acfgbd".split("").sort().join("");
// console.log(longestIdealString("acfgbd", 2)); // Output: 4
// console.log(longestIdealString("abcd", 3)); // Output: 4
console.log(longestIdealString("jxhwaysa", 14)); // Output: 5
