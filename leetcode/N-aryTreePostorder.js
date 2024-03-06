/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * Returns the postorder traversal of the input n-ary tree
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root, ans = []) {
    if(!root) return ans;
    for(const node of root.children){
        postorder(node, ans);
    }
    ans.push(root.val);
    return ans;
};