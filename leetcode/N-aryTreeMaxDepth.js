/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * Calculates the maximum depth of the input N-ary Tree
 * @param {Node|null} root
 * @return {number}
 */

// DFS
// Bottom up
var maxDepth = function(root) {
    if(!root) return 0;
    let max = 1;
    for(const node of root.children){
        max = Math.max(1 + maxDepth(node), max);
    }
    return max;
};
// Top down
var maxDepth = function(root, count = 0) {
    if(!root) return count;
    let max = ++count;
    for(const node of root.children){
        max = Math.max(maxDepth(node, count), max);
    }
    return max;
};

// BFS
// Iterative
var maxDepth = function(root) {
    if(!root) return 0;
    const queue = new Queue([root]);
    let max = 0;
    while(!queue.isEmpty()){
        max++;
        let n = queue.size();
        while(n){
            const curr = queue.pop();
            for(const node of curr.children){
                queue.push(node);
            }
            n--;
        }
    }
    return max;
};