function span(arr, predicate) {
  let i = arr.findIndex(element => !predicate(element)) >= 0 ? arr.findIndex(element => !predicate(element)) : arr.length;
  return [ arr.slice(0, i), arr.slice(i)]
}

function isEven(x) {
  return Math.abs(x) % 2 === 0;
}

function isOdd(x) {
  return Math.abs(x) % 2 !== 0;
}

function tr() { return true; }

var arr1 = [2,4,6,1,4,8];
var arr2 = [1,4,5,7,6];
var arr3 = [13,17,19,11,21];

console.log(span(arr1, isEven));
console.log(span([], tr));