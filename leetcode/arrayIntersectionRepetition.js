/**
 * Finds the intersection of the input arrays
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const count = new Map();
    for(const n of nums1){
        count.set(n, 1 + (count.get(n) || 0));
    }
    const ans = [];
    for(const n of nums2){
        if(count.get(n) > 0){
            ans.push(+n);
            count.set(n, count.get(n) - 1);
        }
    }
    return ans;
};