/**
 * https://leetcode.com/problems/reorder-list/?envType=daily-question&envId=2024-03-23
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

var reorderList = function (head) {
  if (!head || !head.next) {
    return;
  }

  // Tìm middle node của danh sách
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse phần sau của danh sách
  let prev = null;
  let curr = slow.next;
  slow.next = null;
  while (curr) {
    let nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }

  // Merge 2 danh sách
  let p1 = head;
  let p2 = prev;
  while (p2) {
    let nextP1 = p1.next;
    let nextP2 = p2.next;
    p1.next = p2;
    p2.next = nextP1;
    p1 = nextP1;
    p2 = nextP2;
  }
};
// time O(n) - space O(1)
