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
 var deleteMiddle = function(head) {
    
    // Find middle value
    let count = 0, currentNode = head;
    while(currentNode){
        count++;
        currentNode = currentNode.next;
    }
    let middleElement = Math.floor(count / 2);
    
    // If one element
    if(count == 1){
        return null;
    }
    
    // Delete middle value
    count = 0, currentNode = head;
    while (currentNode){
        if(count == middleElement - 1){
            currentNode.next = currentNode.next.next;
            break;
        }
        currentNode = currentNode.next;
        count++;
    }
    return head;
};