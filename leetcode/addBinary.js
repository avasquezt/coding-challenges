/**
 * Adds the two input binary numbers
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// var addBinary = function(a, b) {
//     return  (parseInt(a, 2) + parseInt(b, 2)).toString(2);
// };

var addBinary = function(a, b) {
    let i = a.length - 1, j = b.length - 1, carry = 0, ans = '';

    while(i >= 0 || j >= 0 || carry){

        if(i >= 0){
            carry += Number(a[i]);
            i--;
        }

        if(j >= 0){
            carry += Number(b[j]);
            j--;
        }

        ans = carry % 2 + ans;
        carry = Math.trunc(carry / 2);
    }

    return ans;
};

console.log(addBinary("1010", "1011"));
