function bell(n) {
  return Array.from(Array(n), (_, i) => ((i + 1) * (n - i))) 
}