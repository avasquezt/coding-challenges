/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * Flattens the input Multilevel Doubly Linked List
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    let curr = head;
    let next = [];
    while(curr && (curr.child || curr.next || next.length)){
        if(curr.child){
            if(curr.next){
                next.push(curr.next);
            }
            curr.next = curr.child;
            curr.child.prev = curr;
            curr.child = null;
        }else if(!curr.next){
            curr.next = next.pop();
            curr.next.prev = curr;
        }
        curr = curr.next;
    }
    return head;
};