/**
 * Calculates the number of pixels needed to paint an asperand symbol with the given size
 * @param {number} k 
 * @returns {number}
 */
function countPixels(k) {
  return 10 + (8 * (k - 1) || 1);
}