function find_average(array) {
  return array.reduce((acc, elem) => acc + elem, 0) / (array.length || 1);
}

console.log(find_average([]));