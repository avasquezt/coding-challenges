/**
 * Duplicates the input string and its characters the requested amount of times
 * @param {string} strng 
 * @param {number} k 
 * @param {number} n 
 * @returns {string}
 */
function scale(strng, k, n) {
    if(!strng || !k || !n) return strng;
    return strng.trim().split('\n').map(s => s.split('').map(c => c.padStart(k, c)).join('')).map(s => s + ('\n'+s).repeat(n - 1)).join('\n');
}