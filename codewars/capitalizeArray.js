/**
 * Capitalizes the first letter in each string in the input array
 * @param {string[]} names 
 * @returns {string[]}
 */
function capMe(names) {
    return names.map(e => e[0].toUpperCase() + e.slice(1).toLowerCase());
}