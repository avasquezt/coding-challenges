/**
 * Adds up the factorial of each number in the input array
 * @param {*} arr 
 * @returns 
 */
function sumFactorial(arr){
    let cache = [1];
    const max = Math.max(...arr);

    for(let i = 1; i <= max; i++){
      cache[i] = cache[i - 1] * i;
    }
    
    return arr.reduce((acc, n) => acc + cache[n], 0);
}