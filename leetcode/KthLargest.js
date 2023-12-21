/**
 * Class to find the kth largest element in a stream
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k - 1;
    this.nums = nums.sort((a,b) => b - a);
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    let i = 0;
    while(val < this.nums[i]) i++;
    this.nums.splice(i, 0, val);
    return this.nums[this.k];
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

var KthLargest = function(k, nums) {
    this.head = null;
    this.k = k;
    
    this.addVal = function(node, val){
        if(node){
            node.count++;
            if(val <= node.val){
                node.left = this.addVal(node.left, val);
            }else{
                node.right = this.addVal(node.right, val);
            }
        }else{
            node = new TreeNode(val, 1);
        }
        return node;
    }
    
    for(const n of nums){
        this.head = this.addVal(this.head, n);
    };
    
};

// Solution using BST
var KthLargest = function(k, nums) {
    this.head = null;
    this.k = k;
    
    this.addVal = function(node, val){
        if(node){
            node.count++;
            if(val <= node.val){
                node.left = this.addVal(node.left, val);
            }else{
                node.right = this.addVal(node.right, val);
            }
        }else{
            node = new TreeNode(val, 1);
        }
        return node;
    }
    
    for(const n of nums){
        this.head = this.addVal(this.head, n);
    };
}

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.head = this.addVal(this.head, val);
    return search(this.head, this.k);
    
    function search(node, n){
        const k = n - (node.right?.count || 0);
        if(k == 1) return node.val;
        if(k > 0){
            return search(node.left, k - 1);
        }else{
            return search(node.right, n);
        }
    }
};

function TreeNode(val, count){
    this.val = val;
    this.count = count;
    this.left = null;
    this.right = null;
}