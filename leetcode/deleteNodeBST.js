/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Deletes a value from the Binary Search Tree
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if(root){
        if(root.val == key){
            if(root.left && root.right){
                let curr = root.right;
                const stack = [];
                while(curr){
                    stack.push(curr);
                    curr = curr.left;
                }
                curr = stack.pop();
                const prev = stack.pop();
                if(prev){
                    prev.left = curr.right;
                }else{
                    root.right = curr.right;
                }
                root.val = curr.val;
            }else{
                return root.left || root.right;
            }
        }else if(key < root.val){
            root.left = deleteNode(root.left, key);
        }else{
            root.right = deleteNode(root.right, key);
        }
    }
    return root;
};