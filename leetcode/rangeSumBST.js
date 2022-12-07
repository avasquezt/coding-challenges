/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
//  var rangeSumBST = function(root, low, high) {
//     const nodes = [root];
//     let sum = 0;
//     while(nodes.length > 0){
//         const currNode = nodes.pop();
//         if (currNode.right){
//             nodes.push(currNode.right);
//         }
//         if (currNode.left){
//             nodes.push(currNode.left);
//         }
//         if(currNode.val >= low && currNode.val <= high){
//             sum += currNode.val;
//         }
//     }
//     return sum;
// };

var rangeSumBST = function(root, low, high) {
    const nodes = [root];
    let sum = 0;
    while(nodes.length > 0){
        const currNode = nodes.pop();
        if (currNode){
            if (currNode.val < high){
                nodes.push(currNode.right);
            }
            if (currNode.val > low){
                nodes.push(currNode.left);
            }
            if(currNode.val >= low && currNode.val <= high){
                sum += currNode.val;
            }
        }
    }
    return sum;
};
