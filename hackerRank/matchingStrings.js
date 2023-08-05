/**
 * Finds the number of ocurrences of each query in the input strings
 * @param {string[]} strings 
 * @param {string[]} queries 
 * @returns {number[]}
 */
function matchingStrings(strings, queries) {
    // Write your code here
    return queries.map(e => strings.filter(w => w == e).length);
}