/*  Write your program/code/algorithm here.
 *  If you're really stuck as to what exactly to define, go to the
 *  "Description" and click on the pseudo-link to reveal the answer
 */

String.prototype.capitalize = function(){
    let firstCharCode = this.charCodeAt(0);
    firstCharCode = firstCharCode > 96 && firstCharCode < 123 ? firstCharCode - 32 : firstCharCode;
    return String.fromCharCode(firstCharCode) + this.slice(1);
  }