/**
* Definition for a binary tree node.
* function TreeNode(val, left, right) {
*     this.val = (val===undefined ? 0 : val)
*     this.left = (left===undefined ? null : left)
*     this.right = (right===undefined ? null : right)
* }
*/
/**
* Returns the preorder traversal of the nodes in the input binary tree
* @param {TreeNode} root
* @return {number[]}
*/
var preorderTraversal = function(root) {
    const stack = [];
    const result = [];
    stack.push(root);
    while(stack.length){
        const node = stack.pop();
        if(node){
            result.push(node.val);
            stack.push(node.right);
            stack.push(node.left);
        }
    }
    return result;
};

/**
 * Recursive
 */
var preorderTraversal = function(root, result = []) {
    if(root){
        result.push(root.val);
        preorderTraversal(root.left, result);
        preorderTraversal(root.right, result);
    }
    return result;
};