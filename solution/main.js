function solution(str, ending){
  return str.endsWith(ending)
}

//return str.substr(str.length-ending.length, ending.length) == ending;

console.log(solution('abcde', 'cde'))
console.log(solution('abcde', 'abc'))