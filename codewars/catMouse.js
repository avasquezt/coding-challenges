/**
 * Checks if the cat can catch the mouse from its current position in the input string
 * @param {string} x 
 * @param {number} j 
 * @returns {string}
 */
function catMouse(x, j){
    pos = {C: undefined, D: undefined, m: undefined};
    for(let i = 0; i < x.length;i++){
      if('CDm'.includes(x[i])){
        pos[x[i]] = i;
      }
    }
    const dist = Math.abs(pos['C'] - pos['m']) - 1;
    
    if(Number.isNaN(dist) || pos['D'] == null) return 'boring without all three';
    if(dist > j) return 'Escaped!';
    if(pos['D'] > Math.min(pos['C'], pos['m']) && pos['D'] < Math.max(pos['C'], pos['m'])) return 'Protected!';
    return 'Caught!';
}