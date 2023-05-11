/**
 * Returns the shortest string as prefix and as suffix of the reverse of the longest input string
 * @param {string} a 
 * @param {string} b 
 * @returns {string}
 */
function shorter_reverse_longer(a,b){
    return a.length < b.length ? a+b.split('').reverse().join('')+a : b+a.split('').reverse().join('')+b
}