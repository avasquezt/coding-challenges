function sameCase(a, b){
  const regexLower = new RegExp(/^[a-z]$/);
  const regexUpper = new RegExp(/^[A-Z]$/);
  
  if(regexLower.test(a) && regexLower.test(b)){
    return 1;
  }else if((regexUpper.test(a) && regexUpper.test(b))){
    return 1;
  }else if (regexLower.test(a.toLowerCase()) && regexLower.test(b.toLowerCase())){
    return 0;
  }else{
    return -1;
  }
}



console.log(sameCase('a', 'b'));
console.log(sameCase('?', 'b'));
console.log(sameCase('a', '?'));
console.log(sameCase('?', '?'));