function reverse(string){
    return string.split(' ').reverse().join(' ');
  }

function reverse(string){
  let result = '';
  for(const char of string){
    result = char + result;
  }
  return result;
}

console.log(reverse('abcde'))