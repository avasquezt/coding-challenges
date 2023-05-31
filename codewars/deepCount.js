/**
 * Calculates the number of ALL elements within the input array, including any nested arrays
 * @param {Array} a 
 * @returns {number}
 */
function deepCount(a){
    return a.reduce((acc, n) => acc + 1 + (Array.isArray(n) ? deepCount(n) : 0), 0);
}