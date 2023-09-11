/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Detects the entry point to the cycle in the input liked list
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let slow = head;
    let fast = head;
    let entry = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast){
            while(slow != entry){
                entry = entry.next;
                slow = slow.next;
            }
            return entry;
        }
    }
    return null;
};