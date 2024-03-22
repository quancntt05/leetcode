//https://leetcode.com/problems/palindrome-linked-list/

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

var isPalindrome = function (head) {
  if (!head || !head.next) {
    return true; // Nếu danh sách rỗng hoặc chỉ có một phần tử thì nó là palindrome
  }

  let slow = head;
  let fast = head;
  let prev = null;

  // Sử dụng thuật toán của slow và fast để tìm điểm giữa của danh sách
  while (fast && fast.next) {
    fast = fast.next.next;
    let next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  // Nếu danh sách có số lượng phần tử là số lẻ, bỏ qua phần tử ở giữa
  if (fast !== null) {
    slow = slow.next;
  }

  // So sánh phần đầu và phần cuối của danh sách
  while (prev && prev.val === slow.val) {
    prev = prev.next;
    slow = slow.next;
  }

  // Nếu prev là null thì tức là đã duyệt hết danh sách và tất cả các phần tử đều giống nhau
  return prev === null;
};
// time O(n) - space O(1)

const list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(2, new ListNode(1, new ListNode(1))))));

const result = isPalindrome(list);

console.log(result);
