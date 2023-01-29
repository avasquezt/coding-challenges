/**
 * Converts dash/underscore delimited words into camel casing
 * @param {string} str 
 * @returns {string}
 */

function toCamelCase(str){
    return str.replace(/([_-])(.)/g, (a,b,c) => c.toUpperCase());
}

// function toCamelCase(str){
//     return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
// }