/**
 * Finds the average of the elements in the input array, excluding the max and min values
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let min = Infinity, max = -Infinity;
    let total = 0;
    for(const n of salary){
        if(n < min) min = n;
        if(n > max) max = n;
        total += n;
    }

    return (total - (min + max)) / (salary.length - 2);
};