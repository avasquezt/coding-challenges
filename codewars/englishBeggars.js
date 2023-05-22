/**
 * Calculates the sum of the input values each beggar brings home, assuming they all take regular turns
 * @param {number[]} values 
 * @param {number} n 
 * @returns {number[]}
 */
function beggars(values, n){
    return values.reduce((beggars, e, i) => (beggars[i % n] += e, beggars), Array(n).fill(0));
}