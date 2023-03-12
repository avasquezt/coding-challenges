/**
 * Removes the string rotten from every element in the input array
 * @param {string[]} bagOfFruits 
 * @returns {string[]}
 */
function removeRotten(bagOfFruits){
    return bagOfFruits ? bagOfFruits.map(fruit => fruit.replace('rotten', '').toLowerCase()) : [];
}