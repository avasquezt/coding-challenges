/**
 * Calculates the maximum profit obtainable with the input prices array
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = Infinity;
    let max = 0;
    for(const price of prices){
        if(price < buy){
            buy = price;
        }else{
            max = Math.max(max, price - buy);
        }
    }
    return max;
};