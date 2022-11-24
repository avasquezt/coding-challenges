function mobius(n){
    let p = 0;
  
    // Handling 2 separately
    if (n % 2 == 0){
      n /= 2;
      p++;
  
      // If 2^2 also divides N
      if (n % 2 == 0)
          return 0;
    }
  
    // Check for all other prime factors
    for (let i = 3; i <= Math.sqrt(n); i += 2){
        // If i divides n
        if (n % i == 0){
            n /= i;
            p++;
  
            // If i^2 also divides N
            if (n % i == 0)
                return 0;
        }
    }
  
    return (p % 2 == 0)? -1 : 1;
  }