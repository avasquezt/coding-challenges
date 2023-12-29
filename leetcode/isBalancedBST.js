/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Checks if the input binary tree is height-balanced
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    return height(root) != -1;
    
    function height(node){
        if(!node) return 0;
        let l = height(node.left);
        let r = height(node.right);
        if(l == -1 || r == -1 || Math.abs(l - r) > 1) return -1;
        return Math.max(l, r) + 1;
    }
};