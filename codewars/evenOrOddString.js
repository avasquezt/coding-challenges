/**
 * Checks if the sum of all the individual even digits of the input string are greater than the sum of all the indiviudal odd digits
 * @param {string} str 
 * @returns {string}
 */
function evenOrOdd(str) {
    let n = str.split('').reduce((acc, e) => acc + e * (e % 2 ? -1 : 1), 0);
    return !n ? 'Even and Odd are the same' : n > 0 ? 'Even is greater than Odd' : 'Odd is greater than Even';
}