/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Reverses the input list
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let curr = head;
    let prev = null;
    while(curr){
        const tmp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = tmp;
    }

    return prev;
};
