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

/**
 * Iterative
 */
var inorderTraversal = function(root) {
    const ans = [];
    const stack = [];
    let curr = root;
    while(curr || stack.length){
        while(curr){
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        ans.push(curr.val);
        curr = curr.right;
    }
    return ans;
};