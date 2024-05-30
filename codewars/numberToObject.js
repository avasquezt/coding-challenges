/**
 * Creates an object in the array with for each number in the input array
 * @param {number[]} s 
 * @returns {object[]}
 */
function numObj(s){
    return s.map(n => ({[n]: String.fromCharCode(n)}));
}