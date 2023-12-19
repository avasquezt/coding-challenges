/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Inserts the input value in the BST
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if(root){
        if(val < root.val){
            root.left = insertIntoBST(root.left, val);
        }else{
            root.right = insertIntoBST(root.right, val);
        }
    }else{
        root = new TreeNode(val);
    }
    return root;
};

// Iterative
var insertIntoBST = function(root, val) {
    const node = new TreeNode(val);
    if(!root) return node;
    let curr = root;
    while(curr){
        if(val < curr.val){
            if(curr.left){
                curr = curr.left;
            }else{
                curr.left = node;
                break;
            }
        }else{
            if(curr.right){
                curr = curr.right;
            }else{
                curr.right = node;
                break;
            }
        }
    }
    return root;
};