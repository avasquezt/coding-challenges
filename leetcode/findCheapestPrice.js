/**
 * Finds the cheapest route from src to dst with less than K Stops
 * @param {number} n 
 * @param {number[]} flights 
 * @param {number} src 
 * @param {number} dst 
 * @param {number} k 
 * @returns {number}
 */

function findCheapestPrice(n, flights, src, dst, k) {
    let dist = Array(n).fill(Infinity);
    dist[src] = 0;

    for(let i = 0; i <= k; i++){
        const temp = dist.slice();

        for(const flight of flights){
            if(dist[flight[0]] != Infinity){
                temp[flight[1]] = Math.min(temp[flight[1]], dist[flight[0]] + flight[2]);
            }
        }
        dist = temp;
    }
    return dist[dst] != Infinity ? dist[dst] : -1;
};

console.log(findCheapestPrice(4, [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], 0, 3, 1));
console.log(findCheapestPrice(3, [[0,1,100],[1,2,100],[0,2,500]], 0, 2, 1));
console.log(findCheapestPrice(3, [[0,1,100],[1,2,100],[0,2,500]], 0, 2, 0));