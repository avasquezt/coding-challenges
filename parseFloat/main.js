function parseF(s) {
  console.log(s);
  return Number.isNaN(Number(String(s))) ? null : Number(s);
}