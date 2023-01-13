/**
 * Converts the input array from binary to decimal
 * @param {number[]} arr 
 * @returns {number}
 */

const binaryArrayToNumber = arr => {
    return parseInt(arr.join(''), 2);
};