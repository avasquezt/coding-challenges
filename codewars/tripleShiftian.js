/**
 * Calculates the requested term of the Triple Shiftian sequence
 * @param {number[]} base 
 * @param {number} n 
 * @returns {number}
 */
function tripleShiftian(base,n){
  let arr = base;
  for(let i = 3; i <= n; i++){
    const n =  4 * arr[2] - 5 * arr[1] + 3 * arr[0];
    [arr[0], arr[1], arr[2]] = [arr[1], arr[2], n];
  }
  return arr[Math.min(2, n)];
}