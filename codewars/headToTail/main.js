function fixTheMeerkat(arr) {
  return [arr[arr.length - 1], ...arr.slice(1, arr.length -1), arr[0]] 
 }

 const fixTheMeerkat = ([tail, body, head]) => [head, body, tail]