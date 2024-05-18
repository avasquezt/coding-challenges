/**
 * Returns the weekday according to the input number
 * @param {number} num 
 * @returns {string}
 */
function whatday(num) { 
    const DAYS = {1: 'Sunday', 2: 'Monday', 3: 'Tuesday', 4: 'Wednesday', 5: 'Thursday', 6: 'Friday', 7: 'Saturday'};
    return DAYS[num] || 'Wrong, please enter a number between 1 and 7';
}