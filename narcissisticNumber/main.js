function isNarcissistic(n){
  return `${n}`.split('').reduce((acc, a, i ,arr) => acc + Number(a) ** arr.length, 0) === n
}

console.log(isNarcissistic(153));