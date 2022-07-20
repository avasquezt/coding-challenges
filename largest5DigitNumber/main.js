function solution(digits){
  let ans = 0;
  for(let i = 0; i <= digits.length - 5; i++){
    if(Number(digits.slice(i, i + 5)) > ans){
      ans = digits.slice(i, i + 5);
    }
  }
  return Number(ans);
}