class TreeNode {

    constructor(left = null, right = null) {
      this.left = left;
      this.right = right;
    }
    
    /**
     * Checks if the input binary tree is perfect
     * @param {TreeNode} root 
     * @returns {boolean}
     */
    static isPerfect(root) {
      return height(root) != -1;
      
      function height(node){
        if(!node) return 0;
        const left = height(node.left);
        const right = height(node.right);
        if(left != right || left == -1) return -1;
        return 1 + left;
      }
    }
    
    static leaf() {
      return new TreeNode();
    }
    
    static join(left, right) {
      return new TreeNode().withChildren(left, right);
    }
    
    withLeft(left) {
      this.left = left;
      return this;
    }
  
    withRight(right) {
      this.right = right;
      return this;
    }
  
    withChildren(left, right) {
      this.left = left;
      this.right = right;
      return this;
    }
  
    withLeftLeaf() {
      return this.withLeft(TreeNode.leaf());
    }
  
    withRightLeaf() {
      return this.withRight(TreeNode.leaf());
    }
  
    withLeaves() {
      return this.withChildren(TreeNode.leaf(), TreeNode.leaf());
    }
    
  }