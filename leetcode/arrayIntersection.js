/**
 * Finds the intersection of the input arrays
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let a = new Set;
    let b = new Set;
    for(const n of nums1){
        a.add(n);
    }
    for(const n of nums2){
        if(a.has(n)) b.add(n);
    }
    return Array.from(b.values());
};