/**
 * Sorts the input array
 * @param {any[]} items 
 * @returns {any[]}
 */
function sort(items){
    for(let i = 1; i < items.length; i++){
      let currIndex = i;
      while(currIndex && items[currIndex] < items[currIndex - 1]){
        [items[currIndex], items[currIndex - 1]] = [items[currIndex - 1], items[currIndex]];
        currIndex--;
      }
    }
    return items;
}