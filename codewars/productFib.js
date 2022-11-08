function productFib(prod){
    let fib = [0, 1];
    while(fib[fib.length - 2] * fib[fib.length - 1] < prod){
      fib.push(fib[fib.length - 2] + fib[fib.length - 1]);
    }
    return [fib[fib.length - 2], fib[fib.length - 1], fib[fib.length - 2] * fib[fib.length - 1] == prod];
  }