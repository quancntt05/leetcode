/**
 * https://leetcode.com/problems/maximum-profit-in-job-scheduling/submissions/1212662385/?envType=daily-question&envId=2024-03-24
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function(startTime, endTime, profit) {
  const jobs = [];
  const n = startTime.length;

  // Tạo mảng jobs với thông tin của từng công việc
  for (let i = 0; i < n; i++) {
      jobs.push({start: startTime[i], end: endTime[i], profit: profit[i]});
  }

  // Sắp xếp mảng jobs theo thời gian kết thúc công việc
  jobs.sort((a, b) => a.end - b.end);

  // Tạo mảng dp để lưu trữ lợi nhuận tối đa của từng công việc
  const dp = new Array(n).fill(0);

  dp[0] = jobs[0].profit;

  for (let i = 1; i < n; i++) {
      dp[i] = Math.max(jobs[i].profit, dp[i - 1]);

      for (let j = i - 1; j >= 0; j--) {
          if (jobs[i].start >= jobs[j].end) {
              dp[i] = Math.max(dp[i], jobs[i].profit + dp[j]);
              break;
          }
      }

      dp[i] = Math.max(dp[i], dp[i - 1]);
  }

  return dp[n - 1];
};

// Test Example 1
const startTime1 = [1, 2, 3, 4, 6];
const endTime1 = [3, 5, 10, 6, 9];
const profit1 = [20, 20, 100, 70, 60];
console.log(jobScheduling(startTime1, endTime1, profit1)); // Output: 150

// Test Example 2
const startTime2 = [1, 2, 3, 3];
const endTime2 = [3, 4, 5, 6];
const profit2 = [50, 10, 40, 70];
console.log(jobScheduling(startTime2, endTime2, profit2)); // Output: 120