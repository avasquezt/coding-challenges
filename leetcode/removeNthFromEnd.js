/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Removes the nth node from the end of the input linked list
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let start = new ListNode(null, head);
    let curr = start;
    let end = head;
    while(n){
        end = end.next;
        n--;
    }
    while(end){
        curr = curr.next;
        end = end.next;
    }
    curr.next = curr.next.next;
    return start.next;
};