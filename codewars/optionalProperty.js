/**
 * Builds a text with the optional property in the input string
 * @param {Object[]} capitals 
 * @returns {string[]}
 */
function capital(capitals){
    return capitals.map(e => `The capital of ${e.state || e.country} is ${e.capital}`);
}