/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Merges the two input linked lists keeping it sorted
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let head = new ListNode(null, null);
    let curr = head;
    while(list1 && list2){
        if(list1.val < list2.val){
            curr.next = list1;
            list1 = list1.next;
        }else{
            curr.next = list2;
            list2 = list2.next;
        }
        curr = curr.next;
    }
    curr.next = list1 || list2;
    
    return head.next;
};

/**
 * Recursive
 */
var mergeTwoLists = function(list1, list2) {
    if(!list1 && !list2) return null;
    if(!list1 || !list2) return list1 || list2;
    let node;
    if(list1.val < list2.val){
        node = list1;
        node.next = mergeTwoLists(list1.next, list2);
    }else{
        node = list2;
        node.next = mergeTwoLists(list1, list2.next);
    }
    return node;
};