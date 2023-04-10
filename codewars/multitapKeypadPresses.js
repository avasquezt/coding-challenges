/**
 * Calculates the amount of button presses required to enter the input message in a Multi-tap Keypad
 * @param {string} phrase 
 * @returns {number}
 */
function presses(phrase) {
    const keys = ['1', 'abc2', 'def3', 'ghi4', 'jkl5', 'mno6', 'pqrs7', 'tuv8', 'wxyz9', '*', ' 0', '#'];
    let n = 0;
    for(const char of phrase.toLowerCase()){
      n += keys.find(e => e.includes(char)).indexOf(char) + 1;
    }
    return n;
}