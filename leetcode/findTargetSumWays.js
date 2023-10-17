/**
 * Finds the number of ways the numbers in the input array can be sum to obtain the target
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */ 
// DFS
var findTargetSumWays = function(nums, target) {
    if(!nums.length) return 0;
    
    return dfs(nums, target, nums.length, 0, 0, 0);
    
    function dfs(nums, target, n, i, sum, acum){
        if(i == n) return acum + (sum == target ? 1 : 0);
        return dfs(nums, target, n, i + 1, sum + nums[i], acum) + dfs(nums, target, n, i + 1, sum - nums[i], acum);
    }
};