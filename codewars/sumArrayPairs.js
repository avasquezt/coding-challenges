/**
 * Returns the first couple of values from the input array that add up to the requested number
 * @param {number[]} ints 
 * @param {number} s 
 * @returns {number[]}
 */

function sumPairs(ints, s) {
    const cache = new Map();
    for(let i = 0; i < ints.length; i++){
        if(cache.has(s - ints[i])){
            return [s - ints[i], ints[i]];
        }else{
            cache.set(ints[i], true);
        }
    }
    return undefined;
}