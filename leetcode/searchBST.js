/**
 * Definition for a binary tree node
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Finds the subtree in the input binary tree with the requested value in the root node
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    if(!root || root.val == val) return root;
    if(root.val < val){
        return searchBST(root.right, val);
    }else{
        return searchBST(root.left, val);
    }
};