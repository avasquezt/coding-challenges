/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Finds the minimum difference between two nodes of the input Binary Search Tree
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function(root) {
    const orderedValues = [];
    function inOrder(node){
        if(!node) return;
        inOrder(node.left);
        orderedValues.push(node.val);
        inOrder(node.right);
    }
    inOrder(root);
    let min = Infinity;
    for(let i = 1; i < orderedValues.length; i++){
        if(orderedValues[i] - orderedValues[i - 1] < min){
            min = orderedValues[i] - orderedValues[i - 1];
        }
    }
    return min;
};