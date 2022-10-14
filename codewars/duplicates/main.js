function duplicates(array){
  let elements = new Set(array);
  acc = 0;
  for(let n of elements){
    acc += Math.floor(array.filter(m => m === n).length / 2);
  }
  return acc;
}