function getDivisorsCnt(n){
  let ans = 1;
  for(let i = 1; i <= Math.floor(n / 2); i++){
    if(n % i === 0){
      ans++;
    }
  }
return ans;
}