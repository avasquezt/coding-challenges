function sumEvenNumbers(input) {
    return input.reduce((acc, n) => acc += n % 2 ? 0 : n, 0);
  }
  