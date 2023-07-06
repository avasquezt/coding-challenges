/**
 * Checks if the function in the parameters returns true for only one element in the input array
 * @param {number[]} arr 
 * @param {Function} fun 
 * @returns {boolean}
 */
function one(arr, fun){
  return arr.reduce((acc, e) => acc + fun(e), 0) == 1;
}