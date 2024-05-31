/**
 * Deletes all the unset bits in the input string and returns the corresponding decimal number
 * @param {string} number 
 * @returns {number}
 */
function eliminateUnsetBits(number) {
    return parseInt(number.replace(/0/g,'') || 0, 2);
}