/**
 * Converts the input string from PascalCase to snake_case notation
 * @param {string} string 
 * @returns {string}
 */
function toUnderscore(string) {
    return String(string).replace(/^./, c => c.toLowerCase()).replace(/[A-Z]/g, c => '_' + c.toLowerCase()); 
}