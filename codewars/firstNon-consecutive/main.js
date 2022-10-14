function firstNonConsecutive (arr) {
  return arr.slice(1).find((num, index) => arr[index] === num - 1 ? false : true) ?? null;
}

console.log(firstNonConsecutive([1,2,3,4,6,7,8]));
console.log(firstNonConsecutive([1,2,3,4,5,6,7,8]));
console.log(firstNonConsecutive([-3,-2,0,1,2,3,4,5]));
console.log(firstNonConsecutive([-3,0]));
console.log(firstNonConsecutive([0]));
