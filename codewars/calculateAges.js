/**
 * Calculates the ages with the input sum and difference
 * @param {number} sum 
 * @param {number} difference 
 * @returns {number[]|null}
 */
function getAges(sum,difference){
  return sum >= 0 && difference >= 0 && sum >= difference ? [(sum + difference) / 2 ,(sum - difference) / 2] : null;
};