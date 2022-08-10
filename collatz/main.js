function collatz(n, i = 1){
  return n % 2 == 0 ? collatz(n / 2, ++i) : n !== 1 ? collatz(n * 3 + 1, ++i) : i;
}