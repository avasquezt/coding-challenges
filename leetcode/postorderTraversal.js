/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Returns the postorder traversal of the nodes in the input binary tree
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    return dfs(root, []);

    function dfs(node, arr){
        if(node){
            return arr.concat(dfs(node.left, arr), dfs(node.right, arr), node.val);
        }
        return arr;
    }
};