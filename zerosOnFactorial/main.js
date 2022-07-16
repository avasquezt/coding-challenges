// Calculate the number of trailing zeros on factorial 

// Parameters:
//   n: number, integer, positive

// Return:
//   number, integer, positive

// Examples:
//   0 => 0
//   6 => 1
//   12 => 2
//   5 => 1
//   30 => 7

// Pseudocode:
//   Calculate the factorial, counting the trailing zeroes, and only keep the last digit of the number before the trailing zeroes, using modulus 
//   Calculate the number of multiples of 5 in the number

// function zeros (n) {
//   let ans = 0;
//   for (let i = 1, fact = 1; i <= n; i++){
//     fact *= i;
//     if (fact % (10 ** (ans + 1)) == 0){
//       ans++;
//     }
//     fact %= (10 ** (ans + 1));
//   }
//   return ans;
// }


function zeros(n){
  let ans = 0;
  while(n / 5 >= 1){
    n /= 5;
    ans += Math.floor(n);
  }
  return ans;
}

console.log(zeros(0));
console.log(zeros(4));
console.log(zeros(5));
console.log(zeros(6));
console.log(zeros(12));
console.log(zeros(20));
console.log(zeros(25));
console.log(zeros(30));