/** 
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/?envType=study-plan-v2&envId=top-interview-150
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let count = 0; // Biến đếm số lượng phần tử duy nhất

  // Duyệt qua mảng nums
  for (let num of nums) {
      // Nếu là phần tử đầu tiên hoặc phần tử hiện tại khác với phần tử trước đó hoặc số lần xuất hiện của phần tử hiện tại chưa đạt đến 2
      if (count < 2 || num !== nums[count - 2]) {
          nums[count++] = num; // Lưu phần tử vào vị trí đầu tiên sau các phần tử duy nhất đã được giữ lại
      }
  }

  return count; // Trả về số lượng phần tử duy nhất
};
// time O(n) - space O(1)
const list = [0,0,1,1,1,1,2,3,3]
console.log(removeDuplicates(list)) //7, nums = [0,0,1,1,2,3,3,_,_]