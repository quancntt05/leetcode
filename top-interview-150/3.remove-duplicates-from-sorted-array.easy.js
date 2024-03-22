//https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let k = 0

  for(let i = 0; i < nums.length; i++) {
      if(nums[i] !== nums[i+1]) {
          nums[k] = nums[i]
          k++
      }
  }

  return k
};
// time O(n) - space O(1)