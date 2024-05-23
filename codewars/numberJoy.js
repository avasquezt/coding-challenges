/**
 * Checks if the input number is a Harshad number
 * @param {number} n 
 * @returns {number}
 */
function numberJoy(n) {
    const s = String(n).split('').reduce((r, n) => r + Number(n), 0);
      return s * Number(String(s).split('').reverse().join('')) == n;
}