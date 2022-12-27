/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function(capacity, rocks, additionalRocks) {
    const available = capacity.map((n, i) => n - rocks[i]);
    available.sort((a, b) => a - b);
    let count = 0;
    for(const n of available){
        if(n > additionalRocks) break;
        additionalRocks -= n;
        count++;
    }
    return count;
};