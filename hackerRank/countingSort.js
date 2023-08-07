/**
 * Sorts the input array using the counting sort algorithm
 * @param {number} arr 
 * @returns {number}
 */
function countingSort(arr) {
    let count = Array(100).fill(0);
    for(const n of arr){
        count[n]++;
    }
    return count;

}