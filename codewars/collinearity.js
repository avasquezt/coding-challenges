/**
 * Checks if the input vectors are collinear with the origin (0, 0) 
 * @param {number} x1 
 * @param {number} y1 
 * @param {number} x2 
 * @param {number} y2 
 * @returns {number}
 */
function collinearity(x1, y1, x2, y2) {
    return (x1 == 0 && y1 == 0 || x2 == 0 && y2 == 0) ? true : x1 / y1 == x2 / y2;
}