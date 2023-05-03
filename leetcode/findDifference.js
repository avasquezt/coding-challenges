/**
 * Returns the numbers from the first array which are not present in the second and viceversa
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    function findOnlyFirst(n,m){
        const onlyInN = new Set();
        const existsInM = new Set(...nums2);

        for(let e of n){
            if(!existsInM.has(e)) onlyInN.add(e);
        }

        return [...onlyInN];
    }

    return [findOnlyFirst(nums1,nums2), findOnlyFirst(nums2, nums1)];
};