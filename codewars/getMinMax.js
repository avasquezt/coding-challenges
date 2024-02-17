/**
 * Returns the minimal and the maximal value in the input array
 * @param {number[]} arr 
 * @returns {number[]}
 */
function getMinMax(arr){
    return arr.reduce(([min, max], n) => [Math.min(min, n), Math.max(max, n)], [Number.MAX_VALUE, Number.MIN_VALUE])
};