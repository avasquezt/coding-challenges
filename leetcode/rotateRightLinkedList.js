/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Rotates the input list to the right by the required number of places
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head || !k) return head;
    let curr = head;
    let n = 1;
    while(curr.next){
        curr = curr.next;
        n++;
    }
    n = n - (k % n);
    curr.next = head;
    curr = head;
    for(let i = 1; i < n; i++){
        curr = curr.next;
    }
    let ans = curr.next;
    curr.next = null;
    return ans;
};