function squares(x, n) {
    return n > 0 ? Array.from(Array(n), (_, i) => x ** (2 ** i)) : [];
  }