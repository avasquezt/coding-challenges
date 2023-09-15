/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * Copies the input List with Random Pointer
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    let curr = head;
    // Create the new nodes
    while(curr){
        const next = new Node(curr.val, curr.next, null);
        curr.next = next;
        curr = next.next;
    }
    curr = head;
    // Assign randoms
    while(curr){
        const next = curr.next;
        if(curr.random){
            next.random = curr.random.next;
        }
        curr = next.next;
    }
    // Separate the lists
    curr = head;
    const start = head ? head.next : null;
    while(curr){
        const next = curr.next;
        curr.next = next.next;
        if(next.next){
            next.next = next.next.next;
        }
        curr = curr.next;
    }
    return start;
    
};