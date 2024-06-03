/**
 * Replaces all occurrences of an item in the input array with another
 * @param {*} seq 
 * @param {*} find 
 * @param {*} replace 
 * @returns {*}
 */
function replaceAll(seq, find, replace) {
    return Array.isArray(seq) ? seq.map(n => n == find ? replace : n) : seq.replaceAll(find, replace);
}