/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Checks if the input trees are structurally identical, and their nodes have the same value
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    const nodesP = [p];
    const nodesQ = [q];
    while(nodesP.length){
        const currentP = nodesP.pop();
        const currentQ = nodesQ.pop();
        if(currentP && currentQ){
            if(currentP.val !== currentQ.val){
                return false;
            }
            nodesP.push(currentP.right);
            nodesQ.push(currentQ.right);
            nodesP.push(currentP.left);
            nodesQ.push(currentQ.left);
        }else if (currentP !== currentQ){
             return false;
        }
    }
    return nodesP.length == nodesQ.length;
};

/**
 * Recursive solution
 */
var isSameTree = function(p, q) {
    if(p == null && q == null) return true;
    if(p == null || q == null) return false;
    if(p.val != q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

/**
 * Recursive -> Iterative
 */
var isSameTree = function(p, q) {
    const queue1 = new Queue();
    const queue2 = new Queue();
    
    queue1.push(p);
    queue2.push(q);
    
    while(!queue1.isEmpty()){
        p = queue1.pop();
        q = queue2.pop();
        
        if(!isValid(p, q)) return false;
        
        if(p){
            queue1.push(p.left);
            queue1.push(p.right);
            queue2.push(q.left);
            queue2.push(q.right);
        }
    }
    
    return true;
    
    function isValid(p, q){
        if(p == null && q == null) return true;
        if(p == null || q == null) return false;
        if(p.val != q.val) return false;
        return true;
    }
};