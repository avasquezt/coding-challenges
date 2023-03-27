/**
 * Sorts the input array in the requested order
 * @param {string} arr 
 * @param {boolean} order 
 * @returns {string}
 */
function sortEmotions(arr, order){
    const sortOrder = [':D', ':)', ':|', ':(', 'T_T'];
    return arr.sort((a, b) => (sortOrder.indexOf(a) - sortOrder.indexOf(b)) * (order ? 1 : -1));
}