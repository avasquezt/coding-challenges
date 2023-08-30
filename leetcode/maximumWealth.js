/**
 * Calculates the maximum sum of the subarrays in the input integer grid
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let max = 0;
    for(const customer of accounts){
        let wealth = 0;
        for(const bank of customer){
            wealth += +bank;
        }
        max = Math.max(max, wealth);
    }
    return max;
};