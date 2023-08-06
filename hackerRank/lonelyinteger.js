/**
 * Finds the only unique element in the input string
 * @param {number[]} a 
 * @returns {number}
 */
function lonelyinteger(a) {
    return a.reduce((acc, n) => acc ^ n, 0);
}