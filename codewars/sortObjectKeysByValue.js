/**
 * Filters and returns an array with the input object's keys sorted by their value
 * @param {object} results 
 * @returns {string[]}
 */
function myLanguages(results) {
    return Object.keys(results).filter(key=>results[key]>=60).sort((a,b)=>results[b] - results[a]);
}