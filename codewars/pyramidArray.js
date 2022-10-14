function pyramid(n) {
    return Array.from(Array(n), (_, i) => Array(i + 1).fill(1));
  }