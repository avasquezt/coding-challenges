// Input:
//   n number to check
//   divisor: divisor number

// Output:
//   Number of possible divisions

// Examples:
//   6, 2 -> 2
//   100, 2 -> 6
//   2450, 5 -> 4
//   9999, 3 -> 8

// Pseudocode
//   Divide the number in a loop, discarding the decimal part, and iterating until the result is smaller than the divisor, using an accumulator to count the number of times  

const divisions = (n, divisor) => {
  let i = 0;
  while(n >= divisor){
    n = Math.floor(n / divisor);
    i++;
  };
  return i;
};

console.log(divisions(6, 2));
console.log(divisions(100, 2));
console.log(divisions(2450, 5));
console.log(divisions(9998, 3));