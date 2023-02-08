// var jump = function(nums) {
//     let min = Infinity;
//     function dp(n, i){
//         console.log(i, n, nums[i]);
//         if(i >= nums.length - 1 && n < min) min = n;
//         if(n >= min) return;
//         let curr = nums[i];
//         while(curr){
//             dp(n + 1, i + curr);
//             curr--;
//         }
//     }
//     dp(0, 0);
//     return min;
// };

/**
 * Calculates the minimum number of jumps to reach the last element if the input array
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let jumps = currEnd = currFarthest = 0;
    for(let i = 0; i < nums.length - 1; i++){
        currFarthest = Math.max(currFarthest, i + nums[i]);
        if(currEnd == i){
            jumps++;
            currEnd = currFarthest;
        }
    }

    return jumps;
}

console.log(jump([2,3,1,1,4]));