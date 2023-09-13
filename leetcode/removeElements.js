/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Removes the nodes with the indicated value from the input linked list
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let start = new ListNode(null, head);
    let curr = start;
    while(curr.next){
        if(curr.next.val == val){
            curr.next = curr.next.next;
        }else{
            curr = curr.next;
        }
    }
    return start.next;
};