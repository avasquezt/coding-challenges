/**
 * Sorts the numbers and strings in the input array
 * @param {any[]} a 
 * @returns {any[]}
 */
function dbSort(a){
    return a.sort((a,b) => {
      switch(true){
          case typeof(a) == 'number' && typeof(b) == 'number':
            return a - b;
          case typeof(a) == 'number' && typeof(b) == 'string':
            return -1;
          case typeof(a) == 'string' && typeof(b) == 'number':
            return 1;
          default:
            return a.localeCompare(b);
      }
    })
}