/**
 * Methods to calculate the length and the number of occurrences of an element in a linked list 
 */

/**
 * @param {number} data 
 */
function Node(data) {
    this.data = data;
    this.next = null;
}
  
function length(head) {
    let count = 0;
    for(let currNode = head; currNode; currNode = currNode.next){
        count++;
    }
    return count;
}
  
function count(head, data) {
    let count = 0;
    for(let currNode = head; currNode; currNode = currNode.next){
        if(currNode.data == data) count++;
    }
    return count;
}