/**
 * Validates if the input string is a phone number
 * @param {string} str 
 * @returns {string}
 */
function isItANum(str) {
    const phoneNumber = str.replace(/\D/g, '');
    return /^0[0-9]{10}$/.test(phoneNumber) ? phoneNumber : 'Not a phone number';
}