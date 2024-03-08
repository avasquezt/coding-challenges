/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/** Recursive
 * Returns the levelorder traversal of the input n-ary tree
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root, level = 0, ans = []) {
    if(!root) return ans;
    if(ans[level]) ans[level].push(root.val);
    else ans[level] = [root.val];
    for(const node of root.children){
        levelOrder(node, level + 1, ans);
    }
    return ans;
};