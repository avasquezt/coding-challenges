function dropWhile(arr, pred) {
  return span(arr,pred)[1];
}

function span(arr, predicate) {
  let i = arr.findIndex(element => !predicate(element)) >= 0 ? arr.findIndex(element => !predicate(element)) : arr.length;
  return [ arr.slice(0, i), arr.slice(i)]
}