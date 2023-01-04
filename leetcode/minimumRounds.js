/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    const occ = {};
    for(const n of tasks){
        occ[n] = 1 + (occ[n] || 0);
    }
    let total = 0;
    for(const i in occ){
        if(occ[i] < 2){
            return -1;
        }
        total += Math.ceil(occ[i] / 3);
    }
    return total;
};