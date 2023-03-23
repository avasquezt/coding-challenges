/**
 * Calculates the number of connections that need to be swapped to connect all the computers in the input network
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function(n, connections) {
    if(connections.length < n - 1) return -1;
    const graph = Array.from(Array(n), _ => []);
    const visited = Array(n).fill(false);

    for(const [s, d] of connections){
      graph[s].push(d);
      graph[d].push(s);
    }

    let subnets = 0;
    for(const node in graph){
      if(!visited[node]){
        traverse(node);
        subnets++;
      }
    }

    return subnets - 1;

    function traverse(sourceNode){
      visited[sourceNode] = true;
      for(const node of graph[sourceNode]){
        if(!visited[node]) traverse(node);
      };
    }
};