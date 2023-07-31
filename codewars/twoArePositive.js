/**
 * Checks if exactly two of of the input integers are positive numbers
 * @param  {...number} nums 
 * @returns {boolean}
 */
function twoArePositive(...nums) {
  return nums.filter(n => n > 0).length == 2;
}