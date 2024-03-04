/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
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