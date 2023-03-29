/**
 * Checks if there is a path between the input nodes
 * @param {node} a 
 * @param {node} b 
 * @returns {boolean}
 */
// a and b are of type Node
// return whether there is a route from a to b
function getRoute(a, b) {

    const queue = [...a.edges];
    const visited = new Set();
    
    while(queue.length){
      
        const curr = queue.shift();
        
        if(!visited.has(curr)){
            visited.add(curr);
            
            if(curr === b){
                return true;
            }
            
            queue.push(...curr.edges);
        }
    }
    
    return false;
  }