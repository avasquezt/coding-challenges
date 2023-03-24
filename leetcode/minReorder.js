/**
 * Calculates the number of routes redirections needed so all routes point to node 0
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    const graph = Array.from(Array(n), _ => []);
    const visited = new Set();

    for(const [s, d] of connections){
      graph[s].push([d, true]);
      graph[d].push([s, false]);
    }

    let changes = 0;

    traverse(0);

    function traverse(source, forward = false){
      if(!visited.has(source)){
        if(forward) changes++;
        visited.add(source);
        for(const [node, dir] of graph[source]){
          traverse(node, dir);
        }
      }

    }

    return changes;
};