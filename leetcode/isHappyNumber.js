/**
 * Checks if the input is a happy number
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const seen = new Set();
    while(n != 1 && !seen.has(n)){
        seen.add(n);
        let acum = 0;
        for(let i = 0; i <= Math.log10(n); i++){
            acum += (Math.trunc(n / 10 ** i) % 10) ** 2;
        }
        n = acum;
    }
    return n == 1;
};
