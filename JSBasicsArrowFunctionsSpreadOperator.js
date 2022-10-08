let shuffleIt = (arr, ...idxs) => {
    ans = arr.slice();
    for(let val of idxs){
      [ans[val[0]], ans[val[1]]] = [ans[val[1]], ans[val[0]]];
    };
    return ans;
  }