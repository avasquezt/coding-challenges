/**
 * Calculates the number of iterations required to calculate PI with a given precision
 * @param {number} epsilon 
 * @returns {number[]}
 */
function iterPi(epsilon) {
    let pi = 0;
    let n = 0;
    for(let i = 1; Math.abs(Math.PI - 4 * pi) > epsilon; i++){
      pi += ((-1) ** (i - 1)) * 1 / (i * 2 - 1);
      n++;
    }
    return [n, +(4 * pi).toFixed(10)];
}