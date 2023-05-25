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