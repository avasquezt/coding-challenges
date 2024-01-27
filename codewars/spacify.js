/**
 * Adds a space between each character in the input string
 * @param {string} str 
 * @returns {string}
 */
function spacify(str) {
    return str.replace(/./g, (c, i) => i == str.length - 1 ? c : c + ' ');
}

function spacify(str) {
    return str.replace(/(.)(.)/g,'$1 $2 ').trim();
}