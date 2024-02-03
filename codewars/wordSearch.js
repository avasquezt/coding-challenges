/**
 * Returns all strings in the input array that contain the requested query
 * @param {string} query 
 * @param {string[]} seq 
 * @returns {string[]}
 */
function wordSearch(query, seq){
    const ans = seq.filter(s => new RegExp(query, 'i').test(s));
    return ans.length ? ans : ['Empty'];
}