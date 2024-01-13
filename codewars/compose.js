/**
 * Composes the two imput functions
 * @param {Function} f 
 * @param {Function} g 
 * @returns {Function}
 */
function compose(f,g) {
    return (...x) => f(g(...x));
}