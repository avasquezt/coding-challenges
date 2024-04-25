/**
 * Calculates the summation of the input number
 * @param {number} n 
 * @returns {number}
 */
function frogContest(n) {
    const n1 = summation(n);
    const n2 = summation(Math.trunc(n1 / 2));
    return `Chris ate ${n1} flies, Tom ate ${n2} flies and Cat ate ${summation(n1 + n2)} flies`;
    
    function summation(n){
      return n * (n + 1) / 2;
    }
}