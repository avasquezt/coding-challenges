function xor(a, b) {
  return (a || b) && (a !== b);
}


const sxore = function(n){
  let acc = 0;
  for(let i = 2 ** (n.toString(2).length - 1); i <= n; i++){
    acc ^= i;
  }
  return acc;
}

console.log((2).toString(2));
console.log((3).toString(2));
console.log((2^3).toString(2));


console.log(sxore(0));
console.log(sxore(1));
console.log(sxore(2));
console.log(sxore(5));
console.log(sxore(50));
console.log(sxore(1000000));