/**
 * Sorts the two input arrays without duplicates
 * @param {number[]} a 
 * @param {number[]} b 
 * @returns {number[]}
 */
function mergeArrays(a, b) {
    let idxA = 0;
    let idxB = 0;
    const ans = [];
    while(idxA < a.length && idxB < b.length){
      let n;
      if(a[idxA] < b[idxB]){
        n = a[idxA];
        idxA++;
      }else{
        n = b[idxB];
        idxB++;
      }
      insert(ans,n);
    }
    while(a.length - idxA){
      insert(ans, a[idxA]);
      idxA++;
    }
    while(b.length - idxB){
      insert(ans, b[idxB]);
      idxB++;
    }
    
    return ans;
    
    function insert(arr, n){
      if(n != arr.at(-1)){
        arr.push(n);
      }
    }
  }
  