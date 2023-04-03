/**
 * Returns minimum and maximum age range from the input
 * @param {number} age 
 * @returns {string}
 */
function datingRange(age){
    const min = Math.floor(age < 14 ? age * 0.9 : age / 2 + 7);
    const max = Math.floor(age < 14 ? age * 1.1 :  (age - 7) * 2);
    return min + '-' + max;
}