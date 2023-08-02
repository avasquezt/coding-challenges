/**
 * Rotates the input string 180º
 * @param {string} strng 
 * @returns {string}
 */
function rot(strng) {
  return rotate(strng).join('\n');  
}

/**
 * Rotates the input string 180º and appends it at the end
 * @param {string} strng 
 * @returns {string}
 */
function selfieAndRot(strng) {
  return strng.split('\n').map(e => e + '.'.repeat(e.length)).concat(rotate(strng).map(e => '.'.repeat(e.length) + e)).join('\n');
}
/**
 * Applies the input function to the string
 * @param {Function} fct 
 * @param {string} s 
 * @returns {string}
 */
function oper(fct, s) {
  return fct(s);
}

/**
 * Rotates the input string 180º and resturns it as an array
 * @param {string} strng 
 * @returns {string[]}
 */
function rotate(strng){
  return strng.split('\n').map((e, i, arr) => arr[arr.length - i - 1].split('').reverse().join(''));
}