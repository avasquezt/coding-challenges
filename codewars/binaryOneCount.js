/**
 * Checks if the input number has an even or odd number of 1's in its binary representation
 * @param {number} n 
 * @returns {string}
 */
function evil(n) {
    let count = 0;
    while(n > 0){
      count += n % 2;
      n = Math.floor(n / 2);
    }
    return count % 2 ? "It's Odious!" : "It's Evil!";
}