//https://leetcode.com/problems/binary-search/
const search = function(nums, target) {
  let start = 0
  let end = nums.length - 1
  while (start <= end) {
    const div = Math.floor((end + start + 1)/2)
    if(nums[div] === target) return div
    if(nums[div] < target) start = div + 1
    else end = div - 1
  }
  return -1
};

console.log(search([-1,0,3,5,9,12], 9))
console.log("/////////////////////////////////////////////")