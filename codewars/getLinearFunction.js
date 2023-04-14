/**
 * Calculates the linear function that satisfies the input array
 * @param {number[]} sequence 
 * @returns {string}
 */
function getFunction(sequence) {
    const m = sequence[0];
    const n = sequence[1] - m;

    if(sequence.some((e, i) => e != n * i + m)) return 'Non-linear sequence';

    let ans = 'f(x) = ';
    if(n){
      if(Math.abs(n) == 1){
        ans += n < 0 ? '-' : '';
      }else{
        ans += n;
      }
      ans += 'x';
      if(m){
        ans += (m < 0 ? ' - ': ' + ') + Math.abs(m);
      }
    }else{
      ans += m;
    }
    
    return ans;
}