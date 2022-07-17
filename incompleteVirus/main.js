// Parameters:
//   n: int, positive

// Return:
//   number of characters written

// Examples:
//   10 => 2
//   20 => 3
//   72 => 3
//   100 => 4
//   101 => 5
//   102 => 5
//   1000000000000000000 => 262144

// Pseudocode:
//   Detect if any characater in the number has a value bigger than 1
//   If there are values bigger than 1, replace all the digits following the value for 1's
//   Convert the resulting number to decimal and return it

function incompleteVirus(n) {
  n = String(n);
  console.log(n);
  let m = n.split('').findIndex(i => i > 1);
  if(m != -1){
    n = n.slice(0, m).padEnd(n.length, '1')
  }
  console.log(m, n);
  return parseInt(n, 2);
}

console.log(incompleteVirus(10));
console.log(incompleteVirus(20));
console.log(incompleteVirus(100));
console.log(incompleteVirus(102));
console.log(incompleteVirus(120));