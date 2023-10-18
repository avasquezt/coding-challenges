/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Return the inorder traversal of the input binary tree
 * @param {TreeNode} root
 * @return {number[]}
 */
// DPS
var inorderTraversal = function(root) {
    return dfs(root, []);
    
    function dfs(node, ans){
        if(!node) return ans;
        return ans.concat(dfs(node.left, ans), node.val, dfs(node.right, ans));
    }
};