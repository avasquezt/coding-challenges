/**
 * Calculate and prints the ratios of the input array that are positive, negative, and zero
 * @param {number[]} arr 
 */
function plusMinus(arr) {
    // Write your code here
    let n = 0, p = 0, z = 0;
    for(const e of arr){
        if(e == 0) z++;
        else if(e > 0) p++;
        else n++;
    }
    
    console.log(p/arr.length);
    console.log(n/arr.length);
    console.log(z/arr.length);

}