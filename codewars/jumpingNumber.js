/**
 * Checks if the input is a jumping number (all adjacent digits in it differ by 1)
 * @param {number} n 
 * @returns {string}
 */
function jumpingNumber(n){
    return String(n).slice(1).split('').every((e, i) => Math.abs(e - String(n)[i]) == 1) ? 'Jumping!!' : 'Not!!';
}