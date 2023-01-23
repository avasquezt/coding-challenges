/**
 * Finds the element in the input array that is trusted by all the others elements, but trusts none else
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {

    if(n == 1 && !trust.length) return 1;

    let trustCount = [];
    let judge;
    let trustees = {};

    for(const [a, b] of trust){
        trustCount[b] = 1 + (trustCount[b] || 0);
        trustees[a] = 1 + (trustees[a] || 0);
    }

    for(let i = 1; i <= n; i++){
        if (trustCount[i] == n - 1 && !trustees[i]){
            if(!judge){
                judge = i;
            }else{
                return -1;
            }
        }
    }
    return judge || -1;
};


// var findJudge = function(n, trust) {
//     let scores = new Array(n+1).fill(0);
//      trust.forEach(pair => {
//          scores[pair[0]]--;
//          scores[pair[1]]++;
//      });
//      for (let i = 1; i <= n; i++) {
//          if (scores[i] == n - 1) return i;
//      }
//      return -1; 
//  };