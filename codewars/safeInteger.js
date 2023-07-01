/**
 * Checks if the input number is safe to use in JS
 * @param {number} n 
 * @returns {boolean}
 */
function SafeInteger(n){
  return Math.abs(n) <= Number.MAX_SAFE_INTEGER;
}

function SafeInteger(n) {
    return Number.isSafeInteger(n);
}