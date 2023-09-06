/**
 * Checks if the input array contains any number with its Double
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    let numbers = {};
    for(const n of arr){
        if((n * 2) in numbers || (n / 2) in numbers) return true;
        else numbers[Number(n)] = true;
        
    }
    return false;
};