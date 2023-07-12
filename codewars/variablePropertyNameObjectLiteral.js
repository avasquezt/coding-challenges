/**
 * Returns the count of food options selected by the developers in the input array
 * @param {object[]} list 
 * @returns {object}
 */
function orderFood(list) {
    return list.reduce((acc, {meal}) => ({...acc, [meal]: (acc[meal] || 0) + 1}), {});
}