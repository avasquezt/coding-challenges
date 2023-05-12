/**
 * Inserts a dash between every two odd numbers in the input
 * @param {number} num
 * @returns {string}
 */
function insertDash(num) {
   return String(num).replace(/[13579](?=[13579])/g, n => n + '-');
}