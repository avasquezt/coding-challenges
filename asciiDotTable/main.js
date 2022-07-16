function dot(n,m){
  ans = ''
  for(let i = 0, curr; i < m; i++){
    curr = ['', ''];
    for(let j = 0; j < n; j++){
      curr[0] += '+---';
      curr[1] += '| o ';
    }
    curr[0] += '+';
    curr[1] += '|';
    ans += curr.join('\n') + '\n';
  }
  return ans + '+---'.repeat(n) + '+';
}