/**
 * Filters the objects with an odd total ASCII representation in their first name
 * @param {object[]} list 
 * @returns {object[]}
 */
function findOddNames(list) {
    return list.filter(({firstName}) => firstName.split('').reduce((r, c) => r + c.charCodeAt(0), 0) % 2);
}