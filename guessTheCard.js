function guessTheCard(audience) {
/*
audience has the method getInput(), that receives an array of
3 arrays of 7 cards as parameter and returns the index of the
array where the selected card is present.
This method can be called up to 3 times,
after that it will throw an Error.
*/
    let arr = [[1,2,3,4,5,6,7], [8,9,10,11,12,13,14], [15,16,17,18,19,20,21]];
    let ans = arr[audience.getInput(arr)];
    arr = [[1,2,17,18,12,13,14], [3,4,10,11,19,20,21], [8,9,15,16,5,6,7]];
    ans = arr[audience.getInput(arr)].filter(n => ans.includes(n));
    arr = [[1,4,17,11,12,20,7], [3,9,10,16,19,13,6], [8,2,15,18,5,21,14]];
    ans = arr[audience.getInput(arr)].filter(n => ans.includes(n));
    return ans[0];
}