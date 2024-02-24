/**
 * Calculates the result of x to the power of n
 * @param {number} x 
 * @param {number} n 
 * @returns {number}
 */

function numberToPower(x, n){
  
    if (n < 0){
        x =  1 / x;
        n = -n;
    }

    if (n == 0) return 1;

    let y = 1;
    while (n > 1){
        if (n % 2 == 0){
        x *= x;
        n /= 2;
        }else{
        y *= x;
        x *= x;
        n = (n - 1) / 2;
        }
    }

    return x * y;

}

function power(x,y){
    let r = 1;
    for(let i = 0; i < y; i++) r *= x;
    return r;
}