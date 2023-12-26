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
    let result = true;
    height(root);
    return result;
    
    
    function height(node){
        if(!node) return 0;
        let left = height(node.left);
        let right = height(node.right);
        if(Math.abs(left - right) > 1) result = false;
        return Math.max(left, right) + 1;
    }
};