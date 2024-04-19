/**
 * Calculates the minimum time needed to cook the requested number of pancakes
 * @param {number} n 
 * @param {number} m 
 * @returns {number}
 */
function cookPancakes(n, m) {
    return Math.max(2, Math.ceil(n * 2/ m));
}