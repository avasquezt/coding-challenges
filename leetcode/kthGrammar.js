/**
 * Returns the required term of the kthGrammar sequence
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function(n, k) {
    if(n == 1) return 0;
    return kthGrammar(n - 1, Math.ceil(k / 2)) ? [0,1][k % 2] : [1,0][k % 2];
};