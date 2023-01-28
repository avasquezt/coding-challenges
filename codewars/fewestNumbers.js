/**
 * Calculates the minimum number of elements, from 0 to n, so all the numbers from 1 to n can be calculated by adding and subtracting
 * @param {number} n 
 * @returns {number}
 */

function fewestNumbers(n){
    let i = 0;
    for(acc = 0; acc < n; i++){
      acc += 3 ** i;
    }
    return i;
}

// function fewestNumbers(n){
//     return Math.ceil(Math.log(2 * n) / Math.log(3))
// }