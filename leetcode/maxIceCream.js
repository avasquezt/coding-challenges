/**
 * Counts the maximum number of elements in the input array that add up to the requested total number
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    costs.sort((a, b) => a - b);
    let i = 0
    while(coins >= costs[i]){
        coins -= costs[i];
        i++;
    }
    return i;
};