/*
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Checks if the value of the input tree root node is equal to the sum of the values of its two children
 * @param {TreeNode} root
 * @return {boolean}
 */
var checkTree = function(root) {
    return root.val == root.left.val + root.right.val;
};