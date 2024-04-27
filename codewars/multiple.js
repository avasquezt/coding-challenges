/**
 * Checks if the input number is divisible by 3 or 5
 * @param {number} x 
 * @returns {string}
 */
function multiple(x) {
    let msg = '';
    if(x % 3 == 0) msg += 'Bang';
    if(x % 5 == 0) msg += 'Boom';
    return msg || 'Miss';
}