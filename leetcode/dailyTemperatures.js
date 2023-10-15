/**
 * Calculates the number of elements, for each value in the input array, before a bigger value appears
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const prev = [];
    const ans = Array(temperatures.length).fill(0);
    for(let i = 0; i < temperatures.length; i++){
        while(temperatures[i] > temperatures[prev.at(-1)]){
            ans[prev.at(-1)] = i - prev.pop();
        }
        prev.push(i);
    }
    return ans;
};