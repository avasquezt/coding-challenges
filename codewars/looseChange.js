/**
 * Calculates the number of coins needed to make up the input amount
 * @param {number} cents 
 * @returns {object}
 */
function looseChange(cents){
    const coins = ['Quarters', 'Dimes', 'Nickels', 'Pennies'];
    const values = [25, 10, 5, 1];
    const ans = {};
    for(let i = 0; i < coins.length; i++){
      const val = Math.max(Math.trunc(cents / values[i]), 0);
      cents -= val * values[i];
      ans[coins[i]] = val;
    }
    return ans;
}