/**
 * Checks if the input is a Disarium number (the sum of its digits powered with their respective positions is equal to the number itself)
 * @param {number} n 
 * @returns {string}
 */
function disariumNumber(n){
    return String(n).split('').reduce((acc, n, i) => acc += n ** (i + 1), 0) == n ? 'Disarium !!' : 'Not !!';
}