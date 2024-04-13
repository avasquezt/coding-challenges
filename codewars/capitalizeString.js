/*  Write your program/code/algorithm here.
 *  If you're really stuck as to what exactly to define, go to the
 *  "Description" and click on the pseudo-link to reveal the answer
 */

String.prototype.capitalize = function(){
    let firstCharCode = this.charCodeAt(0);
    firstCharCode = firstCharCode > 96 && firstCharCode < 123 ? firstCharCode - 32 : firstCharCode;
    return String.fromCharCode(firstCharCode) + this.slice(1);
}

/**
 * Capitalizes the characters from the input string in the even and odd indexes
 * @param {string} s 
 * @returns {string[]}
 */
function capitalize(s){
  return [s.replace(/\w/gi, (l, i) => i % 2 ? l.toLowerCase() : l.toUpperCase()), 
          s.replace(/\w/gi, (l, i) => i % 2 ? l.toUpperCase() : l.toLowerCase())];
};