/**
 * Split the input string in substrings of the requested size
 * @param {string} s 
 * @param {number} partLength 
 * @returns {string}
 */
var splitInParts = function(s, partLength){
    const n = partLength - (s.length % partLength);
    return s.padEnd(' ', n).replace(new RegExp('.{'+partLength+'}', 'g'), '$& ').trim();
}