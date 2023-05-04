/**
 * Calculates the output of the round-based voting process
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    let stack = [];
    for(let i = 0; i < senate.length; i++){
        if(!stack.length){
            stack.push(senate[i]);
        }else if(stack.at(-1) == senate[i]){
            stack.push(senate[i]);
        }else{
            senate += stack.pop();
        }
    }
  
    return senate.at(-1) == 'D' ? 'Dire' : 'Radiant';
  };