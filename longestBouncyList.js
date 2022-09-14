// This kata was seen in programming competitions with a wide range of variations. A strict bouncy array of numbers, of length three or longer, is an array that each term (neither the first nor the last element) is strictly higher or lower than its neighbours.

// For example, the array:

// arr = [7,9,6,10,5,11,10,12,13,4,2,5,1,6,4,8] (length = 16)

// The two longest bouncy subarrays of arr are

// [7,9,6,10,5,11,10,12] (length = 8) and [4,2,5,1,6,4,8] (length = 7)

// For the special case of length 2 arrays, we will consider them strict bouncy if the two elements are different.

// The arrays [-1,4] and [0,-10] are both bouncy, while [0,0] is not.

// An array of length 1 will be considered strict bouncy itself.

// P   arr: Array, array to search
// R   Array, longest bouncy list
// E   [7,9,6,10,5,11,10,12,13,4,2,5,1,6,4,8] => [7,9,6,10,5,11,10,12]
//     [7,7,7,7,7] => [7]
//     [1,2,3,4,5,6] => [1,2]
// P   Search for the array for all the bouncy lists
//     Save the starting and ending index of each bouncy list
//     Get the longest bounce list with the previous data and return it

function longestBouncyList(arr) {
    let ans = [], tmp = [arr[0]];
    for (let i = 1, prev = -Math.sign(arr[1] - arr[0]) ; i < arr.length; i++){
        if (-prev === Math.sign(arr[i] - arr[i - 1]) && prev){
            tmp.push(arr[i]);
        }else if(!(Math.sign(arr[i] - arr[i - 1]))){
            ans.push(tmp);
            tmp = [arr[i]];
        }else{
            ans.push(tmp);
            tmp = tmp.slice(-1).concat(arr[i]);
        }
        prev = Math.sign(arr[i] - arr[i - 1]);
    }
    return ans.concat([tmp]).sort((a, b) => (b.length - a.length) || -1)[0];
}

console.log(longestBouncyList([7,9,6,10,5,11,10,12,13,4,2,5,1,6,4,8]));
console.log(longestBouncyList([7,7,7,7,7]));
console.log(longestBouncyList([1,2,3,4,5,6]));
console.log(longestBouncyList([ 9, 7, -7, -6, -3, 10, -3, -3, 3, -10, -6, -7, -9, 9 ]));