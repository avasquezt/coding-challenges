/**
 * Finds the requested largest element in the input array
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKthLargest(array, k){
    let minimum = Math.min(...array);

    const counts = [];

    for(let i = 0; i < array.length; i++){
        counts[array[i] - minimum] = 1 + (counts[array[i] - minimum] || 0);
    }

    for(let i = 0, startingIndex = 0; i < counts.length; i++){
        [startingIndex, counts[i]] = [startingIndex + (counts[i] || 0), startingIndex];
        if (startingIndex > (array.length - k)) return i + minimum;
    }
    
}

console.log(nthLargest([3,2,3,1,2,4,5,5,6], 4));
console.log(nthLargest([3,2,1,5,6,4], 2));
console.log(nthLargest([-1, -1], 2));