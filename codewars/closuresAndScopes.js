/**
 * Returns an array of functions, which return their index in the array
 * @param {number} n 
 * @returns {function[]}
 */
function createFunctions(n) {
    let callbacks = [];
  
    for (let i=0; i<n; i++) {
      callbacks.push(function() {
        return i;
      });
    }
    
    return callbacks;
}