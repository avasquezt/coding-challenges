/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Finds all duplicate subtrees in the input binary tree
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    const routes = new Map();
    const ans = [];
    traverse(root);
    return ans;
    
    function traverse(node){
        if(!node) return '';
        const path = "(" + traverse(node.left) + node.val + traverse(node.right) + ")";
        if (routes.get(path) == 1) ans.push(node);
        routes.set(path, (routes.get(path) || 0) + 1);
        return path;
    }
};