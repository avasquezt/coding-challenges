/**
 * Calculates the minimum distance of a road in the input path from node 1 to n
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function(n, roads) {

    const graph = Array(n + 1).fill().map(_ => []);
    
    for(const [s, d, dist] of roads){
        graph[s].push([d, dist]);
        graph[d].push([s, dist]);
    }

    let min = Infinity;
    let visited = new Set();

    let queue = [1];
    visited.add(1);

    while(queue.length){
        const curr = queue.shift();
        for(const [d, dist] of graph[curr]){
            if(dist < min) min = dist;
            if(visited.has(d)) continue;
            visited.add(d);
            queue.push(d);
        }
    }

    return min;
};