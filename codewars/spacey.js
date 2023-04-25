/**
 * Concatenates every element in the input string with the previous elements
 * @param {string[]} array 
 * @returns {string[]}
 */
function spacey(array){
    let acc = '';
    return array.map(e => [acc + e, acc += e][0]);
}