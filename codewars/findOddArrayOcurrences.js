function findOdd(A) {
    let ocurrences = A.reduce((acc, n) => (acc[n] = acc[n]  + 1 || 1, acc), {});
    for (let key in ocurrences){
      if (ocurrences[key] % 2 !== 0) return Number(key); 
    }
  }