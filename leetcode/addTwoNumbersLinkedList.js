/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Adds the numbers represented by the two input lists
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head = new ListNode(null, null);
    let curr = head;
    let carry = 0;
    
    while(l1 || l2 || carry){
        
        let val = carry;
        if(l1){
            val += l1.val;
            l1 = l1.next;
        }
        if(l2){
            val += l2.val;
            l2 = l2.next;
        }
        
        curr.next = new ListNode(val % 10, null);
        curr = curr.next;    
    
        carry = Math.trunc(val / 10);
        
    }
    
    return head.next;
};