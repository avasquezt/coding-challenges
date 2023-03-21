/**
 * Calculates the number of subarrays filled with 0 in the input array
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let ans = 0;
    let consecutiveZeroes = 0;
    for(const n of nums){
        if(n == 0){
            ans++;
            ans += consecutiveZeroes;
            consecutiveZeroes++;
        }else if(consecutiveZeroes){
            consecutiveZeroes = 0;
        }
    }
    return ans;
};


var zeroFilledSubarray = function(nums) {
    let ans = 0;
    let consecutiveZeroes = 0;
    for(const n of nums){
        if(n == 0){
            consecutiveZeroes++;
        }else if(consecutiveZeroes){
            ans += consecutiveZeroes * (consecutiveZeroes + 1) / 2;
            consecutiveZeroes = 0;
        }
    }
    if(consecutiveZeroes){
        ans += consecutiveZeroes * (consecutiveZeroes + 1) / 2;
    }
    return ans;
};