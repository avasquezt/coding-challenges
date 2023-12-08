/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Checks if the tree has a path thats adds up to the target number
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    return dfs(root, targetSum, 0);
    
    function dfs(node, target, sum){
        if(node){
            sum += node.val;
            if(!node.left && !node.right) return target == sum;
            return dfs(node.left, target, sum) || dfs(node.right, target, sum);
        }
        return false;
        
    }
};