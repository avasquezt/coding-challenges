/**
 * Returns all pairs of elements with the minimum absolute difference of any two elements of the input array
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    let diff =  Infinity;
    let ans = [];
    arr.sort((a, b) => a - b);
    for(let i = 1; i < arr.length; i++){
        const currDiff = Math.abs(arr[i] - arr[i - 1]);
        if(currDiff < diff){
            diff = currDiff;
            ans = [[arr[i - 1], arr[i]]];
        }else if(currDiff == diff){
            ans.push([arr[i - 1], arr[i]]);
        }
    }
    return ans;
};