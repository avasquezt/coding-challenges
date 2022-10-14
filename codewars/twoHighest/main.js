function twoHighest(arr) {
  return [...(new Set(arr.sort((a,b) => a - b).reverse()))].slice(0,2);
}