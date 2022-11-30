/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var uniqueOccurrences = function(arr) {
    let occ = new Map();
    for(const n of arr){
        occ.set(n, 1 +  (occ.get(n) || 0));
    }
    return (new Set(occ.keys())).size == (new Set(occ.values())).size
};