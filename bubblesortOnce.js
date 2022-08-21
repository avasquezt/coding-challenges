function bubblesortOnce(a) {
    let ans = a.slice();
    ans.slice(1).forEach((n,i) =>{
      if (ans[i] > n){
        ans[i + 1] = ans[i];
        ans[i] = n;
      } 
    })
    return ans;
  }