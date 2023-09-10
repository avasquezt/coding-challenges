/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Checks if the linked list has a cycle in it
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head) return false;
    let curr = head;
    let double = head;
    while(double.next && double.next.next){
        curr = curr.next;
        double = double.next.next;
        if(curr == double) return true;
    }
    return false;
};