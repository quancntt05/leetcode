/**
 * https://leetcode.com/problems/rotate-array/?envType=study-plan-v2&envId=top-interview-150
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  const reverseArray = (arr, start, end) => {
  while (start < end) {
      const temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
  }
};

k %= nums.length; // Đảm bảo k nằm trong khoảng từ 0 đến nums.length để tránh lặp lại các vòng quay không cần thiết
reverseArray(nums, 0, nums.length - 1); // Đảo ngược toàn bộ mảng
reverseArray(nums, 0, k - 1); // Đảo ngược phần tử từ 0 đến k-1
reverseArray(nums, k, nums.length - 1); // Đảo ngược phần tử từ k đến cuối mảng
};


/**
 * Another solution, using slice and unshift
 */
var rotate2 = function(nums, k) {
  k %= nums.length; // Đảm bảo k nằm trong khoảng từ 0 đến nums.length để tránh lặp lại các vòng quay không cần thiết 
  
  const rotateKArr = nums.splice(nums.length - k, nums.length)

  nums.unshift(...rotateKArr)
}

const list = [1,2,3,4,5,6,7]
rotate2(list, 3)
console.log(list)