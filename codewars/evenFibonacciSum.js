function fibonacci(max) {
    let a = 0, b = 1, sum = 0;
    while(b + a < max){
      [a, b] = [b, a + b];
      sum += (b % 2 == 0 ? b : 0);
    }
    return sum;
}