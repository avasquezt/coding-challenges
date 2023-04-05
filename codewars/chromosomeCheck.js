/**
 * Determines the sex of the offspring based in the input chromosome string
 * @param {string} sperm 
 * @returns {string}
 */
function chromosomeCheck(sperm) {
    return `Congratulations! You're going to have a ${sperm[1] == 'Y' ? 'son' : 'daughter'}.`
}