/**
 * https://leetcode.com/problems/find-the-duplicate-number/?envType=daily-question&envId=2024-03-24
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  /**
   * sử dụng thuật toán "Floyd's Tortoise and Hare" (hay còn được gọi là "Cycle Detection Algorithm")
   * Giải thuật này hoạt động bằng cách sử dụng hai con trỏ, một con trỏ (tortoise) di chuyển 1 bước mỗi lần, còn con trỏ kia (hare) di chuyển 2 bước mỗi lần.
   * Khi chúng gặp nhau, tức là phát hiện được một chu kỳ. Sau đó, ta đặt con trỏ hare hoặc tortoise ở vị trí ban đầu và di chuyển cả hai con trỏ mỗi lần một bước cho đến khi chúng gặp nhau một lần nữa.
   * Điểm gặp nhau này chính là phần tử lặp lại trong mảng.
   */

  let tortoise = nums[0];
  let hare = nums[0];

  // Di chuyển `tortoise` 1 bước và `hare` 2 bước cho đến khi chúng gặp nhau
  let idx = 1
  do {
    tortoise = nums[tortoise];
    hare = nums[nums[hare]];
    console.log(`Run step 1-${idx} : == tortoise: ${tortoise} == hare: ${hare}`);
    idx++
  } while (tortoise !== hare);

      // Di chuyển `hare` về xuất phát điểm trong khi vẫn giữ `tortoise` tại điểm gặp nhau ở đoạn code trên
      hare = nums[0];
      idx = 1
      while (tortoise !== hare) {
          tortoise = nums[tortoise];
          hare = nums[hare];
          console.log(`Run step 2-${idx} : == tortoise: ${tortoise} == hare: ${hare}`);
      }

      return tortoise; // có thể return `tortoise` hoặc `hare`, chúng cùng ở một vị trí là điểm bắt đầu của chu kỳ
};

const list = [1,2,3,4,5,3,7]


console.log(findDuplicate(list))