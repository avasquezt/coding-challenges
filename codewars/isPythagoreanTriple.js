function isPythagoreanTriple(integers) {
    integers = integers.sort((a, b) => b - a);
    return integers[0] ** 2 == integers[1] ** 2 + integers[2] ** 2;
  }