function eachCons(array, n) {
	let subsets = [];
  for (let i = 0; i < Math.ceil(array.length - n + 1); i++){
    subsets.push(array.slice(i, i + n));
  }
  return subsets;
}

console.log(eachCons([3, 5, 8, 13],1));
console.log(eachCons([3, 5, 8, 13],2));
console.log(eachCons([3, 5, 8, 13],3));
console.log(eachCons([3, 5, 8, 13],5));