/**
 * Generates an alias based on the input names
 * @param {string} firstName
 * @param {string} secondName
 * @returns {string}
 */
function aliasGen(){
    const first = arguments[0][0];
    const second = arguments[1][0];
    return /[A-Z]{2}/i.test(first + second) ? firstName[first.toUpperCase()] + ' ' +  surname[second.toUpperCase()] : 'Your name must start with a letter from A - Z.';
}