function estSubsets(arr) {
    arr = Array.from(new Set(arr)); 
    return Math.round(arr.reduce((acc, n, i) => acc + factorial(arr.length) / (factorial(arr.length - (i + 1)) * factorial(i + 1)), 0));
}
                      
function factorial(n){
  let ans = 1, m = n;
  while(m > 1){
    ans *= m--;
  }
  return ans;
}

//  console.log(factorial(5));
//  console.log(factorial(0));
//  console.log(factorial(1));

console.log(estSubsets([1, 2, 3, 4]));