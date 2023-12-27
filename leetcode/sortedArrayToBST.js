/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Builds a height-balanced binary search tree with the input sorted array values
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    return build(nums, 0, nums.length);
    
    function build(nums, start, end){
        if(start == end) return null;
        const mid = start + Math.trunc((end - start) / 2);
        return new TreeNode(nums[mid], build(nums, start, mid), build(nums, mid + 1, end));
    }
};