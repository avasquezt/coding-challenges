/**
 * Adds the input number to the array value and returns an array representing its digits
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */

var addToArrayForm = function(num, k) {
    let carry = k, i = num.length - 1;
    while(carry){
        if(i >= 0){
            carry += num[i];
            num[i] = carry % 10;
            i--;
        }else{
            num = [carry % 10].concat(num);
        }
        carry = Math.trunc(carry / 10);
    }
    return num;
};

console.log(addToArrayForm([2,7,4], 181));
console.log(addToArrayForm([0], 1000));

let test = Array.from(Array(Math.round(Math.random() * 100)), _ => [Array.from(Array(Math.round(Math.random() * 100)), _ => Math.round(Math.random() * 9)), Math.round(Math.random() * 1000000)]);
console.log(test);