/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Sorts a linked list using insert algorithm
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
    const dummy = new ListNode();
    let current = head;
    while(current){
        let prev = dummy;
        while(prev.next && prev.next.val < current.val){
            prev = prev.next;
        }
        const next = current.next;
        current.next = prev.next;
        prev.next = current;
        current = next;
    }
    return dummy.next;
    
};