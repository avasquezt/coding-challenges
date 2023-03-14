/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Calculates the total sum of all root-to-leaf numbers from the input binary tree
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    if(!root) return 0;

    let ans = 0;

    const traverse = (currVal, node) => {
        currVal += node.val;
        if(!node.left && !node.right){
            ans += Number(currVal);
        }else{
            if(node.left) traverse(currVal, node.left);
            if(node.right) traverse(currVal, node.right);
        }
    }

    traverse('', root);
    return ans;
};