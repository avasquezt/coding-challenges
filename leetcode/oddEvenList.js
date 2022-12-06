/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var oddEvenList = function(head) {
    if(head == null || head.next == null){
        return head;
    }
    let odd = head;
    let even = head.next;
    while(even != null && even.next != null){
        const firstEven = odd.next;
        // Move odd nodes
        [odd.next, odd] = [even.next, even.next];
        // Move even nodes
        [even.next, even] = [odd.next, odd.next];
        // Keep last odd pointing to first even
        odd.next = firstEven;
    }
    return head;
};