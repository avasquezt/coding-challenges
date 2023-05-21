/**
 * Calculates the sum of the odd elements cubes in the input array
 * @param {number[]} arr 
 * @returns {number|undefined}
 */
function cubeOdd(arr) {
    let sum = 0;
    for(const n of arr){
    if(typeof(n) != 'number') return undefined;
        sum += n % 2 ? n ** 3 : 0;
    }
    return sum;
}