/**
 * Returns the longest string, consisting of k consecutive elements taken from the input array
 * @param {string[]} strarr 
 * @param {number} k 
 * @returns {string}
 */
function longestConsec(strarr, k) {
    if (k < 0 || k > strarr.length) return '';
    let ans = '';
    for(let i = 0; i < strarr.length; i++){
        const curr = strarr.slice(i, i + k).join('');
        if(curr.length > ans.length){
            ans = curr;
        }
    }
    return ans;
}