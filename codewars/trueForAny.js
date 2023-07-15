/**
 * Checks if the input function returns true for any item in the input array
 * @param {number[]} arr
 * @param {Function} fun 
 * @returns {boolean}
 */
function any(arr, fun){
  return arr.some(e => fun(e));
}