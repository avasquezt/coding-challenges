/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// var checkSubarraySum = function(nums, k) {
//     let sums = [nums[0]];
//     let pos = [[0]];
//     for(let i = 1; i < nums.length ; i++){
//         for(let j = sums.length - 1; j >= 0; j--){
//             sums[j] = (sums[j] + nums[i]) % k;
//             pos[j].push(i);
//             if (sums[j] == 0){
//                 return pos[j];
//             }
//         }
//         sums.push(nums[i]);
//         pos.push([i]);
//     }
//     return false;
// };

var checkSubarraySum = function(nums, k) {
    let modSet = new Set();
    let currSum = 0, prevSum = 0;
    for(let i = 0; i < nums.length; i++){
        currSum += nums[i];
        if(modSet.has(currSum % k)){
            return true;
        }
        currSum %= k;
        modSet.add(prevSum);
        prevSum = currSum;
    }
    return false;
}