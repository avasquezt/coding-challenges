/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Constructs and returns the binary tree from the input Inorder and Preorder arrays
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let idx = 0;
    return build(inorder, preorder, 0, inorder.length - 1);
    
    function build(inorder, preorder, start, end){
        if(start > end) return null;
        const node = new TreeNode(preorder[idx++]);
        node.left = build(inorder, preorder, start, inorder.indexOf(node.val) - 1, idx);
        node.right = build(inorder, preorder, inorder.indexOf(node.val) + 1, end, idx);
        return node;
    }
};