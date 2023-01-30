/**
 * Calculates the requested term of the tribbonacci sequence
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    const trib = [0, 1, 1];
    while(n > 2){
        [trib[0], trib[1], trib[2]] = [trib[1], trib[2], trib[0] + trib[1] + trib[2]];
        n--;
    };
    return trib[n];
};