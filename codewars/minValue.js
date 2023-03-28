/**
 * Calculates the smallest number that can be formed with the input digits
 * @param {number[]} values 
 * @returns {number}
 */
function minValue(values){
    return +[...(new Set(values))].sort((a, b) => a - b).join('')
}