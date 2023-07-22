/**
 * Calculates the arithmetic sequence with the input parameters
 * @param {number} a 
 * @param {number} d 
 * @param {number} n 
 * @returns {string}
 */
function arithmeticSequenceElements(a, d, n) {
	return Array.from(Array(n), (_, i) => a + d * i).join(", ");
}