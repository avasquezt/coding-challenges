/**
 * Checks if the input segment crosses more than one quadrant
 * @param {Coord} A 
 * @param {Coord} B 
 * @returns 
 */
function quadrant_segment(A, B) {
    return Math.sign(A.x) != Math.sign(B.x) || Math.sign(A.y) != Math.sign(B.y);
}