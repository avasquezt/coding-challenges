// Parameters:
//   a: first element of the Range
//   b: last element of the Range, inclusive

// Return:
//   Array with the sorted list of numbers in the range that are equal to the sum of their digits powered by the position in the number
//   Empty array if there are not numbers that meet the conditions

// Examples:
//   (1, 10) => [1, 2, 3, 4, 5, 6, 7, 8, 9]
//   (1, 100) => [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
//   (90, 100) => []

// Pseudocode
//   Loop from the first element to the last, checking each iteration if the sum of the digits is equal to the Number, this can be done by converting the number to an array and looping through it, calculating the sum of its digits at the power of their position in the array;

function sumDigPow(a, b) {
  let ans=[];
  for(let i = a; i <= b; i++){
    let sum = i.toString().split('').reduce((acc, n, j) => acc + n ** (j + 1), 0);
    if (sum == i){
      ans.push(i);
    }
  }
  return ans;
}

console.log(sumDigPow(1, 10));
console.log(sumDigPow(1, 100));
console.log(sumDigPow(90, 100));