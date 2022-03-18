function isIsogram(str){
  for(let i = 0; i < str.length ; i++){
     if (str.toLowerCase().indexOf(str[i].toLowerCase()) !== i) return false;
  }
  return true;
}

// function isIsogram(str){
//   return new Set(str.toUpperCase()).size == str.length;
// }

console.log(isIsogram("Dermatoglyphics"))
console.log(isIsogram("moOse"))