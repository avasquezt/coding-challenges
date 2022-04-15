function sumMul(n,m){
  let result = 0;
  for(let i = n; i < m; i++){
    if (i % n === 0) result += i;
  }
  return m <= n ? 'INVALID' : result;
}