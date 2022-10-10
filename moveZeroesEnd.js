function moveZeros(arr) {
    return arr.slice().sort((a, b) => (a === 0) - (b === 0));
  }


// function moveZeros(arr) {
//     return arr.slice().sort((a, b) => a === 0 ? 1 : b === 0 ? -1 : 0);
// }