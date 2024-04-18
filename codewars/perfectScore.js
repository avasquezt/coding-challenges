/**
 * Checks if all the answers in the input string are correct or incorrect
 * @param {string[]} key 
 * @param {string[]} answers 
 * @returns {boolean}
 */
function possiblyPerfect(key,answers) {
    return key.every((k, i) => k == answers[i] || k == '_') || key.every((k, i) => k != answers[i] || k == '_');
}