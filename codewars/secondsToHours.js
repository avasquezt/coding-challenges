/**
 * Converts the input time in seconds to hours and minutes
 * @param {number} seconds 
 * @returns {string}
 */
function toTime(seconds) {
    return `${Math.trunc(seconds/3600)} hour(s) and ${Math.trunc((seconds%3600)/60)} minute(s)`;
}