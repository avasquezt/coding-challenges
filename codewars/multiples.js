/**
 * Returns the first M multiples of N
 * @param {number} m 
 * @param {number} n 
 * @returns {number[]}
 */
function multiples(m, n){
    return Array(m).fill(0).map((_, i) => n * (i + 1));
}