function betterThanAverage(classPoints, yourPoints) {
  return yourPoints >=classPoints.reduce((acum, point) => acum + point, yourPoints) / ++classPoints.length
}

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75))
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69))
console.log(betterThanAverage([2, 3], 5))