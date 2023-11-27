/**
 * Calculates all the possible permutations of the numbers in the input array
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    return backtrack(nums, new Set(), [], []);
    
    function backtrack(nums, seen, curr, ans){
        if(curr.length == nums.length) return ans.push(curr.slice());
        for(let i = 0; i < nums.length; i++){
            if(!seen.has(i)){
                seen.add(i);
                curr.push(nums[i]);
                backtrack(nums, seen, curr, ans);
                seen.delete(i);
                curr.pop();
            }
        }
        return ans;
    }
};