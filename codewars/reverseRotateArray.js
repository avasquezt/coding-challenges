/**
 * Rotates or reverses the chunks of the input number, depending on its values
 * @param {number[]} str 
 * @param {number} sz 
 * @returns {string}
 */
function revrot(str, sz) {
    return (sz && sz <= str.length) ? str.match(new RegExp('.{'+ sz + '}', 'g')).filter(e => e.length == sz).map(e => isValid(e) ? e.split('').reverse().join('') : e.slice(1) + e[0]).join('') : '';
}

/**
 * Checks if the digits of the input number are divisible by 2 when cubed and added togheter
 * @param {string} number
 * @returns {boolean}
 */
function isValid(str){
  return str.split('').reduce((acc, n) => acc += n ** 3, 0) % 2 == 0;
}