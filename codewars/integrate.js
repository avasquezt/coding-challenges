/**
 * Finds the integral of the expression passed
 * @param {number} coefficient 
 * @param {number} exponent 
 * @returns {string}
 */
function integrate(coefficient, exponent) {
    return `${coefficient / (exponent + 1)}x^${exponent + 1}`;
} 