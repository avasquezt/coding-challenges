// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]

// P   arr: Array of numbers, array to search for the maximum sequence sum
// R   number, maximum sum of the array
// E   [-2, 1, -3, 4, -1, 2, 1, -5, 4] => 6
// P   Loop through the array, saving the maximum between the current contiguous subsequence or current number
//     In each iteration, check if there is a previous sum bigger than the current one, if there is not one, save the current one as the biggest;

var maxSequence = function(arr){
// ...
    let negVals = arr.length ? false : true, sum = arr.reduce((acc, n) => {
        acc[1] = Math.max(acc[1] + n || n, n);
        acc[0] = Math.max(acc[1] || n, acc[0] || n);
        negVals = (n > 0) ? true : negVals;
        return acc;
    }, [])[0] || 0;
    return (negVals ? sum : 0);
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));