/**
 * Checks if the input string is in the form of a phone number
 * @param {string} phoneNumber 
 * @returns {boolean}
 */
function validPhoneNumber(phoneNumber){
    return /^\(\d{3}\) \d{3}\-\d{4}$/.test(phoneNumber);
}