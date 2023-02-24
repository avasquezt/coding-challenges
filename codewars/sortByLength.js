/**
 * Sorts the strings in the input array by length 
 * @param {string[]} array 
 * @returns {string[]}
 */

function sortByLength (array) {
    return array.sort((a, b) => a.length - b.length)
};