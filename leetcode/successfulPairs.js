/**
 * Returns the succesfull pairs from the input spells and potions
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    potions.sort((a, b) => a - b);
    const ans = [];
    for(const s of spells){
        const n = findIndex(potions, s);
        ans.push(n > -1 ? potions.length - n : 0);
    }

    function findIndex(arr, e){
        let start = 0;
        let end = arr.length;
        let index = -1;
        while(start <= end){
            const mid = start + Math.floor((end - start) / 2);
            const n = e * arr[mid];
            if(n >= success){
                index = mid;
                end = mid - 1;
            }else{
                start = mid + 1;
            }
        }
        return index;
    }
    return ans;
};