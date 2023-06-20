/**
 * Calculates the maximum triplet sum in the array Without duplications
 * @param {number[]} numbers 
 * @returns {number}
 */
function maxTriSum(numbers){
    let n = 3;
    return numbers.sort((a,b) => b - a).reduce((acc, e, i) => [acc + (e != numbers[i+1] && n > 0? e : 0), n -= e != numbers[i+1] ? 1 : 0][0], 0);
}