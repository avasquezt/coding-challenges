/**
 * Returns the values from the input dictionary that start with the input string
 * @param {string} input 
 * @param {string[]} dictionary 
 * @returns {string[]}
 */
function autocomplete(input, dictionary){
    return dictionary.filter(e => e.toLowerCase().startsWith(input.toLowerCase().replace(/[^a-z]/g,''))).slice(0, 5);
}