/**
 * Multiplies the input number by 5 raised to the number of digits of the number
 * @param {number} number 
 * @returns {number}
 */
function multiply(number){
    return number * (5 ** ~~(Math.log10(Math.abs(number)) + 1));
}