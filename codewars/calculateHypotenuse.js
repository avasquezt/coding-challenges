/**
 * Calculates the hupotenuse of a right angled triangle with the length of the two sides
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function calculateHypotenuse(a, b) {
    if(!Number.isInteger(a) || !Number.isInteger(b) || a <= 0 || b <= 0){
      throw new Error();
    }
    return +Math.sqrt(a ** 2 + b ** 2).toFixed(3);
}