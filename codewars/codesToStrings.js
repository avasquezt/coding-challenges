/**
 * Converts the input array of number codes to the corresponding ascii string
 * @param {number[]} arr 
 * @returns {string}
 */
var ArrowFunc = function(arr) {
    return arr.map(n => String.fromCharCode(n)).join(''); //Complete this function
}