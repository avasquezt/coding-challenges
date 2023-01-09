/**
* Definition for a binary tree node.
* function TreeNode(val, left, right) {
*     this.val = (val===undefined ? 0 : val)
*     this.left = (left===undefined ? null : left)
*     this.right = (right===undefined ? null : right)
* }
*/
/**
* Returns the preorder traversal of the nodes in the input binary tree
* @param {TreeNode} root
* @return {number[]}
*/
var preorderTraversal = function(root) {
   const nodes = root ? [root] : [];
   const order = [];
   while(nodes.length > 0){
       const current = nodes.pop();
       order.push(current.val);
       if(current.right){
           nodes.push(current.right)
       }
       if(current.left){
           nodes.push(current.left);
       }
   }
   return order;
};