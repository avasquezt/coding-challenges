/**
 * Sorts the input array in ascending order using the Heap Sort algorithm
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArray(nums){
    for (let i = Math.round(nums.length / 2) - 1; i >= 0; i--) {
        maxHeapify(nums, nums.length, i);
    }

    for(let i = nums.length - 1; i > 0; i--){
        [nums[0], nums[i]] = [nums[i], nums[0]];
        maxHeapify(nums, i, 0);
    }
    return nums;
}

function maxHeapify(array, heapSize, index){
    left = 2 * index + 1;
    right = 2 * index + 2;
    let max = index;
    if(left < heapSize && array[max] < array[left]){
        max = left;
    }
    if(right < heapSize && array[max] < array[right]){
        max = right;
    }
    if(index != max){
        [array[index], array[max]] = [array[max], array[index]];
        maxHeapify(array, heapSize, max);
    }
}