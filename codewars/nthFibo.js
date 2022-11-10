function nthFibo(n) {
    let sequence = [0,1];
    for(let i = 2; i < n; i++){
      sequence[i] = sequence[i - 2] + sequence[i - 1];
    }
    return sequence[n - 1];
  }