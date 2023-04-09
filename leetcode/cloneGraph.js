/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * Creates a copy of the input directed undirected graph
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if(!node) return node;
    const stack = new Queue([node]);
    const nodes = new Map();
    nodes.set(node.val, new Node(node.val));
    while(stack.size()){
      const curr = stack.pop();
      for(const node of curr.neighbors){
        if(!nodes.has(node.val)){
          nodes.set(node.val, new Node(node.val));
          stack.push(node);
        }
        nodes.get(curr.val).neighbors.push(nodes.get(node.val));
      } 
    }
    return nodes.get(node.val);
};