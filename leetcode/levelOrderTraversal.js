/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Returns the level traversal of the input binary tree
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const result = [];
    const queue = new Queue();
    queue.push(root);
    while(!queue.isEmpty()){
        let n = queue.size();
        const curr = [];
        while(n){
            const node = queue.pop();
            if(node){
                curr.push(node.val);
                queue.push(node.left);
                queue.push(node.right);
            }
            n--;
        }
        if(curr.length) result.push(curr);
    }
    return result;
};

/**
 * Recursive
 */
var levelOrder = function(root) {
    return dfs(root, [], 0);
    
    function dfs(node, result, n){
        if(node){
            if(n >= result.length){
                result.push([]);
            }
            result[n].push(node.val);
            dfs(node.left, result, n + 1);
            dfs(node.right, result, n + 1);
        }
        return result;
    }
};