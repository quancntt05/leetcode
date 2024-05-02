/**
 * https://leetcode.com/problems/add-two-numbers-ii/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  l1 = reverseLinkedList(l1);
  l2 = reverseLinkedList(l2);

  console.log(l1);
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseLinkedList(head) {
  let prev = null;
  let curr = head;
  while (curr !== null) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const list1 = new ListNode(7, new ListNode(2, new ListNode(4, new ListNode(3))));
const list2 = new ListNode(5, new ListNode(6, new ListNode(4)));
addTwoNumbers(list1, list2);
