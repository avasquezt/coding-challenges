function findSpecPartition(n, k, com){
    ans = [];
    if(com === 'min'){
      ans = Array(k - 1).fill(1);
      return [n-k+1,...ans];
    }else{
      for(let i = 0; i < k; i++){
        ans[i] = i < n % k ?  Math.ceil(n/k) : Math.floor(n/k);
      }
      return ans;
    }
  }