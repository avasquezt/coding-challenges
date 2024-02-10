/**
 * Removes the requested pins from the 10 Pin arrangement
 * @param {number[]} arr 
 * @returns {string}
 */
function bowlingPins(arr) {
    return '7 8 9 10\n 4 5 6 \n  2 3  \n   1   '.replace(/\d+/g, n => arr.includes(+n) ? ' ' : 'I');
}