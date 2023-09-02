/**
 * Counts the number of elements in the input array containing an even number of digits
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let ans = 0;
    for(const n of nums){
        if(Math.floor(Math.log10(n) + 1) % 2 == 0){
            ans++;
        }
    }
    return ans;
};