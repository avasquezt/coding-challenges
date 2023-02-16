/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Finds the depth of the input binary tree
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root, n = 0) {
    
    if(root === null) return n;
    n++;
    return Math.max(maxDepth(root.left, n), maxDepth(root.right, n));
};