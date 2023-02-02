/**
 * Encodes the input string using the ROT13 cipher
 * @param {string} message 
 * @returns {string}
 */
function rot13(message){
  let arr = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
  return message.replace(/[a-z]/gi, char => arr[arr.indexOf(char) + 13]);
}

// function rot13(str) {
//   return str.replace(/[a-z]/ig, function(x){
//     return String.fromCharCode(x.charCodeAt(0) + (x.toLowerCase() <= 'm' ? 13: -13));
//   });
// }