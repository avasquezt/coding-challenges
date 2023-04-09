/**
 * Decodes the input morse code message
 * @param {string} morseCode
 * @returns {string}
 */
decodeMorse = function(morseCode){
    return morseCode.trim().split('   ').map(word => word.split(' ').map(char => MORSE_CODE[char]).join('')).join(' ');
}