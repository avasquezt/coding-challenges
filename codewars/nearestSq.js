/**
 * Calculates the nearest square number to the input value
 * @param {number} n 
 * @returns {number}
 */
function nearestSq(n){
    return Math.round(Math.sqrt(n)) ** 2;
}