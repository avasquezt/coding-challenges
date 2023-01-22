/**
 * Reduces the input array to one number, according to the number of equal contiguous values
 * @param {number[]} input
 * @returns {number}
 */

function setReducer(input) {
    while(input.length > 1){
        const ans = [];
        for(let i = 0; i < input.length; i++){
            let count = 1;
            while(input[i] == input[i + 1]){
                count++;
                i++;
            }
            ans.push(count);
        }
        input = ans;
    }
    return input[0];
}