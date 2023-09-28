/**
 * Finds the common strings with the least index sum in the input arrays
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    const index1 = new Map();
    for(let i = 0; i < list1.length; i++){
        index1.set(list1[i], i);
    }
    let min = Infinity;
    let ans = [];
    for(let i = 0; i < list2.length; i++){
        const word = list2[i];
        const indexSum = index1.get(word) + i;
        if(indexSum < min){
            ans = [word];
            min = indexSum;
        }else if(indexSum == min){
            ans.push(word);
        }
    }
    return ans;
};