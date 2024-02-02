/**
 * Validates if the input array only contains integer numbers
 * @param {number[]} arr 
 * @returns {boolean}
 */
function isIntArray(arr) {
    return Array.isArray(arr) && arr.every(Number.isInteger);
}