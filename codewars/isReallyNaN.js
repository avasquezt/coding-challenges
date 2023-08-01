/**
 * Checks if the input value is not a number
 * @param {any} val 
 * @returns {boolean}
 */
const isReallyNaN = (val) => {
  // return isNaN(val);  // wasn't working as planned :-(
  return Number.isNaN(val);
};