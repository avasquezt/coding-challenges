/**
 * For each query, checks if there is a path between the nodes such that each edge on the path has a distance strictly less than the input limit
 * @param {number} n
 * @param {number[][]} edgeList
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var distanceLimitedPathsExist = function(n, edgeList, queries) {
    const graph = Array(n).fill().map(_ => Array(n).fill(0));
    for(const [s, dest, dist] of edgeList){
        graph[s][dest] = graph[s][dest] ? Math.min(graph[s][dest], dist) : dist;
        graph[dest][s] = graph[dest][s] ? Math.min(graph[dest][s], dist) : dist;
    }

    function dfs(node, target, distance, visited){
        if(node == target) return true;
        if(!visited.has(node)){
            visited.add(node);
            return graph[node].some((e, i) => e && e < distance && dfs(i, target, distance, visited));
        }else{
            return false;
        }
    }

    return queries.map(e => dfs(...e, new Set()));
};