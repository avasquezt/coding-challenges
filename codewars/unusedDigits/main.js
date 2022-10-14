function unusedDigits(...num) {
  return [0,1,2,3,4,5,6,7,8,9].filter(n => !num.join("").includes(n)).join('');
}