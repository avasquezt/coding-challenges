/**
 * Obtains the first character of each word in the input string
 * @param {string} s 
 * @returns {string}
 */
function makeString(s){
//   return s.match(/\b\w/g).join('');
  return s.replace(/(\w)\w*(\s|\b)/g, '$1');
}
