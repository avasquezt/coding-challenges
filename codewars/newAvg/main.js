function newAvg(arr, newavg) {
  const avg = arr.reduce((acc, n) => acc + n, 0);
if (avg / arr.length > newavg) {
  throw new Error('Expected New Average is too low');
} 
return Math.ceil((newavg * ++arr.length) - avg);
}