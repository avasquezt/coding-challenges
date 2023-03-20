/**
 * Converts the input text to Pilot's alphabet (NATO phonetic alphabet)
 * @param {string} words 
 * @returns {string}
 */
function to_nato(words) {
	return words.replace(/./g, char => /[a-z.!,?]/ig.test(char) ? (NATO[char.toLowerCase()] || char) + ' ' : '').trim();
}