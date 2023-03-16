/**
 * Converts the camel cased input string into a kebab case
 * @param {string} str 
 * @returns {string}
 */
function kebabize(str) {
    return str.replace(/(^[^A-Za-z]*([A-Z]))|([^a-z])/g, (_ , $1, $2, $3) => ($2 ? $2.toLowerCase() : '') + (/[A-Z]/.test($3) ? '-' + $3.toLowerCase() : ''));
}