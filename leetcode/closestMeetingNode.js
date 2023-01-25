/**
 * Finds the closest code to the given two nodes in the directed graph
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
var closestMeetingNode = function(edges, node1, node2) {

    const distNode1= getDistances(node1);
    
    const distNode2 = getDistances(node2);
    
    function getDistances(node){

      const dist = {};
      let currentDist = 0;
      let currentNode = node;

      while(currentNode >= 0 && dist[currentNode] == undefined){
        dist[currentNode] = currentDist++;
        currentNode = edges[currentNode];
      }

      return dist;
    }

    let maxDistance = Infinity;
    let ans;

    for(let i = 0; i < edges.length; i++){
      if(distNode1[i] != undefined && distNode2[i] != undefined){
        if(maxDistance > Math.max(distNode1[i], distNode2[i])){
          maxDistance = Math.max(distNode1[i], distNode2[i]);
          ans = i;
        }
      }
    }

    return ans == undefined ? -1 : ans;
};

console.log(closestMeetingNode([2,2,3,-1], 0, 1));
console.log(closestMeetingNode([1,2,-1], 0, 2));

console.log(closestMeetingNode([1,2,3,-1,3], 0, 4));
console.log(closestMeetingNode([4,4,8,-1,9,8,4,4,1,1], 5, 6));
console.log(closestMeetingNode([4,4,4,5,1,2,2], 1, 1));