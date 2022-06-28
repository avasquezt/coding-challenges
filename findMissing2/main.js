function find(seq) {
  let min = seq[0];
  let max = seq[0];
  let total = 0;
  for (let j = 0; j < seq.length; j++){
    total += seq[j];
    if (min > seq[j]) min = seq[j];
    if (max < seq[j]) max = seq[j];
  }
  let n = seq.length + 1;
  let i = Math.ceil((max - min)/ (n - 1));
  return min * n + n * i *((n - 1 )/ 2) - total;
}