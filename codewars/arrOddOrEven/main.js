function oddOrEven(array) {
  return array.reduce((acc,n) => acc + n, 0) % 2 == 0 ? 'even' : 'odd';
}