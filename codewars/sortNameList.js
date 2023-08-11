/**
 * Sorts the input name list by last and first name
 * @param {string} s 
 * @returns {string}
 */
function meeting(s) {
    return '(' + s.split(';').map(e => e.toUpperCase().split(':')).sort((a, b) => a[1].localeCompare(b[1]) || a[0].localeCompare(b[0])).map(e => `${e[1]}, ${e[0]}`).join`)(`+')';
}