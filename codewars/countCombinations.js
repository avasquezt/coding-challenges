/**
 * Counts how many times the requested key appears inside the input string
 * @param {string} string 
 * @param {string} key 
 * @returns {number}
 */
let countCombinations = function(string, key){
    return (string.match(new RegExp(key, 'ig'))||[]).length;
}