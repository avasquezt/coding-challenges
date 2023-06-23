/**
 * Calculates the divisors of the input number
 * @param {number} integer 
 * @returns {number | string}
 */
function divisors(integer) {
  let divs = [];
  for(let i = 2; i <= integer / 2; i++){
    if(integer % i == 0) divs.push(i);
  }
  return divs.length ? divs : integer + ' is prime';
};