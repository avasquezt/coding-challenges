function zeroPlentiful(arr){
    let ans = arr.map(n => n != 0 ? ',' : 0).join('').split(',').filter(n => n);
    return ans.every(e => e.length > 3) ? ans.length : 0;
  }

console.log(zeroPlentiful([1, 0, 0, 0, 0, 5, 4, 0, 0, 0, 0, 0]));
console.log(zeroPlentiful([0, 2, 0, 0, 0, 0, 3, 4, 5, 0, 0, 0, 0, 0]));
console.log(zeroPlentiful([3]));
console.log(zeroPlentiful([1000, 0, 1, 0, 0, 0, 0]));