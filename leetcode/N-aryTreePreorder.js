/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/** Recursive
 * Returns the preorder traversal of the input n-ary tree
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    if(!root) return [];
    let nodes = [root.val];
    root.children.forEach(n => nodes = nodes.concat(preorder(n)));
    return nodes;
};


/**
 * Iterative
 */
var preorder = function(root) {
    if(!root) return [];
    const stack = [root];
    const ans = [];
    while(stack.length){
        const curr = stack.pop();
        ans.push(curr.val);
        for(let i = curr.children.length - 1; i >= 0; i--){
            stack.push(curr.children[i]);
        }
    }
    return ans;
};