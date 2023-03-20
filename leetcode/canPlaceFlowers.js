/**
 * Calculates the number elements that can be inserted in the input array, conserving all adjacent elements as zero
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let count = 0;
    for(let i = 0; i < flowerbed.length; i++){
        if(!(flowerbed[i]) && !(flowerbed[i - 1]) && !(flowerbed[i + 1])){
            count++;
            if(count >= n) return true;
            flowerbed[i] = 1;
        }
    }
    return count >= n;
};

var canPlaceFlowers = function(flowerbed, n) {
    let count = 0;
    for(let i = 0; i < flowerbed.length; i++){
        if(!(flowerbed[i]) && !(flowerbed[i - 1]) && !(flowerbed[i + 1])){
            count++;
            if(count >= n) return true;
            i++;
        }
    }
    return count >= n;
};