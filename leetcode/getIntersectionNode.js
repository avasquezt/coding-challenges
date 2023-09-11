/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Finds the intersection node of two linked lists
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    
//  Find the lengths of the lists
    let lenA = length(headA);
    let lenB = length(headB);
    
//  move headA and headB to the same start point
    while(lenA > lenB){
        headA = headA.next;
        lenA--;
    }
    
    while(lenB > lenA){
        headB = headB.next;
        lenB--;
    }
    
// Find the intersection    
    while(headA != headB){
        headA = headA.next;
        headB = headB.next;
    }

    return headA;
    
    
    function length(head){
        let count = 0;
        while(head){
            head = head.next;
            count++;
        }
        return count;
    }
};

/** Another solution */

var getIntersectionNode = function(headA, headB) {
    let a = headA;
    let b = headB;
    while(a != b){
        a = a ? a.next : headB;
        b = b ? b.next : headA;
    }
    return a;
}