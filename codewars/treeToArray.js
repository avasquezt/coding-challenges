/* preloaded Node definition :
class Node {
  constructor (data, children = []) {
    this.data = data;
    this.children = children;
  }
}
*/

/**
 * Returns an array with the input tree values in breadth-first order
 * @param {Node} tree 
 * @returns {number[]}
 */
function treeToArray (tree) {
    if(tree.length == 0) return [];
    const queue = [tree];
    const ans = [];
    while(queue.length){
      const curr = queue.shift();
      if(curr){
        ans.push(curr.data);
        for(const node of curr.children){
          queue.push(node);
        }
      }
    }
    return ans;
  }