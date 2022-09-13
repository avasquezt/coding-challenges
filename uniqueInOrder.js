var uniqueInOrder=function(iterable){
    let ans = [];
    for (const x of iterable) {
      if(ans.slice(-1) != x){
        ans.push(x);
      }
    }
    return ans;
  }