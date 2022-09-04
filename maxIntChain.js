function maxIntChain(n) {
    let m = (Math.floor(n / 2) + 1)
    return  n < 5 ? -1 : m * (n - m)
  }