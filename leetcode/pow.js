/**
 * Calculates x raised to the power n
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let ans = 1;
    let absN = BigInt(Math.abs(n));
    while(absN > 0){
        if(absN & 1n) ans *= x;
        absN >>= 1n;
        x *= x;
    }
    return n > 0 ? ans : 1 / ans;
};