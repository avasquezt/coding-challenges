/*  
Preloaded class Node {
  data; //The value at the current node
  next; //The next node in the linkedList
}
*/
/**
 * Finds the kth to last element in the unput linked list
 * @param {linkedList} linkedList 
 * @param {number} k 
 * @returns {number?}
 */
function searchKFromEnd(linkedList, k) {
    let curr = linkedList;
    let n = 0;
    while(curr){
      curr = curr.next;
      n++;
    }
    curr = linkedList;
    n -= k;
    if(n < 0){
      return null;
    }
    while(curr && n > 0){
      curr = curr.next;
      n--;
    }
    return curr.data;
  }