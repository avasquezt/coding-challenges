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
// Bottom up
var maxDepth = function(root) {
    if(!root) return 0;
    let max = 1;
    for(const node of root.children){
        max = Math.max(1 + maxDepth(node), max);
    }
    return max;
};