/**
 * Calculates the stationary sum of the remainder of the Rule of Divisibility by 13 
 * @param {number} n 
 * @returns {number}
 */
function thirt(n) {
    let prev;
    const remainders = [1, 10, 9, 12, 3, 4];
    do{
      prev = n;
      n = String(n).split('').reduceRight((acc, e, i, arr) => acc += e * remainders[(arr.length - 1 - i) % 6], 0);
    }while(prev !== n);
    return n;
}