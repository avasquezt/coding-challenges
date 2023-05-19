/**
 * Finds the smallest set of vertices from which all nodes in the input graph are reachable
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
    const seen = new Set();
    const ans = [];
    for(const [_, n] of edges){
        seen.add(n);
    }
    for(let i = 0; i < n; i++){
        if(!seen.has(i)) ans.push(i);
    }
    return ans;
};