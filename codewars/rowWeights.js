/**
 * Returns the input array's odd and even index sum
 * @param {number[]} array 
 * @returns {number[]}
 */
function rowWeights(array){
    return array.reduce((acc, n, i) => [acc[0] + n * ((1+i) % 2), acc[1] + n * (i % 2)], [0, 0]);
}