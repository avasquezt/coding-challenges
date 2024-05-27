/**
 * Returns the values of the objects in the input array as a string-seperated sentence in the order of their keys
 * @param {*} arr 
 * @returns 
 */
function  sentence(arr) {
    return arr.sort((a,b) => Object.keys(a)[0] -  Object.keys(b)[0]).map(e => Object.values(e)[0]).join(' ');
}