/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Swaps every two adjacent nodes from the input list
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let currNode = head;
    let prevNode;
    while(currNode){
        if(prevNode){
            [prevNode.val, currNode.val] = [currNode.val, prevNode.val];
            prevNode = null;
        }else{
            prevNode = currNode;
        }
        currNode = currNode.next;
    }
    return head;
};

// Recursive
var swapPairs = function(head) {
    if(!head || !head.next) return head;
    const n = head.next;
    head.next = swapPairs(head.next.next);
    n.next = head;
    return n;
};