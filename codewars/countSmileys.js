/**
 * return the total number of smiling faces in the array
 * @param {string} arr 
 * @returns {number}
 */

function countSmileys(arr) {
    return arr.filter(str => /^[:;][\-~]?[)D]$/.test(str)).length
}