//https://leetcode.com/problems/remove-element/?envType=study-plan-v2&envId=top-interview-150
var removeElement = function(nums, val) {
  let k = 0; // Biến đếm số lượng phần tử không bằng val
  
  // Duyệt qua từng phần tử trong mảng nums
  for (let i = 0; i < nums.length; i++) {
      // Nếu phần tử hiện tại khác val
      if (nums[i] !== val) {
          // Di chuyển phần tử này đến vị trí k
          nums[k] = nums[i];
          k++; // Tăng số lượng phần tử không bằng val lên 1
      }
  }
  
  return k; // Trả về số lượng phần tử không bằng val
};
// time O(n) - space O(1)