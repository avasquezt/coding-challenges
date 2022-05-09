function score(n){
  return n ? n | 2 ** n.toString(2).length - 1 : 0;
}

// function score(n){
//   let i = 1;
  
//   while (i < n) {
//     n |= i;
//     i = i << 1;
//   }
  
//   return n;
// }