/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Returns the longest ZigZag path length contained in the input binary tree
 * @param {TreeNode} root
 * @return {number}
 */
var longestZigZag = function(root) {

    function maxDir(node, dir, n){
        if(node){
            if(dir == 'left'){
                return Math.max(n, maxDir(node.right, 'rigth', n + 1), maxDir(node.left, 'left', 0));
            }else{
                return Math.max(n, maxDir(node.left, 'left', n + 1), maxDir(node.right, 'right', 0));
            }
        }else{
            return n;
        }
    }

    if(!root) return 0;

    return Math.max(maxDir(root.right, 'right', 0), maxDir(root.left, 'left', 0));
};

var longestZigZag = function(root) {
    let max = 0;
    function dfs(node){
        if(!node) return [0, 0];
        const left = dfs(node.left)[1];
        const right = dfs(node.right)[0];
        max = Math.max(max, left, right);
        return [left + 1, right + 1];
    }
    dfs(root);
    return max;
}