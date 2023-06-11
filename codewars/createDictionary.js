/**
 * Builds a dictionary with the input keys and values
 * @param {string} keys 
 * @param {number} values 
 * @returns {object}
 */
function createDict(keys, values){
    return keys.reduce((dir, key, i) => ({...dir, [key]: values[i] ?? null}), {});
}