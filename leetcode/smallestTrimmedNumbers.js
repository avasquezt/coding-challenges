/**
 * Finds the requested smallest number in the array, according to the input queries
 * @param {string[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */

function radixSort(array, maxElement){

    let placeVal = 1, sorted = Array.from(Array(array.length), (_, i) => i);
    while(placeVal <= maxElement){
        sorted = countingSort(sorted, placeVal);
        placeVal++;
    }

    return sorted;

    function countingSort(arr, placeVal){
        counts = [];
        for(const n of arr){
            let currentElement = array[n];
            currentElement = currentElement.slice(currentElement.length - placeVal, currentElement.length - placeVal + 1);
            counts[currentElement] = 1 + (counts[currentElement] || 0);
        }

        let startingIndex = 0;
        for(let i = 0; i < counts.length; i++){
            [counts[i], startingIndex] = [startingIndex, startingIndex + (counts[i] || 0)];
        }
        
        let sorted = [];
        for(const n of arr){
            let currentElement = array[n];
            currentElement = currentElement.slice(currentElement.length - placeVal, currentElement.length - placeVal + 1);
            sorted[counts[currentElement]] = n;
            counts[currentElement]++;
        }

        return sorted;
    }
}

var smallestTrimmedNumbers = function(nums, queries) {
    const ans = [];
    for([i, x] of queries){
        ans.push(radixSort(nums, x)[i - 1]);
    }
    return ans;
};

let a = ["8331019423839036903","2215783497319194533","3244863164120264914","2723857887888553250","1069645833408356268","3799170975306313470","3300849027471666477","8896469467436127218","9595084104356246555","4601424390471226348","2777623221871959897","2660664761264162910","4830224756337097853","2239177595019260973","5704104074606481922","5158962343348888307","4957489822885409209","5533958195540658313","6712811206814843536","9775503283462317096","1975389311819120035","1292135637676764140","9838972337538013522","7609294617007602893","0186572359592634437","9236053726818307461","7264888050655615544","4990296885039745852","1417868535147288083"];
console.log(smallestTrimmedNumbers(["102","473","251","814"],[[1,1],[2,3],[4,2],[1,2]]));
console.log(smallestTrimmedNumbers(["24","37","96","04"],[[2,1],[2,2]]));
console.log(smallestTrimmedNumbers(["8331019423839036903","2215783497319194533","3244863164120264914","2723857887888553250","1069645833408356268","3799170975306313470","3300849027471666477","8896469467436127218","9595084104356246555","4601424390471226348","2777623221871959897","2660664761264162910","4830224756337097853","2239177595019260973","5704104074606481922","5158962343348888307","4957489822885409209","5533958195540658313","6712811206814843536","9775503283462317096","1975389311819120035","1292135637676764140","9838972337538013522","7609294617007602893","0186572359592634437","9236053726818307461","7264888050655615544","4990296885039745852","1417868535147288083"],[[1,3]]));
