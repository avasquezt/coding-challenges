/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
 var numJewelsInStones = function(jewels, stones) {
    let result = new Map(), count = 0;
    for(const e of jewels){
        result.set(e, 0);
    }
    for(let i = 0; i < stones.length; i++){
        if(result.has(stones[i])){
            count++;
        }
    }
    return count;
};