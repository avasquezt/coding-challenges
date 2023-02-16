/**
 * Repeats each character according to its position in the input string
 * @param {string} s 
 * @returns {string}
 */
function accum(s) {
	return s.split('').map((char, i) => char.toUpperCase() + char.toLowerCase().repeat(i)).join('-');
}