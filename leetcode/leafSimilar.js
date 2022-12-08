/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    let leafs1 = [];
    let nodes = [root1];
    while(nodes.length > 0){
        const currNode = nodes.pop();
        if(currNode.left == null && currNode.right == null){
            leafs1.push(currNode.val);
        }
        if(currNode.right != null){
            nodes.push(currNode.right);
        }
        if(currNode.left != null){
            nodes.push(currNode.left);
        }
    }
    nodes = [root2];
    while(nodes.length > 0){
        const currNode = nodes.pop();
        if(currNode.left == null && currNode.right == null){
            if(currNode.val !== leafs1.pop()){
                return false;
            }
        }
        if(currNode.left != null){
            nodes.push(currNode.left);
        }
        if(currNode.right != null){
            nodes.push(currNode.right);
        }
    }
    return leafs1.length === 0;

};