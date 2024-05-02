/**
 * https://leetcode.com/problems/minimum-falling-path-sum-ii/?envType=daily-question&envId=2024-04-26
 * @param {number[][]} grid
 * @return {number}
 */
var minFallingPathSum = function (grid) {
  const n = grid.length;

  // Initialize dp array with the same values as the first row of the grid
  let dp = [...grid[0]];

  // Iterate over each row of the grid starting from the second row
  for (let i = 1; i < n; i++) {
    const nextDp = Array(n).fill(0);

    // Iterate over each column of the grid
    for (let j = 0; j < n; j++) {
      let min = Infinity;

      // Iterate over each possible previous column to find the minimum
      for (let k = 0; k < n; k++) {
        if (k !== j) {
          min = Math.min(min, dp[k] + grid[i][j]);
        }
      }
      nextDp[j] = min;
    }

    // Update dp array for the next row
    dp = nextDp;
  }

  // Find the minimum sum in the last row of dp array
  return Math.min(...dp);
};

const grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(minFallingPathSum(grid)); // Output: 13
