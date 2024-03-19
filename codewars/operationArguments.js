/**
 * Evaluates the functions in the input array using the previous elements
 * @param {any[]} arr 
 * @returns {number[]}
 */
function operationArguments(arr){
    return arr.reduce((r, e) => Number.isInteger(e) ? r.concat(e) : r.concat(e(r.length ? r.pop() : 0)), []);;
}