/**
 * https://leetcode.com/problems/majority-element/?envType=study-plan-v2&envId=top-interview-150
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  //sử dụng phương pháp Moore's Voting Algorithm

  let count = 0
  let candidate = null

  for(num of nums) {
      if(count === 0) {
          candidate = num
          count = 1
      } else if (num === candidate) {
          count++
      } else {
          count--
      }
  }

  return candidate
};