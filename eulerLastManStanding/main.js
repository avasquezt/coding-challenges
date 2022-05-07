function lastManStanding(n){
  let arr = Array.from({length: n}, (_, i) => i + 1)
  while (arr.length > 1){
    arr = arr.filter((_, i) => i !== 0 && i % 2 !== 0).reverse();
    console.log(arr);
  }
  return arr[0];
}