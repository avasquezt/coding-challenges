/**
 * Calculates how many products can be made with the available ingredients following the input recipe
 * @param {object} recipe 
 * @param {object} available 
 * @returns {number} 
 */
function cakes(recipe, available) {
  let cakes = Infinity;
  for(const ingredient in recipe){
    cakes = Math.min(cakes, Math.floor((available[ingredient] || 0) / recipe[ingredient]));
  }
  return cakes;
}