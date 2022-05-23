function minSum(arr) {
  let result = [];
  arr.sort((a,b) => a - b);
  let n = arr.length;
  for(let i = 0; i < n / 2; i++){
     result.push( arr.shift() * arr.pop());
  }
  return result.reduce((acc, n) => acc + n, 0);
}


// const minSum = arr => arr.sort((a, b) => a - b).reduce((pre, val) => pre + val * arr.pop(), 0);