/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Checks if the input linked list is a palindrome
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let fast = head;
    let slow = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    let prev = null;
    while(slow){
        const tmp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = tmp;
    }
    while(prev){
        if(head.val != prev.val){
            return false;
        }
        head = head.next;
        prev = prev.next;
    }
    return true;
};