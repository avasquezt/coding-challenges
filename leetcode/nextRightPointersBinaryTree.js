/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * Populates each node next pointer in the input binary tree following level order
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    const queue = new Queue();
    queue.push(root);
    while(!queue.isEmpty()){
        let prev = null;
        let n = queue.size();
        while(n){
            const node = queue.pop();
            if(node){
                node.next = prev;
                prev = node;
                queue.push(node.right);
                queue.push(node.left);
            };
            n--;
        }
    }
    return root;
};

// Iterative 0(1) space
var connect = function(root) {
    let level = root;
    while(level){
        let node = level;
        while(node){
            if(node.left) node.left.next = node.right;
            if(node.next && node.right) node.right.next = node.next.left;
            node = node.next;
        }
        level = level.left;
    }
    return root;
};

// Recursive
var connect = function(root) {
    if(root){
        if(root.left) root.left.next = root.right;
        if(root.right && root.next) root.right.next = root.next.left;
        connect(root.left);
        connect(root.right);
    }
    return root;
};

// Iterative, works with imcomplete trees
var connect = function(root) {
    let node = root;
    const tmp = new Node();
    while(node){
        let currChild = tmp;
        while(node){
            if(node.left){
                currChild.next = node.left;
                currChild = currChild.next;
            }
            if(node.right){
                currChild.next = node.right;
                currChild = currChild.next;
            }
            node = node.next;
        }
        node = tmp.next;
        tmp.next = null;
    }
    return root;
};