function solution(n, b) {
  let ans = [];
  for (let i = 1; i < 2 ** n; i++){
    if( (i & b) === b){
      ans.push(i);
    }
  }
  return b ? ans : [];
}
