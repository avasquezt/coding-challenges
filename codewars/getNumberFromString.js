/**
 * Extracts the numbers from te input string
 * @param {string} s 
 * @returns {number}
 */
function getNumberFromString(s) {
    return Number(s.replace(/[^\d]/g, ''));
}

function getNumberFromString(s) {
    return Number(s.replace(/\D/g, ''));
}