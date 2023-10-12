/**
 * Calculates the minimum number of steps required to open the input lock
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    const seen = new Set(deadends);
    const queue = new Queue();
    if(seen.has('0000')) return -1;
    queue.push('0000');
    seen.add('0000');
    for(let steps = 0; !queue.isEmpty(); steps++){
        for(let i = queue.size(); i > 0; i--){
            const s = queue.pop();
            if(s == target) return steps;
            for(const neighbor of neighbors(s)){
                if(seen.has(neighbor)) continue;
                seen.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
    return -1;
    
    function neighbors(s){
        const result = [];
        for(let i = 0; i < 4; i++){
            const n = Number(s.at(i))
            for(let j = -1; j <= 1; j+=2){
                const y = (n + 10 + j) % 10;
                result.push(s.slice(0,i) + y + s.slice(i + 1));
            }
        }
        return result;
    }
};