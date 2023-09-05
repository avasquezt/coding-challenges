/**
 * Merges the input arrays in increasing order
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let index = m + n - 1;
    while(index >= 0){
        if(m == 0 || nums1[m - 1] < nums2[n - 1]){
            nums1[index] = nums2[n - 1];
            n--;
        }else{
            nums1[index] = nums1[m - 1];
            m--;
        }
        index--;
    }
};