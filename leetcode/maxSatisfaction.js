/**
 * Calculates the maximum sum of like-time coefficient obtainable with the input array
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function(satisfaction) {
    satisfaction.sort((a,b) => b - a);
    let res = 0;
    let sum = 0;
    for(const s of satisfaction){
        const tmp = res + sum + s;
        sum += s;
        if(tmp < res){
            break;
        }
        res = tmp;
    }
    return res;
};

var maxSatisfaction = function(satisfaction) { // greedy
    satisfaction.sort((a, b) => a - b); // n log n, asc
    
    const N = satisfaction.length;
    let suffix = 0;
    let max = 0;
    
    for (let i = N - 1; i >= 0 && max + suffix + satisfaction[i] > max; i--) {        
        suffix += satisfaction[i];
        max += suffix;
    }
    
    return max;
};