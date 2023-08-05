/**
 * Chains together a list of unary functions and returns the result
 * @param {Function[]} functions 
 * @returns {any}
 */
function chained(functions) {
  return input => functions.reduce((acc, f) => f(acc), input);
}