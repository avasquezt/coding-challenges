/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
    nums.sort((a, b) => a - b);
    const summs = [nums[0]];
    for(let i = 1; i < nums.length; i++){
        summs.push(nums[i] + summs[i - 1]);
    }
    const ans = [];
    for(let i = 0; i < queries.length; i++){
        ans.push(binarySearch(summs, queries[i]));
    }

    return ans;
};

function binarySearch(nums, target){
    let left = 0, right = nums.length - 1;
    while(left <= right){
        const mid = Math.round((right + left) / 2);
        if(nums[mid] == target){
            return mid + 1;
        }else if(nums[mid] < target){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    return left;
}