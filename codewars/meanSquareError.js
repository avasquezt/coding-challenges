var solution = function(firstArray, secondArray) {
    return firstArray.reduce((diff, n, i) => diff += (n - secondArray[i]) ** 2, 0) / firstArray.length;
  }