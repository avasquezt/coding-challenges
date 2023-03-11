/**
 * Pads the input number to 5 digits
 * @param {number} value 
 * @returns {string}
 */
function solution(value){
    return 'Value is ' + String(value).padStart(5, '0');
}