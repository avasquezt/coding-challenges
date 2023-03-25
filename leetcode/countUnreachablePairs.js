/**
 * Counts the number of unreachable pairs of nodes in the input graph
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */

var countPairs = function(n, edges) {
    const graph = Array.from(Array(n), _ => []);
    const visited = new Set();
    
    for(const [s, d] of edges){
        graph[s].push(d);
        graph[d].push(s);
    }
  
    let remainingNodes = n;
    let total = 0;
    
    for(let node = 0; node < n; node++){
      if(!visited.has(node)){
        const queue = [node];
        let count = 0;
        while(queue.length){
            let curr = queue.shift();
            if(!visited.has(curr)){
              count++;
              visited.add(curr);
              for(const d of graph[curr]){
                  if(!visited.has(d)) queue.push(d);
              }
            }
        }
        remainingNodes -= count;
        total += count * remainingNodes;
      }
    }
  
    return total;
    
};