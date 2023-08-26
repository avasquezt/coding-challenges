/**
 * Returns the last element of the given arguments
 * @param {any} param
 * @returns {any}
 */
function last(){
  return arguments.length > 1 ? arguments[arguments.length - 1] : arguments[0][arguments[0].length - 1] || arguments[0];
}
