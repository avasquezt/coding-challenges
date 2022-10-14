function bingo(a) {
  console.log(a)
  return [2,9,14,7,15].every(char => a.includes(char)) ? 'WIN' : 'LOSE';
}