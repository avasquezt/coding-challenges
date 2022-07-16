// Parameters:
//   func: array with a function
//   arr: array with numbers

// Return:
//   arr filtered using the anonymous function on func

// Examples
//   ([(a=>a%2==0),9,3,1,0],[1,2,3,4]) => [2,4]
//   ([9,3,(a=>a%2),1,0],[1,2,3,4]) => [1,3]

// Pseudocode:
//   Find the function on the func array using typeof
//   filter the second array using the function found

var FindFunction = function(func, arr) {
  return arr.filter(n => func.find(anonFunc => typeof anonFunc === 'function')(n));
}