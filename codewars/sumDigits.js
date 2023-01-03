/**
 * Sums the digits of the input number
 * @param {number} number
 * @returns {number}
 */
function sumDigits(number) {
    return String(number).split('').reduce((acc, n) => acc + (Number(n) || 0), 0);
}
  