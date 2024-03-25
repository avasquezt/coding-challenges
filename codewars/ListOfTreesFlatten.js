/**
 * Flattens the input list into a Binary tree
 * @param {ListNode} head 
 * @returns 
 */
function flatten(head) {

    // Get unique values
    let curr = head;
    let values = new Set();
    while(curr){
      const stack = [curr.data];
      while(stack.length){
        const node = stack.pop();
        if(node){
          values.add(node.value);
          stack.push(node.left);
          stack.push(node.right);
        }
      }
      curr = curr.next;
    }
    
    return insertNode(Array.from(values).sort((a, b) => a - b), 0);
    
    // Build binary tree
    function insertNode(arr, index){
      if(index >= arr.length) return null;
      return new TreeNode(arr[index], insertNode(arr, index * 2 + 1), insertNode(arr, index * 2 + 2));
    }
    
};