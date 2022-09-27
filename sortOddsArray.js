function sortArray(array) {
    let m = 0, odds = array.filter(n => n % 2).sort((a, b) => a - b);
    return array.map(n => (n % 2 ? odds[m++] : n));
  }

console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
console.log(sortArray([5, 3, 2, 8, 1, 4]));