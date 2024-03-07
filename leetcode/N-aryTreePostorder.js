/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/** Recursive
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

/**
 * Iterative
 */
var postorder = function(root) {
    if (!root) return [];
    const stack = [root];
    const ans = [];
    while(stack.length){
        const curr = stack.pop();
        ans.push(curr.val);
        for(const child of curr.children){
            stack.push(child);
        }
    }
    return ans.reverse();
};