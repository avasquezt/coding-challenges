function zeroAndOne(s) {
  let length = 0;
  for(let i = 0; i < s.length; i++){
    +s[i] + +s[i + 1] === 1 ? i++ : length++;
    }
  return length;
}


// function zeroAndOne(s) { return s.replace(/(01|10)*/g, '').length }

// function zeroAndOne(s) {
//   //coding and coding..
//   return s.split(/01|10/).join("").length;  
// }