/**
 * Sorts the input array in descending order and concatenates its elements
 * @param {number[]} instructions 
 * @returns {string}
 */
function liftoff(instructions){
    return instructions.sort((a,b) => b - a).join(' ') + ' liftoff!';
}