/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
 var guessNumber = function(n) {
    let ans = 1;
    let max = n, min = 0;
    while (ans !== 0){
        ans = guess(n);
        if (ans < 0){
            max = n;
            n = Math.ceil((min + max) / 2);
        }else if(ans > 0){
            min = n;
            n = Math.floor((min + max) / 2);
        }
    }
    return n;
};