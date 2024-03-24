/**
 * Flattens the input binary tree into a linked list
 * @param {TreeNode} root 
 * @returns {ListNode}
 */
function flatten(root) {

    // Get unique values;
    let stack = [root];
    let vals = new Set();
    while(stack.length){
      const curr = stack.pop();
      if(curr){
        let list = curr.value;
        while(list){
          vals.add(list.data);
          list = list.next;
        }
        stack.push(curr.right);
        stack.push(curr.left);
      }
    }
    
    // Build new list with values;
    const sorted = Array.from(vals).sort((a, b) => a - b);
    const head = new ListNode();
    let curr = head;
    for(const n of sorted){
      curr.next = new ListNode(n);
      curr = curr.next;
    }
    return head.next;
  };