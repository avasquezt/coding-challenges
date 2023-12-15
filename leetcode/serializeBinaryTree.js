/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if(root){
        return root.val + ',' + serialize(root.left) + ',' + serialize(root.right);;
    }else{
        return 'n';
    }
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const queue = new Queue(data.split(','));
    
    return build(queue);
    
    function build(data){
        const val = data.pop();
        if(val == 'n'){
            return null;
        }
        const node = new TreeNode(val);
        node.left = build(data);
        node.right = build(data);
        return node;
    }
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */