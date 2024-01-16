/**
 * Calculates the total distance travelled when visiting the input series of floors
 * @param {number} array 
 * @returns {number}
 */
function elevatorDistance(array) {
    return array.slice(1).reduce((r, n, i) => r + Math.abs(n - array[i]), 0);
}