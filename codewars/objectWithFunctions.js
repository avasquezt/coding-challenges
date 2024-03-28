/**
 * Evaluates the input number according to the input string
 * @param {string} day 
 * @param {number} num 
 * @returns {boolean}
 */
var AmIAfraid = function(day, num){
    const fear = {'Monday': n => n == 12, 
                  'Tuesday': n => n > 95,
                  'Wednesday': n => n == 34,
                  'Thursday': n => n == 0,
                  'Friday': n => n % 2 == 0,
                  'Saturday': n => n == 56,
                  'Sunday': n => Math.abs(n) == 666,
                 }
    
    return fear[day](num);
}