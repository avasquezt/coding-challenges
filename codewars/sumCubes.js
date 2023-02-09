/**
 * Calculates the sum of the cubes up to the input value
 * @param {number} n 
 * @returns {number}
 */

function sumCubes(n){
    return Array(n + 1).fill().reduce((sum, _, i) => sum + i ** 3, 0);
}

function sumCubes(n){
    return (n ** 2 * (n + 1) ** 2) / 4;
}