/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Finds the maximum sum between twins in the input linked list
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    let mid = head;
    let curr = head;
    // Find mid node
    while(curr.next && curr.next.next){
        mid = mid.next;
        curr = curr.next.next;
    }
    // Reverse second half
    mid = mid.next;
    let prev = null;
    while(mid){
        const next = mid.next;
        mid.next = prev; 
        prev = mid;
        mid = next;
    }
    // Find maximum sum going through the reversed second half, and the first half
    curr = head;
    let max = -Infinity;
    while(prev){
        max = Math.max(max, curr.val + prev.val);
        curr = curr.next;
        prev = prev.next;
    }
    return max;
};