/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let [a, b] = [1, 2];
    while(steps.length < n){
        [a, b] = [b, a + b];
    }
    return b;
};