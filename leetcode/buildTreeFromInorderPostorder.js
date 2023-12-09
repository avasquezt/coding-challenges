/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Constructs and returns the binary tree from the input Inorder and Postorder arrays
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    let idx = inorder.length - 1;
    return build(inorder, postorder, 0, inorder.length - 1);
    
    function build(inorder, postorder, start, end){
        if(start > end) return null;
        const node = new TreeNode(postorder[idx--]);
        node.right = build(inorder, postorder, inorder.indexOf(node.val) + 1, end, idx);
        node.left = build(inorder, postorder, start, inorder.indexOf(node.val) - 1, idx);
        return node;
    }
};