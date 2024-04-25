/**
 * https://leetcode.com/problems/find-all-duplicates-in-an-array/description/
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  let dulpArr = []

  for(num of nums) {
      const idx = Math.abs(num) - 1
       if (nums[idx] < 0) {
          dulpArr.push(Math.abs(num));
      } else {
          nums[idx] *= -1;
      } 
  }

  return dulpArr
};

const list = [4,3,2,7,8,2,3,1]
console.log(findDuplicates(list))