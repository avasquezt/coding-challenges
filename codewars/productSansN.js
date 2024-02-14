/**
 * Maps each number in the input array to the product of the original array, except for the number
 * @param {number[]} numbers 
 * @returns {bigint[]}
 */
function productSansN(numbers) {
    let zeroes = 0;
    let product = 1n;
    for(const n of numbers){
      if(n == 0){
        if(zeroes > 0){
          product = 0n;
          break;
        }else{
          zeroes++;
        }
      }else{
        product *= BigInt(n);
      }
    }
    return numbers.map(n => n == 0 ? product : zeroes > 0 ? 0n : product / BigInt(n));
  }