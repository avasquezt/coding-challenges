/**
 * Calculates the sum of the values between the input numbers
 * @param {number} a 
 * @param {number} b 
 * @returns 
 */

function getSum(a, b){
    let sum = 0;
    for(let i = Math.min(a,b); i <= Math.max(a,b); i++){
        sum+=i;
    }
    return sum;
}

const GetSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
}