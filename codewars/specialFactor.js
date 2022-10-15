function sc(n){
    let ans = [];
    for (let i = 1; i <= Math.floor(n/2); i++){
      if( !(n % i) && n.toString(2).includes(i.toString(2))){
        ans.push(i);
      }
    }
    return ans.concat(n);
  }