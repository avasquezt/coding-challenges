function sumTwoSmallestNumbers(numbers) {  
  //Code here
  let min = Math.min(...numbers);
  numbers.splice(numbers.indexOf(min), 1);
  let min2 = Math.min(...numbers);
  return min + min2;
}


// function sumTwoSmallestNumbers(numbers) {  
//   var [ a, b ] = numbers.sort((a, b) => a - b)
//   return a + b
// }

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]))
