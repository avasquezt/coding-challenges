multiplicationTable = function(size) {
    return Array.from(Array(size), (_, i) => Array.from(Array(size), (_, j) => (i + 1) * (j + 1)));
  }