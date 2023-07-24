/**
 * Reverses every other word in the input string
 * @param {string} str 
 * @returns {string}
 */
function reverse(str){
    return str.trim().split(' ').map((e, i) => i % 2 ? e.split('').reverse().join('') : e).join(' ');
}