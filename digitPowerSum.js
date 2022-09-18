function digPow(n, p){
    let ans = String(n).split('').reduce((acc,n, i) => acc + Number(n) ** (p + i), 0) / n;
    return ans % 1 ? -1 : ans;
  }