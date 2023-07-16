/**
 * Counts the ocurrences of each vegetable in the input string
 * @param {string} string 
 * @returns {[number, string][]}
 */
function countVegetables(string){
  const vegetables = new Set(["cabbage", "carrot", "celery", "cucumber", "mushroom", "onion", "pepper", "potato", "tofu", "turnip"]);
  let inventory = {};
  for(const e of string.split(' ')){
    if(vegetables.has(e)){
      inventory[e] = (inventory[e] || 0) + 1;
    }
  }
  return Object.entries(inventory).sort((a, b) => b[1] - a[1] || b[0].localeCompare(a[0])).map(e => [e[1], e[0]]);
}