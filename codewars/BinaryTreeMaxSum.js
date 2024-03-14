/**
 * Calculates the maximum sum of a route from root to leaf in the input binary tree
 * @param {*} root 
 * @returns 
 */
function  maxSum (root) {
    if(!root) return 0;
    if(root.left == null && root.right == null) return root.value;
    return root.value + Math.max(root.left && maxSum(root.left) || -Infinity, root.right && maxSum(root.right) || -Infinity)
}