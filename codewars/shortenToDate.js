/**
 * Converts the input long Date format to short date format
 * @param {string} longDate 
 * @returns {string}
 */
function shortenToDate(longDate) {
    return longDate.split(',')[0];
}