/**
 * Calculates the number of steps needed to climb a set of stairs with the requested size
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let [a, b] = [1, 2];
    n -= 2;
    while(n--){
        [a, b] = [b, a + b];
    }
    return b;
};

/**
 * Recursive
 */
var climbStairs = function(n) {
    const cache = new Map();
    function helper(n){
        if(n < 2) return 1;
        if(cache.has(n)) return cache.get(n);
        const result = helper(n - 1) + helper(n - 2);
        cache.set(n, result);
        return result;
    }
    return helper(n);
};