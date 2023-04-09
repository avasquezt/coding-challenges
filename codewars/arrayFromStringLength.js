/**
 * Returns an array with the input string and, if its length is greater than 2, the string truncated to 2 characters
 * @param {string} name 
 * @returns {string}
 */
function whoIsPaying(name){
    return [name, name.slice(0,2)].slice(0, name.length > 2 ? 2 : 1);
}