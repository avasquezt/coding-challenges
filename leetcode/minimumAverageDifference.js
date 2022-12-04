/**
 * @param {number[]} nums
 * @return {number}
 */
 var minimumAverageDifference = function(nums) {
    let total = 0, n = nums.length;
    total = nums.reduce((sum, e) => sum + e, 0);
    let min = Infinity, minIndex = 0, currSum = 0;
    for(let i = 0; i < n; i++){
        currSum += nums[i];
        const currAverage = Math.floor(currSum / (i + 1));
        const lastAverage = Math.floor((total - currSum) / (n - (i + 1) || 1));
        if(Math.abs(currAverage - lastAverage) < min){
            min = Math.abs(currAverage - lastAverage);
            minIndex = i;
        }
    }
    return minIndex;
};