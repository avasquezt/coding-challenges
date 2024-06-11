/**
 * Return the number of JavaScript developers coming from Europe in the input array
 * @param {object[]} list 
 * @returns {number}
 */
function countDevelopers(list) {
    return list.reduce((t, e) => t + (e.continent == 'Europe' && e.language == 'JavaScript'), 0);
}