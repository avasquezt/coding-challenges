/**
 * Adds 1 to the value represented by the input array
 * @param {number[]} arr 
 * @returns {number[]}
 */
function upArray(arr){
    if(!arr.length) return null;

    let add = 1;
    for(let i = arr.length - 1; i >= 0; i--){

        if(arr[i] < 0 || arr[i] > 9) return null;

        if(add){
            if(arr[i] < 9){
                arr[i] += add--;
            }else{
                arr[i] = 0;
            }
        }
    }

    return add ? [1].concat(arr) : arr;
}