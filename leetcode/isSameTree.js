/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Checks if the input trees are structurally identical, and their nodes have the same value
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    const nodesP = [p];
    const nodesQ = [q];
    while(nodesP.length){
        const currentP = nodesP.pop();
        const currentQ = nodesQ.pop();
        if(currentP && currentQ){
            if(currentP.val !== currentQ.val){
                return false;
            }
            nodesP.push(currentP.right);
            nodesQ.push(currentQ.right);
            nodesP.push(currentP.left);
            nodesQ.push(currentQ.left);
        }else if (currentP !== currentQ){
             return false;
        }
    }
    return nodesP.length == nodesQ.length;
};