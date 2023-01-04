/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let fibSequence = [];
    fibSequence[0] = 0;
    fibSequence[1] = 1;
    for(let i = 2; i <= n; i++){
        fibSequence[i] =  fibSequence[i - 1] +  fibSequence[i - 2];
    }
    return fibSequence[n];
};

var fib = function(n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    return fib(n - 1) + fib(n - 2);
};