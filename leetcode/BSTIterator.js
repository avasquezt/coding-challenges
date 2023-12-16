/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Iterator class over the in-order traversal of a binary search tree (BST)
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
    stack = [];
    curr = root;
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    while(curr){
        stack.push(curr);
        curr = curr.left;
    }
    const node = stack.pop();
    
    curr = node.right;
    
    return node.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return curr || stack.length > 0;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */