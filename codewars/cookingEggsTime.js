/**
 * Calculates the time it takes to boil the input number of eggs
 * @param {number} eggs 
 * @returns {number}
 */
function cookingTime(eggs) {
    return Math.ceil(eggs / 8) * 5;
}