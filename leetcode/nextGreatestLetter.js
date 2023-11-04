/**
 * Returns the smallest character in letters that is lexicographically greater than target
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    if(letters.at(-1) <= target) return letters[0];
    
    let left = 0;
    let right = letters.length - 1;
    while(left < right){
        const mid = left + Math.trunc((right - left) / 2);
        if(letters[mid] > target) right = mid;
        else left = mid + 1;
    }
    return letters[left];
};