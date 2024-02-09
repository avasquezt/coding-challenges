/**
 * Calculates the number of visits needed for the annual pass to be better than the individual price
 * @param {number} annualPrice 
 * @param {number} individualPrice 
 * @returns {number}
 */
function howManyTimes(annualPrice, individualPrice) {
    return Math.ceil(annualPrice / individualPrice);
}