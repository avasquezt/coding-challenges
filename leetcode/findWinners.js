/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
 var findWinners = function(matches) {
    let losses = {};
    for(const match of matches){
        losses[match[0]] = losses[match[0]] || 0;
        losses[match[1]] = 1 + (losses[match[1]] || 0) ;
    }
    let winners = [], lossers = [];
    for(const e in losses){
        if(losses[e] == 0){
            winners.push(+e);
        }else if(losses[e] == 1){
            lossers.push(+e);
        }
    }
    return [winners.sort((a, b) => a - b), lossers.sort((a, b) => a - b)];
};