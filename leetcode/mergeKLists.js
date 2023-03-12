/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Merges the given sorted lists into one sorted list
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const head = new ListNode();
    let curr = head;
    while(lists.some(n => n)){
        let minimum = lists.findIndex(n => n != null);
        minimum = lists.reduce((e, n, i) => (n && n.val < lists[e].val) ? i : e, minimum);
        curr.next = lists[minimum];
        curr = curr.next;
        lists[minimum] = lists[minimum].next;
        
    }
    return head.next;
};