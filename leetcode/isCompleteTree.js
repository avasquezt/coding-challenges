/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Checks if the input is a complete binary tree
 * @param {TreeNode} root
 * @return {boolean}
 */
var isCompleteTree = function(root) {
    const nodes = [root];
    let end = false;
    while(nodes.length){
        const curr = nodes.shift();
        if(!curr) end = true;
        else{
            if(end) return false;
            nodes.push(curr.left);
            nodes.push(curr.right);
        }
    }
    return true;
};