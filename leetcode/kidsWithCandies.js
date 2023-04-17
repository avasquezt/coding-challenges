/**
 * Returns an array with the elements that are bigger that maximum element after adding the input number
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const max = Math.max(...candies);
    return candies.map(n => n + extraCandies >= max);
};