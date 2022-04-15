function isPalindrome(x) {
  for(let i = 0; i < Math.floor(x.length/2); i++){
    if(x[i].toLowerCase() !== x[x.length-1-i].toLowerCase()) return false;
  }
  return true;
}