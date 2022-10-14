function padIt(str,n){
    let ans = str, i = 1;
    while(i <= n){
      str = '*'.repeat(i % 2) + str + '*'.repeat(++i % 2); 
    }
    return str;
  }