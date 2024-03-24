/**
 * Initialize the middle names in the input string
 * @param {string} name 
 * @returns {string}
 */
function initializeNames(name){
    return name.replace(/\s\w+(?= )/g, mName => ' ' + mName[1] + '.');
}