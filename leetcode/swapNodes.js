/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Swaps the requested nodes from the input linked list
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    const arr = [];
    let curr = head;
    while(curr){
      arr.push(curr.val);
      curr = curr.next;
    }

    [arr[k-1], arr[arr.length - k]] = [arr[arr.length - k], arr[k - 1]];
    curr = head;
    let i = 0;

    while(curr){
      curr.val = arr[i++];
      curr = curr.next;
    }

    return head;
};