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

/**
 * Iterative
 */
var levelOrder = function(root) {
    if(!root) return [];
    const ans = [];
    let currQueue;
    let nextQueue = new Queue();
    nextQueue.push(root);
    while(!nextQueue.isEmpty()){
        currQueue = nextQueue;
        nextQueue = new Queue();
        const vals = [];
        while(!currQueue.isEmpty()){
            const curr = currQueue.pop();
            vals.push(curr.val);
            for(const node of curr.children){
                nextQueue.push(node)
            }
        }
        ans.push(vals);
    }
    return ans;
};