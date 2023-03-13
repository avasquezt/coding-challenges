/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Checks whether the input binary tree is a mirror of itself 
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root) return true;
    let leftNodes = [root.left];
    let rightNodes = [root.right];
    while(leftNodes.length && rightNodes.length){
        const currLeft = leftNodes.shift();
        const currRight = rightNodes.shift();
        if(currLeft && currRight){
            if(currLeft.val != currRight.val){
                return false;
            }
            leftNodes.push(currLeft.left);
            rightNodes.push(currRight.right);
            leftNodes.push(currLeft.right);
            rightNodes.push(currRight.left);
        }else{
            if(currLeft != currRight){
                return false;
            }
        }
    }

    return leftNodes.length == rightNodes.length;
};