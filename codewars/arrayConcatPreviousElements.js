/**
 * Concatenates every element in the input array with the previous elements
 * @param {string[]} array 
 * @returns {string[]}
 */
function spacey(array){
    return array.reduce((r, e, i) => r.concat((r[i - 1] || '') + e),[]);
}