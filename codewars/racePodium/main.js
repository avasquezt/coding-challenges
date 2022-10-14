// Input: blocks, number of available blocks
// Output: Array with 3 elements, in first place the 2nd position height, in the second the 1st and in the third the 3rd
// Examples:  
//  11 ->   [4, 5, 2]
//  6  ->   [2, 3, 1]
//  10 ->   [4, 5, 1]
// 100000 -> [33334, 33335, 33331]
// Pseudocode:
//  The first place is going to use a third of the blocks (truncated in case is not an even number) plus one
//  The second place uses one block less than the first
//  The third place uses the remaining blocks

function racePodium(blocks) {
  let first = Math.ceil(blocks / 3) + 1;
  let second = (blocks - (first + Math.ceil(blocks / 3))) > 0 ?  Math.ceil(blocks / 3) :  Math.floor(blocks / 3);
  let third = blocks - first - second;
  return [second, first, third]
}

console.log(racePodium(11));
console.log(racePodium(6));
console.log(racePodium(7));
console.log(racePodium(10));
console.log(racePodium(100000));
