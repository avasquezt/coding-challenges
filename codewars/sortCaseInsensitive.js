/**
 * Sorts the given array of strings in alphabetical order, case insensitive
 * @param {string[]} names 
 * @returns {string[]}
 */
var sortme = function(names){
    return names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
}
  