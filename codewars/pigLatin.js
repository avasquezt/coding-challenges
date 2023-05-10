/**
 * Moves the first letter of each word of the input string to the end of it, then adds "ay" to the end of the word
 * @param {string} str 
 * @returns {string}
 */
function pigIt(str){
    return str.replace(/\b(\w)(\w*)/g, "$2$1" + "ay");
}