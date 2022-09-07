function findUniq(arr) {
    for(let i = 0, ans = {}, flag = false; i < arr.length; i++){
      ans[arr[i]] = (ans[arr[i]] + 1) || 1;
      if(ans[arr[i]] > 1 || flag){
        flag = true;
        for(let key in ans){
          if (ans[key] == 1) return Number(key);
        } 
      }
    }
  }
  