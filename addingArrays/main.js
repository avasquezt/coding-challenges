function arrAdder(arr) {
  return arr[0].map((ar, index) => arr.reduce((acc, _, j) => acc + arr[j][index], '')).join(' ');
}

console.log(arrAdder([
  ['J','L','L','M'],
  ['u','i','i','a'],
  ['s','v','f','n'],
  ['t','e','e','']
  ]));